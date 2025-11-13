import "./productFiltering.css";

import type {FilterProps} from "@/features/products/model/types";

export const ProductFiltering = ({
  categories,
  selected,
  onCategorySelect
}: FilterProps) => {
  const handleCategoryChange = (e: string) => {
    onCategorySelect(e);
  };

  return (
    <>
      <h3 className='aside-panel__title'>Filter & Sort</h3>
      <h3 className='aside-panel__subtitle'>Categories</h3>
      <div className='aside-panel__categories-list'>
        {categories.map((item) => (
          <button
            className={`aside-panel__button ${
              selected === item.id ? "active" : ""
            }`}
            key={item.id}
            value={item.id}
            onClick={(e) => {
              e.preventDefault();
              handleCategoryChange(item.id);
            }}
          >
            {item.id}
          </button>
        ))}
      </div>
    </>
  );
};
