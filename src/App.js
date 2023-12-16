import "./App.css"
import MyNav from "./components/MyNav"
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Main from "./components/Main"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <>
            <MyNav />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Main />} />
            </Routes>
        </>
    )
}

export default App
