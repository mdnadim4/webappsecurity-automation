//Author: Nadim Mahmud
import Utils from "./utils";
const utils = new Utils()

export default class FeedbackPage {

    public get feedbackNav() {
        return '#feedback strong'
    }
    public get nameSelector() {
        return '#name'
    }
    public get name() {
        return 'William'
    }
    public get emailSelector() {
        return '#email'
    }
    public get email() {
        return 'william@email.com'
    }
    public get subjectSelector() {
        return '#subject'
    }
    public get subject() {
        return 'test email'
    }
    public get descSelector() {
        return '#comment'
    }
    public get description() {
        return 'This is dummy description'
    }
    public get submitBtn() {
        return '[name="submit"]'
    }
    public get feedbackTitle() {
        return '#feedback-title'
    }

    public async visitAndWindowSize() {
        await utils.windowMaximum()
        await utils.visit('/')
    }

    public async verifyFeedbackNav() {
        await utils.waitAndClick(this.feedbackNav)
        await utils.urlContains('/feedback.html')
    }

    public async verifyInputFieldVisibility() {
        await utils.waitForExist(this.nameSelector)
        await utils.waitForExist(this.emailSelector)
        await utils.waitForExist(this.subjectSelector)
        await utils.waitForExist(this.descSelector)
        await utils.waitForExist(this.submitBtn)
    }

    public async verifySetAllInputField() {
        await utils.setValue(this.nameSelector, this.name)
        await utils.setValue(this.emailSelector, this.email)
        await utils.setValue(this.subjectSelector, this.subject)
        await utils.setValue(this.descSelector, this.description)
        await utils.scrollIntoView(this.submitBtn)
        await utils.click(this.submitBtn)
    }

    public async verifyFeedbackTitle() {
        await utils.waitForExist(this.feedbackTitle)
        await utils.urlContains('/sendFeedback.html')
        await utils.textContains('Feedback')
    }

}