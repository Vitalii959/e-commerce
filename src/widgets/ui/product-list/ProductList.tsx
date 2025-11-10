import type {Product} from "@/features/products/api";
type Props = {
  products: Product[];
};
export const ProductList = ({products}: Props) => {
  return (
    <div className='products__container'>
      <div className='products__list'>
        {products.map((item) => (
          <div key={item.id}></div>
        ))}
      </div>
    </div>
  );
};
