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
                                        <h6>Hello ! Moi c'est</h6>
                                        <h3>{this.props.resume.basics.name}</h3>
                                        <h4>{this.props.resume.basics.summary}</h4>
                                        <p>{this.props.resume.basics.label}</p>
                                        <ul className="list basic_info">
                                            <li><a href="#"><i className="lnr lnr-calendar-full"></i></a>{this.props.resume.basics.birth.date}</li>
                                            <li><a href="#"><i className="lnr lnr-phone-handset"></i>{this.props.resume.basics.phone}</a>
                                            </li>
                                            <li><a href="#"><i className="lnr lnr-envelope"></i>{this.props.resume.basics.email}</a>
                                            </li>
                                            <li><a href="#"><i className="lnr lnr-home"></i>{this.props.resume.basics.location.city}, {this.props.resume.basics.location.countryCode}</a>
                                            </li>
                                        </ul>
                                        <ul className="list personal_social">
                                            <li><a href={this.props.resume.basics.github}><i className="fa fa-github"></i></a></li>
                                            <li><a href={this.props.resume.basics.github}><i className="fa fa-linkedin"></i></a></li>
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
