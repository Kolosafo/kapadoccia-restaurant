import { useRef, useEffect } from "react";

// Import components
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import PageBanner from "../components/PageBanner/PageBanner";

// Import GSAP
import { gsap, Power4 } from "gsap";

// Import SASS file
import styles from "../styles/Menu.module.scss";

function Menu() {
  // Refs
  let section = useRef(null);

  let tl = gsap.timeline({ delay: 0.3 });

  // GSAP animation
  useEffect(() => {
    // Section Animation
    tl.from(
      section.children,
      {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: Power4.easeOut,
      },
      0.2
    );
  }, [tl]);

  return (
    <>
      <Navigation />
      <PageBanner />

      <div className={styles.pageContent} ref={(e) => (section = e)}>
        <h2>Our Menu</h2>
        <hr className={styles.divider} />

        {/* Top Menu Container */}
        <div className={styles.topContainer}>
          {/* Soup & Salad Container */}
          <div className={styles.topLContainer}>
            <div className={styles.containerTitle}>
              <h4>
                Fried Rice <span>(Chinese)</span>
              </h4>
              <p>A delicious and traditional side dish in Chinese cuisine</p>
            </div>
            <div>
              <h5>Schezwan Fried Rice</h5>
              <p>A spicy fried rice with deep chilli-garlic flavor</p>
              <br />

              <h5>Hakka Noodles</h5>
              <p>A Cantonese style noodles preparation</p>
              <br />

              <h5>Schezwan Hakka Noodles</h5>
              <p>A spicy noodles preparation with Schezwan sauce</p>
              <br />

              <h5>
                Yaki Udon <span>(Japanese)</span>
              </h5>
              <p>
                Japanese Udon noodles stir fried with vegetables and your choice
                of protein
              </p>
              <br />

              <h5>
                {" "}
                Jasmine Rice <span>(Thai)</span>
              </h5>
              <p>Steamed Jasmine Rice</p>
              <br />

              <h5>Pad Thai Noodle</h5>
              <p>
                Thai noodles stir fry made with flat rice noodles and sweet
                savory sour sauce
              </p>
              <br />
            </div>
          </div>

          {/* Pasta Container */}
          <div className={styles.topRContainer}>
            <div className={styles.containerTitle}>
              <h4>Miso Soup (Japanese)</h4>
              <p>Traditional Japanese soybean soup</p>
            </div>
            <div>
              <h5>Chicken Gyoza Soup</h5>
              <p>Steaming hot Japanese soup with tasty chicken dumplings</p>
              <br />

              <h5>
                Hot and Sour Soup <span>(Chinese)</span>
              </h5>
              <p>A savory, spicy and tangy Chinese soup</p>
              <br />

              <h5>Sweet Corn Soup</h5>
              <p>Creamy thick soup with sweet corn</p>
              <br />

              <h5>
                Tom Yum Soup <span>(Thai)</span>
              </h5>
              <p>Thai hot & sour soup</p>
              <br />

              <h5>Tom Kha Soup</h5>
              <p>Rich, creamy and tasty thai coconut soup</p>
              <br />

              {/* <h5>Riverine Soup (Full)</h5>
              <p>
                Periwinkle, prawns, shrimps, fish, slice snails, scent leaf,
                cooked with flavored spices, served with poundo yam.
              </p> */}
              <br />
            </div>
          </div>
        </div>

        {/* Bottom Menu Container
        <div className={styles.bottomContainer}>
          {/* Panini Container
          <div className={styles.bottomLContainer}>
            <div className={styles.containerTitle}>
              <h4>Owambe (Jollof rice)</h4>
              {/* <p>
                served with mixed greens salad, cup of soup, or roasted
                vegetables
              </p> 
            </div>
            <div>
              <h5> Plain Basmati Rice</h5>
              {/* <p>
                Grilled eggplant, toamto, basil, mozzarella, balsamic vinegar
                <span>(10)</span>
              </p>
              <br />

              <h5>Mashed Asaro</h5>
              {/* <p>
                Turkey breast, avocado, tomato, organic spring mix{" "}
                <span>(8)</span>
              </p> 
              <br />

              <h5>Lamb Chops</h5>
              <p>
                Grilled Marinated Lamb Chops, With A Side Of Choice, Slav Peri
                Peri Sweet Chill Jam, Parsley.
              </p>
              <br />

              <h5>Watermelon & Cucumber Juice</h5>
              <p>1/2 Pc watermelon/1 cucumber</p>
              <br />

              <h5>Margarita Pizza (Regular)</h5>
              <p>Tomato sauce, cheese and oregano</p>
              <br />
            </div>
          </div>

          Pizza Container
          <div className={styles.bottomRContainer}>
            <div className={styles.containerTitle}>
              <h4>Bistro Splash Juice</h4>
              <p>Cucumber, Celery, Apple, mint leaf, Pineapple</p>
            </div>
            <div>
              <h5>Bistro Starter Smoothie</h5>
              <p>Apple, Banana, Sweet Pear, Pineapple & Watermelon</p>
              <br />
              <h5> Catfish Pepper Soup</h5>
              <br />
              <h5>Strawberry Lemonde</h5>
              Strawberry Syrup, Lemon Juice, Sugar Syrups, Sparkling Water
              <br />
              <h5>Pineapple Parfait</h5>
              <p>Pineapple, Apple, Grapes, Berries and Low fat Yoghurt</p>
              <br />
              <h5>Lagos Beet Vibe</h5>
              <p>Beetroot, Yoghurt red apple, banana, Pineapple Smoothie</p>
              <br />
              <h5>The Vue Special</h5>
              <p>Spinach Banana, Green Apple, Celery Smoothie</p>
              <br />
            </div>
          </div>  */}
        {/* </div> */}
      </div>

      <Footer />
    </>
  );
}

export default Menu;
