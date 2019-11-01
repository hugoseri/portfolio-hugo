import React from 'react'

class Entry extends React.Component{

    render() {
        return (
            <div className="col-lg-4 col-md-6">
                <div className="feature_item">
                    <i className={`la la-${this.props.entry.img}`}></i>
                    <h4>{this.props.entry.name}</h4>
                    <p>{this.props.entry.summary}</p>
                </div>
            </div>
        );
    }
};

class HobbyType extends React.Component {

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                {this.props.type.map(function (entry, index) {
                    return (
                        <Entry key={index} index={index} entry={entry}/>
                    );
                })}
            </div>
        )
    }
}

class Hobbies extends React.Component{

    render() {

        const hobbies_subtitles = this.props.hobbies_text.subtitles;

        return (


            <section id="hobbies" className="p_100">
                <div className="container">
                    <div className="main_title">
                        <h2>{this.props.hobbies_text.main_title}</h2>
                    </div>
                    <div className="feature_inner row">
                        {this.props.hobbies.map(function (type, index) {
                            return (
                                <HobbyType key={index} title={hobbies_subtitles[index]} index={index} type={type}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
};

export default Hobbies;
