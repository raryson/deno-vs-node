import pogo from 'https://deno.land/x/pogo/main.js';

const app = pogo.server({ port : 3000 });

app.route({
    method : 'GET',
    path   : '/tdc-recife',
    handler() {
        return 'Aqui é uma request feita pelo Deno especialmente para o TDC Recife!';
    }
});

app.start();