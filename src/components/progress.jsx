import styles from "./progress.module.css"
import PropTypes from 'prop-types';

const Progress = ({index, numQuestions, points,  maxPossiblePoints, answer}) => {
    return (
        <header className={styles.progress}>
            <progress 
               max={numQuestions} 
               value={index + Number(answer !== null)} />
            <p>
                Question <strong>{index + 1}</strong> / {numQuestions}</p>
            <p><strong>{points}</strong> / {maxPossiblePoints}</p>
        </header>
    );
}
Progress.propTypes = {
    points: PropTypes.number.isRequired,
    maxPossiblePoints: PropTypes.number.isRequired,
    answer: PropTypes.any,
    index: PropTypes.number.isRequired,
    numQuestions: PropTypes.number.isRequired,
  };

export default Progress;