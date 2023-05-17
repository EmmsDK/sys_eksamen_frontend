import React, {useState} from "react"
import facade from "./apiFacade";
import LogIn from "./components/LoginForm";
import LoggedIn from "./components/LoggedIn";
import {NavLink, Route, Routes} from "react-router-dom";
import RandomFact from "./components/RandomFact";
import AnimalFact from "./components/AnimalFact.jsx";
import InputFieldAnimal from "./components/InputFieldAnimal";
import InputFieldFact from "./components/InputFieldFact";

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({username: "", roles: ""});

    const logout = () => {
        facade.logout();
        setLoggedIn(false);
        setUser({name: "", roles: ""})
        window.location.replace('/');
    }

    const login = (user, pass) => {
        facade.login(user, pass).then(() => {
            const token = facade.readJwtToken(facade.getToken());
            setUser({username: token.username, roles: token.roles});
            setLoggedIn(true);
        });
    }

    const Header = () => {
        return (
            <div>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    {loggedIn &&(
                        <>
                    <li><NavLink to="/randomfact">RandomFact</NavLink></li>
                    <li><NavLink to="/animalfact">AnimalFact</NavLink></li>
                    <li><NavLink to="/profilepage">Profile</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li>
                        </>
                        )}
                </ul>
                <br/>
            </div>
        )
    }
    document.querySelectorAll('.blur').forEach(element => {
        element.addEventListener('click', () => {
            element.classList.remove('blur');
        });
    });

    const Home = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>Home</h2>
                        {!loggedIn ? (
                            <LogIn login={login}/>
                        ) : (
                            <div>
                                <h3>Here is the joke of the day:</h3>
                                <div className="joke-container">

                                    <InputFieldAnimal user={user}/>
                                </div>
                                <h3>Here is the fact of the day:</h3>
                                <div className="fact-container">
                                    <InputFieldFact user={user}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    const Logout = () => {
        return (
            <div>
                <h2>Logout</h2>
                <div>
                    <LoggedIn LoggedIn user={user} logout={logout} loggedIn={loggedIn}/>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/randomfact" element={<RandomFact/>}></Route>
                <Route path="/animalfact" element={<InputFieldAnimal/>}></Route>
                <Route path="/logout" element={<Logout/>}></Route>
                <Route path="/profilepage"
                       element={<LoggedIn user={user} logout={logout} loggedIn={loggedIn}/>}></Route>
            </Routes>
        </div>
    )
}

export default App
