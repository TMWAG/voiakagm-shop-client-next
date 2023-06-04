'use client'
import Link from "next/link";
import styles from "./CategoriesRowItem.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const CategoriesRowItem = ({
  id,
  name,
  picture,
}: {
  id: number;
  name: string;
  picture: string;
}): JSX.Element => {
  if (!process.env.NEXT_PUBLIC_PICTURES_URL)
    throw Error('не указан url api');
  const pathname = usePathname();
  const url = process.env.NEXT_PUBLIC_PICTURES_URL;
  const isActive = pathname.endsWith(id.toString());
  return (
    <Link
      className={`${styles.item} ${ isActive && styles.active}`}
      href={`/catalogue/${id}`}
    >
      <span>{name}</span>
      <Image
        src={ picture 
          ? `${url.concat(`category/${picture}`)}`
          : ''
        }
        alt={name}
        height={60}
        width={90}
      />
    </Link>
  );
};