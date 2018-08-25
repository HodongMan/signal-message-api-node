import * as express from 'express';
import * as expressJwt from 'express-jwt';
import * as compose from 'composable-middleware';


const validateJwt: expressJwt.RequestHandler = expressJwt({
    secret: 'signal', 
});

export function isAuthenticated(): Function {
    
    return compose()
        .use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
            if (req.query && req.query.hasOwnProperty('access_token')) {
                req.headers.authorization = 'Bearer ' + req.query.access_token;
            }
            validateJwt(req, res, next);
        })
        .use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
            // DB에서 데이터를 찾아서 req에 추가한다.
            next();
        })
}