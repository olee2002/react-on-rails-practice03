import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ParentForm from './ParentForm'
import KidList from './KidList'

export default class ParentList extends Component {

    state = {
        parents: [],
        parent: {},
        clicked: false,
        edited: false,
        showKids: false,
    }

    componentDidMount = () => {
        axios.get('/api/parents')
            .then(res => this.setState({ parents: res.data }))

    }
    handleDelete = (id) => {
        axios.delete(`/api/parents/${id}`)
            .then(res => this.setState({ parents: res.data }))
    }

    handleCreate = () => {
        this.setState({ clicked: !this.state.clicked, parent: {} })
    }

    handleEdit = (parent) => {
        this.setState({ edited: !this.state.edited, parent })
    }
    handleKids = (parent) => {
        this.setState({ showKids: !this.state.showKids, parent })
    }
    handleEmail = () => {
        const { parents } = this.state
        const clone = [...parents]
        const letterString = 'abcdefghijklmnopqrstuvw'
        const letters = letterString.split('')
        const random = []
        for (let i = 0; i < clone.length; i++) {
            for (let j = 0; j < letters.length; j++) {
                j = Math.floor((Math.random() * j * 10), 10)
                if (j < letters.length) random.push(letters[j]);
            }
            clone[i]['email'] = `${random.reverse().join('')}@helium.com`
        }
        console.log('clone', random)
        this.setState({ parents: clone })
        console.log(this.state.parents)
    }

    render() {
        const { parents, clicked, edited, parent, showKids } = this.state

        return (
            <div className='container'>
                <h2>Parent List</h2> <button onClick={this.handleEmail} className='btn btn-primary'>Generate Email</button>
                <table className='table'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Birthday</th>
                        <th>email</th>
                        <th></th>
                    </tr>
                    {parents.map(p =>
                        <tr>
                            <td> <Link to={`/parents/${p.id}`}>{p.name}</Link></td>
                            <td>{p.age}</td>
                            <td>{p.birthday}</td>
                            <th>{p.email}</th>
                            <td>
                                <button onClick={() => this.handleKids(p)} className='btn btn-info'>Show Kids</button>
                                <button onClick={() => this.handleEdit(p)} className='btn btn-info ml-2'>Edit</button>
                                <button onClick={() => this.handleDelete(p.id)} className='btn btn-danger ml-2'>Delete</button>
                            </td>
                        </tr>)}
                </table>
                <button onClick={this.handleCreate} className='btn btn-info mb-20'>Add A Parent</button>
                {clicked || edited ? <ParentForm parent={parent} edited={edited} /> : null}
                {showKids ? <KidList parent={parent} /> : null}
            </div>
        )
    }
}
