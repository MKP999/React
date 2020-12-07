import React, { useContext } from 'react'
import { ThemContext } from '../contexts/ThemContext'

//  class ThemToggle extends Component {
//     static contextType = ThemContext
//     render() {
//         console.log(111, this.context)
//         const { toggleThem } = this.context
//         return (
//             <div>
//                 <button onClick={() => toggleThem()}>切换主题</button>
//             </div>
//         )
//     }
// }

const ThemToggle = () => {
    const { toggleThem } = useContext(ThemContext)
    return (
        <div>
                 <button onClick={() => toggleThem()}>切换主题</button>
             </div>
    )
}
export default ThemToggle