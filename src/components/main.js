import React from 'react'

import resume_fr from "../content/resume_fr.json"
import resume_en from "../content/resume_en.json"
import additional_text_fr from "../content/text_fr.json"
import additional_text_en from "../content/text_en.json"

import Section from './sections'

class Main extends React.Component{

    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {language: "en"}
    }

    handler(someValue) {
        this.setState({
            language: someValue
        })
    }

    render() {

        let resume = this.state.language === "en" ? resume_en : resume_fr;
        let additional_text = this.state.language === "en" ? additional_text_en : additional_text_fr;

        return (
            <div>
                <Section
                    lg={this.state.language}
                    handler={this.handler}
                    resume={resume}
                    additional_text={additional_text}/>
            </div>
        );
    }
};

export default Main;
