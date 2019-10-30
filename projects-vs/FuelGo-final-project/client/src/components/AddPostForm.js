import React, {useContext, useState} from 'react'
import {UserContext} from '../context/UserProvider.js'

function AddPostForm() {
    const { addPost } = useContext(UserContext)
    const initInputs = { title: "", imgUrl: "" }
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        addPost(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Title"    
             />
            <input 
                type="text"
                name="imgUrl"
                value={inputs.imgUrl}
                onChange={handleChange}
                placeholder="Image Url"    
            />
            <button>Submit</button>
        </form>
    )
}

export default AddPostForm