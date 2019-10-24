import React from 'react'

import {navigation} from "../index";
import resume from "../resume_fr.json"

import Section from './sections'

/*
import Navigation './navigation'
import Banner './banner'
import ScrollDown './scrolldown'
import Section './section'
import Loading './loading'
*/

class Main extends React.Component{

    onLoad() {
        return (
            <div>
                <Section
                    nav={navigation}
                    resume={resume} />
            </div>
        );
    }

    render() {
        return this.onLoad();
    }
};

export default Main;
