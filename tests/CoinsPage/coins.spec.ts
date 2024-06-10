import test, { expect } from '@playwright/test';
import { COINS_PAGE_URL, TIMEOUT } from '../constants';

test.describe('Modals', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(COINS_PAGE_URL);
    });

    test('Adding coins modal', async ({ page }) => {
        // click button and open buy coins modal
        await page.getByRole('button', { name: 'Add' }).first().click();

        // check for adding coins modal visibility
        await page.waitForTimeout(TIMEOUT / 2);
        const modal = page.getByTestId('modal');
        await expect(modal).toBeVisible();

        // find input
        const input = modal.locator('input').first();
        await input.focus();

        // min value validation
        const minCoinsCount: number = 1;
        await input.fill(String(minCoinsCount));
        await input.press('ArrowDown', { delay: 1000 });
        let count: string = await input.inputValue();
        if (count) {
            expect(+count).toBeGreaterThanOrEqual(minCoinsCount);
        }

        // max value validation
        const maxCoinsCount: number = 50;
        await input.fill(String(maxCoinsCount));
        await input.press('ArrowDown', { delay: 1000 });
        count = await input.inputValue();
        if (count) {
            expect(+count).toBeLessThanOrEqual(maxCoinsCount);
        }
    });

    test('Coins list modal', async ({ page }) => {
        // open coins list modal
        await page.getByTestId('portfolio-info').click();
        await page.waitForTimeout(TIMEOUT / 2);
        const modal = page.getByTestId('modal');
        await expect(modal).toBeVisible();

        // get coins from modal
        const coins = await modal.locator('li').all();
        if (coins.length !== 0) {
            await coins[0].all()[-1].click();
            const newCoins = await modal.locator('li').all();
            expect(newCoins.length).toBeLessThan(coins.length);
        }
    });
});
