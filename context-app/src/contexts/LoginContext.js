import React, { Component, createContext } from 'react'

export const LoginContext = createContext()

class LoginContextProvider extends Component {
    state = {
        isLogin: false
    }

    loginToggle = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render() {
        return (
            <LoginContext.Provider value={{...this.state, loginToggle: this.loginToggle}}>
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}

export default LoginContextProvider