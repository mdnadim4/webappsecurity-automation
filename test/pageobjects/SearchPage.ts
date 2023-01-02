import Utils from "./utils"
const utils = new Utils()

export default class SearchPage {
  public get searchInput() {
    return ('#searchTerm')
  }
  public get searchKeyword() {
    return 'Bank'
  }
  public get searchHeading() {
    return ('div.container h2')
  }
  public get searchResult() {
    return ('div.top_offset')
  }

  public async windowMaximum() {
    await utils.windowMaximum()
  }
  public async visit() {
    await utils.visit('/')
  }
  public async searchInputVisible() {
    await $(this.searchInput).waitForDisplayed()
  }
  public async searchInputValue() {
    await $(this.searchInput).setValue(this.searchKeyword)
  }
  public async searchEnter() {
    await browser.keys('Enter')
  }
  public async searchHeadingVisible() {
    expect(this.searchHeading).toBeExisting()
  }
  public async searchHeadingVerify() {
    expect(this.searchHeading).toHaveTextContaining('Search Results:')
  }
  public async searchResultVisible() {
    expect(this.searchResult).toBeExisting()
  }
  public async searchResultVerify() {
    expect(this.searchResult).toHaveTextContaining(this.searchKeyword)
  }
  
}
