import quizLogoImg from "../assets/quiz-logo.png";
function Header() {
  return (
    <header>
      <img src={quizLogoImg} alt="quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header;
