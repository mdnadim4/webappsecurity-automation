//Author: Nadim Mahmud
import FeedbackPage from '../pageobjects/FeedbackPage'
const feedback = new FeedbackPage()

describe('Feedback Form Feature', () => {

  before(async () => {
    await feedback.visitAndWindowSize()
  })

  it('Verify the feedback Nav', async () => {
    await feedback.verifyFeedbackNav()
  })

  it('Verify all input fields visibility', async () => {
    await feedback.verifyInputFieldVisibility()
  })

  it('Set all values for input fields', async () => {
    await feedback.verifySetAllInputField()
  })

  it('Verify the feedback title', async () => {
    await feedback.verifyFeedbackTitle()
  })
  
})
