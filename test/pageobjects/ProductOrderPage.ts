//Author: Nadim Mahmud
import Utils from './utils'
const utils = new Utils()

export default class ProductOrderPage {
  public get username() {
    return '#user-name'
  }
  public get password() {
    return '#password'
  }
  public get loginBtn() {
    return '#login-button'
  }
  public get burgerMenu() {
    return '#react-burger-menu-btn'
  }
  public get logoutLink() {
    return 'a#logout_sidebar_link'
  }
  public get productTitle() {
    return '.inventory_list .inventory_item:nth-of-type(1) .inventory_item_name'
  }
  public get productDescription() {
    return 'div:nth-of-type(1) > .inventory_item_description .inventory_item_desc'
  }
  public get productPrice() {
    return 'div:nth-of-type(1) > .inventory_item_description .inventory_item_price'
  }
  public get addToCart() {
    return '#add-to-cart-sauce-labs-backpack'
  }
  public get product1() {
    return '#add-to-cart-sauce-labs-bolt-t-shirt'
  }
  public get product2() {
    return '#add-to-cart-sauce-labs-fleece-jacket'
  }
  public get cartIcon() {
    return '.shopping_cart_badge'
  }
  public get qty() {
    return '.cart_quantity_label'
  }
  public get description() {
    return '.cart_desc_label'
  }
  public get list() {
    return '.cart_list'
  }
  public get productList() {
    return '.cart_item'
  }
  public get continueShop() {
    return '#continue-shopping'
  }
  public get checkout() {
    return '#checkout'
  }
  public get title() {
    return '.title'
  }
  public get firstName() {
    return '#first-name'
  }
  public get lastName() {
    return '#last-name'
  }
  public get zipCode() {
    return '#postal-code'
  }
  public get continueBtn() {
    return '#continue'
  }
  public get cancelBtn() {
    return '#cancel'
  }
  public get carlist() {
    return '.cart_list'
  }
  public get summaryInfo() {
    return '.summary_info'
  }
  public get finishBtn() {
    return '#finish'
  }
  public get pageHeading() {
    return '.title'
  }
  public get thanksTitle() {
    return '#checkout_complete_container > .complete-header'
  }
  public get subDescription() {
    return '#checkout_complete_container > .complete-text'
  }
  public get ponyImage() {
    return '[alt="Pony Express"]'
  }
  public get backBtn() {
    return '#back-to-products'
  }


  public async visitAndWindowSize() {
    await utils.windowMaximum()
    await utils.visit('https://www.saucedemo.com/')
  }
  public async verifyInputFieldVisibility() {
    await utils.waitForDisplayed(this.username)
    await utils.waitForDisplayed(this.password)
  }
  public async verifySetAllInputField() {
    await utils.setValue(this.username, 'standard_user')
    await utils.setValue(this.password, 'secret_sauce')
  }
  public async verifyLoginBtn() {
    await utils.waitAndClick(this.loginBtn)
    await utils.urlContains('/inventory.html')
  }
  public async verifySauceLogin() {
    await this.verifyInputFieldVisibility()
    await this.verifySetAllInputField()
    await this.verifyLoginBtn()
  }
  public async verifyBurgerMenu() {
    await utils.waitAndClick(this.burgerMenu)
  }
  public async clickOnLogoutLink() {
    await utils.waitAndClick(this.logoutLink)
    await utils.urlContains('www.saucedemo.com')
  }
  public async verifySauceLogout() {
    await this.verifyBurgerMenu()
    await this.clickOnLogoutLink()
  }
  public async verifyProductTitle() {
    await utils.waitForDisplayed(this.productTitle)
    await utils.textContains('Sauce Labs Backpack')
  }
  public async verifyProductDescription() {
    await utils.waitForDisplayed(this.productDescription)
    await utils.textContains('laptop and tablet protection.')
  }
  public async verifyProductPrice() {
    await utils.waitForDisplayed(this.productPrice)
    await utils.textContains('$29.99')
  }
  public async verifyAddToCartBtn() {
    await utils.waitForDisplayed(this.addToCart)
    await utils.textContains('Add to cart')
  }
  public async verifyProduct() {
    await utils.waitAndClick(this.product1)
    await utils.waitAndClick(this.product2)
  }
  public async verifyShoppingCartIcon() {
    await utils.waitAndClick(this.cartIcon)
    await utils.urlContains('/cart.html')
  }
  public async verifyProductLength() {
    await utils.haveLength(this.productList, 10)
  }
  public async verifyCartAllElementVisibility() {
    await utils.waitForDisplayed(this.qty)
    await utils.waitForDisplayed(this.description)
    await utils.waitForDisplayed(this.list)
    await utils.waitForDisplayed(this.productList)
    await utils.waitForDisplayed(this.continueShop)
    await utils.waitForDisplayed(this.checkout)
  }
  public async verifyCheckoutBtn() {
    await utils.waitAndClick(this.checkout)
    await utils.urlContains('/checkout-step-one.html')
  }

  public async verifyCheckoutPageVisibility() {
    await utils.waitForDisplayed(this.title)
    await utils.waitForDisplayed(this.firstName)
    await utils.waitForDisplayed(this.lastName)
    await utils.waitForDisplayed(this.zipCode)
    await utils.waitForDisplayed(this.continueBtn)
    await utils.waitForDisplayed(this.cancelBtn)
  }
  public async verifySetValueCheckoutForm() {
    await utils.setValue(this.firstName, 'Jarrett')
    await utils.setValue(this.lastName, 'Espinal')
    await utils.setValue(this.zipCode, '05403')
    await utils.click(this.continueBtn)
    await utils.urlContains('/checkout-step-two.html')
  }
  public async verifyCheckoutOverviewPageVisibility() {
    await utils.waitForDisplayed(this.title)
    await utils.urlContains('Checkout: Overview')
    await utils.waitForDisplayed(this.carlist)
    await utils.waitForDisplayed(this.summaryInfo)
    await utils.waitForDisplayed(this.cancelBtn)
    await utils.waitForDisplayed(this.finishBtn)
  }
  public async verifyFinishBtn() {
    await utils.waitAndClick(this.finishBtn)
    await utils.urlContains('/checkout-complete.html')
  }
  public async verifyPageHeading() {
    await utils.waitForDisplayed(this.pageHeading)
    await utils.textContains('Checkout: Complete!')
  }
  public async verifyThanksTitle() {
    await utils.waitForDisplayed(this.thanksTitle)
    await utils.textContains('THANK YOU FOR YOUR ORDER')
  }
  public async verifySubDescription() {
    await utils.waitForDisplayed(this.subDescription)
    await utils.textContains('Your order has been dispatched')
  }
  public async verifyPonyImg() {
    await utils.waitForDisplayed(this.ponyImage)
  }
  public async verifyBackBtn() {
    await utils.waitAndClick(this.backBtn)
    await utils.urlContains('/inventory.html')
  }

}
