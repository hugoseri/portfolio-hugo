import React from 'react'


class Entry extends React.Component{

    render() {
        return (
            <button className="genric-btn primary circle">{this.props.entry}</button>
        );
    }
};

class Language extends React.Component{

    render() {
        const percent = Number(this.props.entry.percent);

        let progressBar = {
            width: `${percent}%`
        }

        return (
            <div className="skill_item">
                <h6>{this.props.entry.language} : <span className="counter">{percent}</span>%</h6>
                <div className="progress_br">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={progressBar} aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
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
                    <div className="feature_inner row button-group-area">
                        <div className="col-md-12">
                            <div className="feature_item skill_main">
                                <h4>{this.props.languages_text.title}</h4>
                                {this.props.languages.map(function (entry, index) {
                                    return (
                                        <Language key={index} index={index} entry={entry}/>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Skills;
