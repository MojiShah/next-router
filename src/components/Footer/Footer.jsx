import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import styles from '../../../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.left}>
                Moji Education Courses
            </div>
            <div className={styles.right}>
                <span className={styles.rightHeading}>
                    Contact With Us on Our Social Medias:
                </span>
                <div className={styles.social}>
                    <FaInstagram />
                    <FaFacebook />
                    <FaTelegram />
                    <FaTwitter />
                </div>
            </div>
        </div>
    )
}
