import {Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, HasMany} from 'sequelize-typescript';

import { RoomList } from './RoomList';

@Table
export class Room extends Model<Room> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @HasMany(() => RoomList)
    roomList: RoomList[];

    @CreatedAt
    created: Date;
   
    @UpdatedAt
    updated: Date;
}
