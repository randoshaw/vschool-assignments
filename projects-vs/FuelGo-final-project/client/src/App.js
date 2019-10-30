import React, { useContext } from 'react'
import Auth from './components/Auth.js'
import Navbar from './components/Navbar.js'
import PublicPosts from './components/PublicPosts.js'
import Profile from './components/Profile.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './context/UserProvider.js'
import AddPostPage from './components/AddPostPage.js'
import ProtectedRoute from './shared/ProtectedRoute.js'


function App(){
    const { token, logout } = useContext(UserContext)
    return (
        <div>
            { token && <Navbar logout={logout}/> }
            <Switch>
                <Route 
                    exact path="/" 
                    render={rProps => token ? 
                                <Redirect to="/public"/> 
                                : <Auth {...rProps}/> 
                            }/>
                <ProtectedRoute 
                    path="/public"
                    component={PublicPosts}
                    redirectTo="/"
                />
                <ProtectedRoute 
                    path="/profile"
                    component={Profile}
                    redirectTo="/"
                />
                <ProtectedRoute 
                    path="/addpost"
                    component={AddPostPage}
                    redirectTo="/"
                />
            </Switch>
        </div>
    )
}

export default App