//Author: Nadim Mahmud
import Utils from './utils'
const utils = new Utils()

export default class ForgetPasswordPage {
  public get signinBtn() {
    return '#signin_button'
  }
  public get forgetPassLink() {
    return '[href="/forgot-password.html"]'
  }
  public get emailInputField() {
    return '#user_email'
  }
  public get emailAddress() {
    return 'test@test.com'
  }
  public get sendPassBtn() {
    return '[type="submit"]'
  }
  public get title() {
    return 'div.page-header>h3'
  }
  public get description() {
    return '.offset3'
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

  public async verifyForggetPassLink() {
    await utils.click(this.forgetPassLink)
    await utils.urlContains('/forgot-password.html')
  }

  public async verifyEmailInputField() {
    await utils.waitForDisplayed(this.emailInputField)
    await utils.setValue(this.emailInputField, this.emailAddress)
  }

  public async verifySendBtn() {
    await utils.waitAndClick(this.sendPassBtn)
    await utils.urlContains('/forgotten-password-send.html')
  }

  public async verifyTitle() {
    await utils.waitForDisplayed(this.title)
    await utils.textContains('Forgotten Password')
  }

  public async verifyDescription() {
    await utils.waitForDisplayed(this.description)
    await utils.textContains(this.emailAddress)
  }
}
