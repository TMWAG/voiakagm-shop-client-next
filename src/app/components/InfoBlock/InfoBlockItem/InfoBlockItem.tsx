import styles from './InfoBlockItem.module.css';

export default function InfoBlockItem({
  header,
  text,
  icon,
}: {
  header: string;
  text: string;
  icon: JSX.Element
}): JSX.Element {
  return (
    <div className={styles.infoBlockItem}>
      {icon}
      <span className={styles.header}>{header}</span>
      <span className={styles.description}>{text}</span>
    </div>
  );
};
