import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header'
import Home from '../components/Home';
import AllPosts from '../components/Posts/AllPosts';
import CreatePost from '../components/Posts/CreatePost';
import AboutPage from '../components/About';
import Contact from '../components/Contact';
import FullPost from '../components/Posts/FullPost';
import NotFound from '../components/NotFound';
import Register from '../components/Register';
import Login from '../components/Login';
import Logout from '../components/Logout'
import Profile from '../components/ProfilePage';
import editProfile from '../components/ProfilePage/editProfile';
import editPost from '../components/Posts/FullPost/editPost';
import Search from '../components/Posts/Search';
import Loader from '../components/Loader';
import Notifications from 'react-notify-toast'

// import { AuthContextProvider } from '../../context'
import { AuthContextProvider } from '../../src/components/context/index'



const MyPosts = React.lazy(() => import('../components/Posts/MyPosts'));


const Navigation = () => {
    return (
        <Router>
            <AuthContextProvider>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/editProfile" component={editProfile} />
                    <Route path="/all" component={AllPosts} />
                    <Route path="/myPosts">

                        <React.Suspense fallback={<Loader isLoading={true} />}>
                            <MyPosts></MyPosts>
                        </React.Suspense>

                    </Route>
                    <Route path="/post/:id" component={FullPost} />
                    <Route path="/createPost" component={CreatePost} />
                    <Route path="/editPost/:id" component={editPost} />
                    <Route path="/search" component={Search} />
                    <Route component={NotFound} />
                </Switch>

                <Notifications options={{top:'50px'}} />
                
            </AuthContextProvider>
        </Router>
    );
}

export default Navigation;