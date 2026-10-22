import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import ComicHero from '../ComicHero/ComicHero';
import styles from './Location.module.css';

export default function Location({ data }) {
  const { copy, venue, address, googleMapEmbedUrl, directionsUrl } = data;
  const destinations = [
    { label: 'Ceremony', name: 'Don Bosco Church', address, url: `https://maps.google.com/?q=${encodeURIComponent(address)}` },
    { label: 'Reception', name: venue, address: 'Baguio City', url: directionsUrl },
  ];

  return (
    <section className={styles.section} id="location" aria-labelledby="location-heading">
      <div className={styles.details}>
        <p className="eyebrow">{copy.locationEyebrow}</p>
        <h2 id="location-heading">{copy.locationHeading}</h2>
        <div className={styles.guide}>
          <ComicHero className={styles.hero} />
          <p className={styles.speech}>Follow the route, team! First stop: the ceremony. Then it’s on to the reception celebration!</p>
        </div>
        <div className={styles.destinations}>
          {destinations.map((destination) => (
            <article className={styles.destination} key={destination.label}>
              <p>{destination.label}</p>
              <h3>{destination.name}</h3>
              <span>{destination.address}</span>
              <a className={styles.directions} href={destination.url} target="_blank" rel="noreferrer">
                {copy.directions}<FaArrowUpRightFromSquare aria-hidden="true" />
                <span className="sr-only">{copy.newTab}</span>
              </a>
            </article>
          ))}
        </div>
        <p className={styles.note}>{copy.locationNote}</p>
      </div>
      <div className={styles.mapFrame}>
        <iframe
          title={copy.mapTitle}
          src={googleMapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}