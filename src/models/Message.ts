import {Table, Column, Model, DataType, PrimaryKey, CreatedAt, UpdatedAt, AutoIncrement} from 'sequelize-typescript';

@Table
export class Message extends Model<Message> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING)
    from: string;

    @Column(DataType.STRING)
    to: string;

    @Column(DataType.TINYINT)
    status: number;

    @Column(DataType.STRING)
    title: string;

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

    public getFrom(): string {
        return this.from;
    }

    public getTo(): string {
        return this.to;
    }

    public getStatus(): number {
        return this.status;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getDelivered(): Date {
        return this.delivered;
    }
}
