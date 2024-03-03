import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { RiskObject } from './models/riskobject.entity';
// import { AbstractRepository } from 'src/common/database/common.repository';
import { CreatePhsyicalRiskObjectDto } from './dto/create-riskobject-physical.dto';
import { Repository } from 'typeorm';

// type RiskObjectModelTypes = RiskObject | PhysicalRiskObject
// type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
// type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>


export interface RiskObjectRepository extends Repository<RiskObject> {
    this: Repository<RiskObject>;
    /**
     * testing 123
     */
    findDone(): Promise<RiskObject>;
    findPending(): Promise<RiskObject>;

}

export const ExtendedRiskObjectRepository: Pick<
    RiskObjectRepository,
    'findDone' | 'findPending'
> = {
    findDone(this: Repository<RiskObject>) {
        return this.findOne({})
    },
    findPending(this: Repository<RiskObject>) {
        return this.findOne({})
    },
};


// @EntityRepository(Task)
// export class TasksRepository extends Repository<Task> {
// private logger = new Logger('TasksRepository', true);

// async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
//     const { status, search } = filterDto;

//     const query = this.createQueryBuilder('task');
//     query.where({ user });

//     if (status) {
//         query.andWhere('task.status = :status', { status });
//     }

//     if (search) {
//         query.andWhere(
//             '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
//             { search: `%${search}%` },
//         );
//     }


// }

// async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
//     const { title, description } = createTaskDto;

//     const task = this.create({
//         title,
//         description,
//         status: TaskStatus.OPEN,
//         user,
//     });

//     await this.save(task);
//     return task;
// }
//}
