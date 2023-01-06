//Author: Nadim Mahmud
import Utils from './utils'
const utils = new Utils()

export default class LoginPage {
  public get signinBtn() {
    return '#signin_button'
  }
  public get userLogin() {
    return '#user_login'
  }
  public get userPassword() {
    return '#user_password'
  }
  public get submitBtn() {
    return '[type="submit"]'
  }
  public get errorMessage() {
    return '.alert-error'
  }
  public get username() {
    return 'li:nth-of-type(3) > .dropdown-toggle'
  }
  public get setting() {
    return 'li:nth-of-type(2) > .dropdown-toggle'
  }
  public get logout() {
    return 'a#logout_link'
  }

  public async visitAndWindowSize() {
    await utils.windowMaximum()
    await utils.visit('/')
  }

  public async clickOnSigninBtn() {
    await utils.waitAndClick(this.signinBtn)
    await utils.urlContains('/login.html')
    await utils.titleContains('Zero - Log in')
  }

  public async verifyLogin(username) {
    await utils.waitForDisplayed(this.userLogin)
    await utils.setValue(this.userLogin, username)
  }

  public async verifyPassword(password) {
    await utils.waitForDisplayed(this.userPassword)
    await utils.setValue(this.userPassword, password)
  }

  public async clickOnSubmitBtn() {
    await utils.waitForSecornd(2)
    await utils.waitAndClick(this.submitBtn)
  }

  public async verifyErrorMessage(message) {
    await utils.waitForDisplayed(this.errorMessage)
    await utils.textContains(message)
  }

  public async verifySuccessLogin() {
    await utils.waitForDisplayed(this.username)
    await utils.waitForDisplayed(this.setting)
  }

  public async verifyInvalidLogin() {
    await this.verifyLogin('test')
    await this.verifyPassword('test')
    await this.clickOnSubmitBtn()
    await this.verifyErrorMessage(`Login and/or password are wrong.`)
  }

  public async verifyEmptyLogin() {
    await this.verifyLogin(' ')
    await this.verifyPassword(' ')
    await this.clickOnSubmitBtn()
    await this.verifyErrorMessage(`Login and/or password are wrong.`)
  }

  public async verifyValidLogin() {
    await this.verifyLogin('username')
    await this.verifyPassword('password')
    await this.clickOnSubmitBtn()
    await utils.visit('/')
    await this.verifySuccessLogin()
  }

  public async verifyLogout() {
    await utils.waitAndClick('li:nth-of-type(3) > .dropdown-toggle')
    await utils.waitAndClick(this.logout)
    await utils.waitForExist(this.signinBtn)
  }
}
