import { DeepPartial, FindManyOptions, FindOneOptions } from "typeorm";

export interface ICommonService<T> {
    create(query: DeepPartial<T>): Promise<T> | T;
    findAll(query?: FindManyOptions<T>): Promise<T[]> | T[];
    findOne(query?: FindOneOptions<T>): Promise<T> | T;
    update(id: number, query: DeepPartial<T>): Promise<T> | T;
    // remove(query: any): DeepPartial<T>;
}