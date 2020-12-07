const { createStore } = require('redux')

// 3 初始化state
const initState = {
    todos: [],
    posts: []
}

// 2 创建 reducer 函数
function myreducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
    
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.post]
            }

        default:
            break;
    }
}

// 1 创建store
const store = createStore(myreducer)

// 订阅 监听 store
store.subscribe(() => {
    console.log('state已更新')
    console.log(store.getState())
})

// 4 触发dispatch事件 修改
store.dispatch({type: 'ADD_TODO', todo: '学习'})
store.dispatch({type: 'ADD_POST', post: '第一条博客'})