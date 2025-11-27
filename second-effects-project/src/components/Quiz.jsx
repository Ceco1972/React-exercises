import questions from "../questions";
import { useState, useCallback } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizCompleted = userAnswers.length === questions.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
     
    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizCompleted) {
    console.log({userAnswers})
    const answeredQuestions = userAnswers.filter(answer => answer !== null).length;
    return <Summary userAnswers={userAnswers} />    
    
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
        
    </div>
  );
}
