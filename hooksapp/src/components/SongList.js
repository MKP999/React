import React, { useState, useEffect } from 'react'
import AddSong from './AddSong'

const SongList = () => {
    const [ songs, setSongs ] = useState([
        {title: '金曲', id: 1},
        {title: '烂曲', id: 2},
        {title: '好曲', id: 3}
    ])

    const addSong = (title) => {
        setSongs([...songs, {title, id: Math.floor(Math.random() * 10000)}])
    }

    useEffect(() => {
        console.log('useEffect 运行。。。', songs)
    }, [])

    return (
        <div>
            <ul>
                {songs.map(item => {
                    return (
                        <li key={item.id}>{item.title}</li> 
                    )
                })}
            </ul>
            <AddSong addSong={addSong} />
        </div>
    )
}
export default SongList