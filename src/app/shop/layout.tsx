import { getCategories } from '@/lib/api/getCategories';
import { CategoriesRow } from "./components/CategoriesRow/CategoriesRow";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode,
}){
  const categories = await getCategories();
  return (
    <>
      <CategoriesRow categories={categories}/>
      {children}
    </>
  );
};
