<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

shopee-crawler is a simple project to crawling shopee's shop and product information.
Some common information can be crawled:
- shop:
  - shopid
  - follower_count
  - shop_location
  - name
  - ...
- product: can crawl all shop's products by recursive function
  - itemid
  - shopid
  - name
  - view_count
  - like_count
  - status
  - categories
  - price
  - description
  - currency
  - attributes such as orgin, material,...
  - ...
- review: can crawl all product's reviews by recursive function
  - reviewid
  - itemid
  - orderid
  - rating
  - comment
  - images
  - videos
  - ...



### Built With

* [Node.js](https://nodejs.org/en/download/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure that you had installed [Node.js](https://nodejs.org/en/download/)
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/hoangkimminh/shopee-crawler
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->
## Usage

1. Modify ```shops_username``` inside ```get_shops_details.js``` with your own shop's names
  ```
  const shops_username = [
    "minastore_vn",
    "friday.official",
    "germe.vn",
    "sliky",
    "yinxx.vn",
  ];
  ```
2. Run scripts to get shop details
  ```
  node get_shops_details.js
  ```

3. Start crawling all products and its reviews of each shop with
  ```
  node index.js
  ```
  Data of each shop will be saved in ```output/[shopname].json```
  Make sure ```output``` folder created

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
