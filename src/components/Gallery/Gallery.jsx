import styles from './Gallery.module.css';

export default function Gallery({ data }) {
  const { gallery, copy } = data;

  return (
    <section className={styles.section} id="gallery" aria-labelledby="gallery-heading">
      <div className={styles.heading}>
        <p className="eyebrow">{copy.galleryEyebrow}</p>
        <h2 id="gallery-heading">{copy.galleryHeading}</h2>
      </div>
      <div className={styles.photoSpread}>
        {gallery.map((image, index) => (
          <figure className={`${styles.photo} ${index === 0 ? styles.leadPhoto : ''}`} key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption>
              <span className={styles.photoNumber}>0{index + 1}</span>
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}