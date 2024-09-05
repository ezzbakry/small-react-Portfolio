import { Component } from "react";
import Card from 'react-bootstrap/Card';



export default class Skills extends Component {

    constructor() {
        super()
        this.state = {
            skill: [
                { css: "Intermediate", Html: "Advanced", js: "Advanced", react: "Intermediate" }
            ],
            soft: [
                { first: "Problem Solving", second: "Task Prioritization", third: "Attention to details" }
            ]
        }
    }
    render() {
        return <>
            <div style={{marginBottom:"60px"}} id="Skills">
                <Card className="text-center">
                    <Card.Header>My skills</Card.Header>
                    <Card.Body>

                        <Card.Title>Technical skills</Card.Title>
                        {this.state.skill.map((s) => {
                            return <>
                                <Card.Text style={{ fontSize: "20px" }}>
                                    css : {s.css} , HTML : {s.Html} , js : {s.js} , react : {s.react}
                                </Card.Text>
                            </>
                        })}


                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Soft skills</Card.Title>
                        {this.state.soft.map((s) => {
                            return <>
                                <Card.Text style={{ fontSize: "20px" }}>
                                    {s.first} , {s.second} ,{s.third}
                                </Card.Text>
                            </>
                        })}


                    </Card.Body>
                    <Card.Footer className="text-muted">I wish to improve these skills to be able to enter the labor market</Card.Footer>
                </Card>

            </div>


        </>
    }
}