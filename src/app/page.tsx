import axios from 'axios';
import Categories, { ICategory } from './components/Categories/Categories'
import InfoBlock from './components/InfoBlock/InfoBlock'
import styles from './page.module.css'
import { GetServerSideProps } from 'next';

export default async function Home() {
  const categories = await getCategories();
  return (
    <main className={styles.main}>
      <InfoBlock/>
      <Categories categories={categories}/>
    </main>
  );
};

const getCategories = async () => {
  if (!process.env.NEXT_PUBLIC_API_URL)
    throw new Error('Не указан API URL');
  const url = process.env.NEXT_PUBLIC_API_URL.concat('category/all');
  const data = await axios.get(url).then(res => res.data);
  console.log(data);
  return data;
};
