import React, { useRef, useState } from 'react'
import logo from '../image/checklist.gif';




const Todo = () => {


    const [inputVal, setInputVal] = useState("")
    const [eachItem, setEachItems] = useState([])


    const handleclick = () => {
        const myprvItem = [...eachItem, inputVal]
        setEachItems(myprvItem)
        setInputVal("")
    }

    const name = useRef(null)

    const UseRefe = () => {
        if (!name.current.value) {
            alert("plz fill the data")
        } else {
            handleclick()
        }
    }

    const removeAll = () => {
        setInputVal("")
        setEachItems([])
    }
    const remove_one = (id) => {

        const remove_item = eachItem.filter((curEle, ind) => {
            return ind !== id
        })
        setEachItems(remove_item)

    }



    return (
        <>
            <div className='main_div'>
                <img className='logoimg' src={logo} alt="#" />
            </div>
            <div className='text_div'><h2>My Todo App</h2></div>

            <div className='input_field'>
                <input type="text" placeholder='AddItem' onChange={(e) => { setInputVal(e.target.value) }} autoComplete='off' value={inputVal} ref={name} />

                <div className='btnContainer'>
                    <button className='btn_style' onClick={UseRefe}>Add</button>

                </div>
            </div>


            {eachItem.map((curEle, ind) => {
                return (
                    <>


                        <div className='showItems'>
                            <div className='eachItem'>
                                <div className='showItem'>
                                    <h3>
                                        {curEle}
                                    </h3>

                                    <div>
                                        <button onClick={() => { remove_one(ind) }} className='btn' >X</button>
                                    </div>






                                </div>
                            </div>
                        </div>



                    </>
                )
            })}
            <div className='main_btn'>
                <button className='btn_styl' onClick={removeAll}>Remove All</button>
            </div>


        </>
    )
}

export default Todo