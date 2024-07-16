import puppeteer from "puppeteer";

class App {
  static async main() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent("<h1>Test</h1>", {
      waitUntil: "networkidle0",
    });

    try {
      const pdfBuffer = await page.pdf({
        format: "A4",
        path: "./test.pdf", 
        printBackground: true
      });
      console.log("PDF generated successfully");
      console.log(pdfBuffer)
    } catch (error) {
      console.error("Error generating PDF", error);
    } finally {
      await browser.close();
    }
  }
}

export default App;
