import React from 'react'

import resume from "../resume_fr.json"
import additional_text from "../text_fr.json"

import Section from './sections'

class Main extends React.Component{

    render() {
        return (
            <div>
                <Section
                    resume={resume}
                    additional_text={additional_text}/>
            </div>
        );
    }
};

export default Main;
