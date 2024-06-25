import headerImg from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <section id="header">
      <img src={headerImg} alt="headerImg" />
      <h1>Investment Calculator</h1>
    </section>
  );
}
