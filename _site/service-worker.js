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
    "revision": "f0aeb2c1935a3b8a0d1e5dc03a78c096"
  },
  {
    "url": "about/index.html",
    "revision": "0a89819941b8f5d5d949cf4100696a34"
  },
  {
    "url": "css/index.css",
    "revision": "21697ee58638fd19c09b0d4db057194c"
  },
  {
    "url": "css/prism-base16-monokai.dark.css",
    "revision": "f25dd8c9739655b7e9665814c107bc63"
  },
  {
    "url": "drugs/index.html",
    "revision": "31e30f266443038cab042fb8cbb280de"
  },
  {
    "url": "feed/feed.json",
    "revision": "385fd6abbb2aff21e5ce0f0a96b711b1"
  },
  {
    "url": "homelessness/index.html",
    "revision": "9c2286381eaff441c432ec5a4306b7d0"
  },
  {
    "url": "how-to-add-app/index.html",
    "revision": "d05202682db34eea7832acf4ff92a401"
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
    "revision": "ba058447ce24fd9d833f3a15e629c656"
  },
  {
    "url": "legal/index.html",
    "revision": "3561f663e1d0d53c571ab79f8b052b19"
  },
  {
    "url": "mental-health/index.html",
    "revision": "8ec6542c6f372ec1cceb14da8200504e"
  },
  {
    "url": "page-list/1/index.html",
    "revision": "138ea77509514fb42173ee58c3243551"
  },
  {
    "url": "page-list/index.html",
    "revision": "7345e896b93c468164bdf36c48427629"
  },
  {
    "url": "posts/firstpost/index.html",
    "revision": "6ff6e3b36a91c393e5360c964aebb001"
  },
  {
    "url": "posts/index.html",
    "revision": "0717c305ab2f342cbfd16478795cb9fb"
  },
  {
    "url": "tags/drugs/index.html",
    "revision": "b288830d0d15f64e32100e2758b3555c"
  },
  {
    "url": "tags/homelessness/index.html",
    "revision": "0416f6847470de74e63fccdb92c81a62"
  },
  {
    "url": "tags/index.html",
    "revision": "76493ee4b438dace2ed31edb07e6c98c"
  },
  {
    "url": "tags/legal/index.html",
    "revision": "d9e95af3bc5c943c9e4753b60414cf64"
  },
  {
    "url": "tags/mental/index.html",
    "revision": "26fb5f8ca9435059274a7afefab0ac01"
  },
  {
    "url": "tags/violence/index.html",
    "revision": "d2161c62ac31b2ad383a526cedca1354"
  },
  {
    "url": "violence/index.html",
    "revision": "e4012dbc4f5978a931197f3f3e1e4b4c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
