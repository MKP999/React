// import React, { Component } from 'react'
// import { ThemContext } from '../contexts/ThemContext'

// export default class Navbar extends Component {
//     // React 会往上找到最近的 theme Provider，然后使用它的值
//     static contextType = ThemContext
//     render() {
//         console.log(this.context)
//         const { them, lightThem, darkThem } = this.context
//         const themType = them ? lightThem : darkThem
//         return (
//             <nav className="navbar" style={{background: themType.background, color: themType.color}}>
//                 <ul>
//                     <li>HOME</li>
//                     <li>ABOUT</li>
//                     <li>CONTACT</li>
//                 </ul>
//             </nav>
//         )
//     }
// }

// class Navbar extends Component {
//     // React 会往上找到最近的 theme Provider，然后使用它的值
//     // static contextType = ThemContext
//     render() {
//         return (
//             // 使用 consumer(消费者)方法 带一函数
//             <LoginContext.Consumer>{(loginContext) => {
//                 return (
//                     <ThemContext.Consumer>{(context) => {
//                         const { isLogin } = loginContext
//                         const { them, lightThem, darkThem } = context
//                         const themType = them ? lightThem : darkThem
//                         // 最后返回 ui
//                         return (
//                             <nav className="navbar" style={{background: themType.background, color: themType.color}}>
//                                 <div>{isLogin ? '登录': '登出'}</div>
//                                 <ul>
//                                     <li>HOME</li>
//                                     <li>ABOUT</li>
//                                     <li>CONTACT</li>
//                                 </ul>
//                             </nav>
//                         )
//                     }}
//                     </ThemContext.Consumer>
//                 )
//             }}
//             </LoginContext.Consumer>
//         )
//     }
// }
import React, { useContext } from 'react'
import { ThemContext } from '../contexts/ThemContext'
import { LoginContext } from '../contexts/LoginContext'
import { NumberContext } from '../contexts/NumberContext'


const Navbar = () => {
    const { isLogin } = useContext(LoginContext)
    const { them, lightThem, darkThem } = useContext(ThemContext)
    // const { number, setNumber, addOne, addTen, addNum } = useContext(NumberContext)
    const { number, dispatch } = useContext(NumberContext)
    const themType = them ? lightThem : darkThem
    
    return (
                 <nav className="navbar" style={{background: themType.background, color: themType.color}}>
                     <div>{isLogin ? '登录': '登出'}</div>
                        {/* <div onClick={() => setNumber(number + 0.1)}>{number}</div>
                        <div onClick={() => addOne()}>{number}</div>
                        <div onClick={() => addTen()}>{number}</div>
                        <div onClick={() => addNum(100)}>{number}</div> */}
                        <div onClick={() => dispatch({type: 'ADD_NUM', num: 200})}>{number}</div>
                     <ul>
                         <li>HOME</li>
                         <li>ABOUT</li>
                         <li>CONTACT</li>
                     </ul>
                 </nav>
    )
}

export default Navbar 