const C='reisgids-v1x';const F=['./','index.html','manifest.webmanifest','apple-touch-icon.png',...[1,2,3,4,5,6,7,8].map(i=>`img/${i}.jpg`)];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
