// IGNORE
// import {
//     HostComponentInfo,
//     ContextId,
//     ContextIdFactory,
//     ContextIdStrategy,
// } from '@nestjs/lib';
// import { Request } from 'express';
// import { Sequelize } from 'sequelize';

// const tenants = new Map<string, ContextId>();

// export class AggregateByTenantContextIdStrategy implements ContextIdStrategy {
//     attach(contextId: ContextId, request: Request) {

//         const tenantId = request.query['dbname'] as string;
//         let tenantSubTreeId: ContextId;

//         if (tenants.has(tenantId)) {
//             tenantSubTreeId = tenants.get(tenantId);
//         } else {
//             tenantSubTreeId = ContextIdFactory.create();
//             tenants.set(tenantId, tenantSubTreeId);
//         }

//         // If tree is not durable, return the original "contextId" object
//         return {
//             resolve: (info: HostComponentInfo) =>
//                 info.isTreeDurable ? tenantSubTreeId : contextId,
//             payload: { tenantId },
//         }
//     }
// }