import {Table, Column, Model, DataType, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, BelongsTo, ForeignKey} from 'sequelize-typescript';

import { Room } from './Room';

@Table
export class RoomList extends Model<RoomList> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @ForeignKey(() => Room)
    @Column
    roomId: number;

    @BelongsTo(() => Room)
    room: Room;

    @Column(DataType.STRING)
    user: string;

    @CreatedAt
    created: Date;
   
    @UpdatedAt
    updated: Date;

}
