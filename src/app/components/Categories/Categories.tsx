import type { GetServerSideProps } from 'next';
import styles from './Categories.module.css';
import CategoriesItem from './CategoriesItem/CategoriesItem';
import axios from 'axios';

export interface ICategory{
  id: number;
  name: string;
  picture: string;
}

export default function Categories({
  categories
}: {
  categories: ICategory[];
}): JSX.Element {
  return (
    <div className={styles.categoriesBlock}>
      {categories ? (
        categories.map((c) => (
          <CategoriesItem
            key={c.id}
            id={c.id}
            name={c.name}
            picture={c.picture}
          />
        ))
      ): (
        <div>Нет категорий</div>
      )}
    </div>
  );
};
