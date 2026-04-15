var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
self.addEventListener('install', function (event) {
    // Skip the 'waiting' lifecycle phase, to go directly from 'installed' to 'activated', even if
    // there are still previous incarnations of this service worker registration active.
    event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        // Claim any clients immediately, so that the page will be under SW control without reloading.
        event.waitUntil(self.clients.claim());
    });
});
self.addEventListener('fetch', (e) => {
    const destUrl = new URL(e.request.url);
    const hostname = destUrl.hostname;
    if (e.request.destination === "image" && hostname.includes("diamm.ac.uk")) {
        // @ts-ignore
        const searchParams = new URL(self.location).searchParams;
        const apiKey = searchParams.get('key');
        const apiSecret = searchParams.get('secret');
        const apiDomain = searchParams.get('domain');
        const modifiedHeaders = new Headers(e.request.headers);
        modifiedHeaders.set('Authorization', `Token ${apiKey}`);
        modifiedHeaders.set('X-DIAMM-Secret', apiSecret);
        modifiedHeaders.set('X-DIAMM-Origin', apiDomain);
        const newRequest = new Request(e.request, {
            headers: modifiedHeaders,
            mode: "cors",
            credentials: "include"
        });
        e.respondWith((() => __awaiter(this, void 0, void 0, function* () { return fetch(newRequest); }))());
    }
});
//# sourceMappingURL=diamm-sw.js.map
