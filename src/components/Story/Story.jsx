import styles from './Story.module.css';

export default function Story({ data }) {
  const { story, copy } = data;

  return (
    <section className={styles.section} id="story" aria-labelledby="story-heading">
      <div className={styles.intro}>
        <p className="eyebrow">{copy.storyEyebrow}</p>
        <h2 id="story-heading">{copy.storyHeading}</h2>
        <p className={styles.routeNote}>Every great story deserves a few favorite panels.</p>
      </div>
      <ol className={styles.storyPages}>
        {story.map((chapter, index) => (
          <li className={styles.page} key={chapter.date}>
            <p className={styles.issue}>{`Issue ${String(index + 1).padStart(2, '0')}`}</p>
            <p className={styles.date}>{chapter.date}</p>
            <h3>{chapter.title}</h3>
            <p className={styles.description}>{chapter.description}</p>
            <span className={styles.pageNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}