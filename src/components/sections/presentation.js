import React from 'react'

class Presentation extends React.Component {

    render() {
        return (
            <section className="home_banner_area">
                <div className="container box_1620">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="banner_content">
                            <div className="media">
                                <div className="d-flex">
                                    <img className="d-flex" src="img/personal.jpg" alt="me"/>
                                </div>
                                <div className="media-body">
                                    <div className="personal_text">
                                        <h6>{this.props.pres_text.hello}</h6>
                                        <h3>{this.props.basics.name}</h3>
                                        <h4>{this.props.basics.summary}</h4>
                                        <p>{this.props.basics.label}</p>
                                        <ul className="list basic_info">
                                            <li><a href="#"><i className="lnr lnr-calendar-full"></i></a>{this.props.basics.birth.date}</li>
                                            <li><a href="#"><i className="lnr lnr-phone-handset"></i>{this.props.basics.phone}</a>
                                            </li>
                                            <li><a href="#"><i className="lnr lnr-envelope"></i>{this.props.basics.email}</a>
                                            </li>
                                            <li><a href="#"><i className="lnr lnr-home"></i>{this.props.basics.location.city}, {this.props.basics.location.countryCode}</a>
                                            </li>
                                        </ul>
                                        <ul className="list personal_social">
                                            <li><a href={this.props.basics.github}><i className="fa fa-github"></i></a></li>
                                            <li><a href={this.props.basics.github}><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

export default Presentation;
