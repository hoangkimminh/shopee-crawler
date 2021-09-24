const fs = require("fs");
const crawlProductDetails = require("./crawler/product_details");
const crawlShopReviews = require("./crawler/product_reviews");
const crawlShopProducts = require("./crawler/shop_products");
const shopList = require("./input/shops.json");

const main = async () => {
  let shopIndex = 0;
  const shopLength = shopList.length;
  // Iterate shop list
  for (const shop of shopList) {
    console.info(
      "*Start shop: " + shopIndex + "/" + shopLength + ": ",
      shop.name
    );
    shopIndex++;
    const shopId = shop.shopid;
    const products = await crawlShopProducts(shopId);
    console.log(shop.name + " has :", products.length, " products");
    productDetailsList = [];
    let index = 1;
    const totalLength = products.length;
    for (const product of products) {
      // Get product details and reviews
      const productId = product.itemid;

      console.log(
        "**** " + index + "/" + totalLength + ". Start product: ",
        productId
      );

      // Crawl product details
      const productDetails = await crawlProductDetails(shopId, productId);
      const productData = {
        itemid: productDetails.itemid,
        shopid: productDetails.shopid,
        name: productDetails.name,
        view_count: productDetails.view_count,
        like_count: productDetails.like_count,
        item_status: productDetails.item_status,
        categories: productDetails.categories,
        tier_variations: productDetails.tier_variations,

        historical_sold: productDetails.historical_sold,
        images: productDetails.images,
        discount: productDetails.discount,
        catid: productDetails.catid,
        is_official_shop: productDetails.is_official_shop,
        sold: productDetails.sold,
        attributes: productDetails.attributes,
        stock: productDetails.stock,
        is_adult: productDetails.is_adult,
        currency: productDetails.currency,
        price_min: productDetails.price_min,
        description: productDetails.description,
        shop_location: productDetails.shop_location,
        price_before_discount: productDetails.price_before_discount,
      };
      const reviews = await crawlShopReviews(shopId, productId);
      if (reviews.length > 10) {
        const reviews_optimized = reviews.map((review) => {
          return {
            review_id: review.cmtid,
            itemid: review.itemid,
            userid: review.userid,
            orderid: review.orderid,
            rating: review.rating_star,
            author_username: review.author_username,
            images: review.images,
            status: review.status,
            videos: review.videos,
            comment: review.comment,
            model_name: review.model_name,
          };
        });

        productData.price = reviews[0].product_items[0].price;
        productDetailsList.push({ ...productData, reviews: reviews_optimized });
      }
      console.log("**** Reviews length: ", reviews.length);
      console.log("**** End product: ", productId);

      index++;
    }

    shop.products = productDetailsList;

    try {
      // Export data
      const fileName = `./output/${shop.user_name}.json`;
      shop.products.length > 0 &&
        fs.writeFile(fileName, JSON.stringify(shop, null, 2), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.info("JSON saved to: " + fileName);
          }
        });

      console.info("*End shop: ", shop.user_name);
    } catch (error) {
      console.log(error);
    }
  }
};

main();
