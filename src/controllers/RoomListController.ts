import { Request, Response, NextFunction } from "express";

import { RoomList } from '../models/RoomList';

export async function createRoomList(req: Request, res: Response, next: NextFunction) {
    try {
        const roomMember = await RoomList.create(req.body);
        res.status(201).json({
            result : roomMember
        });
    } catch(e) {
        next(e);
    }
}

export async function listRoomList(req: Request, res: Response, next: NextFunction) {
    try {
        const roomMember = await RoomList.findAll();
        res.status(201).json({
            result : roomMember,
        })
    } catch(e) {
        next(e);
    }
}