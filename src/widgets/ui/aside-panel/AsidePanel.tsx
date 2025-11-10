import "./asidePanel.css";

import type {Categories} from "@/features/products/useCategories";

type Props = {
  categories: Categories[];
  selected: string;
  onCategorySelect: (id: string) => void;
};

export const AsidePanel = ({categories, selected, onCategorySelect}: Props) => {
  const handleCategoryChange = (e: string) => {
    onCategorySelect(e);
  };
  return (
    <div className='aside-panel__container'>
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
    </div>
  );
};
