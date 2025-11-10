import "./home.css";
import {ProductList} from "@/widgets/ui/product-list";
import {Container} from "@/shared/ui/container";
import {useCategories} from "@/features/products/useCategories";
import {useProducts} from "@/features/products/api";
import {AsidePanel} from "@/widgets/ui/aside-panel";
import {useFilter} from "@/features/products/useFilter";

export const Home = () => {
  const {data: products} = useProducts();
  const categories = useCategories(products);
  const {categorySelected, toggleCategory, filterByCategory} =
    useFilter(products);

  return (
    <Container>
      <div className='home__container'>
        <AsidePanel
          categories={categories}
          onCategorySelect={toggleCategory}
          selected={categorySelected}
        />
        <ProductList products={filterByCategory} />
      </div>
    </Container>
  );
};
