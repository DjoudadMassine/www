export const ResponseManager = {

    send: (req, res, status, data, extraHeaders = {}) => {

        const body = JSON.stringify(data);

        const headers = { 
            'Content-Length': Buffer.byteLength(body),
            ...extraHeaders
        };

        if (status === 204) res.removeHeader('Content-Type');

        // RFC 9457
        if (status >= 400) {

            headers['Content-Type'] = 'application/problem+json';
            
        } 
                     
        // writeHead ferme les entêtes, on ne peut plus en ajouter
        res.writeHead(status, headers);
        
        // When HEAD method, do not return the body
        status !== 204 && req.method !== 'HEAD' ? res.end(body) : res.end();
        
    },
    
    problem: (req, res, problem, detail, extensions = null) => {

        let body = { 
            ...problem              
        };

        body.instance += res.locals.requestID;
        body.details = detail;
        if (extensions != null) body = {...body, ...extensions};

        ResponseManager.send(req, res, problem.status, body);
        
    }, 

};