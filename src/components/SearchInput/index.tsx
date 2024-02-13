
import { useEffect, useState } from 'react';
import styles from './SearchInput.module.scss'

export default function SearchInput(props: ISearchInputProps) {
    const {searchedCity, setSearchedCity, setFormattedCity} = props;

	const handleSearch = (city: string) => {
		const formatCity = city.toLowerCase().replace(/\b(?!')[\w']+/g, (match) => {
            return match.charAt(0).toUpperCase() + match.slice(1);
        })

		setFormattedCity(formatCity);
	}

    return (
        <div className={styles.search__input}>
            <input
                type="text"
                placeholder='Enter a city'
                defaultValue={''}
                onChange={e => setSearchedCity(e.target.value)}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        handleSearch(searchedCity || '');
                    }
                }}
            />
        </div>
    )
}