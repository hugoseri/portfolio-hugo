import React from 'react'

import Work from './work'

class Tabs extends React.Component{

    render() {
        return (
            <section className="mytabs_area p_120">
                <div className="container">
                    <div className="tabs_inner">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                   aria-controls="home" aria-selected="true">{this.props.tabs_text.work}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                   aria-controls="profile" aria-selected="false">{this.props.tabs_text.education}</a>
                            </li>
                                <div className="tab-content" id="myTabContent">
                                    <Work work={this.props.resume.work} text={this.props.tabs_text}/>
                                </div>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
};

export default Tabs;
