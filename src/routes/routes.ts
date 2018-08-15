import {Request, Response} from "express";

import { listMessage, createMessage } from '../controllers/MessageController'

// 메인 라우터 입니다 

export class Routes {       
    public routes(app): void {
        
        app.route("/api/message")
        .get(listMessage)
        .post(createMessage)

        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'main routes1'
            })
        })
        
        /* 샘플입니다 아래에 이렇게 추가하세요 방어 코드 필요
        app.route('/api')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'main routes'
            })
        })
        */
    }
}