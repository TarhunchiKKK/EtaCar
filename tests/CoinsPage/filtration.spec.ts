import { test, expect } from '@playwright/test';
import { COINS_PAGE_URL, TIMEOUT } from '../constants';

test.describe('Filtration', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(COINS_PAGE_URL);
    });

    test('Find search input', async ({ page }) => {
        await expect(page.getByPlaceholder('Coin name...')).toBeVisible();
    });

    test('Filtration', async ({ page }) => {
        const searchedValue: string = 'b';

        await page.getByPlaceholder('Coin name...').fill(searchedValue);
        await page.waitForTimeout(TIMEOUT);

        const rows = page.locator('table tbody tr');
        for (const row of await rows.all()) {
            const nameCell = row.locator('td:nth-child(2)');
            const name = await nameCell.textContent();
            console.log(name);
            expect(name?.toLocaleLowerCase()).toContain(searchedValue);
        }
    });
});
