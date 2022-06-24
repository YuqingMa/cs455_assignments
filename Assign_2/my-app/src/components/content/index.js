import { useSelector } from 'react-redux';
import {useState} from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import PopUp from './modal'
import { dishAdd } from '../../actions/dishes';

export default function Content(){
    const list = useSelector((state) => state.recipe)
    console.log(list)
    const [name,setName] = useState('')
    const [disc,setDisc] = useState('')
    const [instruction,setInstruction] = useState('')
    const [isModal,setisModal] = useState(false)
    const [current,setCurrent] = useState('')
    const dispatch =useDispatch();
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleDiscChange  = (e) => {
        setDisc(e.target.value)
    }
    const handleInstChange  = (e) => {
        setInstruction(e.target.value)
    }
    const handleAdd  = (e) => {
        dispatch(dishAdd(name,disc,instruction))
        console.log("fdjks")
        
    }
    const handleClear = (e) =>{
        setName('')
        setDisc('')
        setInstruction('')
    }
    
    
    return(
        
        <div>
        <ul>
            {list.map((item) => (
                <div>
                <li key={item.id}>
                <p>{item.dishName}</p>
                <p>{item.disc}</p>
                <p>{item.instruction}</p>
                <button onClick={()=>{
                    setisModal(true)
                    setCurrent(item)
                }}>Details</button>
                
                </li>
                </div>
            ))
            }
            
        </ul>
        
        <div>
        <label>Title: </label> <input id="title" value={name} onChange={handleChange}/>
        <label>Ingredients:  </label><input id="ingre" value={disc} onChange={handleDiscChange}/>
		<label>Instructions: </label><input id="discrip" value={instruction} onChange={handleInstChange}/>
        <button onClick={event=>handleAdd(event)}>Add</button> 
		<button onClick={event=>handleClear(event)}>Clear</button> 
        </div>
        <PopUp 
        isModal = {isModal}
        item = {current}
        setModal = {setisModal}
        />
        </div>

        
    )
}
