import {ICategory} from "@/src/interfaces/ICategory";
import {IFile} from "@/src/interfaces/IFile";

export interface IProduct {
    externalId: string;
    internalId: string;
    name: string;
    brand: string;
    categoryName: string;
    specifications: string[];
    features: string[];
    description: string;
    unitPrice: number;
    discountPercent: number;
    discountedPrice: number;
    stock: number;
    rating?: number;
    reviewCount?: any;
    images?: IFile[];
    category?: ICategory;
}