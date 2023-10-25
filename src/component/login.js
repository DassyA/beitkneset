import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllUSER,addUser } from "../redux/action";
import BKlist from "./bklist";
import ZmanBK from "./zmanBK";


export default function Login() {
    const dispatch = useDispatch()
    const users = useSelector(stata => stata.userREDUCERSJS.USERL)
    const name = useRef()
    const city = useRef()
    const [admin, setadmin] = useState(0)
    useEffect(() => {
        debugger
        dispatch(getAllUSER())
    }, [])

    function ok1() {
        debugger
        let j = users.find(i => i.name == name.current.value && i.city == city.current.value)
        if (j != undefined) {
            debugger
            if (j.admin)
                setadmin(1)
            else
                setadmin(2)
        }
    }
    function add() {
        let i={id:5,name:name.current.value,city:city.current.value,admin:false};
        debugger
        dispatch((addUser(i)))
    }

    return (
        <>
            <input ref={name} placeholder="הכנס שם" />
            <input ref={city} placeholder="הכנס עיר" />
            <button onClick={() => ok1()}>OK---להכנס</button>
            <br></br>
            <button style={{ backgroundColor: 'green', width: '100px', height: '20px', color: 'white' }} onClick={() => add()}>הוספת לקוח</button>
            {admin == 1 &&
                <BKlist></BKlist>
            }
            {admin == 2 &&
                <ZmanBK></ZmanBK>
            }

        </>
    )
}