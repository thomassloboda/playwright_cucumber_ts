import { Then, When } from "@cucumber/cucumber";
import { LocaleLabeWorld } from "./support/world";
import { expect } from "@playwright/test";

When(
  "I land on Locale Lab as {string} role",
  async function (this: LocaleLabeWorld, role: string) {
    await this.page.goto("http://localhost:3000");
    await this.page.waitForNavigation({ timeout: 10000 });
    await this.login("SGOLD01", "24JRAE");
  }
);

Then("I should see Welcome modale", async function (this: LocaleLabeWorld) {
  await this.page.waitForSelector(".vtmn-modal_content_title--text", {
    timeout: 10000,
  });
  const title = await this.page
    .locator(".vtmn-modal_content_title--text")
    .textContent();
  expect(title).toContain("Welcome");
});
