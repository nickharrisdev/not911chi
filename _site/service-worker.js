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
    "revision": "152f1e8dca35800143673cba8fc77a40"
  },
  {
    "url": "about/index.html",
    "revision": "418d405a4086f2c6f1a0d5924983e0bf"
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
    "revision": "8cbc9e35dcb8fc8490a8df048daa95ee"
  },
  {
    "url": "drugs/poison-control/index.html",
    "revision": "5230e84f378d3ed1670a2bf6b7919723"
  },
  {
    "url": "drugs/SAMHSA/index.html",
    "revision": "de9cbcbb3a61bc879a385315c32bba1d"
  },
  {
    "url": "feed/feed.json",
    "revision": "e7afea726c698200f5ec5a47ad7b0f64"
  },
  {
    "url": "homelessness/CCH/index.html",
    "revision": "73452af62de87433944b2819a59a2d1a"
  },
  {
    "url": "homelessness/chi-tenants/index.html",
    "revision": "603e6480b299cc56d47a901fb12fa14a"
  },
  {
    "url": "homelessness/ignite/index.html",
    "revision": "7bf5d26c9da69b9bd864a89540602e6d"
  },
  {
    "url": "homelessness/index.html",
    "revision": "1935408014ff47d745d2267d5e09a5b3"
  },
  {
    "url": "how-to-add-app/index.html",
    "revision": "cb5eca4b73a9584174a5a94678a27c3b"
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
    "revision": "dc839a1ce594d04d1a9e93a55ef23b1d"
  },
  {
    "url": "legal/community-bond-fund/index.html",
    "revision": "1a7da655e1f2f786e4c598302a9e16b9"
  },
  {
    "url": "legal/index.html",
    "revision": "7ac5fb931faced2124bd331bf5449eec"
  },
  {
    "url": "legal/lawyers-guild/index.html",
    "revision": "5c0d7491361afb012dc9c6be035392d7"
  },
  {
    "url": "mental-health/CCCofElginMental/index.html",
    "revision": "7b2f0007d7de33ed8868aed453dd0421"
  },
  {
    "url": "mental-health/index.html",
    "revision": "901b99d97ef5f70eea86bd984aada5d9"
  },
  {
    "url": "mental-health/suicide-hotline/index.html",
    "revision": "537e460fecee1a3c2ef54f58bceb3fbb"
  },
  {
    "url": "mental-health/UIC/index.html",
    "revision": "02eea3b1c016bc1ff47e4edd2d8db81c"
  },
  {
    "url": "page-list/1/index.html",
    "revision": "ec3f77b323f04f1189a9a339a25f90ec"
  },
  {
    "url": "page-list/index.html",
    "revision": "94de9302c8f3c3db6336f23b39f5f052"
  },
  {
    "url": "posts/firstpost/index.html",
    "revision": "36bbbcfda0b77440f97bbbf57c372996"
  },
  {
    "url": "posts/index.html",
    "revision": "8c43cae53ca68c6f87e4023791b51fe2"
  },
  {
    "url": "tags/drugs/index.html",
    "revision": "1d4c8560fed87702138605f2d93dbed8"
  },
  {
    "url": "tags/homelessness/index.html",
    "revision": "f834e329f9ebc416fcbfa899289d6bfe"
  },
  {
    "url": "tags/index.html",
    "revision": "65b8c5cf9c111a250b52a0180427feb7"
  },
  {
    "url": "tags/legal/index.html",
    "revision": "44f45613e12116913673bc0b63304793"
  },
  {
    "url": "tags/mental/index.html",
    "revision": "eecd834a011ba6516c92675854348362"
  },
  {
    "url": "tags/violence/index.html",
    "revision": "024d111a3b92d4fa5abb779b0a1f3cfa"
  },
  {
    "url": "violence/CCCofElgin/index.html",
    "revision": "5de9bb7ed7285b0d70247ca1366f38d7"
  },
  {
    "url": "violence/index.html",
    "revision": "39ac8f589bf3251b382516a135b3da35"
  },
  {
    "url": "violence/national-domestic-violence-hotline/index.html",
    "revision": "5ff6435d0d59d6c7b894c6859da52e72"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
