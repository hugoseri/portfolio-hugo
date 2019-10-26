import React from 'react';

class BulletPoints extends React.Component{

    render() {
        return (
            <ul className="unordered-list">
                {this.props.points.map(function (point, index) {
                    return (
                        <li key={index}>{point}</li>
                    );
                })}
            </ul>
        );
    }
};

export default BulletPoints;
