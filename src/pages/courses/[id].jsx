import { useRouter } from 'next/router'
import React from 'react'
import coursesData from '../../../data/coursesData';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const singleCourse = () => {
    const router = useRouter();
    let selectedCourse = coursesData.find(course => course.id === parseInt(router.query.id));
    let hasCourse = coursesData.some(course => course.id === parseInt(router.query.id));

    return (<>
        {hasCourse ? (<>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col>
                        {/* <h2>{selectedCourse.image}</h2> */}
                        <h2>{selectedCourse.title}</h2>
                        <p>{selectedCourse.discription}</p>
                    </Col>
                    <Col>
                        <Image src={selectedCourse.image}
                            alt={selectedCourse.title}
                            style={{ width: '80%' }}
                        />
                    </Col>

                </Row>
            </Container>
        </>) : (<h1>
            course with Given Id not found... .
        </h1>)}
    </>
    )
}

export default singleCourse