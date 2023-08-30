const { test, expect } = require('@playwright/test');

test('Successful Registration', async({ page }) => {
    await page.goto('https://automationteststore.com/');
    await page.getByText('Login or register').click();

    // Go to Login page
    await expect(page.locator('.maintext')).toHaveText('Account Login');
    await page.locator('button[title="Continue"]').click();
    await expect(page.locator('.maintext')).toHaveText('Create Account');
    await page.locator('#AccountFrm_firstname').fill('Testing');
    await page.locator('#AccountFrm_lastname').fill('Smoke');
    await page.locator('#AccountFrm_email').fill('alt.c9-1opacmmd@yopmail.com');
    await page.locator('#AccountFrm_telephone').fill('6983098098');
    await page.locator('#AccountFrm_address_1').fill('My Street 67');
    await page.locator('#AccountFrm_city').fill('Buenos Aires');

    await page.waitForTimeout(3000);
});