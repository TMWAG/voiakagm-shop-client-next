import { ICategory } from "@/app/components/Categories/Categories";

export const getCategories = async (): Promise<ICategory[]> => {
  if (!process.env.NEXT_PUBLIC_API_URL)
    throw new Error('Не указан API URL');
  const url = process.env.NEXT_PUBLIC_API_URL.concat('category/all');
  const data = await fetch(url).then((res) => res.json());
  return data;
};
