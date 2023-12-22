import styles from "./content.module.css"
import PropTypes from 'prop-types';


const Content = ({children}) => {
    return (
        <main className={styles.main}>
             {children}
        </main>
    );
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
};
 
export default Content;

