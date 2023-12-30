import styles from "./finishscreen.module.css"
import PropTypes from 'prop-types';

const FinishScreen = ({points, maxPossiblePoints, highscore, dispatch }) => {
    const percentage = (points / maxPossiblePoints) * 100

    return (
        <div className={styles.finish}>
        <p className={styles.result}>
            You scored <strong>{points}</strong> out of {maxPossiblePoints}({Math.ceil(percentage)}%)
              
        </p>
       <p className={styles.highscore}>Highscore: {highscore} points</p>
        <button 
           className="btn btn-ui"
           onClick={()=>dispatch({type: "restart" })}>Restart Quiz</button>
        </div>
    );
}

 
export default FinishScreen;

FinishScreen.propTypes = {
    points: PropTypes.number.isRequired,
    maxPossiblePoints: PropTypes.number.isRequired,
    highscore: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
};