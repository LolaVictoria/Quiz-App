//import { useNavigate } from "react-router-dom";
import styles from "./header.module.css"
//import { FaArrowLeftLong } from "react-icons/fa6";

const Header = () => {
 //const navigate = useNavigate()
  return (
    <header className={styles.app_header}>
      <p 
          className="flex items-center ml-6 lg:ml-12 pt-5 underline hover:text-[#2ECF5A]"
            onClick={(e) => {
                e.preventDefault()
                // navigate(-1)
              }}
                >
                  <span>&larr;</span>
                    {/* <FaArrowLeftLong size={15}/> */}
                  <span className="ml-3">Back</span>
          </p>
      <h1>Quiz</h1>
    </header>
  );
}

export default Header;
