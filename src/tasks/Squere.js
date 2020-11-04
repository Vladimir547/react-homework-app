import React from 'react';
import './squere.css'

class Squere extends React.Component {
    state = {
        label: this.props.label,
        css: this.props.css
    }

    render () {
        return (
            <div className={`${this.state.css} general`}>
                {this.state.label}
            </div>
        );
    }
}
export default Squere;