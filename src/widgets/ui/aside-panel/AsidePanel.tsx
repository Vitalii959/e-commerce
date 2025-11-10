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
      <div className='aside-panel__title'></div>
      <div className='aside-panel__categories-list'>
        {categories.map((item) => (
          <button
            key={item.id}
            style={{background: `${selected === item.id ? "#fff" : ""}`}}
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
