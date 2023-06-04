import styles from './CategoriesRow.module.css';
import { ICategory } from "@/app/components/Categories/Categories";
import { CategoriesRowItem } from './CategoriesRowItem/CategoriesRowItem';

export const CategoriesRow = ({
  categories
}: {
  categories: ICategory[];
}): JSX.Element => {
  return (
    <div className={styles.categoriesRow}>
      {categories.map((c) => (
        <CategoriesRowItem
          id={c.id}
          name={c.name}
          picture={c.picture}
          key={c.name}
        />
      ))}
    </div>
  );
};