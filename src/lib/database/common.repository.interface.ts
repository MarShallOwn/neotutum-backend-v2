export interface BaseInterfaceRepository<T> {
    findOneRiskNetwork(data: any): Promise<T>;
    createBulk(data: any): Promise<T>;
}
