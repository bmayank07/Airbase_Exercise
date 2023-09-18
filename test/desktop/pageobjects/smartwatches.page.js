
class smartwatchesPage {

    async open() {
        await b.url('');
        await b.refresh()
    }

    get searchBar() {
        return $('//input[@id="twotabsearchtextbox"]')
    }
    get searchButton() {
        return $('#nav-search-submit-button')
    }
    get deliveryRefinements() {
        return $('#deliveryRefinements')
    }

    selectBrand(brand) {
        return $('//span[text()="' + brand + '"]')
    }

    get priceRange() {
        return $('//span[text()="₹1,000 - ₹5,000"]')
    }

    get pricesPage1() {
        return $$('.a-price-whole')
    }
    get sortDropDown() {
        return $('.a-dropdown-container')
    }

    get selectHighToLow() {
        return $('//a[text()="Price: High to Low"]')
    }
    get highestPriceProduct() {
        //return $('(//a[contains(@href,"/Noise-Display-Bluetooth-Calling-Stainless/dp")])[1] | (//a[contains(@href,"/beatXP-Unbound-Bluetooth-Calling-Monitoring")])[1] | (//a[contains(@href,"/boAt-Bluetooth-Assistant-Monitoring-Ecosystem")])[1]')
        return $('(//a[contains(@href,"dp")])[1]')
    }
    get addToCart() {
        return $('#add-to-cart-button')
    }
    get addedToCart() {
        return $('(//h4[text()="Added to Cart"])[2]')
    }
    get closeSideSheet() {
        return $('#attach-close_sideSheet-link')
    }
    get cartBtn() {
        return $('#nav-cart')
    }
    get shoppingCartHeader() {
        return $('//h1[contains(text(),"Shopping Cart")]')
    }
    get productTitle() {
        return $('//span[@id="productTitle"]')
    }
    get shoppingCartProductDetails() {
        return $('//span[@class="a-truncate-cut"]')
    }
    get shoppingIdProductId() {
        return $('(//a[contains(@class,"sc-product-link")])[1]')
    }
    get seeMore() {
        return $('//span[text()="See more"]//preceding-sibling::i')
    }
    get anyPrice() {
        return $('//span[text()="Any Price"]')
    }


}
export default new smartwatchesPage()
