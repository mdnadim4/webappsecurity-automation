//Author: Nadim Mahmud
import ProductOrderPage from '../pageobjects/ProductOrderPage'
const product = new ProductOrderPage()

describe('Sauce Demo - Product Order Feature', () => {
  before(async () => {
    await product.visitAndWindowSize()
  })

  after(async () => {
    await product.verifySauceLogout()
  })

  it('Verify Sauce Demo Login', async () => {
    await product.verifySauceLogin()
  })

  it('Verify Product title', async () => {
    await product.verifyProductTitle()
  })

  it('Verify Product Description', async () => {
    await product.verifyProductDescription()
  })

  it('Verify Product Price', async () => {
    await product.verifyProductPrice()
  })

  it('Verify Add To Cart Button', async () => {
    await product.verifyAddToCartBtn()
  })

  it('Added 2 product', async () => {
    await product.verifyProduct()
  })

  it('Verify Shopping cart icon', async () => {
    await product.verifyShoppingCartIcon()
  })

  it('Verify Product Length', async () => {
    await product.verifyProductLength()
  })

  it('Verify Cart element visibility', async () => {
    await product.verifyCartAllElementVisibility()
  })

  it('Verify Checkout Button', async () => {
    await product.verifyCheckoutBtn()
  })

  it('Verify Checkout Page Visibility', async () => {
    await product.verifyCheckoutPageVisibility()
  })

  it('Checkout Form Filling', async () => {
    await product.verifySetValueCheckoutForm()
  })

  it('Checkout Overview Page Visibility', async () => {
    await product.verifyCheckoutOverviewPageVisibility()
  })

  it('Verify Finish Button', async () => {
    await product.verifyFinishBtn()
  })

  it('Verify Checkout Complete Page', async () => {
    await product.verifyPageHeading()
    await product.verifyThanksTitle()
    await product.verifySubDescription()
    await product.verifyPonyImg()
    await product.verifyBackBtn()
  })
})
