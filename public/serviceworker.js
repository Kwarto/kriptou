const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

//Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
             console.log('Open Cache');
                
             return cache.addAll(urlsToCache);
        })
    )   
});


//Listen for request
self.addEventListener('fetch', (event) => {
    event.respondWith(
     caches.match(event.request)
      .then(() =>{
        return fetch(event.request)
         .catch(() => caches.match('offline.html'))
      })
 )
})

//Activate the SW
self.addEventListener('activate', (event) => {
    const catchWhitelist = [];
    catchWhitelist.push(CACHE_NAME);
    
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!catchWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
              }
          })
        ))
    )  
})