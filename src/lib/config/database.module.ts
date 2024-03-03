import {
    Module,
    DynamicModule,
    Scope,
    OnApplicationShutdown,
} from '@nestjs/common';
import { Global } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from "express";
import { DataSource } from 'typeorm';

// const connections: Map<string, Sequelize> = new Map();

// const databaseProviderFactory = {
//     provide: 'SEQUELIZE',
//     scope: Scope.REQUEST,
//     durable: true,
//     useFactory: async (request: Request) => {
//         const db_name = request?.tenantId as string
//         if (connections.has(db_name)) return connections.get(db_name)
//         const newSequelizeInstance = await getDatabaseFactoryProvider(db_name)
//         connections.set(db_name, newSequelizeInstance)
//         return newSequelizeInstance
//     },
//     inject: [REQUEST],
// };

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                port: 3306,
                host: configService.get('SQL_HOST'),
                username: configService.get('SQL_USER'),
                password: configService.get('SQL_PASSWORD'),
                database: configService.get('SQL_DATABASE'),
                autoLoadEntities: true,
                synchronize: true,
                retryAttempts: 2
                // socketPath
            }),
            inject: [ConfigService],
        })

    ]
})
export class DatabaseModule { }

// @Global()
// @Module({})
// export class DatabaseModule implements OnApplicationShutdown {
//     async onApplicationShutdown() {
//         const closedConnectionPromises = Array.from(connections.values()).map((connection) => connection.close())
//         Promise.all(closedConnectionPromises);
//     }
//     static forRootAsync(): DynamicModule {
//         return {
//             module: DatabaseModule,
//             imports: [],
//             providers: [databaseProviderFactory],
//             exports: [databaseProviderFactory],
//         };
//     }
// }




