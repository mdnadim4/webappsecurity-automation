describe('Sauce Demo - Product Order Feature', () => {
  before(async () => {
    await browser.maximizeWindow()
    await browser.url('/')
    await browser.sauceLogin()
  })

  after(async () => {
    await browser.sauceLogout()
  })

  it('Verify Product title', async () => {
    let prodtitle =
      '.inventory_list .inventory_item:nth-of-type(1) .inventory_item_name'
    await $(prodtitle).waitForDisplayed()
    expect(prodtitle).toHaveTextContaining('Sauce Labs Backpack')
  })

  it('Verify Product Description', async () => {
    let prodDesc =
      'div:nth-of-type(1) > .inventory_item_description .inventory_item_desc'
    await $(prodDesc).waitForDisplayed()
    expect(prodDesc).toHaveTextContaining('laptop and tablet protection.')
  })

  it('Verify Product Price', async () => {
    let price =
      'div:nth-of-type(1) > .inventory_item_description .inventory_item_price'
    await $(price).waitForDisplayed()
    expect(price).toHaveText('$29.99')
  })

  it('Verify Add To Cart Button', async () => {
    let addToCart = '#add-to-cart-sauce-labs-backpack'
    await $(addToCart).waitForDisplayed()
    expect(addToCart).toHaveText('Add to cart')
  })

  it('Added 2 product', async () => {
    let product1 = await $('#add-to-cart-sauce-labs-bolt-t-shirt')
    let product2 = await $('#add-to-cart-sauce-labs-fleece-jacket')
    await browser.waitAndClick(product1)
    await browser.waitAndClick(product2)
  })

  it('Verify Shopping cart icon', async () => {
    let cartIcon = '.shopping_cart_badge'
    await browser.waitAndClick(cartIcon)
    expect(browser).toHaveUrlContaining('/cart.html')
  })

  it('Verify Cart element visibility', async () => {
    let qty = await $('.cart_quantity_label')
    let desc = await $('.cart_desc_label')
    let list = await $('.cart_list')
    let productList = await $$('.cart_item')
    let continueShop = await $('#continue-shopping')
    let checkout = await $('#checkout')

    expect(qty).toBeDisplayed()
    expect(desc).toBeDisplayed()
    expect(list).toBeDisplayed()
    expect(productList).toBeDisplayed()
    expect(continueShop).toBeDisplayed()
    expect(checkout).toBeDisplayed()

    expect(productList).toHaveLength(2)

    await browser.waitAndClick(checkout)

    expect(browser).toHaveUrlContaining('/checkout-step-one.html')
  })

  it('Visibility Checkout Page', async () => {
    let title = await $('.title')
    let firstName = await $('#first-name')
    let lastName = await $('#last-name')
    let zipCode = await $('#postal-code')
    let continueBtn = await $('#continue')
    let cancel = await $('#cancel')

    expect(title).toBeDisplayed()
    expect(title).toHaveTextContaining('Checkout: Your Information')
    expect(firstName).toBeDisplayed()
    expect(lastName).toBeDisplayed()
    expect(zipCode).toBeDisplayed()
    expect(cancel).toBeDisplayed()
    expect(continueBtn).toBeDisplayed()
  })

  it('Checkout Form Filling', async () => {
    let firstName = await $('#first-name')
    let lastName = await $('#last-name')
    let zipCode = await $('#postal-code')
    let continueBtn = await $('#continue')

    await $(firstName).setValue('Jarrett')
    await $(lastName).setValue('Espinal')
    await $(zipCode).setValue('05403')
    await $(continueBtn).click()
    expect(browser).toHaveUrlContaining('/checkout-step-two.html')
  })

  it('Visibility Checkout Overview page', async () => {
    let title = await $('.title')
    let carlist = await $('.cart_list')
    let summaryInfo = await $('.summary_info')
    let cancelBtn = await $('#cancel')
    let finishBtn = await $('#finish')

    expect(title).toBeDisplayed()
    expect(title).toHaveTextContaining('Checkout: Overview')
    expect(carlist).toBeDisplayed()
    expect(summaryInfo).toBeDisplayed()
    expect(cancelBtn).toBeDisplayed()
    expect(finishBtn).toBeDisplayed()

    await $(finishBtn).click()
    expect(browser).toHaveUrlContaining('/checkout-complete.html')
  })

  it('Verify Checkout Complete Page', async () => {
    let pageHeading = await $('.title')
    let thanksTitle = await $('#checkout_complete_container > .complete-header')
    let subDesc = await $('#checkout_complete_container > .complete-text')
    let ponyImage = await $('[alt="Pony Express"]')
    let backBtn = await $('#back-to-products')

    expect(pageHeading).toBeDisplayed()
    expect(pageHeading).toHaveTextContaining('Checkout: Complete!')

    expect(thanksTitle).toBeDisplayed()
    expect(thanksTitle).toHaveTextContaining('THANK YOU FOR YOUR ORDER')

    expect(subDesc).toBeDisplayed()
    expect(subDesc).toHaveTextContaining('Your order has been dispatched')

    expect(ponyImage).toBeDisplayed()

    await browser.waitAndClick(backBtn)
    expect(browser).toHaveUrlContaining('/inventory.html')
  })
})
