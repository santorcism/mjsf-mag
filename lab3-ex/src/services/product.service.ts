import type {AxiosInstance} from "axios";
import type {Product} from "@/types";
import type {Deleteable, Readable, Updateable, Createable} from "@/services/types";
import { ProductModel } from "@/models/product.model";

export class ProductsService implements Readable<Product>, Deleteable<Product>, Updateable<Product>, Createable<Product> {

    constructor(public httpClient: AxiosInstance) {
    }
    async create(data: Product): Promise<Product> {
        const response = await this.httpClient.post<Product>('/products', data)
        return new ProductModel(response.data)
      }
    
      async delete(id: number): Promise<boolean> {
        const response = await this.httpClient.delete<boolean>(`/products/${id}`)
        return response.data
      }
    
      async update(id: number, data: Product): Promise<Product> {
        const response = await this.httpClient.put<Product>(`/products/${id}`, data)
        return new ProductModel(response.data)
      }

    /**
     * Get users
     * @param params
     */
    async get(params: any): Promise<Product[]> {
        const response = await this.httpClient.get<Product[]>('/products', {params});
        return response.data.map((product) => new ProductModel(product));
    }

    /**
     * Get user by id
     * @param id
     */
    async getById(id: number): Promise<Product> {
        const response = await this.httpClient.get<Product>('/products', {params: {id}});
        return new ProductModel(response.data);
    }
}
