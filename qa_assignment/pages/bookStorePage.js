class BookStorePage{
    constructor(page) {
        this.page = page
        this.user_label = this.page.locator('#userName-value')
        this.logOutButton = this.page.getByText('Log out')
        this.bookStoreButton = this.page.getByText('Book Store', {exact: true})
        this.searchInput = this.page.locator('#searchBox')
        this.firstBookRow = this.page.locator('.rt-tbody .rt-tr-group').first();
    }

    async clickBookStore(){
        await this.bookStoreButton.click()
    }

    async searchBook(bookName){
        await this.searchInput.fill(bookName)
    }

    async logout(){
        await this.logOutButton.click()
    }

}
module.exports = { BookStorePage }