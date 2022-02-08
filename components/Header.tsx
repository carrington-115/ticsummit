import React from "react";

import TICLogo from "./Logo";
import styles from "../styles/header.module.css";

import Link from "next/link";

const Header: React.FC = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <TICLogo />

            <nav className={styles.navLinks}>
                <Link href="/events">
                    <a className={styles.headerNavLink}>Events</a>
                </Link>
                <Link href="/curriculum">
                    <a className={styles.headerNavLink}>Curriculum</a>
                </Link>
                <Link href="/register">
                    <a className={styles.headerNavLink}>Register</a>
                </Link>
                <Link href="/contact">
                    <a className={styles.headerNavLink}>Contact</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header;