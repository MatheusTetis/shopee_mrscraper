from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import time

def create_shopee_scraper(visualDebug=True):
    # Set Chrome options
    chrome_options = webdriver.ChromeOptions()
    
    if not visualDebug:
        chrome_options.add_argument("--headless")  # hide browser
        chrome_options.add_argument("--disable-gpu")

    # Optional: Bypass Shopee's bot checks a bit better
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")
    chrome_options.add_argument("--remote-debugging-port=9222")
    chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
    chrome_options.add_experimental_option('useAutomationExtension', False)
    chrome_options.binary_location = "/usr/bin/chromium-browser"  # or chromium-browser
    chrome_options.set_capability("goog:loggingPrefs", {"performance": "ALL"})

    # Start Chrome driver
    driver = webdriver.Chrome(options=chrome_options)

    # Open Shopee
    url = "https://shopee.tw"
    driver.get(url)

    # Give the page time to load
    time.sleep(5)

    # Example: Print the page title
    print("Page title:", driver.title)

    return driver

# Run scraper
if __name__ == "__main__":
    driver = create_shopee_scraper(visualDebug=True)

    print(driver.manage().logs().get("performance"))
    
    # Keep it open for manual inspection (optional)
    input("Press ENTER to close browser...")
    driver.quit()
