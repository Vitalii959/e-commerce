import type {Categories} from "../model/useCategories";

export type FilterProps = {
  categories: Categories[];
  selected: string;
  onCategorySelect: (id: string) => void;
};
