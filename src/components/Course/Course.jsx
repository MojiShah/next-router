import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';

function Course(props) {

    return (
        <Link href={`/courses/${props.id}`} style={{ textDecoration: 'none' }}>
            <Card style={{ width: '18rem', margin: '40px 100px' }}>
                <Image variant="top" src={props.image} style={{width:"100%", height:"200px"}}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        <br />
                        <span>
                            {props.price}
                        </span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Course