import React, { useState } from 'react'

const AddSong = ({addSong}) => {
    const [ title, setTitle ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>添加歌曲</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="提交"/>
        </form>
    )
}
export default AddSong