import type {AxiosInstance} from "axios";
import type {Category} from "@/types";
import type {Createable, Deleteable, Readable, Updateable} from "@/services/types";
import {CategoryModel} from "@/models/category.model";

export class CategoriesService implements Readable<Category>, Deleteable<Category>, Updateable<Category>, Createable<Category>  {

    constructor(public httpClient: AxiosInstance) {
    }
    async create(data: Category): Promise<Category> {
        const response = await this.httpClient.post<Category>('/categories', data)
        return new CategoryModel(response.data)
      }
    
      async delete(id: number): Promise<boolean> {
        const response = await this.httpClient.delete<boolean>(`/categories/${id}`)
        return response.data
      }
    
      async update(id: number, data: Category): Promise<Category> {
        const response = await this.httpClient.put<Category>(`/categories/${id}`, data)
        return new CategoryModel(response.data)
      }
    /**
     * Get categories
     * @param params
     */
    async get(params: any): Promise<Category[]> {
        const response = await this.httpClient.get<Category[]>('/categories', {params});
        return response.data.map((category) => new CategoryModel(category));
    }

    /**
     * Get category by id
     * @param id
     */
    async getById(id: number): Promise<Category> {
        const response = await this.httpClient.get<Category>('/categories', {params: {id}});
        return new CategoryModel(response.data);
    }
}
