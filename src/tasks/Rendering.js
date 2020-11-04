import React from 'react';


class Rendering extends React.Component {

    state = {
        isSignedIn: false,
    }
    changeSignIn = () => {
        setTimeout (() => {
            this.setState({isSignedIn: !this.state.isSignedIn});
        }, 3000)
    }

    render () {
        return (
            <div>
                {!this.state.isSignedIn ? <button onClick={this.changeSignIn}>Sign in</button> : <p onClick={this.changeSignIn}>Hullo user</p>}
            </div>
        );
    }
}
export default Rendering;