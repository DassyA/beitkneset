import React, { useEffect, useRef, useState } from 'react'
import { getAllBK, deleteBK, upDate } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import Details from './Details'

export default function BKlist() {
    
    const BK = useSelector(state => state.BKreducer.BKl)
    const dispatch = useDispatch()
    const [Edit, setEdit] = useState(false)
    const [Bk, setBk] = useState()
    const [pr, setPr] = useState()
    const sh=useRef()
    const mi=useRef()
    const ar=useRef()

    useEffect(() => {
        debugger
        dispatch(getAllBK())
    }, [])
    function upDate1(bk) {
     setEdit(true)
     setBk(bk)

    }
    function OK() {
        debugger
       let temp={id:Bk.id,name:Bk.name,ZmaneyTfilot:
         [
            { "tfila": "Shacharit", "time": sh.current.value
            },
            { "tfila": "Mincha", "time": mi.current.value
            },
            { "tfila": "Arvit", "time": ar.current.value
            }
        ]
    };    
    setEdit(false)
        dispatch(upDate(temp))
    }
    function deleteBK1(bk) {
        dispatch(deleteBK(bk))
    }

    return (
        <>
            <h2>   BK component... </h2>
            {BK && BK.map((bk) => {
                return (
                    <>
                        <div style={{ borderBlockEndColor: '1px black solid', width: '190', height: '300px', margin: '2%', display: 'inline-block' }}>
                            <button style={{ backgroundColor: 'red', width: '50px', height: '20px', color: 'white' }} onClick={() => deleteBK1(bk.id)}>delete</button>
                            <button style={{ backgroundColor: 'green', width: '50px', height: '20px', color: 'white' }} onClick={() => { upDate1(bk)}}>edit</button>
                            <p>name:{bk.id}</p>
                            <p>price:{bk.name}</p>
                            {bk.ZmaneyTfilot && bk.ZmaneyTfilot.map((z) => {
                                return (<>
                                    <p> {z.tfila}</p>
                                    <p> {z.time}</p>
                                </>
                                )
                            }
                            )}
                            <button onClick={()=>setPr(bk)}>פרטים נוספים</button>
                        </div>
                    </>
                )
            })}
          
            {pr &&
            <Details props={pr}></Details>
            }
            {Edit &&
                <div>
                    <input ref={sh} placeholder="הכנס זמן לתפילת שחרית" />
                    <input ref={mi} placeholder="הכנס זמן לתפילת מנחה" />
                    <input ref={ar} placeholder="הכנס זמן לתפילת ערבית" />
                    <button onClick={()=>OK()}>עדכן</button>
                </div>}  </>)
}