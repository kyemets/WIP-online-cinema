import SearchField from '../../ui/search-field/SearchField';
import Search from './Search/Search';
import styles from './Sidebar.module.scss';



const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Search />
            {/* movies container */}
        </div>
    )
}

export default Sidebar;