import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "./Login";

function Homepage() {
    return (
        <div>Homepage
            <Login />
        </div>
    );
}

export default Homepage;

