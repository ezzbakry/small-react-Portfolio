import { Component } from "react";
import Card from 'react-bootstrap/Card';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default class About extends Component {

    constructor() {
        super()
        this.state = {
            arr: [{ par: "My name is Ezz, I am full stack developer", par2: "I am graduated from Assiut University" }]
        }
    }
    render() {
        return <>
            <div id="About">
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '15rem', padding: "20px", margin: "30px", height: "12rem", textAlign: "center" }}>
                                <Card.Body>
                                    {this.state.arr.map((me) => {
                                        return <>
                                            <Card.Text style={{ fontSize: "20px" }}>
                                                {me.par}
                                            </Card.Text>
                                        </>
                                    })}


                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card style={{ width: '15rem', margin: "30px", height: "12rem", textAlign: "center", padding: "20px" }}>
                                <Card.Body>
                                    {this.state.arr.map((me) => {
                                        return <>
                                            <Card.Text style={{ fontSize: "20px" }}>
                                                {me.par2}
                                            </Card.Text>
                                        </>
                                    })}


                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>


    }
}