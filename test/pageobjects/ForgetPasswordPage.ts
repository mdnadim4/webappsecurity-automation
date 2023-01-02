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

  public async visitAndWindowSize() {
    await utils.windowMaximum()
    await utils.visit('/')
  }

  public async clickOnSigninBtn() {
    await utils.waitAndClick(this.signinBtn)
    await utils.urlContains('/login.html')
    await utils.titleContains('Zero - Log in')
  }
}
