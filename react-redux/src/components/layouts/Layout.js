import React from 'react'
import Footer from './Footer'
import Header from './Header'

import { Container } from "react-bootstrap";

export default function Layout(props) {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>            
            <Footer />
        </>
    )
}

