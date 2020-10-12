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
    "revision": "d48e7ae10a946789d4a44104478a50e3"
  },
  {
    "url": "about/index.html",
    "revision": "0cd2055d70ccc85556331bb70cf5be3d"
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
    "revision": "c63769ccad3d73374c7786decea06ed2"
  },
  {
    "url": "css/prism-base16-monokai.dark.css",
    "revision": "f25dd8c9739655b7e9665814c107bc63"
  },
  {
    "url": "drugs/index.html",
    "revision": "094a0238eb1d9def26a24303853a927f"
  },
  {
    "url": "drugs/poison-control/index.html",
    "revision": "2afb96552fe0d6c7dacdc46eb0f4bd28"
  },
  {
    "url": "drugs/SAMHSA/index.html",
    "revision": "b9911c968b1e46a1ddfd06ee4fc41e35"
  },
  {
    "url": "feed/feed.json",
    "revision": "e7afea726c698200f5ec5a47ad7b0f64"
  },
  {
    "url": "homelessness/CCH/index.html",
    "revision": "d399c55212efdbef935fafa5789e2344"
  },
  {
    "url": "homelessness/chi-tenants/index.html",
    "revision": "ac91ff2df4e85777078dc88fa22bf607"
  },
  {
    "url": "homelessness/ignite/index.html",
    "revision": "aecd95242074b1670b2cecc3a7573d10"
  },
  {
    "url": "homelessness/index.html",
    "revision": "e900328e91e00ea94ce9e5cc5f406883"
  },
  {
    "url": "how-to-add-app/index.html",
    "revision": "f17ad2966fc4e906c506527d526a32ba"
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
    "revision": "25bcf2d156d42c4e25d5fcede03dab80"
  },
  {
    "url": "legal/community-bond-fund/index.html",
    "revision": "e2ebf8c49cc500cdc6d656d0d4c99421"
  },
  {
    "url": "legal/index.html",
    "revision": "5dad39a77d2398e423a8e38555990828"
  },
  {
    "url": "legal/lawyers-guild/index.html",
    "revision": "af3649919a43bbeb1560a35442d992d6"
  },
  {
    "url": "mental-health/CCCofElginMental/index.html",
    "revision": "843b1b45b37e38f5e6f118fc549fdb31"
  },
  {
    "url": "mental-health/index.html",
    "revision": "280826fddb09d526ed7700d9b97aa932"
  },
  {
    "url": "mental-health/suicide-hotline/index.html",
    "revision": "9ed812f2765e6f6bf18d6809875ce478"
  },
  {
    "url": "mental-health/UIC/index.html",
    "revision": "b2b2d2ba721d30209a60d29e645b47a7"
  },
  {
    "url": "page-list/1/index.html",
    "revision": "6d0afa0f01cea93587d12d3acea5a4fc"
  },
  {
    "url": "page-list/index.html",
    "revision": "6191d0da4b76cbfd888c401720ee0639"
  },
  {
    "url": "posts/firstpost/index.html",
    "revision": "0b3916c32fb094f6f824ce5c9fdd15a7"
  },
  {
    "url": "posts/index.html",
    "revision": "4b9d4045e58e9cca2db209588f282fd0"
  },
  {
    "url": "tags/drugs/index.html",
    "revision": "2bdb37a0d5ff05fdf679c9c8c9bbbca1"
  },
  {
    "url": "tags/homelessness/index.html",
    "revision": "bec9de106a4feabe6664bfaeb01b7151"
  },
  {
    "url": "tags/index.html",
    "revision": "9f2d0e0126ef55f60cd5e3ed32891d1b"
  },
  {
    "url": "tags/legal/index.html",
    "revision": "2361f9d0757acb25c88c6df8f66435d0"
  },
  {
    "url": "tags/mental/index.html",
    "revision": "4554063b5ef5913adfdc1f6030b703b5"
  },
  {
    "url": "tags/violence/index.html",
    "revision": "445b33295b5abd68047b321856906e42"
  },
  {
    "url": "violence/CCCofElgin/index.html",
    "revision": "10df8b36038237740a68c0624ce447c7"
  },
  {
    "url": "violence/index.html",
    "revision": "f514de84c8eed6d3713030d6e7f604a0"
  },
  {
    "url": "violence/national-domestic-violence-hotline/index.html",
    "revision": "f735cae5a06f9e3f469048034f59ca31"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
