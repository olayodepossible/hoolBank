import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  ClickAction,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  HeroSection,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <HeroSection />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <ClickAction />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
