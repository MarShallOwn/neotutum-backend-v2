import {
    DataSource,
    Repository,
    DeepPartial,
    FindManyOptions,
    FindOneOptions,
    FindOptionsWhere,
} from 'typeorm';
import { EntityTarget } from 'typeorm/common/EntityTarget';
import { BaseInterfaceRepository } from './common.repository.interface';

export abstract class BaseAbstractRepository<T> extends Repository<T> implements BaseInterfaceRepository<T> {
    private entity: EntityTarget<T>
    constructor(target: EntityTarget<T>, private dataSource: DataSource) {
        super(target, dataSource.createEntityManager());
        this.entity = target
    }

    public async findOneRiskNetwork(filterCondition: FindOptionsWhere<T>): Promise<any> {
        return this.findBy(filterCondition)
    }

    public async createBulk(records: any): Promise<any> {
        return await this
            .createQueryBuilder()
            .insert()
            .into(this.entity)
            .values(records)
            .execute()
    }
}


// interface HasId {
//     id: number;
// }

// export abstract class BaseAbstractRepository<T extends HasId> implements BaseInterfaceRepository<T>{
//     private entity: Repository<T>
//     protected constructor(target: Repository<T>) {
//         this.entity = target;
//     }

// public async findOneRiskNetwork(filterCondition: FindOptionsWhere<T>): Promise<T> {
//     return await this.entity.findOneBy(filterCondition)
// }
// }


// export abstract class AbstractRepository<TModel> extends Repository<TModel> {
// constructor(
//     model: Repository<TModel>
// ) {
//     this.model = model
// }
// async create(recordAttrs: CreationAttributes<Omit<TModel, 'id'>>, options?: CreateOptions<TModel> | FindOptions<TModel>): Promise<any> {
//     const record = await this.model.create(recordAttrs, options)
//     if (!record) throw new BadRequestException(`Record Create operation failed - ${this.model.name}`)
//     return record
// }

// async findOne(filterQuery: Model<InferCreationAttributes<TModel>>, options?: CreateOptions<TModel> | FindOptions<TModel>): Promise<any> {
// const record = await this.model.findOne({ where: filterQuery, ...options })
// if (!record) throw new BadRequestException(`Record findOrCreate operation failed - ${this.model.name}`)
// return record
// }

// async findOrCreate(recordAttrs: CreationAttributes<Omit<TModel, 'id'>>, filterQuery?: WhereOptions, options?: CreateOptions<TModel> | FindOptions<TModel>): Promise<any> {
//   const record = await this.model.findOrCreate({
//     where: filterQuery,
//     defaults: recordAttrs,
//     ...options,
//   })
//   if (!record) throw new BadRequestException(`Record findOrCreate operation failed - ${this.model.name}`)
//   return record
// }

// async findByPk(filterQuery: number, options?: FindOptions<TModel>): Promise<TModel> {
//     const record = await this.model.findByPk(filterQuery, options)
//     if (!record) throw new BadRequestException(`Record findByPk failed - ${this.model.name}`)
//     console.log(record);

//     return record
// }

// async updateOne(recordAttrs: UpdateOptions<TModel>, filterQuery: WhereOptions, options?: UpdateOptions<TModel>): Promise<TModel> {
//     const record = await this.model.findOne({ where: filterQuery, ...options })
//     if (!document) throw new BadRequestException(`Record updateOne failed - ${this.model.name}`)
//     record.set(recordAttrs)
//     await record.save(options)
//     return record
// }

// async updateAll(recordAttrs: UpdateOptions<TModel>, filterQuery: WhereOptions, options?: UpdateOptions<TModel>): Promise<TModel[]> {
//     await this.model.update(recordAttrs, { where: filterQuery, ...options })
//     const records = await this.model.findAll({ where: filterQuery, ...options })
//     return records
// }

// async deleteOne(recordAttrs: UpdateOptions<TModel>, paranoidDelete = true, filterQuery: WhereOptions, options?: FindOptions<TModel> | DestroyOptions): Promise<string> {
//     const record = await this.model.findOne({ where: filterQuery, ...options })
//     await record.destroy({ where: filterQuery, ...options, force: paranoidDelete })
//     return "record delete"
// }
//}


