import React, { useState } from 'react';
import Course from '@/components/Course/Course';
import coursesData from '../../../data/coursesData';
import styles from '../../../styles/courses.module.css';

function Courses() {

    const [coursesItems, setCoursesItems] = useState(coursesData);
    return (
        <>
            <h1 style={{ margin: '10px 50px 0', color: 'red' }}>Courses List</h1>
            <hr />
            <div className={styles.courses}>
                {coursesItems.map(x =>
                    <Course key={x.id}
                        {...x}
                        className='items'
                    />
                )}
            </div>
        </>
    )
}

export default Courses