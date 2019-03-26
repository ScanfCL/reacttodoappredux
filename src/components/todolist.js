import React, { Component } from "react";
import Header from '../components/Header';
import '../App.css';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {text:''}
        this.updateText = this.updateText.bind(this)
        this._handleKeyPress = this._handleKeyPress.bind(this)
    }

    updateText(event){

        this.setState({text:event.target.value})
    }

    submit(){
        this.props.enterText(this.state.text)
    }

    _handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.submit()
        }
    }
    

render(){
    return(
        <div className="container">
            <div className="row">
                <Header/>
            </div>
            <div className="inputCenter mt-2">
                <input className="title mr-3 p-2 col-md-8" onChange={this.updateText} onKeyPress={this._handleKeyPress}/>
                <button className="title btn btn-success" onClick={()=>{this.submit()}}>เพิ่มข้อมูล</button>
            </div>
            <div>
                <h3 className="mt-5 text-primary text-center title">Todo list is below:</h3>
            </div>
            {this.props.inputText.inputText.map((son,i) => {     
                console.log(son);  
                return(
                        <div className="row mt-2">
                            <h2 className="title col-md-6 text-left mr-2">{son}</h2>
                            <button className="btn btn-primary title col-md-2 mr-2" variant="outline-danger" onClick={()=>{this.props.deleteText(i)}}>DELETE</button>
                            <button className="btn btn-danger title col-md-2" variant="outline-primary" onClick={()=>{this.props.editText(this.state.text,i)}}>EDIT</button>
                        </div>)       
                
                
           // Return the element. Also pass key     
          
            })}

            {console.log(this.props)}
        </div>
    )
}
}
export default Todo