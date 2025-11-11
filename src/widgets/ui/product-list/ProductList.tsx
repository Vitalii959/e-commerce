import {ProductCard} from "@/entities/product/ui";
import "./productList.css";

import type {Product} from "@/features/products/api";
type Props = {
  products: Product[];
  currentCategory: string;
};
export const ProductList = ({products, currentCategory}: Props) => {
  return (
    <div className='products__container'>
      <h4 className='products__current-category-text'>{`Home / ${
        currentCategory ? currentCategory : "All"
      }`}</h4>
      <div className='products__list'>
        {products.map((item) => (
          <div key={item._id}>{<ProductCard product={item} />}</div>
        ))}
      </div>
    </div>
  );
};
