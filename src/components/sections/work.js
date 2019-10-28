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

    render() {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate, this.props.lg);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate, this.props.lg);

        return (

            <li>
                <span></span>
                <div className="media col-md-12">
                    <div className="d-flex col-md-6">
                        <p>{this.props.text.date_connector_start + " " + startDate + " " + this.props.text.date_connector_end + " " + endDate}</p>
                    </div>
                    <div className="media-body col-md-6 button-group-area">
                        <h4>{this.props.entry.company}</h4>
                        <h3>{this.props.entry.position}</h3>
                        <p>{this.props.entry.summary}</p>
                        <BulletPoints points={this.props.entry.highlights}/>
                        {this.props.entry.skills.map(function (entry, index) {
                            return (
                                <SkillEntry key={index} index={index} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </li>
        );
    }
};

class Work extends React.Component{

    render() {
        const numEntries = this.props.work.length;
        const text = this.props.text;
        const lg = this.props.lg;
        return (
            <div className="tab-pane fade show active" id="work" role="tabpanel" aria-labelledby="home-tab">
                <ul className="list">
                    {this.props.work.map(function (entry, index) {
                        return (
                            <Entry lg={lg} key={index} index={index} total={numEntries} entry={entry} text={text}/>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default Work;
