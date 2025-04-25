class LoginPage{
    constructor(page) {
        this.page = page
        this.username = this.page.getByPlaceholder('UserName')
        this.password = this.page.getByPlaceholder('Password')
        this.loginButton = this.page.locator('#login')
    }

    async visit(){
        await this.page.goto('https://demoqa.com/login');
    }

    async login(){
        await this.username.fill('smmalini')
        await this.password.fill('Test@1234')
        await this.loginButton.click()
    }
}
module.exports = { LoginPage }