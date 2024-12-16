import * as allure from "allure-js-commons";

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await allure.step("Открыть главную страницу", async ({ page }) => {
            await this.page.goto(url);
        });
    }
}