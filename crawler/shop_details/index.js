const fetch = require("node-fetch");

/**
 *
 * @param {string} user_name
 * @returns
 */
const crawlShopDetails = async (user_name) => {
  try {
    const res = await fetch(
      `https://shopee.vn/api/v4/shop/get_shop_detail?username=${user_name}`,
      {
        headers: {
          accept: "*/*",
          "accept-language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-api-source": "pc",
          "x-requested-with": "XMLHttpRequest",
          "x-shopee-language": "vi",
          cookie: process.env.COOKIE,
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
      }
    );
    const data = await res.json();
    const { shopid, follower_count, shop_location, name } = data.data;
    console.log(user_name, shopid, follower_count, shop_location, name);
    return { shopid, follower_count, shop_location, name, user_name };
  } catch (error) {
    console.error(error);
    return {};
  }
};

module.exports = crawlShopDetails;
