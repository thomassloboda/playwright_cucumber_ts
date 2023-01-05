import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Page, Browser, BrowserContext } from "playwright";

export class LocaleLabeWorld extends World {
  page: Page = {} as Page;
  context: BrowserContext = {} as BrowserContext;
  browser: Browser = {} as Browser;

  constructor(options: any) {
    super(options);
  }

  async login(username: string, password: string) {
    if (this.page.url().indexOf("idpdecathlon") > 0) {
      await this.page.getByLabel("Username").fill(username, { timeout: 100 });
      await this.page.getByLabel("Password").fill(password, { timeout: 100 });
      await this.page.getByText("Sign On").click();
      await this.page.waitForNavigation({ timeout: 10000 });
    }
  }
}

setWorldConstructor(LocaleLabeWorld);
