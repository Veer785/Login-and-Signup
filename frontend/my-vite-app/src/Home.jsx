import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() { 
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get("/")
            .then((res) => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setName(res.data.name);
                } else {
                    setAuth(false);
                    setMessage(res.data.Error || "An error occurred");
                }
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setMessage("Failed to fetch authentication status");
            });
    }, []);

    const handleLogout = () => {
       
        setAuth(false);
        setName("");
        navigate("/login"); 
    };

    return (
        <div className="container mt-4">
            {auth ? (
                <div>
                    <h3>You are Authorized, {name}</h3>
                    <button 
                        className="btn btn-danger" 
                        onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <h3>{message}</h3>
                    <h3>Login Now</h3>
                    <Link to="/login" className="btn btn-primary">
                        Login
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Home;
