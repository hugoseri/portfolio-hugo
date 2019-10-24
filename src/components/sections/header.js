import React from 'react'

class Header extends React.Component {

    render() {
        return (
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container box_1620">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    {Object.keys(this.props.nav).map(function (navigationLink, index) {
                                        const navigationName = this.props.nav[navigationLink];
                                        return (
                                            <li className="nav-item active">
                                                <a className='nav-link' href={navigationLink}>{navigationName}</a>
                                            </li>
                                        );
                                    }.bind(this))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    };
};

export default Header;
