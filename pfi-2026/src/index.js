import http from 'node:http';

import setDefaultHeaders from '#middlewares/set-default-headers.js';
import parseUrl from '#middlewares/parse-url.js';
import matchRoute from '#middlewares/match-route.js';
import { middlewarePipeline } from '#tools';

const PORT = 3000;

const server = http.createServer();

server.on('request', async (req, res) => {
        
    res.locals = {
        requestID: crypto.randomUUID(),
        url: {},
        route: {}
    };

    try {

        if (! await middlewarePipeline(req, res, 
            [
                setDefaultHeaders,
                parseUrl,
                matchRoute
            ]
        )) return;        
          
        if (!await res.locals.route.handler(req, res)) return;                      

    } catch (err) {

        // Ici pas besoin de ResponseManager.problem
        console.log(err.message);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain'); 
        res.end('Internal Server Error');
        return;

    }
    
});


/*
SERVER ERROR CODES
==================

Code            Meaning
------------    ------------------------------------
EADDRINUSE      Port already in use
EACCES          Permission denied (ports below 1024 require root)
ECONNRESET      Client forcibly closed the connection
ETIMEDOUT       Connection timed out
 */

server.on('error',  (err) => {
    console.log(err);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
