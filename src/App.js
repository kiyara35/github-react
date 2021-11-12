import React, {useState} from 'react';
import {API} from "./config/config"
import './App.css'
import Output from "./components/Output"

const App = () => {
    const [user, setUser] = useState('')
    const [data, setData] = useState([])

    const getUsers = async () => {
        const req = await fetch(API + user)
        const res = await req.json()
        console.log(res)
        setData(res)
        setUser('')

    }


    return (
        <div>
            <form action="">
                <input
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    type="text"/>

                <button
                    onClick={(event) => getUsers(user,event.preventDefault())}
                >
                    Search User
                </button>
            </form>

                <Output data={data}/>





        </div>
    );
};

export default App;