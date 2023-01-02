//Author: Nadim Mahmud
import ForgetPasswordPage from '../pageobjects/ForgetPasswordPage'
const forget = new ForgetPasswordPage()

describe.only('Forget Password Funcationality', () => {

  before(async () => {
    await forget.visitAndWindowSize()
  })

  it('Click on Signin Button', async () => {
    await forget.clickOnSigninBtn()
  })

  it('Verify Forget Password Link', async () => {
    await forget.verifyForggetPassLink()
  })

  it('Verify Forget Password Email Input Field', async () => {
    await forget.verifyEmailInputField()
  })

  it('Verify Send Password Button', async () => {
    await forget.verifySendBtn()
  })

  it('Verify The Title', async () => {
    await forget.verifyTitle()
  })

  it('Verify The Description', async () => {
    await forget.verifyDescription()
  })

})
