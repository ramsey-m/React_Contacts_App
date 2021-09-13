import "./styles.css";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function App() {
  return (
    <div className="App">
      <h1 className="Heading">Cohort 13 Class Directory</h1>
      <Card
        name="Greg"
        img="https://i.ibb.co/qsB8nfg/greg.png"
        likes="Fun Fact: Plays guitar"
        email="bigheadgreg@gmail.com"
      />

      <Card name="Jordan" img="" likes="Salsa" />

      <Card name="Nesibe" img="" likes="Turkish food" />

      <Card name="Geoffrey" img="" likes="Dog" />

      <Card name="Zamira" img="" likes="Kidds" />

      <Card name="Greg" img="" likes="Guitar" />

      <Footer />
    </div>
  );
}
