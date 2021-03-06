import PropTypes from 'prop-types'
import React, { Component } from 'react';

import '../../css/InputWord.css'

class InputWord extends Component{
    
    
    constructor(props){
        super(props);
        this.state = { value : ''}
        this.refresh = props.OnChange
        console.log()
    }
 
    masque = function(value){
        return value
        
        .replace(/[^\s\w]|\d/gi, '')
        .replace(/\S/gi,'_')
    }

    onChange = ({ target: { value } }) => {
        
        if(this.state.value.length>value.length){
            value=''
        }
        this.setState({value : this.masque(value)},()=>{console.log("after masque "+value)})
        this.refresh(value.toUpperCase())
        
    }

    render(){
        const {value} = this.state
        return(
        <div className = "input">
            <input
            autoComplete= "put a word" 
            onChange = {this.onChange}
            value = {value}
            type="text"/>
         </div>
        )
    }
}




export default InputWord