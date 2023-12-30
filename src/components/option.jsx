import PropTypes from 'prop-types';
import styles from "./option.module.css"

const Options = ({question, dispatch, answer}) => {
    const hasAnswered = answer !== null
    return (
            <div className={styles.options}>
            {question.options.map((option, index) =>
                    <button 
                       className={`
                          btn btn-option 
                          ${index === answer ? "answer": ""}
                          ${hasAnswered
                            ?  index === question.correctOption 
                              ? "correct": "wrong"
                            : " "}` }
                       key={option}
                       disabled={hasAnswered}
                       onClick={() => dispatch({
                        type: "newAnswer",
                        payload: index
                       })}>
                        {option}
                    </button>)}
        </div>
    );
}
 

Options.propTypes = {
  question: PropTypes.shape({
      options: PropTypes.array.isRequired,
      correctOption: PropTypes.number.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
};

export default Options;