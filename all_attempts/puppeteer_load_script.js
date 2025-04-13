import puppeteer from 'puppeteer';

const run = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
        '--disable-gpu',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding'
        ]
    });

    const page = await browser.newPage();

    console.log('🌐 Loading Shopee...');
    await page.goto('https://shopee.sg', {
        waitUntil: 'networkidle2', // wait for all network activity to settle
        timeout: 60000
    });

    await page.mouse.move(100, 100);
    await page.mouse.wheel({ deltaY: 500 }); // simulate scroll
    await new Promise(resolve => setTimeout(resolve, 2000));         // give it time to load extra scripts

    // Wait for mfeModules["Platform"] to exist
    console.log('⏳ Waiting for mfeModules.Platform to be ready...');
    await page.waitForFunction(
        () => typeof window.__webpack_init_sharing__ === 'function' && typeof window.mfeModules === 'object',
        { timeout: 30000 }
    );

    const availableModules = await page.evaluate(() => Object.keys(window.mfeModules || {}));
    console.log('🧩 Available mfeModules:', availableModules);

    if (!availableModules.includes('Platform')) {
        console.warn('⚠️ "Platform" module not found in mfeModules. Trying to scroll more to trigger it...');
        await page.mouse.wheel({ deltaY: 800 });
        await sleep(3000);
    }

    const hasPlatform = await page.evaluate(() => typeof window.mfeModules?.Platform === 'function');
    if (!hasPlatform) {
        console.error('❌ Platform module still not available.');
        await browser.close();
        return;
    }

    console.log('✅ mfeModules["Platform"] found, initializing...');

    const platformExports = await page.evaluate(async () => {
        // Init Webpack share scope
        await __webpack_init_sharing__('default');

        const factory = await window.mfeModules.Platform();
        await factory.init(__webpack_share_scopes__.default);

        const mod = factory();
        return {
        keys: Object.keys(mod),
        preview: Object.fromEntries(
            Object.entries(mod).slice(0, 5) // return a preview of up to 5 entries
        )
        };
    });

    console.log('📦 Platform module export keys:', platformExports.keys);
    console.log('🔍 Export preview (first 5):', platformExports.preview);

    await browser.close();
};

run();
