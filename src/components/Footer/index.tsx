import Image from 'next/image'
import styles from './Footer.module.scss'

import whiteLogo from '../../../public/logo-white.svg'

export default function Footer() {
    return (
        <footer className={styles.footer__container}>
            <Image src={whiteLogo} alt={'logo-white'} />
            <p>© 2024 TOMO. All  rights reserved.</p>
        </footer>
    )
}