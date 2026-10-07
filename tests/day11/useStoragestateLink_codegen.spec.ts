import { test, expect } from '@playwright/test';

test.use({storageState:"data/auth1.json"})
test(`use storage state link`, async ({page}) => {
  await page.goto('https://uibank.uipath.com/welcome');
  await page.locator(`//button[text()="Apply Now"]`).click()
  await page.getByRole('textbox', { name: 'Give a Nickname to Your' }).click();
  await page.getByRole('textbox', { name: 'Give a Nickname to Your' }).fill('newAccount1');
  await page.getByLabel('Type of Account').selectOption('savings');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByText('View Your Accounts').click();
  await page.getByRole('link', { name: 'newAccount2' }).click();
});