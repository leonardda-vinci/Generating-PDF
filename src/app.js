import puppeteer from "puppeteer";

class App {
  static async main() {
    const browser = await puppeteer.launch({ headless: true }); // Corrected headless option
    const page = await browser.newPage();

    await page.setContent("<html><body><h1>Test</h1></body></html>", {
      waitUntil: "domcontentloaded",
    });

    try {
      const pdfBuffer = await page.pdf({
        format: "A4",
        path: "./test.pdf", // Corrected filename to 'test.pdf'
        printBackground: true,
        timeout: 0
      });
      console.log("PDF generated successfully");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      await browser.close();
    }
  }
}

export default App;

