import { FaArrowDown, FaArrowRight } from 'react-icons/fa6';
import styles from './Hero.module.css';

function formatDate(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}

export default function Hero({ data }) {
  const { copy, brideName, groomName, tagline, weddingDate, venue, heroImage, heroImageAlt, navigation } = data;

  return (
    <header className={styles.hero}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a id="top" className={styles.brand} href="#top" aria-label={`${copy.brand} home`}>
          <span className={styles.brandMain}>{copy.brand}</span>
          <span className={styles.brandSub}>LOVE COMICS</span>
        </a>
        <div className={styles.navLinks}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>
        <a className={styles.navCta} href="#rsvp">{copy.rsvpNavCta}<FaArrowRight aria-hidden="true" /></a>
      </nav>
      <div className={styles.editionBar}>
        <span>WEDPAGE COMICS PRESENTS</span>
        <span>VOL. 01 <i aria-hidden="true">◆</i> NEW YEAR’S DAY EDITION</span>
      </div>
      <div className={styles.cover}>
        <div className={styles.coverImage}>
          <img src={heroImage} alt={heroImageAlt} fetchpriority="high" />
          <div className={styles.coverShade} aria-hidden="true" />
          <span className={styles.issueBadge}>THE<br />WEDDING<br />ISSUE!</span>
          <div className={styles.coverText}>
            <p className={styles.eyebrow}><span aria-hidden="true">✦</span> {copy.invitation}</p>
            <h1>{brideName}<span className={styles.ampersand}>&amp;</span>{groomName}</h1>
            <p className={styles.tagline}>{tagline}</p>
            <a className={styles.scrollLink} href="#countdown" aria-label={copy.heroCta}>
              <span>{copy.heroCta}</span><FaArrowDown aria-hidden="true" />
            </a>
          </div>
          <span className={styles.coverCaption}>{heroImageAlt}</span>
        </div>
        <aside className={styles.coverSide}>
          <p className={styles.sideKicker}>THE BIG DAY</p>
          <p className={styles.sideDate}><time dateTime={weddingDate}>{formatDate(weddingDate, copy.dateTimeLocale)}</time></p>
          <span className={styles.burst} aria-hidden="true">POW!</span>
          <p className={styles.sideLocation}>{venue}</p>
          <p className={styles.sideTagline}>{brideName} + {groomName}<br />A love story in one unforgettable issue.</p>
        </aside>
      </div>
      <div className={styles.issueFooter}>
        <span>ONE LOVE STORY</span><span>FOREVER STARTS HERE</span><span>ISSUE NO. 001</span>
      </div>
    </header>
  );
}