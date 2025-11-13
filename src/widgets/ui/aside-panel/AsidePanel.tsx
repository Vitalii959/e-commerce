import {ProductFiltering} from "@/features/products/ui";
import "./asidePanel.css";

import type {FilterProps} from "@/features/products/model/types";

export const AsidePanel = ({
  categories,
  selected,
  onCategorySelect
}: FilterProps) => {
  return (
    <div className='aside-panel__container'>
      <ProductFiltering
        categories={categories}
        onCategorySelect={onCategorySelect}
        selected={selected}
      />
    </div>
  );
};
