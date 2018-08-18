import { Request, Response, NextFunction } from "express";

import { Room } from '../models/Room';

export async function createRoom(req: Request, res: Response, next: NextFunction) {
    try {
        const room = await Room.create(req.body);
        res.status(201).json({
            result: room,
        });
    } catch(e) {
        next(e);
    }
}

export async function listRoom(req: Request, res: Response, next: NextFunction) {
    try {
        const roomList = await Room.findAll();
        res.status(201).json({
            result : roomList,
        })
    } catch(e) {
        next(e);
    }
}