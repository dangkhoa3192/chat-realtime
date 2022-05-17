import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from './pages/Profile';
import { auth } from './firebase';
import AuthProvider from './context/auth';

function App() {
	return (
        <AuthProvider>
			<BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter> 		
        </AuthProvider>
	);
}

export default App;
