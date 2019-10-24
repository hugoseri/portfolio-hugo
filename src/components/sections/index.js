import React from 'react'

import Header from './header'
import Presentation from './presentation'
import Tabs from './tabs'
import Footer from './footer'

class Section extends React.Component{

    render() {
        return (
            <div>
                <Header nav={this.props.additional_text.navigation}/>
                <Presentation basics={this.props.resume.basics}
                              pres_text={this.props.additional_text.presentation}/>
                <Tabs resume={this.props.resume}
                      tabs_text={this.props.additional_text.tabs}>
                </Tabs>
                <Footer/>
            </div>
        );
    }
};

export default Section;
