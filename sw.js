self.addEventListener(
   'fetch',
   function(event){
      if (/\.jpg$/.test(event.request.ur l)){
         event.respondWith(
            new Response('<p> Esta respuesta es personalizada, es envíada por el Service Worker </p>',
                         {
                            headers: {'Content-Type':'text/html'}
                         });
         );
     }
   }
);
