import React, { Component } from 'react'
import axios from 'axios'

export default class ParentForm extends Component {

    state = {
        name: this.props.parent.name,
        age: this.props.parent.age,
        birthday: this.props.parent.birthday
    }

    handleChange = name => (e) => {
        this.setState({ [name]: e.target.value })
    }

    handleSubmit = () => {
        const { name, age, birthday } = this.state
        const { parent, edited } = this.props
        const payload = { name, age, birthday }
        edited ?
            axios.put(`/api/parents/${parent.id}`, payload)
            :
            axios.post('/api/parents/', payload)
    }

    render() {
        const { name, age, birthday } = this.state
        return (
            <div className='container'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input value={name} onChange={this.handleChange('name')} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input value={age} onChange={this.handleChange('age')} />
                    </div>
                    <div>
                        <label>Birthday</label>
                        <input value={birthday} onChange={this.handleChange('birthday')} />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>

            </div>
        )
    }
}
