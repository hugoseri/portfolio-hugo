import React from 'react'

import Work from './work'
import Education from './education'

class Tabs extends React.Component{

    render() {
        return (
            <section className="mytabs_area p_120" id="work_education">
                <div className="container">
                    <div className="tabs_inner">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="work-tab" data-toggle="tab" href="#work" role="tab"
                                   aria-controls="work" aria-selected="true">{this.props.tabs_text.work}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="education-tab" data-toggle="tab" href="#education" role="tab"
                                   aria-controls="education" aria-selected="false">{this.props.tabs_text.education}</a>
                            </li>
                                <div className="tab-content" id="myTabContent">
                                    <Work lg={this.props.lg} work={this.props.resume.work} text={this.props.tabs_text}/>
                                    <Education lg={this.props.lg} education={this.props.resume.education} text={this.props.tabs_text}/>
                                </div>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
};

export default Tabs;
