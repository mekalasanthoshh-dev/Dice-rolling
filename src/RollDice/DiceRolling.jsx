import React, { useState } from 'react'
import '../RollDice/DiceRolling.css'
const DiceRolling = () => {
    const [firstdice, setFirstDice] = useState(6);
    const [seconddice, setSecondDice] = useState(6);
    
    const rollbtn = () => {
        setFirstDice(Math.floor(Math.random() * 6) + 1);
        setSecondDice(Math.floor(Math.random() * 6) + 1); 
    }
    const renderDot = (number) => {
       return Array.from({length:number}, (_, index) => {
        return(
            <div className='dot' key={index}></div>
        )
       })
    }
    
    return(
        <>
        <div className="dice-container">
        <h1 className='title'>Dice Rolling</h1>
       
        <div className="roll-card">                
            {/* first dice */}
            <div className="roll-box">
            {renderDot(firstdice)}
            </div>
            
            {/* second dice */}
            <div className="roll-box">
            {renderDot(seconddice)}
            </div>
        </div>
        
        {/* button */}
        <div className="roll">
        <button type='button' className='button rollbtn' onClick={rollbtn}>Dice Roll</button>
        </div>
        
        {/* total */}
        <h2 className='total' style={{"marginTop":"20px"}}>Total Count: {firstdice + seconddice}</h2>
        
        </div>
        
        </>
    )
}
export default DiceRolling