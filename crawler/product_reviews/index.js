const fetch = require('node-fetch');
const { SHOP_Reviews_FETCH_COUNT, REVIEWS_FETCH_COUNT } = require('../../constants');

/**
 * 
 * @param {number} shopId 
 * @param {number} newest 
 * @returns {Promise<Object[]>}
 */
const fetchReviewsLimit = async (shopId, productId, offset, limit) => {
    const res = await fetch(`https://shopee.vn/api/v2/item/get_ratings?filter=0&flag=1&itemid=${productId}&limit=${limit}&offset=${offset}&shopid=${shopId}&type=0`, {
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
    return dataJson.data ? dataJson.data.ratings : []
}

/**
 * 
 * @param {number} shopId 
 * @param {number} newquest 
 * @param {array} reviewList 
 * @returns {Promise<Object[]>}
 */
const crawlShopReviews = async (shopId, productId, offset = 0, limit = REVIEWS_FETCH_COUNT, reviewList = []) => {
    try {
        const newReviews = await fetchReviewsLimit(shopId, productId, offset, limit)
        if (newReviews.length > 0) {
            reviewList.push(...newReviews)
            return await crawlShopReviews(shopId, productId, offset + newReviews.length, limit, reviewList)
        } else {
            return reviewList
        }
    } catch (error) {
        console.error(error)
        return []
    }

}

module.exports = crawlShopReviews