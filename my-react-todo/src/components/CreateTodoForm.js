import React, {Component} from 'react';

class CreateTodoForm extends Component {

	constructor(){
		super()
		this.state = {
			todo: ''
		}
	}

	onInputChange(event){
		console.log('create todo input changed')
		this.setState ({
				todo: event.target.value
			})
	}

	onFormSubmit(event){
		console.log('form submitted')
		event.preventDefault()
		let newTodo = this.state.todo
		this.props.createTodo(newTodo)
		this.setState({
			todo: ""
		})
	}

	render(){
		return(
			<div className='createForm todoForm'>
				<h2>create todo here</h2>
				<form onSubmit={event => this.onFormSubmit(event)}>
					<input
						onChange={event => this.onInputChange(event)}
						placeholder='write todo here...'
						type='text'
						value={this.state.todo} />
					<button type='submit'>create todo!</button>
				</form>
			</div>
		)
	}
}

export default CreateTodoForm