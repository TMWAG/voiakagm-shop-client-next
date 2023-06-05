import Link from 'next/link';
import styles from './CategoriesItem.module.css';
import Image from 'next/image';

export default function CategoriesItem({
  id,
  name,
  picture,
}: {
  id: number;
  name: string;
  picture: string;
}): JSX.Element {
  if (!process.env.NEXT_PUBLIC_PICTURES_URL)
    throw Error('не указан url api');
  return (
    <Link
      href={`/catalogue/category/${id}`}
      className={styles.categoryItem}
    >
      <Image
        src={
          picture !== null
            ? process.env.NEXT_PUBLIC_PICTURES_URL.concat(`category/${picture}`)
            : ''
          }
        alt={name}
        height={32}
        width={32}
      />
      <span>{name}</span>
    </Link>
  );
};