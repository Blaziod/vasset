import Vasset from "assets/vassethome.png";
import Vasset1 from "assets/Vassethome1.png";
import Vasset2 from "assets/vassethome2.png";
import Vasset3 from "assets/vh.png";
import { Routes } from "routes/routes.config";
import { useNavigate } from "react-router-dom";

const VassetName = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122"
      height="36"
      viewBox="0 0 122 36"
      fill="none"
    >
      <g clip-path="url(#clip0_280_4903)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50.2001 0.123962C55.232 0.00466286 60.2184 1.08322 61.1051 4.91564C59.857 5.45998 58.6083 6.00458 57.3599 6.54904C56.6649 6.26249 55.8963 4.99408 55.0467 4.58888C52.0317 3.15072 47.103 3.82684 47.1158 7.52919C48.4275 10.0366 51.8418 9.49303 54.9367 10.2517C58.6723 11.1674 60.9704 12.5785 61.7662 16.459C63.8681 26.7086 43.991 27.3044 41.6081 18.9638C42.5987 18.6404 44.8106 16.9473 45.3533 17.3303C46.9836 19.0936 47.8746 20.2448 50.5305 20.815C53.8803 21.5344 58.1552 19.8924 57.3599 16.7858C56.4274 13.1424 48.9757 14.2934 45.9042 12.5386C42.7192 10.7191 41.1232 4.91196 44.6924 2.19304C46.2805 0.983364 48.1549 1.05247 50.2001 0.123962ZM70.9089 0.123962C76.9703 0.0111008 79.3049 1.41786 81.8139 4.6978C81.7772 4.77033 81.7405 4.84298 81.7037 4.91564C80.4922 5.45998 79.2803 6.00458 78.0687 6.54904C77.3816 6.26459 76.572 4.99329 75.7555 4.58888C72.7532 3.10171 67.8025 3.85312 67.8246 7.52919C69.1646 10.1606 72.8813 9.5603 76.086 10.3606C79.7879 11.2851 81.7057 12.8718 82.4748 16.7858C83.681 22.9231 75.1459 26.0447 69.0362 24.5176C65.5169 23.6381 63.8941 21.9714 62.3169 19.1815C62.3536 19.0727 62.3903 18.9638 62.4271 18.8549C63.6386 18.3104 64.8505 17.7658 66.0621 17.2213C66.9869 19.1493 68.7296 20.3625 71.1291 20.815C74.3448 21.4215 78.8923 20.0532 78.0687 16.7858C77.1852 13.2806 69.7242 14.1465 66.723 12.6475C63.9471 11.2611 61.8822 6.47284 64.4098 3.17319C65.9806 1.1225 68.265 1.21474 70.9089 0.123962ZM0.0805476 0.777349C1.36168 0.839495 4.18017 0.555174 5.14753 0.995188C6.72622 5.02403 8.30545 9.0542 9.88414 13.0832C10.6551 15.0068 11.4264 16.9311 12.1974 18.8549C14.5103 12.8296 16.8241 6.80262 19.137 0.777349C20.8625 0.813612 22.5886 0.850006 24.3142 0.886269C21.0466 8.68999 17.7781 16.4961 14.5106 24.2999C12.8952 24.2999 11.2793 24.2999 9.66379 24.2999C7.31416 18.565 4.96374 12.8284 2.61411 7.09364C1.95693 5.54604 -0.17528 2.41995 0.0805476 0.777349ZM27.0679 0.777349C28.7201 0.777349 30.3727 0.777349 32.0249 0.777349C32.7958 2.55593 33.567 4.33491 34.3381 6.11349C36.2472 10.3602 38.1569 14.6082 40.066 18.8549C40.7063 20.3025 42.5141 22.7333 42.3792 24.2999C40.7638 24.2273 39.1479 24.1546 37.5326 24.0821C36.9083 22.6665 36.284 21.2506 35.6599 19.835C31.5847 19.835 27.5082 19.835 23.4329 19.835C22.8088 21.2868 22.1845 22.7391 21.5604 24.191C19.8715 24.1547 18.1821 24.1184 16.4933 24.0821C20.0178 16.3146 23.5435 8.54481 27.0679 0.777349ZM83.5764 0.777349C89.4873 0.813612 95.4 0.850006 101.311 0.886269C101.311 2.30183 101.311 3.71779 101.311 5.13335C96.8685 5.16961 92.4248 5.20601 87.9825 5.24227C87.9825 6.98446 87.9825 8.72731 87.9825 10.4695C92.278 10.5058 96.5748 10.5422 100.87 10.5784C100.87 11.9213 100.87 13.2648 100.87 14.6078C96.5748 14.644 92.278 14.6803 87.9825 14.7166C87.9825 16.3862 87.9825 18.0564 87.9825 19.7261C92.4248 19.7624 96.8685 19.7986 101.311 19.835C101.311 21.2868 101.311 22.7391 101.311 24.191C95.3633 24.1547 89.4139 24.1184 83.4662 24.0821C83.5029 16.3146 83.5397 8.54481 83.5764 0.777349ZM114.309 24.191C112.804 24.1547 111.298 24.1184 109.793 24.0821C109.793 17.6939 109.793 11.3038 109.793 4.91564C107.259 4.91564 104.725 4.91564 102.192 4.91564C102.597 4.22993 102.561 1.86563 102.302 0.995188C102.376 0.922531 102.449 0.850006 102.523 0.777349C108.984 0.813612 115.448 0.850006 121.91 0.886269C121.873 2.26557 121.836 3.64526 121.799 5.02443C119.303 5.02443 116.806 5.02443 114.309 5.02443C114.309 11.4127 114.309 17.8029 114.309 24.191ZM29.4913 6.00458C28.0962 9.19872 26.7007 12.3938 25.3056 15.5878C28.1326 15.5878 30.9604 15.5878 33.7874 15.5878C32.3554 12.3938 30.9232 9.19872 29.4913 6.00458ZM22.4416 32.0318C21.6706 32.0318 20.8994 32.0318 20.1284 32.0318C20.1284 31.5237 20.1284 31.0154 20.1284 30.5072C21.4134 30.4709 22.6987 30.4346 23.9836 30.3983C24.0203 32.3066 24.1209 34.0579 23.4329 34.9721C20.0633 36.52 14.6137 35.6465 15.8324 30.2895C16.4611 27.526 21.2664 24.6902 23.7634 28.0025C23.4329 28.3292 23.1024 28.6559 22.772 28.9826C20.505 28.0709 18.0197 28.0048 17.4847 30.8339C16.9443 33.6916 20.6955 35.3697 22.4416 33.4475C22.4416 32.9757 22.4416 32.5037 22.4416 32.0318ZM34.1177 26.6956C41.0142 26.438 41.5714 34.4006 36.6513 35.7344C31.8126 37.0463 28.9822 31.6839 31.5842 28.2203C32.2019 27.3983 33.1616 27.2053 34.1177 26.6956ZM26.407 33.9921C27.9124 33.9921 29.4181 33.9921 30.9233 33.9921C30.9233 34.5728 30.9233 35.1537 30.9233 35.7344C28.8307 35.6981 26.7373 35.6619 24.6447 35.6256C24.6814 32.6856 24.718 29.7446 24.7547 26.8046C25.3054 26.841 25.8563 26.8772 26.407 26.9135C26.407 29.2728 26.407 31.6328 26.407 33.9921ZM40.2863 26.8046C44.5086 26.6353 49.9399 26.9462 46.5651 31.1606C47.9807 31.6339 47.8668 33.1387 47.4462 34.5365C46.0201 35.5996 42.6567 35.9659 40.1762 35.6256C40.2128 32.6856 40.2496 29.7446 40.2863 26.8046ZM51.3015 26.8046C51.9624 26.841 52.6235 26.8772 53.2844 26.9135C54.5327 29.8173 55.7813 32.7218 57.0296 35.6256C56.4422 35.6256 55.8545 35.6256 55.2671 35.6256C55.2304 35.6256 55.1937 35.6256 55.1569 35.6256C54.9 35.0811 54.6429 34.5365 54.3858 33.9921C52.9173 33.9921 51.4483 33.9921 49.9797 33.9921C49.7227 34.5365 49.4657 35.0811 49.2087 35.6256C48.5846 35.6256 47.9602 35.6256 47.3361 35.6256C47.3361 35.5167 47.3361 35.4078 47.3361 35.2989C48.6578 32.4677 49.9799 29.6357 51.3015 26.8046ZM57.2499 26.8046C57.8373 26.841 58.4249 26.8772 59.0123 26.9135C58.9756 29.2728 58.9389 31.6328 58.9021 33.9921C60.4441 34.0283 61.9865 34.0646 63.5285 34.101C63.5285 34.6091 63.5285 35.1174 63.5285 35.6256C61.3991 35.6256 59.2692 35.6256 57.1397 35.6256C57.1764 32.6856 57.2131 29.7446 57.2499 26.8046ZM65.9519 26.8046C66.576 26.841 67.2003 26.8772 67.8246 26.9135C67.7878 29.2728 67.7511 31.6328 67.7144 33.9921C69.2196 34.0283 70.7253 34.0646 72.2307 34.101C72.2307 34.6091 72.2307 35.1174 72.2307 35.6256C70.1379 35.6619 68.0446 35.6981 65.9519 35.7344C65.9519 32.7581 65.9519 29.7809 65.9519 26.8046ZM74.3235 26.8046C74.3235 29.7446 74.3235 32.6856 74.3235 35.6256C73.7361 35.6256 73.1484 35.6256 72.561 35.6256C72.5979 32.6856 72.6345 29.7446 72.6712 26.8046C73.2219 26.8046 73.7728 26.8046 74.3235 26.8046ZM75.2048 26.8046C75.8655 26.8046 76.5267 26.8046 77.1875 26.8046C78.1054 28.0387 79.0235 29.2732 79.9414 30.5072C79.9414 30.4346 79.9414 30.362 79.9414 30.2895C80.8592 29.1279 81.7774 27.9662 82.6951 26.8046C83.3192 26.841 83.9436 26.8772 84.5677 26.9135C84.5677 29.8173 84.5677 32.7218 84.5677 35.6256C83.9803 35.6256 83.3927 35.6256 82.8053 35.6256C82.7686 33.5929 82.7318 31.5597 82.6951 29.5272C82.6951 29.5997 82.6951 29.6723 82.6951 29.7449C81.7774 30.8701 80.8592 31.9957 79.9414 33.1209C79.7577 33.0482 79.5742 32.9757 79.3905 32.903C78.5829 31.7416 77.7749 30.5797 76.9673 29.4182C76.9304 29.4182 76.8938 29.4182 76.8571 29.4182C76.8571 31.5235 76.8571 33.6292 76.8571 35.7344C76.3064 35.6981 75.7555 35.6619 75.2048 35.6256C75.2048 32.6856 75.2048 29.7446 75.2048 26.8046ZM87.1012 35.6256C86.5138 35.5892 85.9263 35.553 85.3387 35.5167C85.3756 32.6129 85.4122 29.7083 85.4489 26.8046C86.0363 26.841 86.624 26.8772 87.2114 26.9135C87.1747 29.8173 87.1379 32.7218 87.1012 35.6256ZM87.7621 26.8046C90.2219 26.841 92.6825 26.8772 95.1423 26.9135C95.1423 27.4217 95.1423 27.93 95.1423 28.4381C94.1879 28.4381 93.233 28.4381 92.2784 28.4381C92.2784 30.8337 92.2784 33.23 92.2784 35.6256C91.7277 35.6619 91.1768 35.6981 90.6261 35.7344C90.6261 33.3026 90.6261 30.8699 90.6261 28.4381C89.6716 28.4381 88.7167 28.4381 87.7621 28.4381C87.7621 27.8936 87.7621 27.349 87.7621 26.8046ZM95.3627 26.8046C97.6023 26.841 99.8425 26.8772 102.082 26.9135C102.045 27.4579 102.009 28.0025 101.972 28.547C100.356 28.547 98.7405 28.547 97.1252 28.547C97.1252 29.164 97.1252 29.7813 97.1252 30.3983C98.7039 30.3983 100.283 30.3983 101.862 30.3983C101.862 30.9427 101.862 31.4873 101.862 32.0318C100.283 32.0318 98.7039 32.0318 97.1252 32.0318C97.1252 32.6489 97.1252 33.266 97.1252 33.8832C98.7772 33.9194 100.43 33.9557 102.082 33.9921C102.082 34.5365 102.082 35.0811 102.082 35.6256C99.8425 35.6256 97.6023 35.6256 95.3627 35.6256C95.3627 32.6856 95.3627 29.7446 95.3627 26.8046ZM102.412 35.6256C102.449 32.6856 102.486 29.7446 102.523 26.8046C105.548 26.729 108.749 26.6893 109.793 28.547C111.109 30.8892 110.075 34.5712 107.81 35.4078C106.486 35.8965 104.099 35.6692 102.412 35.6256ZM34.7787 28.2203C34.0832 28.583 33.3493 28.7172 32.9061 29.3093C31.4543 31.2491 32.942 35.2242 36.1004 34.2098C39.1987 33.2148 38.6578 28.1078 34.7787 28.2203ZM41.9386 28.4381C41.9386 29.0551 41.9386 29.6723 41.9386 30.2895C43.04 30.2531 44.1418 30.2168 45.2431 30.1805C45.4268 29.999 45.6103 29.8175 45.794 29.6361C45.6471 29.3093 45.5002 28.9826 45.3533 28.6559C44.4812 28.4193 43.1291 28.4248 41.9386 28.4381ZM104.175 28.547C104.175 30.3619 104.175 32.1772 104.175 33.9921C108.214 34.1853 110.408 30.8818 107.7 28.9826C106.948 28.4552 105.496 28.4972 104.175 28.547ZM52.0726 28.9826C51.5954 30.1078 51.118 31.2333 50.6406 32.3585C51.6686 32.3585 52.697 32.3585 53.7249 32.3585C53.1742 31.2333 52.6233 30.1078 52.0726 28.9826ZM41.9386 31.8141C41.9386 32.54 41.9386 33.2662 41.9386 33.9921C43.3673 34.0212 44.807 33.9649 45.794 33.6653C45.9751 33.132 46.0058 32.9079 45.794 32.3585C44.7696 31.9372 43.5851 31.7948 41.9386 31.8141Z"
          fill="#005C99"
        />
      </g>
      <defs>
        <clipPath id="clip0_280_4903">
          <rect width="122" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const VassetLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="42"
      viewBox="0 0 36 42"
      fill="none"
    >
      <g clip-path="url(#clip0_280_4902)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5167 0.0947266C18.0102 0.343724 19.5811 2.72179 20.0301 3.32569C21.9848 5.85272 23.94 8.38045 25.8947 10.9074C23.1238 14.522 20.352 18.1375 17.5811 21.7521C17.5382 21.7201 17.4952 21.6882 17.4523 21.6562C14.7028 18.0843 11.9526 14.5113 9.20314 10.9394C9.20314 10.9287 9.20314 10.9181 9.20314 10.9074C11.974 7.30352 14.7458 3.69855 17.5167 0.0947266ZM28.8914 9.46785C28.9666 9.47852 29.0418 9.48918 29.117 9.49985C29.7474 9.90043 30.7039 11.5969 31.2437 12.251C32.7903 14.2555 34.3373 16.2607 35.8838 18.2652C35.8731 18.3078 35.8624 18.3505 35.8516 18.3931C35.7931 18.513 35.7558 18.5118 35.6583 18.5851C35.0131 18.3098 34.0424 16.6625 33.596 16.0579C32.0602 14.0853 30.5239 12.1122 28.9881 10.1397C28.9666 10.1503 28.9451 10.161 28.9237 10.1717C27.7208 11.707 26.5176 13.2429 25.3147 14.7782C22.7586 18.0302 20.2017 21.2832 17.6456 24.5353C17.6026 24.5353 17.5596 24.5353 17.5167 24.5353C16.9249 24.196 15.8501 22.4709 15.39 21.8481C13.9401 19.9928 12.4897 18.137 11.0399 16.2818C11.0506 16.1965 11.0613 16.1111 11.0721 16.0259C11.117 15.9643 11.0753 16.0067 11.1365 15.9618C11.2117 15.9406 11.2869 15.9192 11.3621 15.8979C11.8832 16.3226 12.2403 16.9941 12.651 17.5294C14.2942 19.6405 15.9379 21.7524 17.5811 23.8635C17.5811 23.8421 17.5811 23.8208 17.5811 23.7995C21.3509 19.0228 25.1217 14.2446 28.8914 9.46785ZM6.04531 11.4513C9.87946 16.4093 13.7148 21.3687 17.5489 26.3267C17.5811 26.3054 17.6134 26.2841 17.6456 26.2627C21.4475 21.3368 25.2506 16.4093 29.0526 11.4832C31.0394 14.0422 33.0269 16.6019 35.0138 19.1609C29.2035 26.7312 23.3915 34.3037 17.5811 41.874C17.5382 41.842 17.4952 41.81 17.4523 41.778C11.6634 34.2611 5.87287 26.7418 0.0840454 19.2249C2.0709 16.6339 4.05839 14.0422 6.04531 11.4513Z"
          fill="#003366"
        />
      </g>
      <defs>
        <clipPath id="clip0_280_4902">
          <rect width="36" height="42" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const VassetName1 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122"
      height="36"
      viewBox="0 0 122 36"
      fill="none"
    >
      <g clip-path="url(#clip0_280_4903)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50.2001 0.123962C55.232 0.00466286 60.2184 1.08322 61.1051 4.91564C59.857 5.45998 58.6083 6.00458 57.3599 6.54904C56.6649 6.26249 55.8963 4.99408 55.0467 4.58888C52.0317 3.15072 47.103 3.82684 47.1158 7.52919C48.4275 10.0366 51.8418 9.49303 54.9367 10.2517C58.6723 11.1674 60.9704 12.5785 61.7662 16.459C63.8681 26.7086 43.991 27.3044 41.6081 18.9638C42.5987 18.6404 44.8106 16.9473 45.3533 17.3303C46.9836 19.0936 47.8746 20.2448 50.5305 20.815C53.8803 21.5344 58.1552 19.8924 57.3599 16.7858C56.4274 13.1424 48.9757 14.2934 45.9042 12.5386C42.7192 10.7191 41.1232 4.91196 44.6924 2.19304C46.2805 0.983364 48.1549 1.05247 50.2001 0.123962ZM70.9089 0.123962C76.9703 0.0111008 79.3049 1.41786 81.8139 4.6978C81.7772 4.77033 81.7405 4.84298 81.7037 4.91564C80.4922 5.45998 79.2803 6.00458 78.0687 6.54904C77.3816 6.26459 76.572 4.99329 75.7555 4.58888C72.7532 3.10171 67.8025 3.85312 67.8246 7.52919C69.1646 10.1606 72.8813 9.5603 76.086 10.3606C79.7879 11.2851 81.7057 12.8718 82.4748 16.7858C83.681 22.9231 75.1459 26.0447 69.0362 24.5176C65.5169 23.6381 63.8941 21.9714 62.3169 19.1815C62.3536 19.0727 62.3903 18.9638 62.4271 18.8549C63.6386 18.3104 64.8505 17.7658 66.0621 17.2213C66.9869 19.1493 68.7296 20.3625 71.1291 20.815C74.3448 21.4215 78.8923 20.0532 78.0687 16.7858C77.1852 13.2806 69.7242 14.1465 66.723 12.6475C63.9471 11.2611 61.8822 6.47284 64.4098 3.17319C65.9806 1.1225 68.265 1.21474 70.9089 0.123962ZM0.0805476 0.777349C1.36168 0.839495 4.18017 0.555174 5.14753 0.995188C6.72622 5.02403 8.30545 9.0542 9.88414 13.0832C10.6551 15.0068 11.4264 16.9311 12.1974 18.8549C14.5103 12.8296 16.8241 6.80262 19.137 0.777349C20.8625 0.813612 22.5886 0.850006 24.3142 0.886269C21.0466 8.68999 17.7781 16.4961 14.5106 24.2999C12.8952 24.2999 11.2793 24.2999 9.66379 24.2999C7.31416 18.565 4.96374 12.8284 2.61411 7.09364C1.95693 5.54604 -0.17528 2.41995 0.0805476 0.777349ZM27.0679 0.777349C28.7201 0.777349 30.3727 0.777349 32.0249 0.777349C32.7958 2.55593 33.567 4.33491 34.3381 6.11349C36.2472 10.3602 38.1569 14.6082 40.066 18.8549C40.7063 20.3025 42.5141 22.7333 42.3792 24.2999C40.7638 24.2273 39.1479 24.1546 37.5326 24.0821C36.9083 22.6665 36.284 21.2506 35.6599 19.835C31.5847 19.835 27.5082 19.835 23.4329 19.835C22.8088 21.2868 22.1845 22.7391 21.5604 24.191C19.8715 24.1547 18.1821 24.1184 16.4933 24.0821C20.0178 16.3146 23.5435 8.54481 27.0679 0.777349ZM83.5764 0.777349C89.4873 0.813612 95.4 0.850006 101.311 0.886269C101.311 2.30183 101.311 3.71779 101.311 5.13335C96.8685 5.16961 92.4248 5.20601 87.9825 5.24227C87.9825 6.98446 87.9825 8.72731 87.9825 10.4695C92.278 10.5058 96.5748 10.5422 100.87 10.5784C100.87 11.9213 100.87 13.2648 100.87 14.6078C96.5748 14.644 92.278 14.6803 87.9825 14.7166C87.9825 16.3862 87.9825 18.0564 87.9825 19.7261C92.4248 19.7624 96.8685 19.7986 101.311 19.835C101.311 21.2868 101.311 22.7391 101.311 24.191C95.3633 24.1547 89.4139 24.1184 83.4662 24.0821C83.5029 16.3146 83.5397 8.54481 83.5764 0.777349ZM114.309 24.191C112.804 24.1547 111.298 24.1184 109.793 24.0821C109.793 17.6939 109.793 11.3038 109.793 4.91564C107.259 4.91564 104.725 4.91564 102.192 4.91564C102.597 4.22993 102.561 1.86563 102.302 0.995188C102.376 0.922531 102.449 0.850006 102.523 0.777349C108.984 0.813612 115.448 0.850006 121.91 0.886269C121.873 2.26557 121.836 3.64526 121.799 5.02443C119.303 5.02443 116.806 5.02443 114.309 5.02443C114.309 11.4127 114.309 17.8029 114.309 24.191ZM29.4913 6.00458C28.0962 9.19872 26.7007 12.3938 25.3056 15.5878C28.1326 15.5878 30.9604 15.5878 33.7874 15.5878C32.3554 12.3938 30.9232 9.19872 29.4913 6.00458ZM22.4416 32.0318C21.6706 32.0318 20.8994 32.0318 20.1284 32.0318C20.1284 31.5237 20.1284 31.0154 20.1284 30.5072C21.4134 30.4709 22.6987 30.4346 23.9836 30.3983C24.0203 32.3066 24.1209 34.0579 23.4329 34.9721C20.0633 36.52 14.6137 35.6465 15.8324 30.2895C16.4611 27.526 21.2664 24.6902 23.7634 28.0025C23.4329 28.3292 23.1024 28.6559 22.772 28.9826C20.505 28.0709 18.0197 28.0048 17.4847 30.8339C16.9443 33.6916 20.6955 35.3697 22.4416 33.4475C22.4416 32.9757 22.4416 32.5037 22.4416 32.0318ZM34.1177 26.6956C41.0142 26.438 41.5714 34.4006 36.6513 35.7344C31.8126 37.0463 28.9822 31.6839 31.5842 28.2203C32.2019 27.3983 33.1616 27.2053 34.1177 26.6956ZM26.407 33.9921C27.9124 33.9921 29.4181 33.9921 30.9233 33.9921C30.9233 34.5728 30.9233 35.1537 30.9233 35.7344C28.8307 35.6981 26.7373 35.6619 24.6447 35.6256C24.6814 32.6856 24.718 29.7446 24.7547 26.8046C25.3054 26.841 25.8563 26.8772 26.407 26.9135C26.407 29.2728 26.407 31.6328 26.407 33.9921ZM40.2863 26.8046C44.5086 26.6353 49.9399 26.9462 46.5651 31.1606C47.9807 31.6339 47.8668 33.1387 47.4462 34.5365C46.0201 35.5996 42.6567 35.9659 40.1762 35.6256C40.2128 32.6856 40.2496 29.7446 40.2863 26.8046ZM51.3015 26.8046C51.9624 26.841 52.6235 26.8772 53.2844 26.9135C54.5327 29.8173 55.7813 32.7218 57.0296 35.6256C56.4422 35.6256 55.8545 35.6256 55.2671 35.6256C55.2304 35.6256 55.1937 35.6256 55.1569 35.6256C54.9 35.0811 54.6429 34.5365 54.3858 33.9921C52.9173 33.9921 51.4483 33.9921 49.9797 33.9921C49.7227 34.5365 49.4657 35.0811 49.2087 35.6256C48.5846 35.6256 47.9602 35.6256 47.3361 35.6256C47.3361 35.5167 47.3361 35.4078 47.3361 35.2989C48.6578 32.4677 49.9799 29.6357 51.3015 26.8046ZM57.2499 26.8046C57.8373 26.841 58.4249 26.8772 59.0123 26.9135C58.9756 29.2728 58.9389 31.6328 58.9021 33.9921C60.4441 34.0283 61.9865 34.0646 63.5285 34.101C63.5285 34.6091 63.5285 35.1174 63.5285 35.6256C61.3991 35.6256 59.2692 35.6256 57.1397 35.6256C57.1764 32.6856 57.2131 29.7446 57.2499 26.8046ZM65.9519 26.8046C66.576 26.841 67.2003 26.8772 67.8246 26.9135C67.7878 29.2728 67.7511 31.6328 67.7144 33.9921C69.2196 34.0283 70.7253 34.0646 72.2307 34.101C72.2307 34.6091 72.2307 35.1174 72.2307 35.6256C70.1379 35.6619 68.0446 35.6981 65.9519 35.7344C65.9519 32.7581 65.9519 29.7809 65.9519 26.8046ZM74.3235 26.8046C74.3235 29.7446 74.3235 32.6856 74.3235 35.6256C73.7361 35.6256 73.1484 35.6256 72.561 35.6256C72.5979 32.6856 72.6345 29.7446 72.6712 26.8046C73.2219 26.8046 73.7728 26.8046 74.3235 26.8046ZM75.2048 26.8046C75.8655 26.8046 76.5267 26.8046 77.1875 26.8046C78.1054 28.0387 79.0235 29.2732 79.9414 30.5072C79.9414 30.4346 79.9414 30.362 79.9414 30.2895C80.8592 29.1279 81.7774 27.9662 82.6951 26.8046C83.3192 26.841 83.9436 26.8772 84.5677 26.9135C84.5677 29.8173 84.5677 32.7218 84.5677 35.6256C83.9803 35.6256 83.3927 35.6256 82.8053 35.6256C82.7686 33.5929 82.7318 31.5597 82.6951 29.5272C82.6951 29.5997 82.6951 29.6723 82.6951 29.7449C81.7774 30.8701 80.8592 31.9957 79.9414 33.1209C79.7577 33.0482 79.5742 32.9757 79.3905 32.903C78.5829 31.7416 77.7749 30.5797 76.9673 29.4182C76.9304 29.4182 76.8938 29.4182 76.8571 29.4182C76.8571 31.5235 76.8571 33.6292 76.8571 35.7344C76.3064 35.6981 75.7555 35.6619 75.2048 35.6256C75.2048 32.6856 75.2048 29.7446 75.2048 26.8046ZM87.1012 35.6256C86.5138 35.5892 85.9263 35.553 85.3387 35.5167C85.3756 32.6129 85.4122 29.7083 85.4489 26.8046C86.0363 26.841 86.624 26.8772 87.2114 26.9135C87.1747 29.8173 87.1379 32.7218 87.1012 35.6256ZM87.7621 26.8046C90.2219 26.841 92.6825 26.8772 95.1423 26.9135C95.1423 27.4217 95.1423 27.93 95.1423 28.4381C94.1879 28.4381 93.233 28.4381 92.2784 28.4381C92.2784 30.8337 92.2784 33.23 92.2784 35.6256C91.7277 35.6619 91.1768 35.6981 90.6261 35.7344C90.6261 33.3026 90.6261 30.8699 90.6261 28.4381C89.6716 28.4381 88.7167 28.4381 87.7621 28.4381C87.7621 27.8936 87.7621 27.349 87.7621 26.8046ZM95.3627 26.8046C97.6023 26.841 99.8425 26.8772 102.082 26.9135C102.045 27.4579 102.009 28.0025 101.972 28.547C100.356 28.547 98.7405 28.547 97.1252 28.547C97.1252 29.164 97.1252 29.7813 97.1252 30.3983C98.7039 30.3983 100.283 30.3983 101.862 30.3983C101.862 30.9427 101.862 31.4873 101.862 32.0318C100.283 32.0318 98.7039 32.0318 97.1252 32.0318C97.1252 32.6489 97.1252 33.266 97.1252 33.8832C98.7772 33.9194 100.43 33.9557 102.082 33.9921C102.082 34.5365 102.082 35.0811 102.082 35.6256C99.8425 35.6256 97.6023 35.6256 95.3627 35.6256C95.3627 32.6856 95.3627 29.7446 95.3627 26.8046ZM102.412 35.6256C102.449 32.6856 102.486 29.7446 102.523 26.8046C105.548 26.729 108.749 26.6893 109.793 28.547C111.109 30.8892 110.075 34.5712 107.81 35.4078C106.486 35.8965 104.099 35.6692 102.412 35.6256ZM34.7787 28.2203C34.0832 28.583 33.3493 28.7172 32.9061 29.3093C31.4543 31.2491 32.942 35.2242 36.1004 34.2098C39.1987 33.2148 38.6578 28.1078 34.7787 28.2203ZM41.9386 28.4381C41.9386 29.0551 41.9386 29.6723 41.9386 30.2895C43.04 30.2531 44.1418 30.2168 45.2431 30.1805C45.4268 29.999 45.6103 29.8175 45.794 29.6361C45.6471 29.3093 45.5002 28.9826 45.3533 28.6559C44.4812 28.4193 43.1291 28.4248 41.9386 28.4381ZM104.175 28.547C104.175 30.3619 104.175 32.1772 104.175 33.9921C108.214 34.1853 110.408 30.8818 107.7 28.9826C106.948 28.4552 105.496 28.4972 104.175 28.547ZM52.0726 28.9826C51.5954 30.1078 51.118 31.2333 50.6406 32.3585C51.6686 32.3585 52.697 32.3585 53.7249 32.3585C53.1742 31.2333 52.6233 30.1078 52.0726 28.9826ZM41.9386 31.8141C41.9386 32.54 41.9386 33.2662 41.9386 33.9921C43.3673 34.0212 44.807 33.9649 45.794 33.6653C45.9751 33.132 46.0058 32.9079 45.794 32.3585C44.7696 31.9372 43.5851 31.7948 41.9386 31.8141Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_280_4903">
          <rect width="122" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const VassetLogo1 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="42"
      viewBox="0 0 36 42"
      fill="none"
    >
      <g clip-path="url(#clip0_280_4902)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5167 0.0947266C18.0102 0.343724 19.5811 2.72179 20.0301 3.32569C21.9848 5.85272 23.94 8.38045 25.8947 10.9074C23.1238 14.522 20.352 18.1375 17.5811 21.7521C17.5382 21.7201 17.4952 21.6882 17.4523 21.6562C14.7028 18.0843 11.9526 14.5113 9.20314 10.9394C9.20314 10.9287 9.20314 10.9181 9.20314 10.9074C11.974 7.30352 14.7458 3.69855 17.5167 0.0947266ZM28.8914 9.46785C28.9666 9.47852 29.0418 9.48918 29.117 9.49985C29.7474 9.90043 30.7039 11.5969 31.2437 12.251C32.7903 14.2555 34.3373 16.2607 35.8838 18.2652C35.8731 18.3078 35.8624 18.3505 35.8516 18.3931C35.7931 18.513 35.7558 18.5118 35.6583 18.5851C35.0131 18.3098 34.0424 16.6625 33.596 16.0579C32.0602 14.0853 30.5239 12.1122 28.9881 10.1397C28.9666 10.1503 28.9451 10.161 28.9237 10.1717C27.7208 11.707 26.5176 13.2429 25.3147 14.7782C22.7586 18.0302 20.2017 21.2832 17.6456 24.5353C17.6026 24.5353 17.5596 24.5353 17.5167 24.5353C16.9249 24.196 15.8501 22.4709 15.39 21.8481C13.9401 19.9928 12.4897 18.137 11.0399 16.2818C11.0506 16.1965 11.0613 16.1111 11.0721 16.0259C11.117 15.9643 11.0753 16.0067 11.1365 15.9618C11.2117 15.9406 11.2869 15.9192 11.3621 15.8979C11.8832 16.3226 12.2403 16.9941 12.651 17.5294C14.2942 19.6405 15.9379 21.7524 17.5811 23.8635C17.5811 23.8421 17.5811 23.8208 17.5811 23.7995C21.3509 19.0228 25.1217 14.2446 28.8914 9.46785ZM6.04531 11.4513C9.87946 16.4093 13.7148 21.3687 17.5489 26.3267C17.5811 26.3054 17.6134 26.2841 17.6456 26.2627C21.4475 21.3368 25.2506 16.4093 29.0526 11.4832C31.0394 14.0422 33.0269 16.6019 35.0138 19.1609C29.2035 26.7312 23.3915 34.3037 17.5811 41.874C17.5382 41.842 17.4952 41.81 17.4523 41.778C11.6634 34.2611 5.87287 26.7418 0.0840454 19.2249C2.0709 16.6339 4.05839 14.0422 6.04531 11.4513Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_280_4902">
          <rect width="36" height="42" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white justify-center overflow-x-hidden">
      <div class="flex flex-wrap justify-between pl-10 pr-10 p-5">
        <div class="flex gap-3 pt-5 items-start justify-start">
          <div>
            <VassetLogo />
          </div>
          <div>
            <VassetName />
          </div>
        </div>
        <div class="flex flex-wrap gap-10 pt-5 cursor-pointer justify-center">
          <h1
            class="text-[15px] lato-bold text-[#036]"
            onClick={() => navigate(Routes.Homepage)}
          >
            Home
          </h1>
          <h1
            class="text-[15px] lato-bold text-[#036]"
            onClick={() => navigate(Routes.Homepage)}
          >
            Service
          </h1>
          <h1
            class="text-[15px] lato-bold text-[#036]"
            onClick={() => navigate(Routes.Homepage)}
          >
            FAQs
          </h1>
          <h1
            class="text-[15px] lato-bold text-[#036]"
            onClick={() => navigate(Routes.Homepage)}
          >
            Contact
          </h1>
        </div>
        <div class="flex gap-10 cursor-pointer pt-5">
          <div onClick={() => navigate(Routes.SignIn)}>
            <h1 class="text-[20px] lato-bold text-[#036]">Login</h1>
          </div>
          <button
            class="bg-[#003366] p-5 h-[30px] rounded-[6px] items-center flex justify-center"
            onClick={() => navigate(Routes.SignUp1)}
          >
            <h1 class="text-[15px] text-[#fff] lato-bold">Sign Up</h1>
          </button>
        </div>
      </div>

      <div className="justify-center flex  items-center">
        <img src={Vasset} />
      </div>
      <div className="p-10 pt-20 justify-center flex items-center">
        <img src={Vasset1} />
      </div>
      <div className="p-10 pt-20 justify-center flex items-center">
        <img src={Vasset2} />
      </div>

      <div className="p-10 pt-20 justify-center flex items-center">
        <img src={Vasset3} />
      </div>
      <div className=" pb-10 justify-center flex items-center">
        <button
          class="bg-[#003366] p-5 h-[30px] rounded-[6px] items-center flex justify-center"
          onClick={() => navigate(Routes.SignIn)}
        >
          <h1 class="text-[15px] text-[#fff] lato-bold">Get Started</h1>
        </button>
      </div>

      <div className="flex flex-wrap gap-3 pt-5 p-20 items-start justify-between bg-[#003366] h-[190px]">
        <div>
          <div className="flex gap-3">
            <div>
              <VassetLogo1 />
            </div>
            <div>
              <VassetName1 />
            </div>
          </div>
          <h1 className="text-[15px] text-[#fff] lato-regular pt-10">
            © 2024 Vasset Global. All rights reserved.
          </h1>
        </div>
        <div>
          <div className="flex gap-5">
            <h1
              className="text-[15px] text-[#fff] lato-regular"
              onClick={() => navigate(Routes.Homepage)}
            >
              About us
            </h1>
            <h1
              className="text-[15px] text-[#fff] lato-regular"
              onClick={() => navigate(Routes.Homepage)}
            >
              FAQ
            </h1>
            <h1
              className="text-[15px] text-[#fff] lato-regular"
              onClick={() => navigate(Routes.Homepage)}
            >
              Contact
            </h1>
          </div>
          <div className="flex gap-10 pt-10 pl-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 19 18"
                fill="none"
              >
                <mask
                  id="mask0_579_3678"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="19"
                  height="18"
                >
                  <path
                    d="M18.0706 0.428711H0.927734V17.5716H18.0706V0.428711Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_579_3678)">
                  <path
                    d="M18.0714 3.69685C17.4286 3.9647 16.7857 4.17899 16.0357 4.23256C16.7857 3.80399 17.3214 3.10756 17.5893 2.30399C16.8929 2.73256 16.1429 3.00042 15.3393 3.16113C14.6964 2.4647 13.7857 2.03613 12.8214 2.03613C10.8929 2.03613 9.28572 3.5897 9.28572 5.57185C9.28572 5.8397 9.33929 6.10756 9.39286 6.37542C6.44643 6.2147 3.875 4.82185 2.10714 2.67899C1.78571 3.2147 1.625 3.80399 1.625 4.44685C1.625 5.67899 2.26786 6.75042 3.17857 7.39328C2.58929 7.39328 2.05357 7.23256 1.57143 6.9647V7.01828C1.57143 8.73256 2.80357 10.1254 4.41071 10.4468C4.08929 10.5004 3.82143 10.554 3.5 10.554C3.28571 10.554 3.07143 10.554 2.85714 10.5004C3.28571 11.8933 4.625 12.9111 6.125 12.9647C4.94643 13.929 3.39286 14.4647 1.73214 14.4647C1.46429 14.4647 1.14286 14.4647 0.875 14.4111C2.48214 15.3754 4.35714 15.9647 6.33929 15.9647C12.8214 15.9647 16.3571 10.6076 16.3571 5.94685C16.3571 5.78613 16.3571 5.62542 16.3571 5.51828C17 4.98256 17.5893 4.39328 18.0714 3.69685Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 19 18"
                fill="none"
              >
                <mask
                  id="mask0_579_3685"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="19"
                  height="18"
                >
                  <path
                    d="M18.0706 0.428711H0.927734V17.5716H18.0706V0.428711Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_579_3685)">
                  <path
                    d="M9.49749 11.7147C10.9965 11.7147 12.2118 10.4995 12.2118 9.00042C12.2118 7.50136 10.9965 6.28613 9.49749 6.28613C7.99843 6.28613 6.7832 7.50136 6.7832 9.00042C6.7832 10.4995 7.99843 11.7147 9.49749 11.7147Z"
                    fill="white"
                  />
                  <path
                    d="M12.8905 0.857422H6.10479C3.48618 0.857422 1.35547 2.98882 1.35547 5.6081V12.3938C1.35547 15.0124 3.48686 17.1431 6.10615 17.1431H12.8919C15.5105 17.1431 17.6412 15.0117 17.6412 12.3925V5.60674C17.6412 2.98814 15.5098 0.857422 12.8905 0.857422ZM9.49833 13.0717C7.25293 13.0717 5.4269 11.2457 5.4269 9.00028C5.4269 6.75489 7.25293 4.92885 9.49833 4.92885C11.7437 4.92885 13.5698 6.75489 13.5698 9.00028C13.5698 11.2457 11.7437 13.0717 9.49833 13.0717ZM14.2483 4.92885C13.8738 4.92885 13.5698 4.62485 13.5698 4.25028C13.5698 3.87571 13.8738 3.57171 14.2483 3.57171C14.6229 3.57171 14.9269 3.87571 14.9269 4.25028C14.9269 4.62485 14.6229 4.92885 14.2483 4.92885Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 19 18"
                fill="none"
              >
                <mask
                  id="mask0_579_3693"
                  // style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="19"
                  height="18"
                >
                  <path
                    d="M18.0706 0.428711H0.927734V17.5716H18.0706V0.428711Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_579_3693)">
                  <path
                    d="M7.60334 17.0363V10.072H5.21289V6.8577H7.60334V4.61305C7.60334 2.16793 9.15128 0.964844 11.3325 0.964844C12.3773 0.964844 13.2753 1.04263 13.537 1.0774V3.63269L12.0242 3.63338C10.8379 3.63338 10.57 4.19708 10.57 5.02426V6.8577H13.7843L12.7129 10.072H10.57V17.0363H7.60334Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
