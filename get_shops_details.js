const fs = require("fs");

const crawlShopDetails = require("./crawler/shop_details");

const shops_username = [
  "minastore_vn",
  "friday.official",
  "germe.vn",
  "sliky",
  "yinxx.vn",
  "kamongclothing",
  "choobe.official",
  "hinstore",
  "sysea.vn",
  "trumthoitrangqc",
  "khanhnganshop",
  "dorita_boutique",
  "tiemvay123",
  "hethongcheapshop",
  "gihathoitrangthietke",
  "duongthuydungchuyensile",
  "kusashop",
  "zinti88",
  "huyentrang_fashion",
  "gufunisex",
  "sammivnxk",
  "zinniaboutique.2018",
  "sysea.vn",
  "29feb.closet",
  "mood_boutique",
  "forgirl_vn",
];

const shopDetailRunner = async () => {
  const shops = [];
  for (const user_name of shops_username) {
    const shopDetails = await crawlShopDetails(user_name);
    shops.push(shopDetails);
  }

  const fileName = "./input/shops.json";

  fs.writeFile(fileName, JSON.stringify(shops, null, 2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.info("JSON saved to: ", fileName);
    }
  });
};

shopDetailRunner();
