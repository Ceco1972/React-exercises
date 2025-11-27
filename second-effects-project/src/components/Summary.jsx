import quizCompletedImg from "../assets/quiz-complete.png";
import questions from "../questions";


export default function Summary({ userAnswers }) {
    const skipped = userAnswers.filter(answer => answer === null).length;
    const correct = userAnswers.filter((answer, index) => questions[index].answers[0] === answer).length;
    const wrong = userAnswers.filter((answer, index) => questions[index].answers[0] !== answer).length;      
   
      const skippedAnswersShare = ((skipped / userAnswers.length) * 100).toFixed(0);
   const correctAnswersShare = ((correct / userAnswers.length) * 100).toFixed(0);
   const wrongAnswersShare = ((wrong / userAnswers.length) * 100).toFixed(0);   
    return (
        <div id="summary">
            <img src={quizCompletedImg} alt="TrophyIcon" />
            <h2>Quiz completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">answered correctly</span>
                </p><p>
                    <span className="number">{wrongAnswersShare}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = "user-answer ";
                    if (answer === null) {
                        cssClass += " skipped";
                    } else if (questions[index].answers[0] === answer) {
                        cssClass += " correct";
                    } else {
                        cssClass += " wrong";
                    }       

                return (
                    <li key={index}>
                        <h3>Question {index + 1}</h3> 
                        <p className="question">{questions[index].text}</p>
                        <p className={cssClass}>{answer ? answer : "No answer given"}</p>
                    </li>
                    );
                })}  
                
            </ol>
        </div>
    );
}


