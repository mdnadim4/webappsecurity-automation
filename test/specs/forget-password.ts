import ForgetPasswordPage from '../pageobjects/ForgetPasswordPage'
const forget = new ForgetPasswordPage()


describe.only('Forget Password Funcationality', () => {
  before(async () => {
    await forget.windowMaximum()
    await forget.visit()
  })

  it('Verify forget password', async () => {
    await forget.clickOnSigninBtn()

    await forget.waitAndClick(forgetPasswordLink)
    expect(forget).toHaveUrlContaining('/forgot-password.html')

    let emailInput = await $('#user_email')
    let email = 'test@test.com'
    await (await $(emailInput)).waitForDisplayed()
    await $(emailInput).setValue(email)

    let sendPassBtn = await $('[type="submit"]')
    await forget.waitAndClick(sendPassBtn)
    expect(forget).toHaveUrlContaining('/forgotten-password-send.html')

    let title = await $('div.page-header>h3')
    await (await $(title)).waitForDisplayed()
    expect(title).toHaveTextContaining('Forgotten Password')

    let description = await '.offset3'
    await (await $(description)).waitForDisplayed()
    expect(description).toHaveTextContaining(email)
  })
})
