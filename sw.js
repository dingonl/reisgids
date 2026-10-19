const C='reisgids-v103';const F=['./','index.html','manifest.webmanifest','apple-touch-icon.png',...[...Array(45).keys()].map(i=>i+1).map(i=>`img/${i}.jpg`)];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(F)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request))));
