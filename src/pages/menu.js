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
              <h4>The Jungle Pie</h4>
              <p>
                Five specialty meat pies with a delicious filling of sweet
                potatoes
              </p>
            </div>
            <div>
              <h5>Spiked Tuna Lumpias</h5>
              <p>Crispy tuna rolls served with green chilli sauce</p>
              <br />

              <h5>Hakka Noodles</h5>
              <p>A Cantonese style noodles preparation</p>
              <br />

              <h5>Kebab Options</h5>
              <p>
                Tender skewerred meats. Chicken or beef{" "}
                <span>(All options served with Pita bread)</span>
              </p>
              <br />

              <h5>
                Hummus <span>(Vegeterian/Vegan Friendly)</span>
              </h5>
              <p>
                Hummus with toasted Pita Bread, Crudites and Grilled Tomatoes
              </p>
              <br />

              <h5>
                {" "}
                Halloumi Sandwich <span>(Vegeterian/Vegan Friendly)</span>
              </h5>
              <p>
                Grilled Halloumi served with a rocket salad and french mustard
              </p>
              <br />

              <h5>Lahmacun</h5>
              <p>
                Minced meat. Chopped tomatoes, onions and cilantro on soft Naan
                bread
              </p>
              <br />
            </div>
          </div>

          {/* Pasta Container */}
          <div className={styles.topRContainer}>
            <div className={styles.containerTitle}>
              <h5>
                Imam Biyaldi <span>(Vegeterian/Vegan Friendly)</span>
              </h5>

              <p>Chargrilled egg plants with cream cheese and tomato relish</p>
            </div>
            <div>
              <h5>
                Yakitori Chicken & Garlic Emulsion, Soy and Orange Dressing
              </h5>
              <p>Skewers of Tender Chicken and Grilled Pepper</p>
              <br />

              <h5>
                Feta Salad <span>(Vegeterian/Vegan Friendly)</span>
              </h5>
              <p>
                Marinated feta cheese served with olives, tomatoes, cucumbers,
                pickled onions and dill
              </p>
              <br />

              <h5>Crispy Chicken Salad</h5>
              <p>
                Creamy chicken, cherry tomatoes, avocados, cucumber, lettuse
              </p>
              <br />

              <h5>
                Piyaz <span>(Vegeterian/Vegan Friendly)</span>
              </h5>
              <p>Beans, onions, tomatoes, parsley, peppers</p>
              <br />

              <h5>Bisque</h5>
              <p>Creamy soup served with buttered prawns or fish</p>
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
              <h5>Kapadoccia Abuja Special</h5>
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
