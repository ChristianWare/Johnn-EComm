import styles from "../../styles/Slide3.module.css";
import Link from "next/link";

function Slide3() {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.leftSale}>
          <h3>GREEN LABEL 15 YEARS 750ML</h3>
          <p lang='en'>
            Our only Scotch blended entirely with single malts. Johnnie Walker
            Green Label is a hidden gem with vibrant secrets to reveal. And with
            malts from the four corners of Scotland, aged for at least 15 years,
            it captures the distinct flavors of each landscape in perfect
            balance. A whisky that’s in harmony with nature.
          </p>
          <div className={styles.btnContainer}>
            <Link href='/'>
              <a className={styles.btnLeft}>ADD TO CART</a>
            </Link>
            <Link href='/'>
              <a className={styles.btnRight}>DETAILS</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <div className={styles.crestArea}>
            <img
              className={styles.crest}
              src='/images/crestGold.svg'
              alt='royal warrent'
            />
            <p>By appointment to her majesty the queen</p>
            <p>Scotch Whiskey Distillers</p>
            <p>John Walker & Sons Limited, London</p>
          </div>
          <div className={styles.jwblText}>
          <hr className={styles.hr1} />
          <hr className={styles.hr2} />
            <h4>JOHNNIE WALKER</h4>
            <h2>GREEN LABEL</h2>
            <h3 className={styles.scriptText}>Blended Malt Scotch Whiskey</h3>
            <p>DISTILLED BLENDED AND BOTTLED IN SCOTTLAND</p>
            <hr className={styles.divider2} />
            <hr className={styles.divider} />
          </div>
          <div className={styles.lowerTop}>
            <img
              className={styles.walker}
              src='/images/logo16Gold.svg'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}></div>
    </div>
  );
}

export default Slide3;
