'use client'
import Link from 'next/link';
import styles from './Greeting.module.css';

export const Greeting = ({
  username = 'Камрад'
}: {
  username?: string
}): JSX.Element => {
  return (
    <div className={styles.greeting}>
      Привет, {<Link href='/user'>{username}!</Link> }
    </div>
  );
};