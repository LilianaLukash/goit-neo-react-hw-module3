import styles from './SearchBox.module.css';
export default function SearchBox({ filter, onFilterChange }) {

    return (
        <div className={styles.filter}>
            <label htmlFor="filter">Find contacts by name</label>
            <input
            className={styles.input}
                        type="text"
            
            
            value={filter}
            onChange={e => onFilterChange(e.target.value)}
    />
        </div>
    )
}