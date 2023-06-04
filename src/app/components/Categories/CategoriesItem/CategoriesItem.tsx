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
    <div className={styles.categoryItem}>
      <span>{name}</span>
      <Link href={`/catalogue/${id}`}>Подробнее...</Link>
      <Image
        src={
          picture !== null
            ? process.env.NEXT_PUBLIC_PICTURES_URL.concat(`category/${picture}`)
            : ''
          }
        alt={name}
        height={120}
        width={180}
      />
    </div>
  );
};