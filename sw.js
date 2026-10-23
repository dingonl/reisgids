const C='reisgids-v118';const F=['./','index.html','manifest.webmanifest','apple-touch-icon.png','img/pompeii_route.png','img/route_catania.png','img/route_ciclopi.png','img/route_ortigia.png',...[...Array(102).keys()].map(i=>i+1).map(i=>`img/${i}.jpg`)];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(F)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request))));
