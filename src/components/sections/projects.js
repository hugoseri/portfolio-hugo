import React from 'react'
import Datetime from "../../utils/datetime";
import BulletPoints from "./bullet_points";


class SkillEntry extends React.Component{

    render() {

        return (
            <button className="genric-btn skill circle">{this.props.entry}</button>
        );
    }
};

class Entry extends React.Component{

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate, this.props.lg);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate, this.props.lg);
        let img = <div key={this.props.index} className="col-md-5">
                    <img src={`${this.props.entry.img}`} alt="" className="img-fluid img_project"/>
                  </div>
        let content = <div key={this.props.index + this.props.total} className="col-md-7 mt-sm-20 text_project">
                        <h3>{this.props.entry.name}</h3>
                        <h4><i>{this.props.text.date_connector_start + " " + startDate + " " + this.props.text.date_connector_end + " " + endDate}</i></h4>
                        {this.props.entry.url === "" ? (
                           <a href={this.props.entry.url} target="_blank" rel="noopener noreferrer">Github link</a>
                        ) : (null)}
                        <p>{this.props.entry.summary}</p>
                        <BulletPoints points={this.props.entry.highlights}/>
                        <div className="button-group-area">
                        {this.props.entry.skills.map(function (entry, index) {
                            return (
                                <SkillEntry key={index} index={index} entry={entry}/>
                            );
                        })}
                        </div>
                      </div>

        return (

            <div className="section-top-border">
                <div className="row content_project">
                    {this.props.index % 2 === 0 || this.state.width < 768 ? (
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
        const total = this.props.projects.length;

        return (
            <div className="whole-wrap p_100" id="projects">
                <div className="container">
                    <div className="main_title">
                        <h2>{text.title}</h2>
                    </div>
                    {this.props.projects.map(function (entry, index) {
                        return (
                            <Entry total={total} lg={lg} key={index} index={index} entry={entry} text={text}/>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Projects;
