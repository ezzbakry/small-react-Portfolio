import { Component } from "react";
import React from "react";
import mystyle from './Landing.module.css'



export default class Landing extends Component {

    constructor() {
        super()

    }
    render() {
        return <>
            <div id="Landing">
                <div className={mystyle.bg}>
                    <h3 className={mystyle.test}>Hi, I am Ezz </h3>
                </div>

            </div>

        </>
    }
}