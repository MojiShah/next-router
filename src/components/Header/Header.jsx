import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import styles from '../../../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import HeaderImage from '@/public/img/header_expert.JPG'

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='nav-container'>
                    <Navbar.Brand href="#home" style={{ color: 'crimson' }}>
                        Moji Shah
                    </Navbar.Brand>
                    <Nav className='menus'>
                        <Link href="/" className={styles.menu_items}>Home</Link>
                        <Link href="/courses" className={styles.menu_items}>Courses</Link>
                        <Link href="/about" className={styles.menu_items}>About us</Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className={styles.header_section}>
                <div className={styles.header_img}>
                    <Image src={HeaderImage} alt="expert" className={styles.header_img_pic}/>
                </div>
                <div className={styles.header_discription}>
                    <h1 className={styles.header_title}>
                        An 
                        <span className={styles.header_span}>Expert</span>
                         person <br />
                         always has a job.
                        <br />
                        <button className={styles.header_btn}>Learn more...</button>
                    </h1>
                </div>

            </div>
        </>
    )
}

export default Header