import React, { Component } from 'react';
import axios from 'axios';
import List from './components/List'
import Form from './components/Forms'


class App extends Component {
  constructor(){
    super()
    this.state = {
        todos: [],
        title: "",
        description: "",
        imgUrl: ""
    }
  }

  // Fetch the data when the page is ready for it
  componentDidMount(){
    axios.get("https://api.vschool.io/randon/todo/")
      .then(res => {

        this.setState({
          todos: res.data
        })
      })
      .catch(err => console.log(err))
  }

  deleteItem = (id) => {
    axios.delete(`https://api.vschool.io/randon/todo/${id}`)
    .then(res => {
      this.setState(prevState => {
        const filteredArr = prevState.todos.filter(thing => {
          return id !== thing._id
        })
        return {todos: filteredArr}
    })
  })
  .catch(err => console.log(err))
}

  handleChange = (e) => {
    const {name, value} = e.target
    console.log(e.target)
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()


    const newInfo = {
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl
    }

    axios.post("https://api.vschool.io/randon/todo/", newInfo)
    .then(res => {
      this.setState(prevState => ({
        title: "",
        description: "",
        imgUrl: "",
        todos: [...prevState.todos, res.data]
      }))
    })
    .catch(err => console.log(err))
  }

  render(){
    console.log(this.state.todos)
    return (
      <div>
          <Form 
            title={this.state.title}
            description={this.state.description}
            imgUrl={this.state.imgUrl}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            
            />
          <List 
            info={this.state.todos}
            deleteItem={this.deleteItem}

           />
      </div>
    )
  }
} 


export default App;
