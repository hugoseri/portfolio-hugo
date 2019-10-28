import React from 'react'

class Header extends React.Component {

    componentDidMount() {
        var scrollpos = window.scrollY;
        var header = document.querySelector(".header_area");

        function add_class_on_scroll() {
            header.classList.add("navbar_fixed");
        }

        function remove_class_on_scroll() {
            header.classList.remove("navbar_fixed");
        }

        window.addEventListener('scroll', function(){
            //Here you forgot to update the value
            scrollpos = window.scrollY;

            if(scrollpos > 100){
                add_class_on_scroll();
            }
            else {
                remove_class_on_scroll();
            }
        });
    }


    render() {
        return (
            <header className="header_area" id="home">
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

                                <ul className="nav navbar-nav menu_nav nav-lg">
                                    <li className="nav-item">
                                        <a className='nav-link nav-link-lg' href="#/" onClick={() => this.props.handler("fr")}>FR</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className='nav-link nav-link-lg' href="#/" onClick={() => this.props.handler("en")}>EN</a>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    {Object.keys(this.props.nav).map(function (navigationLink, index) {
                                        const navigationName = this.props.nav[navigationLink];
                                        return (
                                            <li key={index} className="nav-item">
                                                <a className='nav-link' key={index} href={`#${navigationLink}`}>{navigationName}</a>
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
