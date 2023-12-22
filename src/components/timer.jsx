import styles from "./timer.module.css"
import { useEffect } from "react"
import PropTypes from 'prop-types';

const Timer = ({dispatch, secondsRemaining}) => {
    const mins = Math.floor(secondsRemaining / 60)
    const seconds = secondsRemaining % 60
        useEffect(function(){
           const id = setInterval(function() {
            dispatch({type: "time"})
          }, 1000)

          return () => clearInterval(id)
        }, [dispatch])
     return(
         <div className={styles.timer}>
            {mins < 10 && "0"}
            {mins}:
             {seconds < 10 && "0"}{seconds}
        </div>
    );
}

Timer.propTypes = {
    secondsRemaining: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
}
 
export default Timer;