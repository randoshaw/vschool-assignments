import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

function PublicPosts(){
    const { getAllPosts, posts } = useContext(UserContext)
    // componentDidMount get request
    useEffect(() => {
        getAllPosts()
    },[getAllPosts])

    return (
        <div>
            { posts.map(post => {
                return (
                    <div key={post._id}>
                        <h1 >{post.title}</h1>
                        <img src={post.imgUrl} width={200}/>
                    </div>
                )
                }) 
            }
        </div>
    )
}

export default PublicPosts