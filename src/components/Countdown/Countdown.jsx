import { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

function getRemainingTime(target) {
  const difference = Math.max(0, new Date(target).getTime() - Date.now());
  return [
    Math.floor(difference / 86400000),
    Math.floor((difference / 3600000) % 24),
    Math.floor((difference / 60000) % 60),
    Math.floor((difference / 1000) % 60),
  ];
}

export default function Countdown({ data }) {
  const { weddingDate, copy } = data;
  const [time, setTime] = useState(() => getRemainingTime(weddingDate));
  const targetDate = new Date(weddingDate);
  const hasStarted = targetDate.getTime() <= Date.now();
  const dateParts = {
    day: new Intl.DateTimeFormat(copy.dateTimeLocale, {
      day: '2-digit',
      timeZone: 'UTC',
    }).format(targetDate),
    month: new Intl.DateTimeFormat(copy.dateTimeLocale, {
      month: 'short',
      timeZone: 'UTC',
    }).format(targetDate),
    year: new Intl.DateTimeFormat(copy.dateTimeLocale, {
      year: 'numeric',
      timeZone: 'UTC',
    }).format(targetDate),
  };

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getRemainingTime(weddingDate)), 1000);
    return () => window.clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className={styles.section} id="countdown" aria-labelledby="countdown-heading">
      <div className={styles.heading}>
        <p className="eyebrow">{copy.countdownEyebrow}</p>
        <h2 id="countdown-heading">{hasStarted ? copy.countdownComplete : copy.countdownHeading}</h2>
      </div>
      {!hasStarted ? (
        <div className={styles.countdownBoard}>
          <div className={styles.dateStamp} aria-label={`${dateParts.month} ${dateParts.day}, ${dateParts.year}`}>
            <span className={styles.stampTop}>Next issue drops</span>
            <span className={styles.stampDay}>{dateParts.day}</span>
            <span className={styles.stampMonth}>{dateParts.month} {dateParts.year}</span>
          </div>
          <div className={styles.timer} role="timer" aria-label={`${time.join(' ')} ${copy.countdownUnits.join(' ')}`}>
            {time.map((value, index) => (
              <div className={styles.unit} key={copy.countdownUnits[index]} data-index={index}>
                <span className={styles.number}>{String(value).padStart(2, '0')}</span>
                <span className={styles.label}>{copy.countdownUnits[index]}</span>
              </div>
            ))}
          </div>
          <span className={styles.soundEffect} aria-hidden="true">POW!</span>
        </div>
      ) : (
        <p className={styles.todayStamp}>{copy.countdownComplete}</p>
      )}
    </section>
  );
}