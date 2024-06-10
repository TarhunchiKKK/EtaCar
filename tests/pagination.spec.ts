import test, { expect } from '@playwright/test';
import { COINS_PAGE_URL, TIMEOUT } from './constants';

test.describe('Pagination ', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(COINS_PAGE_URL);
    });

    test('Find limit dropdown', async ({ page }) => {
        await expect(page.getByTestId('limit-dropdown')).toBeVisible();
    });

    test('Change limit', async ({ page }) => {
        // old rows
        const oldRows = await page.locator('table tbody tr').all();

        // change page
        await page.getByTestId('limit-dropdown').selectOption('100');
        await page.waitForTimeout(TIMEOUT);

        // new rows
        const newRows = await page.locator('table tbody tr').all();

        expect(oldRows.length).not.toEqual(newRows.length);
    });

    test('Change page', async ({ page }) => {
        // coins names
        const oldNames: string[] = [];
        const newNames: string[] = [];

        // get coins names before changing page
        let rows = await page.locator('table tbody tr').all();
        for (const row of rows) {
            const nameCell = row.locator('td:nth-child(2)');
            const name = await nameCell.textContent();
            oldNames.push(name || '');
        }

        // chnge page
        await page.getByRole('link', { name: '3' }).first().click();
        await page.waitForTimeout(TIMEOUT);

        // get coins names after changing page
        rows = await page.locator('table tbody tr').all();
        for (const row of rows) {
            const nameCell = row.locator('td:nth-child(2)');
            const name = await nameCell.textContent();
            newNames.push(name || '');
        }

        // compare coins names
        for (let i = 0; i < oldNames.length && i < newNames.length; i++) {
            expect(oldNames[i]).not.toEqual(newNames[i]);
        }
    });
});
