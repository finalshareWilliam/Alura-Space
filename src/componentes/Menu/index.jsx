import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import curtidas from '../../assets/icones/mais-curtidas-inativo.png'
import vistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="Inicio da pagina" />
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={vistas} alt="Mais vistas" />
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={curtidas} alt="Mais curtidas" />
                    <a href="/">Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="Novas" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreenda} alt="Surpreenda-me" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}