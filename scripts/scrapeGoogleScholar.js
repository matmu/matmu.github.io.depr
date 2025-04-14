const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Apply stealth plugin
puppeteer.use(StealthPlugin());

async function scrapeGoogleScholar(authorId, outputYML, outputJson) {
  const browser = await puppeteer.launch({
    headless: true, // headless mode works with stealth plugin
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const url = `https://scholar.google.com/citations?user=${authorId}`;
  console.log('Opening page: ' + url);

  const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });

  if (!response || !response.ok()) {
    await page.screenshot({ path: 'error_loading_page.png' });
    throw new Error(`Failed to load page: ${url} (status ${response?.status()})`);
  }

  try {
    // Wait for the stats table to be available
    await page.waitForSelector('#gsc_rsb_st', { timeout: 10000 });

    // Extract citation metrics
    const citationData = await page.evaluate(() => {
      const data = {};
      const stats = document.querySelectorAll('#gsc_rsb_st .gsc_rsb_std');
      if (stats.length >= 5) {
        data.totalCitations = stats[0].innerText;
        data.hIndex = stats[2].innerText;
        data.i10Index = stats[4].innerText;
      }
      return data;
    });

    // Add current date
    const date = new Date();
    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    const newEntry = {
      date: dateString,
      totalCitations: citationData.totalCitations || '0',
      hIndex: citationData.hIndex || '0',
      i10Index: citationData.i10Index || '0'
    };

    // Load existing YAML file
    let fileData = [];
    if (fs.existsSync(outputYML)) {
      fileData = yaml.load(fs.readFileSync(outputYML, 'utf8')) || [];
    }
    fileData.push(newEntry);
    fs.writeFileSync(outputYML, yaml.dump(fileData, { lineWidth: -1 }), 'utf8');

    // Load existing JSON file
    let jsonData = [];
    if (fs.existsSync(outputJson)) {
      jsonData = JSON.parse(fs.readFileSync(outputJson, 'utf8')) || [];
    }
    jsonData.push(newEntry);
    fs.writeFileSync(outputJson, JSON.stringify(jsonData, null, 2), 'utf8');

    console.log('✅ Data appended to ' + outputYML + ' and ' + outputJson);
    await browser.close();
  } catch (error) {
    // Save screenshot for debugging
    const screenshotPath = path.resolve('error_scraping.png');
    await page.screenshot({ path: screenshotPath });
    console.error('❌ Error during scraping:', error);
    await browser.close();
    process.exit(1);
  }
}

// Global error handler
scrapeGoogleScholar('YqZW19IAAAAJ', '_data/googlescholar_stats.yml', '_data/googlescholar_stats.json')
  .catch(err => {
    console.error('❌ Script failed to run:', err);
    process.exit(1);
  });
