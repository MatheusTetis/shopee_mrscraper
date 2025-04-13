import axios from 'axios';
import puppeteer from 'puppeteer';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import randomUseragent from 'random-useragent';

//puppeteer.use(StealthPlugin());

var itemId = '178926468';
var shopId = '21448123549';
var url = `https://shopee.tw/api/v4/pdp/get_pc?item_id=${itemId}&shop_id=${shopId}&tz_offset_minutes=-180&detail_level=0`;

const browser = await puppeteer.launch();
const page = await browser.newPage();

// Randomize UserAgent
const ua = randomUseragent.getRandom();
console.log(ua)
await page.setUserAgent(ua);

// Enable network request interception
await page.setRequestInterception(true);

var valid_header;

// Define a handler for network requests
page.on('request', request => {

    var headers = Object.fromEntries(Object.entries(request.headers()));
    console.log(request.url())
    //console.log(headers);

    if("x-sap-ri" in headers && "x-sap-sec" in headers && "af-ac-enc-dat" in headers && "x-csrftoken" in headers && "af-ac-enc-sz-token" in headers) {
        console.log(`Request: ${request.url()}`);
        console.log(headers);
        valid_header = headers;
    }

    //console.log(`Request Headers: ${JSON.stringify(request.headers(), null, 2)}`);
    request.continue();
});


// Navigate to the page you want to inspect
var refererUrl = `https://shopee.tw/`;
await page.goto(refererUrl);

console.log("Final header: ", valid_header);

try {
    const response = await axios.get(url, {
        maxBodyLength: Infinity,
        headers: {
            'User-Agent': ua,
            'Accept-Language': 'zh-CN,zh-TW;q=0.9,zh-HK;q=0.8,zh;q=0.7,en;q=0.6',
            'Host': 'shopee.tw', 
            'Accept': 'application/json', 
            'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3', 
            'Accept-Encoding': 'gzip, deflate, br, zstdgzip, zstd', 
            'Referer': refererUrl, 
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
            'd-nonptcha-sync': ('d-nonptcha-sync' in valid_header) ? valid_header['d-nonptcha-sync'] : 'AAAG0B04gBsCAgA3NjdiZTRlNTY0ZDA0OGVkOGQyYjlhOThjY2MxZDk4MGE2YzIxNjVjZTgzNzRlMzE4NzEyNzkwOTUzNjQ3ZTE2AAA55Y9vFA+zJlqWAgAAJEUA|15|D/A|22|QAADK7AXNlbGxlA|7|J/wA|21|=', 
            'Sec-Fetch-Dest': 'empty', 
            'Sec-Fetch-Mode': 'cors', 
            'Sec-Fetch-Site': 'same-origin', 
            'Connection': 'keep-alive', 
            //'Alt-Used': 'shopee.tw', 
            'Cookie': ('cookie' in valid_header) ? valid_header['cookie']: '', 
            'Priority': 'u=4', 
            'TE': 'trailers'
        },
        //proxy: { // Proxy configuration -  You'll need to handle proxy rotation more robustly
        //  host: process.env.PROXY_HOST,
        //  port: process.env.PROXY_PORT,
        //},
    });

    console.log(response.data);
} catch (error) {
    throw error;
}

// Close the browser
await browser.close();