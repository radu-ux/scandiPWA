import React, { Component } from 'react'

export default class ProgressBarLine extends Component {
    render() {
        const { lineType } = this.props;
        const { lineStyle } = this.state;

        return (
            <div className={`Progress-Bar-Line ${lineType}`}/>
        )
    }
}
