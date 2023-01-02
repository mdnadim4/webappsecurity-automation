import Utils from "../pageobjects/utils"
const utils = new Utils()

describe('Feedback Form Feature', () => {

  before(async () => {
    await browser.maximizeWindow()
    await browser.url('/')
  })

  it('Should submit feedback form with all values', async () => {
    let feedbackNav = await $('#feedback strong')
    let name = 'William'
    let email = 'william@email.com'
    let subject = 'test email'
    let description = 'This is dummy description'

    // Verify the feedback Nav
    await utils.waitAndClick(feedbackNav)
    expect(browser).toHaveUrlContaining('/feedback.html')

    // Verify all input fields visibility
    expect('#name').toBeExisting()
    expect('#email').toBeExisting()
    expect('#subject').toBeExisting()
    expect('#comment').toBeExisting()
    expect('[name="submit"]').toBeExisting()

    // Set all values for input fields
    await $('#name').setValue(name)
    await $('#email').setValue(email)
    await $('#subject').setValue(subject)
    await $('#comment').setValue(description)
    await (await $('[name="submit"]')).scrollIntoView()
    await browser.pause(1000)
    await $('[name="submit"]').click()
    await browser.pause(2000)

    // Verify the feedback title
    await (await $('#feedback-title')).waitForDisplayed()
    expect(browser).toHaveUrlContaining('/sendFeedback.html')
    expect('#feedback-title').toHaveTextContaining('Feedback')
  })
})
