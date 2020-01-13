import React, { Component } from "react"
import "./style.css"
import Box from "./Box"

class App extends Component {
	constructor() {
		super()
		this.state = {
			boxes: ["orange", "blue", "black", "green"]
		}
	}
	handleSmallTime = () => {
		if (this.state.boxes[(1, 2, 3)] !== "white") {
			this.setState({
				boxes: ["black", "white", "white", "white"]
			})
		} else {
			this.setState({
				boxes: ["white", "black", "black", "black"]
			})
		}
	}
	handleParty = () => {
		function changeToPurple(currentColors) {
			const newState = {
				boxes: [
					"purple",
					"purple",
					currentColors.boxes[2],
					currentColors.boxes[3]
				]
			}
			return newState
		}
		this.setState(changeToPurple)
	}

	handlePro1 = () => {
		function changeToBlue(currentColors) {
			const newBoxes = {
				boxes: [
					currentColors.boxes[0],
					currentColors.boxes[1],
					"blue",
					currentColors.boxes[3]
				]
			}
			return newBoxes
		}
		this.setState(changeToBlue)
	}

	handlePro2 = () => {
		const changeToBlue = currentState => {
			const colors = [
				currentState.boxes[0],
				currentState.boxes[1],
				currentState.boxes[2],
				"blue"
			]
			const newState = { boxes: colors }
			return newState
		}
		this.setState(changeToBlue)
	}

	render() {
		return (
			<div className="container">
				{/* {Box({ num: "1", color: this.state.boxes[0] })} */}
				<Box num="1" color={this.state.boxes[0]} />
				<Box num="2" color={this.state.boxes[1]} />
				<Box num="3" color={this.state.boxes[2]} />
				<Box num="4" color={this.state.boxes[3]} />

				<button onClick={this.handleSmallTime}>DJ Smack</button>
				<button onClick={this.handleParty}>DJ Wack</button>
				<button onClick={this.handlePro1}>Pro 1</button>
				<button onClick={this.handlePro2}>Pro 2</button>
			</div>
		)
	}
}

export default App