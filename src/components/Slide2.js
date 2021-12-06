import styles from "../../styles/Slide2.module.css";
import Link from "next/link";

function Slide2() {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.leftSale}>
          <h3>RED LABEL 750ML</h3>
          <p lang='en'>
            Flowers that bloom into flames. Johnnie Walker Red Label is the
            world’s best-selling Scotch Whisky. And is made for mixing, both in
            exhilarating cocktails and with your favorite people. It brings
            together whiskies specially chosen for their bold, vibrant flavors
            that add a fiery kick to any mix.
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
            <h4>JOHNNIE WALKER</h4>
            <h2>RED LABEL</h2>
            <h3>BLENDED SCOTCH WHISKEY</h3>
          </div>
          <div className={styles.lowerTop}>
            <h3 className={styles.scriptText}>John Walker & Sons</h3>
            <hr className={styles.divider} />
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

export default Slide2;
