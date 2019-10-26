import React from 'react'

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer_area p_10">
                <div className="container">
                    <div className="col-lg-12 col-sm-12">
                        <p>
                            This website is developed in ReactJS by <a href="#">Hugo Serieys</a>.
                            <br/>
                            The template is made with <i className="fa fa-heart-o"
                                                                                aria-hidden="true"></i> by <a
                                href="https://colorlib.com" target="_blank">Colorlib</a>.
                        </p>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;
