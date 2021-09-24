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
          cookie:
            'SPC_F=fvaFJXQ8lvicD2IDhwgFXiQoca9cEGih; REC_T_ID=7574c122-5ec5-11e9-a7f9-1409dcf030c6; _fbp=fb.1.1555253776429.1074093545; csrftoken=tXDxj8PngKxJ4BPriNWa31NCchX1LoAq; welcomePkgShown=true; UYOMAPJWEMDGJ=; SPC_SC_SA_TK=; SPC_SC_SA_UD=; SPC_SC_TK=; SPC_SC_UD=; G_ENABLED_IDPS=google; _hjid=aceb305c-5a8e-40b3-9de5-c4864cdb243c; SPC_CLIENTID=fvaFJXQ8lvicD2IDzcezlwhxcsfyvofb; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1; _fbc=fb.1.1611679398698.IwAR02-W-M8BnEOLorpGCvymE88wg1-17FgkjI75sEcJBmSBkjbkr5rxjA-20; _gcl_aw=GCL.1615818234.Cj0KCQjwi7yCBhDJARIsAMWFScOPBOxCkrwakJLL5hRnDlq7C1C2saF7ELMPHV_pKlwUIJodYrJkB4waAsYzEALw_wcB; _gac_UA-61914164-6=1.1615818235.Cj0KCQjwi7yCBhDJARIsAMWFScOPBOxCkrwakJLL5hRnDlq7C1C2saF7ELMPHV_pKlwUIJodYrJkB4waAsYzEALw_wcB; _gcl_au=1.1.383967856.1616825672; SPC_U=16969591; SPC_EC=IxIkjNGGcnD/Pd4js4aF8BvV0M8hMnpMWXExveelzm4ndZUsVVhenYGVCWTy2lpF5stCKUqcPXD3b4rO6sOjH1eA7J8CuQ/7TIHsY5S0qE7uOx0O4kmRzA0yBnjxpOqEP9Qf7hiZ7QNwAu0lg5zkQg==; SPC_IA=1; __utmc=20759802; __utma=20759802.101895126.1555253778.1617632842.1617632844.3; __utmz=20759802.1617632844.3.2.utmcsr=an_17209090000|utmccn=4jcz9mgzpk8w-|utmcmd=affiliates|utmcct=779bd903a9a2403f808befec95af0085-20031-101654; _gid=GA1.2.706759101.1617954075; _med=affiliates; SPC_SI=mall.qytJpq4NSChtHqGbDpgDnKXaWWXOA4ij; _hjAbsoluteSessionInProgress=0; AMP_TOKEN=%24NOT_FOUND; _ga=GA1.2.101895126.1555253778; _dc_gtm_UA-61914164-6=1; SPC_R_T_ID="n1vVNWl2bD7NbIJfAysmLn9ax1yjJihxjVrv2A+CP7kAidEFxQe5pzoxCaS4aYV0tsskTHSKr0qHe1avUuxR40L4aoXKs1zJMXgRZzrUrQo="; SPC_T_IV="bZPlMDV/oM+I4EA30uipQQ=="; SPC_R_T_IV="bZPlMDV/oM+I4EA30uipQQ=="; SPC_T_ID="n1vVNWl2bD7NbIJfAysmLn9ax1yjJihxjVrv2A+CP7kAidEFxQe5pzoxCaS4aYV0tsskTHSKr0qHe1avUuxR40L4aoXKs1zJMXgRZzrUrQo="; _ga_M32T05RVZT=GS1.1.1617987652.43.1.1617993095.43',
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
