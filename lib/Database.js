import { BaseDatabase } from "adminjs";
import { Resource } from "./Resource.js";
export class Database extends BaseDatabase {
    dataSource;
    static overrideDataSource = null;
    constructor(dataSource) {
        super(dataSource);
        this.dataSource = dataSource;
    }
    resources() {
        const resources = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const entityMetadata of (Database.overrideDataSource ?? this.dataSource).entityMetadatas) {
            resources.push(new Resource(entityMetadata.target));
        }
        return resources;
    }
    static isAdapterFor(dataSource) {
        return !!(Database.overrideDataSource ?? dataSource).entityMetadatas;
    }
}
//# sourceMappingURL=Database.js.map