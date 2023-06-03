import ThumbsUpSVG from '@/common/icons/ThumbsUpSVG';
import styles from './InfoBlock.module.css';
import InfoBlockItem from './InfoBlockItem/InfoBlockItem';
import CpuSVG from '@/common/icons/CpuSVG';
import FeedbackSVG from '@/common/icons/FeedbackSVG';

export default function InfoBlock(): JSX.Element {
  return (
    <div className={styles.infoBlock}>
      <InfoBlockItem
        header="Гарантия качества"
        icon={<ThumbsUpSVG width="20vh" />}
        text="VoiakaGM выдаёт гарантию на все проданные товары"
      />
      <InfoBlockItem
        header="Сбалансированный подбор"
        icon={<CpuSVG width="20vh" />}
        text="Мирон фигни не посоветует"
      />
      <InfoBlockItem
        header="Множество отзывов"
        icon={<FeedbackSVG width="20vh" />}
        text="От настоящих клиентов"
      />
    </div>
  );
}