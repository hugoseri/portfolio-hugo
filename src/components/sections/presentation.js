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
                                    <img className="d-flex img_me" src="img/me_nature_medium.png" alt="me"/>
                                </div>
                                <div className="media-body">
                                    <div className="personal_text">
                                        <h6>{this.props.pres_text.hello}</h6>
                                        <h3>{this.props.basics.name}</h3>
                                        <h4>{this.props.basics.summary}</h4>
                                        <p>{this.props.basics.label}</p>
                                        <ul className="list basic_info">
                                            <li><a href="#/"><i className="lnr lnr-calendar-full"></i></a>{this.props.basics.birth.date}</li>
                                            <li><a href="#/"><i className="lnr lnr-phone-handset"></i></a>{this.props.basics.phone}
                                            </li>
                                            <li><a href="#/"><i className="lnr lnr-envelope"></i></a>{this.props.basics.email}
                                            </li>
                                            <li><a href="#/"><i className="lnr lnr-home"></i></a>{this.props.basics.location.city}, {this.props.basics.location.countryCode}
                                            </li>
                                        </ul>
                                        <ul className="list personal_social">
                                            <li><a href={this.props.pres_text.resume_path} target="_blank" rel="noopener noreferrer" id="download_cv">{this.props.pres_text.resume_button}</a></li><br/>
                                            <li><a href={this.props.basics.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                                            <li><a href={this.props.basics.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href={this.props.basics.flickr} target="_blank" rel="noopener noreferrer"><i className="fa fa-flickr"></i></a></li>
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
