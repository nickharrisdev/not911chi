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
    "revision": "01708d51d69830a9f49c281184486617"
  },
  {
    "url": "about/index.html",
    "revision": "f32caf29a6332db0b9ab7061ec9bf309"
  },
  {
    "url": "css/index.css",
    "revision": "effe8a73e38999590f69bd53c2d2dd95"
  },
  {
    "url": "css/prism-base16-monokai.dark.css",
    "revision": "f25dd8c9739655b7e9665814c107bc63"
  },
  {
    "url": "drugs/index.html",
    "revision": "6c79baeb6fc830fd82f0b93526cadcca"
  },
  {
    "url": "drugs/poison-control/index.html",
    "revision": "80d2a793b9411ad0ccac36d6f0e09157"
  },
  {
    "url": "drugs/SAMHSA/index.html",
    "revision": "afddb3c5a8fca5487a139a9974fc5847"
  },
  {
    "url": "feed/feed.json",
    "revision": "e7afea726c698200f5ec5a47ad7b0f64"
  },
  {
    "url": "homelessness/CCH/index.html",
    "revision": "6907bdfd34f19635b03c7593352caf92"
  },
  {
    "url": "homelessness/chi-tenants/index.html",
    "revision": "29bb05de117b7c37eb7e5fcacc78d220"
  },
  {
    "url": "homelessness/ignite/index.html",
    "revision": "cea17b3181979c2b2c7d0531410de4db"
  },
  {
    "url": "homelessness/index.html",
    "revision": "0af4234f709c0e52ba94cdec618e6a18"
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
    "revision": "c6f5aaa7eeb9302c1c39b52ddd7a099c"
  },
  {
    "url": "legal/community-bond-fund/index.html",
    "revision": "4c6f27cf7487375abf2340a6f0142a68"
  },
  {
    "url": "legal/index.html",
    "revision": "fc9c5167a0fc523f7c6eed2ead3c84d4"
  },
  {
    "url": "legal/lawyers-guild/index.html",
    "revision": "f92280ab41dc83989a7ebd4df9d4da88"
  },
  {
    "url": "mental-health/CCCofElginMental/index.html",
    "revision": "8448ade540244f76099e3471226e6ae5"
  },
  {
    "url": "mental-health/index.html",
    "revision": "6fa87e0b2e4762f8c8fed6d52d7a629c"
  },
  {
    "url": "mental-health/suicide-hotline/index.html",
    "revision": "a6ab7ed2ffc54084536e5473bfdc378b"
  },
  {
    "url": "mental-health/UIC/index.html",
    "revision": "3ae06ba550d53fa3910338f3b5eef825"
  },
  {
    "url": "page-list/1/index.html",
    "revision": "cd3e2a75b40eaa9f12660cb5250036cb"
  },
  {
    "url": "page-list/index.html",
    "revision": "4eee326d908262a9e83a50440f8cfb3e"
  },
  {
    "url": "posts/firstpost/index.html",
    "revision": "fe8ca70b5eada9fffba5a211c28a1990"
  },
  {
    "url": "posts/index.html",
    "revision": "29cbf0e8d215db6441c10455b0afd3f6"
  },
  {
    "url": "tags/drugs/index.html",
    "revision": "d764a2c29973e845c7acccc335322b93"
  },
  {
    "url": "tags/homelessness/index.html",
    "revision": "9c7c3b3ffb6e9a82fb7b7a6516b97660"
  },
  {
    "url": "tags/index.html",
    "revision": "febae807e3e2dbd0f70df8f5084bce08"
  },
  {
    "url": "tags/legal/index.html",
    "revision": "f71f59e82ed465cf9b3c2bc894cd8e84"
  },
  {
    "url": "tags/mental/index.html",
    "revision": "ede1f9018ff09f26c215d54db5de3842"
  },
  {
    "url": "tags/violence/index.html",
    "revision": "7e8690f6f06e2cdab78e4f2c02a4f67a"
  },
  {
    "url": "violence/CCCofElgin/index.html",
    "revision": "ad5192ce1b2120b92db4c2afb1eaa83e"
  },
  {
    "url": "violence/index.html",
    "revision": "b6696e5a04ed5f73136e54065aa2ce05"
  },
  {
    "url": "violence/national-domestic-violence-hotline/index.html",
    "revision": "e09890cdd4ebccf03e99a5eee7672fb0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
