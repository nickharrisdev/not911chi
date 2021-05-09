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
    "revision": "c23238740301fcb20852d064e333de57"
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
    "revision": "b0dcd72694b3d0103ada7f7c81941015"
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
    "url": "violence/index.html",
    "revision": "e4012dbc4f5978a931197f3f3e1e4b4c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
