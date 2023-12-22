import Footer from "../components/Footer"
import Question from "../components/Question"
import NextButton from "../components/nextbutton"
import Progress from "../components/progress"
import Timer from "../components/timer"
import PropTypes from 'prop-types';



const ReadyPage = ({index, numQuestions, points, maxPossiblePoints, answer, questions, dispatch, secondsRemaining}) => {

    return (
        <>
                <Progress 
                   index={index} 
                   numQuestions={numQuestions}
                   points={points}
                   maxPossiblePoints={maxPossiblePoints}
                   answer={answer} />
                  <Question 
                    question={questions[index]}
                    dispatch={dispatch}
                    answer={answer} /> 
                  <Footer>
                  <Timer 
                      dispatch={dispatch}
                      secondsRemaining={secondsRemaining}/>
                   <NextButton 
                      dispatch={dispatch}
                      answer={answer}
                      index={index}
                      numQuestions={numQuestions} />
                    </Footer>
               </>
    )
}
export default ReadyPage


ReadyPage.propTypes = {
  index: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  maxPossiblePoints: PropTypes.number.isRequired,
  answer: PropTypes.any.isRequired, // Adjust the type according to your data
  questions: PropTypes.array.isRequired, // Adjust the type according to your data
  dispatch: PropTypes.func.isRequired,
  secondsRemaining: PropTypes.number.isRequired,
};
