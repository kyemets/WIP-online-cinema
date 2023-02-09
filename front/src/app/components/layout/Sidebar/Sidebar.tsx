import SearchField from '../../ui/search-field/SearchField';
import MoviesContainer from './MoviesContainer/MoviesContainer';
import Search from './Search/Search';
import styles from './Sidebar.module.scss';



const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Search />
            <MoviesContainer />
        </div>
    )
}

export default Sidebar;