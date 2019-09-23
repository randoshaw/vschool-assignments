import React, { Component } from 'react';
import './styles.css'
import Die from './Die'

class DiceBox extends Component {
    constructor (){
        super()
        this.state = {
            nums: []
        }
    }

    random(count){
        let newArr = []
        for (let i = 0 ; i < count ; i++){
        newArr.push(
        Math.floor(Math.random()*6)+1
        )
        }

        const firstParam = function(currentState){
            return { nums: newArr }
        }
        
        const secondParam = function(){
            console.log('state is now set', newArr)
        }
        this.setState(firstParam, secondParam)
    }

    render(){
        return(
            <div>
                <button onClick={()=>(this.random(5))}>random</button>
                {this.state.nums}
                <Die num = {this.state.nums}/>
            </div>
        )
    }
}

export default DiceBox;