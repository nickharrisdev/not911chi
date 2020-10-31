/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ac3d240e73788676145b30e32e663c6c"
  },
  {
    "url": "about/index.html",
    "revision": "078bd2487f37eadb82d821fb11da7217"
  },
  {
    "url": "css/index.css",
    "revision": "24be3c1a895fb0d2a074b3505312152a"
  },
  {
    "url": "css/prism-base16-monokai.dark.css",
    "revision": "f25dd8c9739655b7e9665814c107bc63"
  },
  {
    "url": "drugs/index.html",
    "revision": "d96ff7cec073a720ec084dab887d8242"
  },
  {
    "url": "drugs/poison-control/index.html",
    "revision": "21f02254bbd0bfbb4b59f52f0d6d8ba7"
  },
  {
    "url": "drugs/SAMHSA/index.html",
    "revision": "494a3f0e4f36f2bc9201c3f3f9697b4d"
  },
  {
    "url": "feed/feed.json",
    "revision": "e7afea726c698200f5ec5a47ad7b0f64"
  },
  {
    "url": "homelessness/CCH/index.html",
    "revision": "b6e96237e220045042f52e3c60f8fa63"
  },
  {
    "url": "homelessness/chi-tenants/index.html",
    "revision": "76d04e6a962033b4f3803008e4104779"
  },
  {
    "url": "homelessness/ignite/index.html",
    "revision": "752cdd5d55be44ba29764cec23992838"
  },
  {
    "url": "homelessness/index.html",
    "revision": "af62cb64a1cc95614ae2f393e7040767"
  },
  {
    "url": "how-to-add-app/index.html",
    "revision": "b02698ddcaf57de439423a5f122b2919"
  },
  {
    "url": "img/favicon.ico",
    "revision": "676dc194b3ef0afa5883344d65b774a3"
  },
  {
    "url": "img/N911logo.png",
    "revision": "8adf48bbe85cc846de4f73652c8cac17"
  },
  {
    "url": "img/phone-icon.svg",
    "revision": "dba6fc197b69052aebf38ca16dab2f9f"
  },
  {
    "url": "index.html",
    "revision": "7497a4f2c242916dc1df05bcc0ebb7e7"
  },
  {
    "url": "legal/community-bond-fund/index.html",
    "revision": "6c7f7686fed6a3f0b455f78d347f2d14"
  },
  {
    "url": "legal/index.html",
    "revision": "95b26ce17ddfc7dc5a99fe8f2ab53eae"
  },
  {
    "url": "legal/lawyers-guild/index.html",
    "revision": "fe6ec61e92b038588ae605e3229807df"
  },
  {
    "url": "mental-health/CCCofElginMental/index.html",
    "revision": "8589af2dcdc8f88b47ab44819d651f6b"
  },
  {
    "url": "mental-health/index.html",
    "revision": "31c088e3263990f1884b5637e71ff231"
  },
  {
    "url": "mental-health/suicide-hotline/index.html",
    "revision": "cdbf8261976e7e7ede3c5314d007081f"
  },
  {
    "url": "mental-health/UIC/index.html",
    "revision": "fb9694da93ed81eec5085cff81a2f8c2"
  },
  {
    "url": "page-list/1/index.html",
    "revision": "214a788275494105f362e784a79bf278"
  },
  {
    "url": "page-list/index.html",
    "revision": "f80b7fa21f06f325e421e7153ad2f167"
  },
  {
    "url": "posts/firstpost/index.html",
    "revision": "5a69cb137cd5f7eeaaefcb1d468c9aab"
  },
  {
    "url": "posts/index.html",
    "revision": "f5a9cc73fdfb14b650f4a70a1b6f2427"
  },
  {
    "url": "tags/drugs/index.html",
    "revision": "dbfe297f94e22f28f10ba7277b604c10"
  },
  {
    "url": "tags/homelessness/index.html",
    "revision": "9030ddbe95ddf3ecafdb25f16fbacac7"
  },
  {
    "url": "tags/index.html",
    "revision": "ca609f5b11435ed302adba0234d11498"
  },
  {
    "url": "tags/legal/index.html",
    "revision": "95942dcf7f3e9177ddd97c1b704fee9a"
  },
  {
    "url": "tags/mental/index.html",
    "revision": "df141174ab821c9ece7deb71fe0a1e2b"
  },
  {
    "url": "tags/violence/index.html",
    "revision": "2a1f72613c7a2921223b2eb0c286d490"
  },
  {
    "url": "violence/CCCofElgin/index.html",
    "revision": "b141a097576fac296bea2404f005c739"
  },
  {
    "url": "violence/index.html",
    "revision": "f1036b9ed80e1ab531f5fc8532895b54"
  },
  {
    "url": "violence/national-domestic-violence-hotline/index.html",
    "revision": "4c23601064546d3cf1f4b361d75683f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
