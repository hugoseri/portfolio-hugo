import React from 'react'


class Entry extends React.Component{

    render() {
        return (
            <button className="genric-btn primary circle">{this.props.entry}</button>
        );
    }
};

class SkillType extends React.Component{

    render() {
        return (
            <div className="col-md-12">
                <div className="feature_item">
                    <h4>{this.props.skill_type.name}</h4>
                {this.props.skill_type.keywords.map(function (entry, index) {
                    return (
                        <Entry key={index} index={index} entry={entry}/>
                    );
                })}
                </div>
            </div>
        );
    }
};

class Skills extends React.Component{

    render() {
        const numEntries = this.props.skills.length;

        return (
            <section className="feature_area p_120" id="skill">
                <div className="container">
                    <div className="main_title">
                        <h2>{this.props.skills_text.title}</h2>
                    </div>
                    <div className="feature_inner row button-group-area">
                        {this.props.skills.map(function (skill_type, index) {
                            return (
                                <SkillType key={index} index={index} skill_type={skill_type}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
};

export default Skills;
