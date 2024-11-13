import Link from 'next/link';
import styles from './letter.module.css';

export default function Letter({slug, date}) {

  return (
    <div className = {styles.container}>
    <Link href={`/letters/${slug}`}>
        <div className={styles.envelope}></div>
        <div className={styles.date}>{date}</div> 
    </Link>
    </div>
  );
}
