import { Greeting } from "../Greeting/Greeting";
import Categories, { type ICategory } from "../Categories/Categories";
import styles from "./Sidebar.module.css";

export const Sidebar = ({
  categories
}: {
  categories: ICategory[];
}): JSX.Element => {
  return (
    <div className={styles.sidebar}>
      <Greeting/>
      <Categories categories={categories}/>
    </div>
  );
};