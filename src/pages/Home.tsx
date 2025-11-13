import "./home.css";
import {ProductList} from "@/features/products/ui";
import {Container} from "@/shared/ui";
import {useCategories} from "@/features/products/model/useCategories";
import {useProducts} from "@/features/products/model/api";
import {AsidePanel} from "@/widgets/ui/aside-panel";
import {useFilter} from "@/features/products/model/useFilter";

import {CartDrawer} from "@/widgets/ui/cart-drawer";

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
        <ProductList
          products={filterByCategory}
          currentCategory={categorySelected}
        />
        <CartDrawer checkoutLink={"/checkout/forms/shipping"} />
      </div>
    </Container>
  );
};
