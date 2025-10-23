self.addEventListener('fetch', function(event) {
    if (/\.jpg$/.test(event.request.url)) {
        event.respondWith(
            new Response('<p>Mensaje de Prueba</p>', {
                headers: { 'Content-Type': 'text/html' }
            })
        );
    }
});
