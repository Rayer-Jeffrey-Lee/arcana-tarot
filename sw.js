const VERSION='b0f309e6dcbc64';
const PREFIX=`arcana-${encodeURIComponent(self.registration.scope)}-`;
const CORE=PREFIX+VERSION,ART=PREFIX+VERSION+'-cards';
const SHELL=['./index.html','./manifest.webmanifest','./privacy.html','./credits.html','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png','./assets/rayner-avatar.jpg','./assets/html2canvas.min.js'];
// Registration happens after window.load: offline preparation does not block
// first rendering. Cache the optional assets without executing the renderer.
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CORE);await cache.addAll(SHELL);
  // The root and index URL share one fetched HTML response.
  await cache.put('./',(await cache.match('./index.html')).clone());
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CORE&&key!==ART)await caches.delete(key);await self.clients.claim();})()));
async function localArtwork(request){
  const cache=await caches.open(ART),cached=await cache.match(request);if(cached)return cached;
  const response=await fetch(request);if(response.ok){try{await cache.put(request,response.clone());}catch{/* Full storage must not prevent displaying a successfully loaded image. */}}return response;
}
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  if(url.pathname.startsWith(new URL('./assets/cards/',self.registration.scope).pathname))event.respondWith(localArtwork(event.request));
  else if(event.request.mode==='navigate')event.respondWith(fetch(event.request).catch(async()=>await caches.match(event.request)||await caches.match(new URL('./index.html',self.registration.scope))));
  else event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
