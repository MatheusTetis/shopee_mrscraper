import axios from 'axios';
import dotenv from 'dotenv';
import puppeteer from 'puppeteer';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import randomUseragent from 'random-useragent';
import {HttpsProxyAgent} from 'https-proxy-agent';

dotenv.config();

export async function getShopeeProductData(itemId, shopId) {

    var refererUrl = `https://shopee.tw/a-i.${itemId}.${shopId}?is_from_login=true`;
    var url = `https://shopee.tw/api/v4/pdp/get_rw?item_id=${itemId}&shop_id=${shopId}&tz_offset_minutes=-180&detail_level=0`;

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-blink-features=AutomationControlled',
        ],
        defaultViewport: null,
    });
    const page = await browser.newPage();

    // Randomize UserAgent
    const ua = randomUseragent.getRandom();
    console.log(ua)
    await page.setUserAgent(ua);

    page.on('framenavigated', frame => {
        console.log('🌐 Frame navigated:', frame.url());
    });

    const valid_header = await new Promise(async (resolve) => {

        let captured = false;

        // Enable network request interception
        await page.setRequestInterception(true);

        // Define a handler for network requests
        page.on('request', request => {

            const headers = Object.fromEntries(Object.entries(request.headers()));
            console.log(request.url())
            //console.log(headers);

            if ("x-sap-ri" in headers && "x-sap-sec" in headers && "af-ac-enc-dat" in headers && "x-csrftoken" in headers && "af-ac-enc-sz-token" in headers && "sz-token" in headers && "d-nonptcha-sync" in headers) {
                
                if (!captured) {
                    /*console.log(`Request: ${request.url()}`);
                    console.log(headers);
                    valid_header = headers;*/
                    captured = true;
                    console.log('✅ Captured valid headers from request:', request.url());
                    resolve(headers);
                }
            }



            //console.log(`Request Headers: ${JSON.stringify(request.headers(), null, 2)}`);
            request.continue();
        });


        // Navigate to the page you want to inspect
        await page.goto(refererUrl, { waitUntil: 'networkidle2' });

        // Fallback timeout: if no matching request found
        setTimeout(() => {
            if (!captured) {
            console.warn('⚠️ Timeout: No valid header found. Returning empty headers.');
            resolve({});
            }
        }, 60000); // Wait up to 60s max
    });

    console.log("Final header: ", valid_header);

    if (Object.keys(valid_header).length === 0) {
        return {"message": "Could not find valid headers to reuse"};
    }

    try {
        const response = await axios.get(url, {
            maxBodyLength: Infinity,
            httpsAgent: new HttpsProxyAgent(process.env.PROXY),
            headers: {
                'User-Agent': ua,
                'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh-HK;q=0.8,zh;q=0.7,en;q=0.6',
                'Host': 'shopee.tw', 
                'Accept': 'application/json', 
                'Accept-Language': ('accept-language' in valid_header) ? valid_header['accept-language'] : 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3', 
                'Accept-Encoding': 'gzip, deflate, br, zstdgzip, zstd', 
                'Referer': refererUrl + "?is_from_login=true", 
                'Content-Type': 'application/json', 
                'X-Shopee-Language': 'zh-Hant', 
                'X-Requested-With': 'XMLHttpRequest', 
                'X-CSRFToken': ('x-csrftoken' in valid_header) ? valid_header['x-csrftoken'] : '', 
                'X-API-SOURCE': 'pc', 
                'af-ac-enc-dat': ('af-ac-enc-dat' in valid_header) ? valid_header['af-ac-enc-dat'] : '', 
                'sz-token': ('sz-token' in valid_header) ? valid_header['sz-token'] : '', 
                'x-sz-sdk-version': '1.12.18', 
                'x-sap-ri': ('x-sap-ri' in valid_header) ? valid_header['x-sap-ri'] : '', 
                'x-sap-sec': ('x-sap-sec' in valid_header) ? valid_header['x-sap-sec'] : '', 
                'af-ac-enc-sz-token': ('af-ac-enc-sz-token' in valid_header) ? valid_header['af-ac-enc-sz-token'] : '', 
                'd-nonptcha-sync': ('d-nonptcha-sync' in valid_header) ? valid_header['d-nonptcha-sync'] : 'AAAG0CG0PRoA|6|C0D5vi2gUjAwdw=', 
                'Sec-Fetch-Dest': 'empty', 
                'Sec-Fetch-Mode': 'cors', 
                'Sec-Fetch-Site': 'same-origin', 
                'Connection': 'keep-alive', 
                'Alt-Used': 'shopee.tw', 
                'Cookie': ('cookie' in valid_header) ? valid_header['cookie']: '', 
                'Priority': 'u=4', 
                'TE': 'trailers'
            }
        });

        browser.close()

        return response.data

    } catch (error) {
        throw error;
    }

    browser.close()
}