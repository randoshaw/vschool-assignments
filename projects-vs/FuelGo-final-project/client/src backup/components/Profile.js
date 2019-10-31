import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

function Profile(){
    const {getUserPosts, userPosts} = useContext(UserContext)
    // componentDidMount get request
    useEffect(() => {
        getUserPosts()
    }, [getUserPosts])

    return(
        <div>
            { userPosts.map(post => {
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

export default Profile