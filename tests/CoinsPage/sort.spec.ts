import test, { expect } from '@playwright/test';
import { COINS_PAGE_URL, TIMEOUT } from '../constants';

test.describe('Sorting', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(COINS_PAGE_URL);
    });

    test('Find sorting dropdown', async ({ page }) => {
        await expect(page.getByTestId('sort-dropdown')).toBeVisible();
    });

    test('Sort by price ascending', async ({ page }) => {
        await page.getByTestId('sort-dropdown').selectOption('Price Ascending');
        await page.waitForTimeout(TIMEOUT);

        const values: number[] = [];
        const rows = page.locator('table tbody tr');
        for (const row of await rows.all()) {
            const cell = row.locator('td:nth-child(4)');
            const value = await cell.textContent();
            values.push(Number(value));
        }

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeLessThanOrEqual(values[i + 1]);
        }
    });

    test('Sort by price descending', async ({ page }) => {
        await page.getByTestId('sort-dropdown').selectOption('Price Descending');
        await page.waitForTimeout(TIMEOUT);

        const values: number[] = [];
        const rows = page.locator('table tbody tr');
        for (const row of await rows.all()) {
            const cell = row.locator('td:nth-child(4)');
            const value = await cell.textContent();
            values.push(Number(value));
        }

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeGreaterThanOrEqual(values[i + 1]);
        }
    });

    test('Sort by market capitalization ascending', async ({ page }) => {
        await page.getByTestId('sort-dropdown').selectOption('Market Cap Ascending');
        await page.waitForTimeout(TIMEOUT);

        const values: number[] = [];
        const rows = page.locator('table tbody tr');
        for (const row of await rows.all()) {
            const cell = row.locator('td:nth-last-child(3)');
            const value = await cell.textContent();
            values.push(Number(value));
        }

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeLessThanOrEqual(values[i + 1]);
        }
    });

    test('Sort by market capitalization descending', async ({ page }) => {
        await page.getByTestId('sort-dropdown').selectOption('Market Cap Descending');
        await page.waitForTimeout(TIMEOUT);

        const values: number[] = [];
        const rows = page.locator('table tbody tr');
        for (const row of await rows.all()) {
            const cell = row.locator('td:nth-last-child(3)');
            const value = await cell.textContent();
            values.push(Number(value));
        }

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeGreaterThanOrEqual(values[i + 1]);
        }
    });

    test('Sort by change ascending', async ({ page }) => {
        await page.getByTestId('sort-dropdown').selectOption('Change Ascending');
        await page.waitForTimeout(TIMEOUT);

        const values: number[] = [];
        const rows = page.locator('table tbody tr');
        for (const row of await rows.all()) {
            const cell = row.locator('td:nth-last-child(2)');
            const value = await cell.textContent();
            values.push(Number(value?.slice(0, -1)));
        }

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeLessThanOrEqual(values[i + 1]);
        }
    });

    test('Sort by change descending', async ({ page }) => {
        await page.getByTestId('sort-dropdown').selectOption('Change Descending');
        await page.waitForTimeout(TIMEOUT);

        const values: number[] = [];
        const rows = page.locator('table tbody tr');
        for (const row of await rows.all()) {
            const cell = row.locator('td:nth-last-child(2)');
            const value = await cell.textContent();
            values.push(Number(value?.slice(0, -1)));
        }

        for (let i = 0; i < values.length - 1; i++) {
            expect(values[i]).toBeGreaterThanOrEqual(values[i + 1]);
        }
    });
});
