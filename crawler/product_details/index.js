const fetch = require("node-fetch");
const { SHOP_PRODUCTS_FETCH_COUNT } = require("../../constants");

/**
 *
 * @param {number} shopId
 * @param {number} productId
 * @returns
 */
const crawlProductDetails = async (shopId, productId) => {
  try {
    const res = await fetch(
      `https://shopee.vn/api/v2/item/get?itemid=${productId}&shopid=${shopId}`,
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          accept: "*/*",
          "accept-language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
          "if-none-match": "c90d874e5521e97055639ca8104f3f83",
          "if-none-match-": "55b03-957e3d3e8f80452fe855d8fae46e8ff7",
          "sec-ch-ua":
            '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-api-source": "pc",
          "x-requested-with": "XMLHttpRequest",
          "x-shopee-language": "vi",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
      }
    );
    const data = await res.json();
    return data.item;
  } catch (error) {
    console.error(error);
    return {};
  }
};

module.exports = crawlProductDetails;
