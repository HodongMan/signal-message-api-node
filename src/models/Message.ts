import {Table, Column, Model, DataType, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement, Default, AllowNull} from 'sequelize-typescript';

@Table
export class Message extends Model<Message> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column(DataType.BIGINT)
    from: number;

    @AllowNull(false)
    @Column(DataType.BIGINT)
    to: number;

    @Default(0)
    @Column(DataType.TINYINT)
    status: number;

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string;

    @Column(DataType.DATE)
    delivered: Date;

    @CreatedAt
    created: Date;
   
    @UpdatedAt
    updated: Date;

    public getId(): number {
        return this.id;
    }

    public getFrom(): number {
        return this.from;
    }

    public getTo(): number {
        return this.to;
    }

    public getStatus(): number {
        return this.status;
    }

    public getDescription(): string {
        return this.description;
    }

    public getDelivered(): Date {
        return this.delivered;
    }
}
