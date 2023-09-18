import smartwatchesPage from "../pageobjects/smartwatches.page.js"
import keymethods from "../utils/keymethods.js"
import assert from 'assert'
let productId

function searchSmartWatches(brand) {

    describe('Open amazon.in & search smartwatches', () => {

        it('[0] Open amazon.in and veriy the page title ' + brand, async () => {
            await smartwatchesPage.open()
            const actual_getPageTitle = await keymethods.getPageTitle()
            const expected_getPageTitle = await keymethods.testDataReader('constants', 'amazon_hp_title')
            assert.strictEqual(actual_getPageTitle, expected_getPageTitle, "Actual & Expected page title doesn't match")
        })

        it('[1] Search smartwatches in the search bar and select a particular brand & select price range between 1000 & 5000' + brand, async () => {
            //search for smartwatches & click searchBar
            await smartwatchesPage.searchBar.setValue('smartwatches')
            await smartwatchesPage.searchButton.click()
            await smartwatchesPage.deliveryRefinements.waitForDisplayed({ timeout: 3000 })

            //scroll to brand section & select a brand
            console.log("Brand " + brand)
            await b.execute(function () {
                document.querySelector('#brandsRefinements').scrollIntoView({ block: 'center' })
            })
            await b.pause(1000)
            await smartwatchesPage.seeMore.click()
            // await smartwatchesPage.priceRange.scrollIntoView()
            await smartwatchesPage.selectBrand(brand).waitForClickable({ timeout: 3000 })
            await smartwatchesPage.selectBrand(brand).click()
            await b.pause(1000)
            // await b.execute(function () {
            //     document.querySelector('#p_89-title').scrollIntoView({ block: 'center' })
            // })
            await b.execute(function () {
                document.querySelector('#priceRefinements').scrollIntoView({ block: 'center' })
            })
            await smartwatchesPage.priceRange.click() //select 1000-5000 as price range

            // Validates the prices of watches on page 1 to be greater than 1000 && less than 5000
            const pricesPage1 = await smartwatchesPage.pricesPage1;
            for await (const prices of pricesPage1) {
                let itemPrice = await prices.getText()
                itemPrice = itemPrice.replace(',', '')
                //console.log(itemPrice)
                assert(itemPrice >= 1000 && itemPrice <= 5000)
            }
        })

        it('[2] Sort price from high to low using the sort option available in the upper right corner ' + brand, async () => {
            await b.execute(function () {
                document.querySelector('#s-result-sort-select').scrollIntoView({ block: 'center' })
            })
            await smartwatchesPage.sortDropDown.click()
            await smartwatchesPage.selectHighToLow.click()
            await b.pause(2000)
            await b.execute(function () {
                document.querySelectorAll('[data-component-type="s-search-result"]')[0].scrollIntoView({ block: 'center' })
            })
            await smartwatchesPage.highestPriceProduct.waitForClickable({ timeout: 3000 })
            await smartwatchesPage.highestPriceProduct.click()

            const getWindowHandles = await b.getWindowHandles()
            await b.switchToWindow(getWindowHandles[1])
            let getUrl = await b.getUrl()
            let getUrlArray = getUrl.split("/")
            productId = getUrlArray[5].trim()
            console.log(brand + " Product Id from the detail page " + productId)
            await smartwatchesPage.addToCart.waitForDisplayed({ timeout: 2000 })
            await smartwatchesPage.addToCart.click()
            await smartwatchesPage.closeSideSheet.waitForClickable({ timeout: 7000 })
            await smartwatchesPage.closeSideSheet.click()
        })

        it('[3] Verify if the correct product is added in the cart ' + brand, async () => {
            await b.pause(500)
            await b.execute(function () {
                document.querySelector('.layoutToolbarPadding').scrollIntoView({ block: 'center' })
            })
            await smartwatchesPage.cartBtn.click()
            await smartwatchesPage.shoppingCartHeader.waitForDisplayed({ timeout: 2000 })
            let shoppingCartProductId = await smartwatchesPage.shoppingIdProductId.getAttribute('href')
            shoppingCartProductId = shoppingCartProductId.split('/')
            shoppingCartProductId = shoppingCartProductId[3].trim()
            console.log(brand + " Product Id from the shopping cart page " + shoppingCartProductId)
            assert.strictEqual(productId, shoppingCartProductId, "Product title from the detail page doesn't match with the shopping cart product title")
            await b.closeWindow()
        })
    })
}
export const smartWatchesIndex = searchSmartWatches;
