import styles from "./startscreen.module.css"
import PropTypes from 'prop-types'

const StartScreen = ({numQuestions, dispatch}) => {
    return (
        <div className={styles.start}>
            <h2>Welcome to the Quiz</h2>
            <h3>{numQuestions} question to test your Skill</h3>
            <button 
               className="btn btn-ui"
               onClick={() => dispatch({type: "start"})}>Start Quiz</button>
        </div>
    );
}

StartScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    numQuestions: PropTypes.number.isRequired,
}
 
export default StartScreen;