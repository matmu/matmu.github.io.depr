const puppeteer = require('puppeteer');
const yaml = require('js-yaml');
const fs = require('fs');

async function scrapeGoogleScholar(authorId, outputYML, outputJson) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://scholar.google.com/citations?user=${authorId}`);

  // Wait for the relevant content to load
  await page.waitForSelector('#gsc_rsb_st');

  // Extract the required data
  const citationData = await page.evaluate(() => {
    const data = {};
    const stats = document.querySelectorAll('#gsc_rsb_st .gsc_rsb_std');
    if (stats.length > 0) {
      data.totalCitations = stats[0].innerText;
      data.hIndex = stats[2].innerText;
      data.i10Index = stats[4].innerText;
    }
    return data;
  });

  // Get the current date
  const date = new Date();
  const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  // Create the new entry
  const newEntry = {
    date: dateString,
    totalCitations: citationData.totalCitations,
    hIndex: citationData.hIndex,
    i10Index: citationData.i10Index
  };

  // Load existing YAML data from the file if it exists
  let fileData = [];
  if (fs.existsSync(outputYML)) {
    fileData = yaml.load(fs.readFileSync(outputYML, 'utf8')) || [];
  }

  // Append the new entry to the data array
  fileData.push(newEntry);

  // Convert the updated data to YAML format
  const yamlData = yaml.dump(fileData, { lineWidth: -1 });

  // Write the YAML data to the file
  fs.writeFileSync(outputYML, yamlData, 'utf8');

  // Load existing JSON data from the file if it exists
  let jsonData = [];
  if (fs.existsSync(outputJson)) {
    jsonData = JSON.parse(fs.readFileSync(outputJson, 'utf8')) || [];
  }

  // Append the new entry to the data array
  jsonData.push(newEntry);

  // Convert the updated data to JSON format
  const newJsonData = JSON.stringify(jsonData, null, 2);

  // Write the JSON data to the file
  fs.writeFileSync(outputJson, newJsonData, 'utf8');

  console.log('Data appended to ' + outputYML + ' and ' + outputJson);

  await browser.close();
}

// Executed by Github workflow
scrapeGoogleScholar('YqZW19IAAAAJ', '_data/googlescholar_stats.yml', '_data/googlescholar_stats.json');
