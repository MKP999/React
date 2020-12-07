import React, { Component, createContext } from 'react'

// 创建 context上下文
export const ThemContext = createContext()

class ThemContextProvider extends Component {
    state = {
        them: true,
        lightThem: {background: '#333', color: '#fff'},
        darkThem: {background: '#fff', color: '#333'}
    }

    toggleThem = () => {
        this.setState({
            them: !this.state.them
        })
    }

    render() {
        return (
            // 使用 Provider提供给子组件 数据
            <ThemContext.Provider value={{...this.state, toggleThem: this.toggleThem}}>
                {/* 包裹子组件 */}
                {this.props.children}   
            </ThemContext.Provider>
        )
    }
}

export default ThemContextProvider
