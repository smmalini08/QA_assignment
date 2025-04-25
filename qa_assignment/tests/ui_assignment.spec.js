import {expect, test} from "@playwright/test";
const {LoginPage} = require('../pages/loginPage')
const {BookStorePage} = require('../pages/BookStorePage')
import * as fs from 'fs';


test('Validate book details', async ({ page }) => {
    const loginPage  = new LoginPage(page)

    await loginPage.visit()
    await loginPage.login()

    const bookStorePage  = new BookStorePage(page)

    await expect(bookStorePage.user_label).toHaveText('smmalini')
    await expect(bookStorePage.logOutButton).toBeVisible()

    await bookStorePage.clickBookStore()

    await bookStorePage.searchBook('Learning JavaScript Design Patterns')

    await expect(bookStorePage.firstBookRow).toContainText('Learning JavaScript Design Patterns');

    // 9. Extract and print Title, Author, and Publisher to a file
    const title = await bookStorePage.firstBookRow.locator('.rt-td').nth(0).textContent();
    const author = await bookStorePage.firstBookRow.locator('.rt-td').nth(1).textContent();
    const publisher = await bookStorePage.firstBookRow.locator('.rt-td').nth(2).textContent();

    const bookDetails = `Title: ${title}\nAuthor: ${author}\nPublisher: ${publisher}\n`;
    console.log(bookDetails);
    fs.writeFileSync('book_details.txt', bookDetails);

    // 10. Logout
    await bookStorePage.logout()
    await expect(loginPage.username).toBeVisible()
});


