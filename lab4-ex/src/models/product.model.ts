import type {Product} from "@/types";
import {BaseModel} from "@/models/base.model";

export class ProductModel extends BaseModel implements Product{
    id: number;
    image: string;
    name: string;

    constructor(data: Product) {
        super(data);
        this.init(data);
    }
}
