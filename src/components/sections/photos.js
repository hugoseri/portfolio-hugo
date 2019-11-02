import React from "react";


class Photos extends React.Component{

    render() {

        return (
            <section id="photos" className="home_gallery_area p_120">
                <div className="container">
                    <div className="main_title">
                        <h2>{this.props.photos_text.title}</h2>
                        <p>{this.props.photos_text.link_text}</p>
                    </div>
                    <div className="gallery_f_inner">
                        <div className="row gallery-item">
                            {this.props.photos_text.names.map(function (name, index) {
                                return (
                                    <div key={index} className=" col-lg-4">
                                        <div key={index} alt={name} className="single-gallery-image" style={{background: `url(img/gallery/${name}.jpg`}}></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Photos;
