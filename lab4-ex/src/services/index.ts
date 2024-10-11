import {CategoriesService} from "@/services/categories.service";
import { UsersService } from "./user.service";
import { ProductsService } from "./product.service";

import httpClient from "@/utils/http-client";


export class ServiceProvider {
    /**
     * Service instances
     */
    serviceInstances: Record<string, any> = {};

    /**
     * Get cruise service
     */
    getCategoriesService(): CategoriesService {
        if (!this.serviceInstances.cruiseService) {
            this.serviceInstances.cruiseService = new CategoriesService(httpClient);
        }
        return this.serviceInstances.cruiseService;
    }

    getUsersService(): UsersService {
        if (!this.serviceInstances.cruiseService) {
            this.serviceInstances.cruiseService = new UsersService(httpClient);
        }
        return this.serviceInstances.cruiseService;
    }

    getProductsService(): ProductsService {
        if (!this.serviceInstances.cruiseService) {
            this.serviceInstances.cruiseService = new ProductsService(httpClient);
        }
        return this.serviceInstances.cruiseService;
    }

    /**
     * Set service instance
     * @param serviceName
     * @param serviceInstance
     */
    setServiceInstance(serviceName: string, serviceInstance: any): void {
        this.serviceInstances[serviceName] = serviceInstance;
    }

    /**
     * Check if service instance exists
     * @param serviceName
     */
    hasServiceInstance(serviceName: string): boolean {
        return !!this.serviceInstances[serviceName];
    }
}

const serviceProvider: ServiceProvider = new ServiceProvider();
export default serviceProvider;
