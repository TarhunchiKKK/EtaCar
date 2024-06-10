import test, { expect } from '@playwright/test';
import { COINS_PAGE_URL } from '../constants';

test('Check page title', async ({ page }) => {
    await page.goto(COINS_PAGE_URL);

    await expect(page).toHaveTitle('CoinCap');
});
