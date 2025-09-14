import {ISubCategory} from "@/src/interfaces/ISubCategory";

export interface ICategory {
    externalId: string;
    name: string;
    description: string;
    imageUrl: string;
    productCount?: number;
    subCategories: ISubCategory[]
}
