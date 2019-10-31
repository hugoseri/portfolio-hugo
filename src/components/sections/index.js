import React from 'react'

import Header from './header'
import Presentation from './presentation'
import Tabs from './tabs'
import Footer from './footer'
import Skills from "./skills";
import Projects from "./projects";

class Section extends React.Component{

    render() {
        return (
            <div>
                <Header handler={this.props.handler}
                        nav={this.props.additional_text.navigation}/>
                <Presentation basics={this.props.resume.basics}
                              pres_text={this.props.additional_text.presentation}/>
                <Tabs lg={this.props.lg}
                      resume={this.props.resume}
                      tabs_text={this.props.additional_text.tabs}>
                </Tabs>
                <Projects lg={this.props.lg}
                          projects={this.props.resume.projects}
                          projects_text={this.props.additional_text.projects}/>
                <Skills skills={this.props.resume.skills}
                        languages={this.props.resume.languages}
                        languages_text={this.props.additional_text.languages}
                        skills_text={this.props.additional_text.skills}/>
                <Footer/>
            </div>
        );
    }
};

export default Section;
