import React from 'react'
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to our Professional education website</h1>
      <Link href='/courses'>
        <button className={styles.home_btn}>Get Courses...</button>
      </Link>
    </div>
  )
}

export default HomePage