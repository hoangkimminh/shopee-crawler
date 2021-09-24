const fetch = require('node-fetch');
const { SHOP_PRODUCTS_FETCH_COUNT } = require('../../constants');

/**
 * 
 * @param {number} shopId 
 * @param {number} newest 
 * @returns {Promise<Object[]>}
 */
const fetchProductsLimit = async (shopId, newest) => {
    const res = await fetch(`https://shopee.vn/api/v2/search_items/?by=pop&entry_point=ShopByPDP&limit=30&match_id=${shopId}&newest=${newest}&order=desc&page_type=shop&pdp_l3cat=10919&version=2`, {
        "headers": {
            "accept": "*/*",
            "accept-language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-api-source": "pc",
            "x-requested-with": "XMLHttpRequest",
            "x-shopee-language": "vi",
            "cookie": process.env.COOKIE
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
    })
    const dataJson = await res.json()
    return dataJson.items ? dataJson.items : []
}

/**
 * 
 * @param {number} shopId 
 * @param {number} newquest 
 * @param {array} productList 
 * @returns {Promise<Object[]>}
 */
const crawlShopProducts = async (shopId, newquest = 0, productList = []) => {
    try {
        const newProducts = await fetchProductsLimit(shopId, newquest)
        if (newProducts.length > 0) {
            productList.push(...newProducts)
            return await crawlShopProducts(shopId, newquest + newProducts.length, productList)
        } else {
            return productList
        }
    } catch (error) {
        console.error(error)
        return []
    }
}

module.exports = crawlShopProducts