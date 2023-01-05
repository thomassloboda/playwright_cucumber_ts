import { After, AfterAll, Before, BeforeAll, World } from "@cucumber/cucumber";
import { chromium, Browser } from "playwright";
import { LocaleLabeWorld } from "./world";

declare global {
  var browser: Browser;
}

BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: false,
  });
});
AfterAll(async function () {
  await global.browser.close();
});
Before(async function (this: LocaleLabeWorld) {
  this.context = await global.browser.newContext();
  this.page = await this.context.newPage();
});
After(async function (this: LocaleLabeWorld) {
  await this.page.close();
  await this.context.close();
});
