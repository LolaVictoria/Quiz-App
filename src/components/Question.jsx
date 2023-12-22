import Options from "./option";
import PropTypes from 'prop-types';

const Question = ({question, dispatch, answer}) => {
    if (!question) return null
    return (
        <div>
            <h4>{question.question}</h4>
           <Options 
             question={question}
             dispatch={dispatch}
             answer={answer}/>
            
        </div>
    );
}
 
Question.propTypes = {
    dispatch: PropTypes.func.isRequired,
    answer: PropTypes.any,
    index: PropTypes.number.isRequired,
    question: PropTypes.array.isRequired,
  };

export default Question;