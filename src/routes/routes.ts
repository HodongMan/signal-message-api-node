import {Request, Response} from "express";

import { isAuthenticated } from '../auth/auth';
import { listMessage, createMessage } from '../controllers/MessageController'
import { listRoom, createRoom } from '../controllers/RoomController';
import { listRoomMember, createRoomMember, listMyRoomMember } from '../controllers/RoomListController'

// 메인 라우터 입니다 

export class Routes {       
    public routes(app): void {
        
        app.route("/api/message")
        .get(isAuthenticated(), listMessage)
        .post(isAuthenticated(), createMessage)

        app.route("/api/message/my")
        .get(listMessage)

        app.route("/api/room")
        .get(listRoom)
        .post(createRoom)

        app.route("/api/room/member")
        .get(listRoomMember)
        .post(createRoomMember)

        app.route("/api/room/member/my")
        .get(listMyRoomMember)

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