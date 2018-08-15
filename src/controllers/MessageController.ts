import { Request, Response, NextFunction } from "express";
;
import { Message } from '../models/Message';

export async function createMessage(req: Request, res: Response, next: NextFunction) {
    try {
        const message = await Message.create(req.body);
        res.status(201).json({
            message,
        });
    } catch(e) {
        next(e);
    }
}

export async function listMessage(req: Request, res: Response, next: NextFunction) {
    try {
        const messageList = await Message.findAll();
        res.status(201).json({
            message : messageList,
        })
    } catch(e) {
        next(e);
    }
}

export async function retrieveMessage(req: Request, res: Response, next: NextFunction) {
    try {
        
    } catch(e) {
        next(e);
    }
}