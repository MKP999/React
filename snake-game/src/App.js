import React, { useState, useEffect } from 'react'
import Food from './components/Food'
import Snake from './components/Snake'

const App = () => {
  // 蛇
  const [ snakeDots, setSnakeDots ] = useState([ // 
    [0, 0],
    [0, 2],
    [0, 4]
])
// 方向
const [ direction, setDirection ] = useState('RIGHT')
// 速度
const [ speed ] = useState(400)

// 键盘监听事件
const keyDown = (e) => {
    console.log(e)
    switch (e.key) {
        case 'ArrowUp':
            setDirection('UP')
            break;
        case 'ArrowLeft':
            setDirection('LEFT')
            break;
        case 'ArrowRight':
            setDirection('RIGHT')
            break;
        case 'ArrowDown':
            setDirection('DOWN')
            break;
        default:
            break;
    }
} 


// 移动
const snakeMove = () => {
    const newDots = snakeDots
    let head = newDots[newDots.length - 1]
    switch (direction) {
          case 'UP':
            head = [head[0] - 2, head[1]]
            break;
          case 'LEFT':
            head = [head[0], head[1] - 2]
            break;
          case 'DOWN':
            head = [head[0] + 2, head[1]]
            break;
          case 'RIGHT':
            head = [head[0], head[1] + 2]
            break;
          default:
              break;
      }
      newDots.push(head)
      newDots.shift()
      console.log(newDots)
      setSnakeDots(newDots)
  }

  useEffect(() => {
      document.onkeydown = keyDown
      setInterval(() => snakeMove(), speed)
  }, [])

  return (
    <div className="App">
        <div className="game-area">
          <Snake snakeDots={snakeDots} />
          <Food />
        </div>
      </div>
  )
}


export default App;
