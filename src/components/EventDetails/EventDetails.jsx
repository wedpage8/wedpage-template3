import { FaRegClock } from 'react-icons/fa6';
import styles from './EventDetails.module.css';

export default function EventDetails({ data }) {
  const { events, weddingDate, address, copy } = data;

  return (
    <section className={styles.section} id="details" aria-labelledby="details-heading">
      <div className={styles.heading}>
        <p className="eyebrow">{copy.detailsEyebrow}</p>
        <h2 id="details-heading">{copy.detailsHeading}</h2>
      </div>
      <div className={styles.itinerary}>
        <div className={styles.datePanel}>
          <span className={styles.dateLabel}>Mark your calendar</span>
          <span className={styles.dateNumber} aria-hidden="true">01</span>
          <span className={styles.dateMonth}>January</span>
          <span className={styles.dateYear}>2027</span>
          <span className={styles.dateDay}>Friday · Baguio City</span>
        </div>
        <div className={styles.schedule}>
          {events.map((event, index) => (
            <article className={styles.event} key={event.name}>
              <span className={styles.eventNumber} aria-hidden="true">0{index + 1}</span>
              <div className={styles.eventMain}>
                <p className={styles.eventTime}><FaRegClock aria-hidden="true" />{event.time}</p>
                <h3>{event.name}</h3>
              </div>
              <div className={styles.eventDetails}>
                <p className={styles.eventLocation}>{event.location}</p>
                <p className={styles.note}>{event.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className={styles.address}>Celebration locations <span>·</span> {address}</p>
    </section>
  );
}