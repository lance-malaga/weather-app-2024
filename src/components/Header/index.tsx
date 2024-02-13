import Image from 'next/image'
import styles from './Header.module.scss'

import logo from '../../../public/logo-black.svg'
import SearchInput from '../SearchInput'

export default function Header(props : ISearchInputProps) {
    const {searchedCity, setSearchedCity, setFormattedCity} = props;

    return (
        <header className={styles.header__container}>
            <Image src={logo} alt={'logo'}/>
            <SearchInput 
                searchedCity={searchedCity}
                setSearchedCity={setSearchedCity}
                setFormattedCity={setFormattedCity}
            />
        </header>
    )
}