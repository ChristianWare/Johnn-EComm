import Link from "next/link";
import styles from "../../styles/Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.leftSale}>
            <h1>JOHNNIE WALKER BLUE LABEL 750ML</h1>
            <h3>BLENDED SCOTCH WHISKEY</h3>
            <p lang='en'>
              Where velvety smooth flavors blossom on the tongue. Johnnie Walker
              Blue Label comes from hand-selecting rare Scotch Whiskies with a
              remarkable depth of flavor. Only one in 10,000 casks make the cut.
              Best served neat, along with an ice-cold water to enhance its
              powerful character.
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
                src='/images/crest.svg'
                alt='royal warrent'
              />
              <p>By appointment to her majesty the queen</p>
              <p>Scotch Whiskey Distillers</p>
              <p>John Walker & Sons Limited, London</p>
            </div>
            <div className={styles.jwblText}>
              <h4>JOHNNIE WALKER</h4>
              <h2>Blue Label</h2>
              <h3>BLENDED SCOTCH WHISKEY</h3>
              <hr className={styles.divider} />
            </div>
            <div className={styles.lowerTop}>
              <h3 className={styles.smallText}>
                A BLEND OF OUR RAREST WHISKEYS
              </h3>
              <h3 className={styles.scriptText}>John Walker & Sons</h3>
              <img className={styles.walker} src='/images/logo16.svg' alt='' />
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}></div>
      </div>
    </div>
  );
}

export default Hero;
