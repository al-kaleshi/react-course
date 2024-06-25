import { useEffect, useState } from "react";

function QuestionTimer({ time, onTimeout, mode }) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    const timer = setTimeout(onTimeout, time);
    return () => {
      clearTimeout(timer);
    };
  }, [time, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" max={time} value={timeLeft} className={mode} />
  );
}

export default QuestionTimer;
