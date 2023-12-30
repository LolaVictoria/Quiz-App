import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Content from "./components/content";
import Loader from "./components/Loader"
import Error from "./components/Error"
import StartScreen from "./pages/StartScreen";
import ReadyPage from "./pages/readypage";
import FinishScreen from "./pages/finishscreen"


 const SEC_PER_QUESTION = 20

const initialState = {
    questions:[],

   // loading, error, ready, active, finished
   status: "loading",
   index: 0,
   answer: null,
   points: 1,
   highscore: 0,
   secondsRemaining: null
}


const reducer = (state, action) => {
   switch(action.type) {
    case "dataReceived":
        return{
            ...state,
            questions: action.payload,
            status: "ready"
        }
    case "dataFailed":
        return{
            ...state,
            status: "error"
        }
        case "start":
            return{
                ...state,
                status: "active",
                secondsRemaining: state.questions.length * SEC_PER_QUESTION 
            }
        case "newAnswer":
            //To know what the current question is in order to add to the points
            const question = state.questions.at(state.index)
            
            return {
                ...state,
                answer: action.payload,
                points:  action.payload === question.correctOption
                   ? state.points + question.points
                   : state.points
            }
        case "nextQuestion":
            return {
                ...state,
                index: state.index + 1,
                answer: null
            }
        case "finish":
            return {
                ...state,
                status: "finish",
                highscore: state.points > state.highscore ?           
              state.points : state.highscore
            }
        case "restart":
        return {
            ...state,
            // status: ready
            status: "active", /*status can also be set to ready i you want */
            index: 0, 
            answer: null,
            points: 0 
            //highscore: 0 /*highscore can be set to 0 if you want to refresh the page,  it can also be used with status ready
        }
        case "time":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "finished" : state.status
            }

        default:
            throw new Error("Action Unknown")
   }
}

const App = () => {
    const[{questions, status, index, answer, points, highscore, secondsRemaining}, dispatch] = useReducer(reducer, initialState)

    const numQuestions = questions.length
    const maxPossiblePoints = questions.reduce(
        (prev, cur) => prev + cur.points, 0
    )

    useEffect(function() {
        fetch("http://localhost:3000/questions")
        .then((res) => res.json())
        .then((data) => dispatch({
            type: "dataReceived",
            payload: data}))
        .catch((err) => dispatch({
            type: "dataFailed",
            payload: err 
        }))
    
    }, [])
    return (
        
        <div className="app">
            <Header/>

            <Content>
                {status === "loading" && <Loader/> }
                {status === "error" && <Error/> }
                {status === "ready" && 
                <StartScreen 
                  numQuestions={numQuestions}
                  dispatch={dispatch}/> }
                {status === "active" && 
               <ReadyPage
               index={index} 
               numQuestions={numQuestions}
             points={points}
               maxPossiblePoints={maxPossiblePoints}
               answer={answer}
               questions={questions}
                dispatch={dispatch}
            secondsRemaining={secondsRemaining} />
                }   

            {status === "finish" && (
                <FinishScreen 
                  points={points}
                  maxPossiblePoints={maxPossiblePoints}
                  highscore={highscore}
                  dispatch={dispatch} />
            )}                                              

            </Content>
        </div>
        
    );
}
 
export default App;