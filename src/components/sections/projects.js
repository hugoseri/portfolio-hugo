import React from 'react'
import Datetime from "../../utils/datetime";
import BulletPoints from "./bullet_points";

class Entry extends React.Component{

    render() {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate, this.props.lg);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate, this.props.lg);
        let img = <div className="col-md-3">
                    <img src="img/elements/d.jpg" alt="" className="img-fluid"/>
                  </div>
        let content = <div className="col-md-9 mt-sm-20">
                        <p>{this.props.text.date_connector_start + " " + startDate + " " + this.props.text.date_connector_end + " " + endDate}</p>
                        <p>{this.props.entry.summary}</p>
                        <BulletPoints points={this.props.entry.highlights}/>
                      </div>

        return (

            <div className="section-top-border">
                <h3 className="mb-30 title_color">{this.props.entry.name}</h3>
                <div className="row">
                    {this.props.index % 2 === 0 ? (
                        [img, content]
                        ) : (
                        [content, img]
                        )
                    }
                </div>
            </div>
        );
    }
};

class Projects extends React.Component{

    render() {
        const text = this.props.projects_text;
        const lg = this.props.lg;
        return (
            <div className="whole-wrap" id="projects">
                <div className="container">
                    <div className="main_title">
                        <h2>{text.title}</h2>
                    </div>
                    {this.props.projects.map(function (entry, index) {
                        return (
                            <Entry lg={lg} key={index} index={index} entry={entry} text={text}/>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Projects;
