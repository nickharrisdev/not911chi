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
    "revision": "7d51c9e2c8d41758d8fd550c76a88d43"
  },
  {
    "url": "about/index.html",
    "revision": "c49ef6f266f33e8307bdda39c686db6b"
  },
  {
    "url": "css/index.css",
    "revision": "b44d3595a28c3bb67eb54a03aeeb55a9"
  },
  {
    "url": "css/prism-base16-monokai.dark.css",
    "revision": "f25dd8c9739655b7e9665814c107bc63"
  },
  {
    "url": "drugs/index.html",
    "revision": "4dbf9001a48ca21534a6f56545e6189b"
  },
  {
    "url": "drugs/poison-control/index.html",
    "revision": "cc4a5754cce370170460b0bc4e2a194c"
  },
  {
    "url": "drugs/SAMHSA/index.html",
    "revision": "d04a563bc3c83330067f336a3a3added"
  },
  {
    "url": "feed/feed.json",
    "revision": "e7afea726c698200f5ec5a47ad7b0f64"
  },
  {
    "url": "homelessness/CCH/index.html",
    "revision": "8fd76cb207f8d9ec856a6995b9de51dd"
  },
  {
    "url": "homelessness/chi-tenants/index.html",
    "revision": "7f62f3d291044c2abb9adefc1c8afd5e"
  },
  {
    "url": "homelessness/ignite/index.html",
    "revision": "b09d1683f4e071cf57fe8d30e4c375fa"
  },
  {
    "url": "homelessness/index.html",
    "revision": "093c17e966021466e79bf5c570b83764"
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
    "revision": "512276d3f79f6701a83a73a60c5f791b"
  },
  {
    "url": "legal/community-bond-fund/index.html",
    "revision": "919bb46c65a20e12b1e2d5f14d504e03"
  },
  {
    "url": "legal/index.html",
    "revision": "b6b4d7986ff7c14397a5ddf666dd41f1"
  },
  {
    "url": "legal/lawyers-guild/index.html",
    "revision": "511c034abbcaeb1d9abec3dc0375e16e"
  },
  {
    "url": "mental-health/CCCofElginMental/index.html",
    "revision": "8cc699e611cb047fdd2ab884380cca9b"
  },
  {
    "url": "mental-health/index.html",
    "revision": "5c961a774d675c6bebf6529552671e42"
  },
  {
    "url": "mental-health/suicide-hotline/index.html",
    "revision": "d6c463ef9c62d63f68b31d8af93adf12"
  },
  {
    "url": "mental-health/UIC/index.html",
    "revision": "6c948ad4ee6a583e54cd2c0f5cd768a6"
  },
  {
    "url": "page-list/1/index.html",
    "revision": "f57c90c925c18758b4edbfc965efa33f"
  },
  {
    "url": "page-list/index.html",
    "revision": "e77452805455a102eb8f66bb8e1c7869"
  },
  {
    "url": "posts/firstpost/index.html",
    "revision": "46970d6d6874bd33a51b445a5797f86c"
  },
  {
    "url": "posts/index.html",
    "revision": "876becfcbe2079f1419419d407c8374f"
  },
  {
    "url": "tags/drugs/index.html",
    "revision": "0637f6406e903538a9a462fc8f04ab0c"
  },
  {
    "url": "tags/homelessness/index.html",
    "revision": "0466d38095392aaaacd34942c0da252e"
  },
  {
    "url": "tags/index.html",
    "revision": "e0512966ffd6c1c93f9704a6e7b42d4f"
  },
  {
    "url": "tags/legal/index.html",
    "revision": "0bd373d53bb97480ffa69a3ad16dd8f5"
  },
  {
    "url": "tags/mental/index.html",
    "revision": "bff8bb3cd3222ae926f10e1f5e18cdcf"
  },
  {
    "url": "tags/violence/index.html",
    "revision": "408351ba781526a96cc3183aaa6d5b21"
  },
  {
    "url": "violence/CCCofElgin/index.html",
    "revision": "7a719b0ae84aa367175e084f56e331ea"
  },
  {
    "url": "violence/index.html",
    "revision": "9206d2ff7643584b48b9bac2715eaa95"
  },
  {
    "url": "violence/national-domestic-violence-hotline/index.html",
    "revision": "3b9f46dd61effeceebb8b7427fa0b862"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
