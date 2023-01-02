//Author: Nadim Mahmud
export default class Utils {

  public async visit(selector) {
    await browser.url(selector)
  }
  public async takeScreenshot(path) {
    await browser.saveScreenshot(path)
  }
  public async waitForSecornd(seconds) {
    await browser.pause(seconds * 1000)
  }
  public async windowMaximum() {
    await browser.maximizeWindow()
  }
  public async waitForDisplayed(selector) {
    await $(selector).waitForDisplayed()
  }
  public async click(selector) {
    await $(selector).click()
  }
  public async waitAndClick(selector) {
    await this.waitForDisplayed(selector)
    await this.click(selector)
  }
  public async waitForExist(selector) {
    await $(selector).waitForExist()
  }
  public async urlContains(url) {
    expect(browser).toHaveUrlContaining(url)
  }
  public async titleContains(title) {
    expect(browser).toHaveTitleContaining(title)
  }
  public async textContains(text) {
    expect(browser).toHaveTextContaining(text)
  }
  public async setValue(selector, key) {
    await $(selector).setValue(key)
  }
  public async scrollIntoView(selector) {
    await $(selector).scrollIntoView()
  }
  public async back() {
    await browser.back()
  }
  public async forward() {
    await browser.forward()
  }

   async sauceLogin() {
    await $('#user-name').waitForDisplayed()
    await $('#password').waitForDisplayed()
    await $('#user-name').setValue('standard_user')
    await $('#password').setValue('secret_sauce')
    await $('#login-button').waitForDisplayed()
    await $('#login-button').click()
    expect(browser).toHaveUrlContaining('/inventory.html')
  }

   async sauceLogout() {
    await $('#react-burger-menu-btn').waitForDisplayed()
    await $('#react-burger-menu-btn').click()
    await $('a#logout_sidebar_link').waitForDisplayed()
    await $('a#logout_sidebar_link').click()
    expect(browser).toHaveUrlContaining('www.saucedemo.com')
  }
}
