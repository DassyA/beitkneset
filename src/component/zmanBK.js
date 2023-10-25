import React, { useEffect, useRef, useState } from 'react'
import { getAllBK, deleteBK, upDate } from '../redux/action'
import { useSelector, useDispatch } from 'react-redux'
import Details from './Details'

export default function ZmanBK() {
    const [pr, setPr] = useState({})
    const BK = useSelector(state => state.BKreducer.BKl)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBK())
    }, [])
    return (
        <>
            <h2>   BK component... </h2>
            {BK && BK.map((bk) => {
                return (
                    <>
                        <div style={{ borderBlockEndColor: '1px black solid', width: '190', height: '300px', margin: '2%', display: 'inline-block' }}>
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
                            <button onClick={() => setPr(bk)}>פרטים נוספים</button>
                        </div>
                    </>
                )
            })}
            {pr.id &&
                <Details pr={pr}></Details>
            }
        </>)
}