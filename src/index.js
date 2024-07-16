import puppeteer from "puppeteer";
const fs = require("fs-extra");

async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.page();

    await page.setContent("<h1>hello</h1>");
    await page.emulateMedia("screen");
    await page.pdf({
      path: "test.pdf",
    });
  } catch (e) {
    console.error("Error: ", e.error);
  }
};
