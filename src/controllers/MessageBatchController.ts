import { Request, Response, NextFunction } from "express";

import { Message } from '../models/Message';

export async function sendMessageDependingOnTime(req: Request, res: Response, next: NextFunction) {
    try {
        const messageList = await Message.findAll();
        messageList.forEach((message) => {
            
        })
    } catch(e) {
        next(e);
    }
}