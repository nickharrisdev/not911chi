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
    "revision": "4907d7881e400ff989e559aed16e5b3c"
  },
  {
    "url": "about/index.html",
    "revision": "1fd1b512ef0ecfb48ed75e359a9bd92c"
  },
  {
    "url": "add-app/index.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "addApp/index.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/index.css",
    "revision": "7f0f62abb977f44f185ae795a0f0dfee"
  },
  {
    "url": "css/prism-base16-monokai.dark.css",
    "revision": "f25dd8c9739655b7e9665814c107bc63"
  },
  {
    "url": "drugs/index.html",
    "revision": "586e19bd5e5cf367f8599166d165ee45"
  },
  {
    "url": "drugs/poison-control/index.html",
    "revision": "59d4960aaef3957c45aef3fbeca275e6"
  },
  {
    "url": "drugs/SAMHSA/index.html",
    "revision": "8335726363e3a55177f1d4ef6dc02398"
  },
  {
    "url": "feed/feed.json",
    "revision": "e7afea726c698200f5ec5a47ad7b0f64"
  },
  {
    "url": "homelessness/CCH/index.html",
    "revision": "e63bbfbaad966fec631c99f8e7659bbb"
  },
  {
    "url": "homelessness/chi-tenants/index.html",
    "revision": "ef8a0ee2273d221024f0a8f26ffe2d8c"
  },
  {
    "url": "homelessness/ignite/index.html",
    "revision": "b92573791648a36f2167fbf180fa5bba"
  },
  {
    "url": "homelessness/index.html",
    "revision": "8462e4e98f0f0a09acbede59ef6e00bc"
  },
  {
    "url": "how-to-add-app/index.html",
    "revision": "c7570bc95e5302372012b656ef96b80b"
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
    "revision": "eef57f4ea570cb65e358122b4b470799"
  },
  {
    "url": "legal/community-bond-fund/index.html",
    "revision": "24378166e435d82fa8bd5a5fbe0ed708"
  },
  {
    "url": "legal/index.html",
    "revision": "021c4defa41503a7bcf10690f460f1ab"
  },
  {
    "url": "legal/lawyers-guild/index.html",
    "revision": "36372e84f3dea545db534118e1567ef0"
  },
  {
    "url": "mental-health/CCCofElginMental/index.html",
    "revision": "37cd6c6d2150d30b5a4a8c4a89c71aaf"
  },
  {
    "url": "mental-health/index.html",
    "revision": "0fe799fd379db4ef386f9691398e3222"
  },
  {
    "url": "mental-health/suicide-hotline/index.html",
    "revision": "4b34e13e90d0c6fca7869e7b5736b199"
  },
  {
    "url": "mental-health/UIC/index.html",
    "revision": "8100c58270e673664204b0eb5d126f97"
  },
  {
    "url": "page-list/1/index.html",
    "revision": "b79c1abda1fc4a1e82025f9f8b78db22"
  },
  {
    "url": "page-list/index.html",
    "revision": "b1af888056ba5398e0772aec331fe5f7"
  },
  {
    "url": "posts/firstpost/index.html",
    "revision": "555996fa6778f50ba60b77829b199d46"
  },
  {
    "url": "posts/index.html",
    "revision": "81939c6f71e442a094b001589c722cf0"
  },
  {
    "url": "tags/drugs/index.html",
    "revision": "d395c283c9b1620355bd9358eeb143ed"
  },
  {
    "url": "tags/homelessness/index.html",
    "revision": "592c74acd3a58bdb98d09921907b296d"
  },
  {
    "url": "tags/index.html",
    "revision": "72d1e5574b7891a0e0a26be44bbe250f"
  },
  {
    "url": "tags/legal/index.html",
    "revision": "4e37f3d64c52ead623c45ee03b04ed23"
  },
  {
    "url": "tags/mental/index.html",
    "revision": "7043594673eea3b2d1a8bcc27b21bb4c"
  },
  {
    "url": "tags/violence/index.html",
    "revision": "aa8cfbf7dbfdcb1e042a774d1f8a537c"
  },
  {
    "url": "violence/CCCofElgin/index.html",
    "revision": "d4246175d7680fb78cae15222353d737"
  },
  {
    "url": "violence/index.html",
    "revision": "097176879b34854a375cb5f6c9143dcb"
  },
  {
    "url": "violence/national-domestic-violence-hotline/index.html",
    "revision": "1cd625a84a29c7ee9a8a5dc98d8fd6b6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
