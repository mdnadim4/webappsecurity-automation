//Author: Nadim Mahmud
import LoginPage from '../pageobjects/LoginPage'
const login = new LoginPage()

describe('Login Funcationality', async () => {
  
  before(async () => {
    await login.visitAndWindowSize()
  })

  it('Click on Signin Button', async () => {
    await login.clickOnSigninBtn()
  })

  it('Login with valid email and password', async () => {
    await login.verifyInvalidLogin()
  })

  it('Login with empty email and password', async () => {
    await login.verifyEmptyLogin()
  })

  it('Login with valid email and password', async () => {
    await login.verifyValidLogin()
  })

  it('Verify the logout option', async () => {
    await login.verifyLogout()
  })

})
    