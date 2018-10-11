import React, { Component } from 'react'
import axios from 'axios'

export default class KidForm extends Component {

    state = {
        name: this.props.kid.name,
        age: this.props.kid.age
    }

    handleChange = name => (e) => {
        this.setState({ [name]: e.target.value })
    }

    handleSubmit = () => {
        const { name, age } = this.state
        const { parent, kid } = this.props
        const payload = { name, age }
        axios.put(`/api/parents/${parent.id}/kids/${kid.id}}`, payload)
    }

    render() {
        const { name, age } = this.state
        const { parent, kid } = this.props
        console.log(parent, kid)
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
                    <button className='btn btn-primary'>Submit</button>
                </form>

            </div>
        )
    }
}
