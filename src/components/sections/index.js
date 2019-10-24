import React from 'react'

import Header from './header'
import Presentation from './presentation'

class Section extends React.Component{

    render() {
        return (
            <div>
                <Header nav={this.props.nav}/>
                <Presentation resume={this.props.resume}/>
            </div>
        );
    }
};

export default Section;
