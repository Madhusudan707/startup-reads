import React from 'react'
import styles from './search.module.css'
const Search = () => {
    return (
        <div className={styles.search}>
            <label>
                <input type='text' placeholder="Search Books" />
            </label>
        </div>
    )
}

export default Search
