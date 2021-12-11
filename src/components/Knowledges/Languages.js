import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        Languages: [
            { id: 1, value: "Javascript", xp: 0.9 },
            { id: 2, value: "CSS", xp: 0.7 },
            { id: 3, value: "Html", xp: 0.8 },
            { id: '', value: "C++", xp: 0.8 }
        ],
        frameworks: [
            { id: 1, value: "React", xp: 0.8 },
            { id: 2, value: "Sass", xp: 0.8 },
            { id: 3, value: "Bootstrap", xp: 0.8 },
            { id: 4, value: "Material UI", xp: 0.8 }
        ]
    }
    render() {
        let { Languages, frameworks } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={Languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliothèque"
                    className="frameworksDisplay"
                />

            </div>
        );
    }
}

export default Languages;