import type {Product} from "@/features/products/model/api";

export type CartProduct = Product & {qty: number};
export type IsCartDrawerOpen = boolean;
export type AddProduct = (product: Product) => void;
export type SetCartDrawerOpen = (v: boolean) => void;
export type SetQtyType = (value: "increase" | "decrease", id: number) => void;
export type DeleteProduct = (id: number) => void;

export type displayOption = "view" | "edit";
