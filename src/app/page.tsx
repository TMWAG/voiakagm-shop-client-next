import { getCategories } from '@/lib/api/getCategories';
import Categories from './components/Categories/Categories'
import InfoBlock from './components/InfoBlock/InfoBlock'
import styles from './page.module.css'

export default async function Home() {
  const categories = await getCategories();
  return (
    <main className={styles.main}>
      <InfoBlock/>
      <Categories categories={categories}/>
    </main>
  );
};
