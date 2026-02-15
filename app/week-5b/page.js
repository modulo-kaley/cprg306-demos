"use client";
import { useState } from "react";
export default function Page() {
    const userName = "Thomas O'Malley";
    //Boolean toggle
    const [isOnline, setIsOnline] = useState(false);
    const [currentUser, setCurrentUser] = useState(userName);

    function updateUserName(){
        if (currentUser === "Thomas O'Malley") {
            setCurrentUser("Duchess");
        }
        if (currentUser === "Duchess"){
            setCurrentUser("Thomas O'Malley");
        }
    }; 
    return(
        <main>
            <h1>We are on a nested route now!</h1>
            <p>Static Variable: {userName}</p>
            <p>State Variable: {currentUser}</p>
            <button onClick={updateUserName}>Swap User</button>
            <button onClick={() => setCurrentUser("Duchess")}>Set to Duchess</button>
            <div className={`p-8 text-2xl ${isOnline ? "bg-green-800" : "bg-red-800"}`}>
                {isOnline ? currentUser : "Not Online"}
            </div>
        </main>
    );
}