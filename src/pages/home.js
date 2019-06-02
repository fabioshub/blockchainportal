import React, { Component } from 'react';
import Axios from 'axios';


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            shit: undefined
        }
    }

    getApi = () => {
        Axios.get('http://localhost:5005/api/data/getcurrentchain').then(res => {
            console.log(res)
        }
        )
    }

    render() {
        return (
            <div>
                {/* //TODO different home page component like nav and page */}
                <button onClick={() => { this.getApi() }}>press me for cors shit</button>
                {this.state.shit}
            </div>
        );
    }
}