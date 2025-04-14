const puppeteer = require('puppeteer');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

async function scrapeGoogleScholar(authorId, outputYML, outputJson) {
  const browser = await puppeteer.launch({
    headless: false, // Turn off headless mode to avoid bot detection
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set a realistic user-agent to look like a regular browser
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
    '(KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
  );

  // Hide the fact that this is an automated browser
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false,
    });
  });

  const url = `https://scholar.google.com/citations?user=${authorId}`;
  console.log('Opening page: ' + url);

  // Try loading the page
  const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });

  if (!response || !response.ok()) {
    await page.screenshot({ path: 'error_loading_page.png' });
    throw new Error(`Failed to load page: ${url} (status ${response?.status()})`);
  }

  try {
    // Wait for the statistics table to load
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

    // Format current date as YYYY-MM-DD
    const date = new Date();
    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    const newEntry = {
      date: dateString,
      totalCitations: citationData.totalCitations || '0',
      hIndex: citationData.hIndex || '0',
      i10Index: citationData.i10Index || '0'
    };

    // Load existing YAML data
    let fileData = [];
    if (fs.existsSync(outputYML)) {
      fileData = yaml.load(fs.readFileSync(outputYML, 'utf8')) || [];
    }

    // Append new data and save as YAML
    fileData.push(newEntry);
    fs.writeFileSync(outputYML, yaml.dump(fileData, { lineWidth: -1 }), 'utf8');

    // Load existing JSON data
    let jsonData = [];
    if (fs.existsSync(outputJson)) {
      jsonData = JSON.parse(fs.readFileSync(outputJson, 'utf8')) || [];
    }

    // Append new data and save as JSON
    jsonData.push(newEntry);
    fs.writeFileSync(outputJson, JSON.stringify(jsonData, null, 2), 'utf8');

    console.log('✅ Data appended to ' + outputYML + ' and ' + outputJson);
    await browser.close();
  } catch (error) {
    // Save a screenshot for debugging
    const screenshotPath = path.resolve('error_scraping.png');
    await page.screenshot({ path: screenshotPath });
    console.error('❌ Error during scraping:', error);
    await browser.close();
    process.exit(1); // Exit with error code for GitHub Actions
  }
}

// Run with global error handler
scrapeGoogleScholar('YqZW19IAAAAJ', '_data/googlescholar_stats.yml', '_data/googlescholar_stats.json')
  .catch(err => {
    console.error('❌ Script failed to run:', err);
    process.exit(1);
  });
