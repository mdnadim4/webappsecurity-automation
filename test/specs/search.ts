import SearchPage from '../pageobjects/SearchPage'
const search = new SearchPage()

describe('Search Feature', async () => {
  before(async () => {
    await search.windowMaximum()
    await search.visit()
  })

  it('Search using keyboard press', async () => {
    await search.searchInputVisible()
    await search.searchInputValue()
    await search.searchEnter()
  })

  it('Search Heading Visibility', async () => {
    await search.searchHeadingVisible()
    await search.searchHeadingVerify()
  })

  it('Search Result Visibility', async () => {
    await search.searchResultVisible()
    await search.searchResultVerify()
  })
})
