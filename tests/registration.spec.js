const { test, expect } = require('@playwright/test');

test('Successful Registration', async({ page }) => {

    // Data 
    const baseUrl = 'https://automationteststore.com/';
    const loginRegisterTab = 'Login or register';
    const accountLoginText = 'Account Login';
    const createAccountText = 'Create Account';
    const firstNameText = 'Testing';
    const lastNameText = 'Smoking';
    const emailText = 'mymail@gmail.com';
    const phoneNumber = '6983098098';
    const addressData = 'My Street 67';
    const cityName = 'Buenos Aires';
    const zoneIdData = "3526";
    const postcodeData = '1722';
    const loginNameData = 'Authoring';
    const passwordData = 'Test_123456';
    const confirmPassData = 'Test_123456';
    const successfulRegistrationText = 'Your Account Has Been Created!';

    // Locators 
    const accountLoginHeader = page.locator('.maintext');
    const continueRegisterBtn = page.locator('button[title="Continue"]');
    const createAccountHeader = page.locator('.maintext');
    const firstNameField = page.locator('#AccountFrm_firstname');
    const lastNameField = page.locator('#AccountFrm_lastname');
    const emailField = page.locator('#AccountFrm_email');
    const phoneField = page.locator('#AccountFrm_telephone');
    const addressField = page.locator('#AccountFrm_address_1');
    const cityField = page.locator('#AccountFrm_city');
    const zoneIdField = page.locator("#AccountFrm_zone_id");
    const postcodeField = page.locator('#AccountFrm_postcode');
    const loginNameField = page.locator('#AccountFrm_loginname');
    const passwordField = page.locator('#AccountFrm_password');
    const confirmPassField = page.locator('#AccountFrm_confirm');
    const agreeTermsField = page.locator('#AccountFrm_agree');
    const submitRegistrationBtn = page.getByRole("button", { name: 'Continue' });
    const successfulRegistrationHeader = page.locator('.maintext');

    // Navigate to URL
    await page.goto(baseUrl);
    await page.getByText(loginRegisterTab).click();

    // Go to Login page
    await expect(accountLoginHeader).toHaveText(accountLoginText);
    await continueRegisterBtn.click();
    await expect(createAccountHeader).toHaveText(createAccountText);
    await firstNameField.fill(firstNameText);
    await lastNameField.fill(lastNameText);
    await emailField.fill(emailText);
    await phoneField.fill(phoneNumber);
    await addressField.fill(addressData);
    await cityField.fill(cityName);
    await zoneIdField.selectOption(zoneIdData);
    await postcodeField.fill(postcodeData);
    await loginNameField.fill(loginNameData);
    await passwordField.fill(passwordData);
    await confirmPassField.fill(confirmPassData);
    await agreeTermsField.check();
    await submitRegistrationBtn.click();
    await expect(successfulRegistrationHeader).toHaveText(successfulRegistrationText);
    await page.waitForTimeout(5000);
});