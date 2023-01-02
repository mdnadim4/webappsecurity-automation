import ForgetPassword from '../pageobjects/ForgetPasswordPage'
const forget = new ForgetPassword()


describe.only('Forget Password Funcationality', () => {
  before(async () => {
    await browser.maximizeWindow()
    await browser.url('/')
  })

  it('Verify forget password', async () => {
    await browser.waitAndClick('#signin_button')

    let forgetPasswordLink = await $('[href="/forgot-password.html"]')
    await browser.waitAndClick(forgetPasswordLink)
    expect(browser).toHaveUrlContaining('/forgot-password.html')

    let emailInput = await $('#user_email')
    let email = 'test@test.com'
    await (await $(emailInput)).waitForDisplayed()
    await $(emailInput).setValue(email)

    let sendPassBtn = await $('[type="submit"]')
    await browser.waitAndClick(sendPassBtn)
    expect(browser).toHaveUrlContaining('/forgotten-password-send.html')

    let title = await $('div.page-header>h3')
    await (await $(title)).waitForDisplayed()
    expect(title).toHaveTextContaining('Forgotten Password')

    let description = await '.offset3'
    await (await $(description)).waitForDisplayed()
    expect(description).toHaveTextContaining(email)
  })
})
