import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
  const [answers, setAnswers] = useState([]);

  const activeQuestionIndex = answers.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((answer) => {
    setAnswers((prev) => {
      return [...prev, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizComplete) {
    return (
      <Summary userAnswers={answers}/>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
