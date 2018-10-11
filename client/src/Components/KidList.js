import React, { Component } from 'react'
import axios from 'axios'

import KidForm from './KidForm'

export default class KidList extends Component {

    state = {
        kids: [],
        kidEdited: false
    }

    componentDidMount = () => {
        axios.get(`/api/parents/${this.props.parent.id}/kids`)
            .then(res => this.setState({ kids: res.data }))
    }

    handleDelete = (id) => {
        axios.delete(`/api/parents/${this.props.parent.id}/kids/${id}`)
            .then(res => this.setState({ kids: res.data }))
    }

    handleEdit = (kid) => {
        this.setState({ kidEdited: !this.state.kidEdited, kid })
    }

    render() {
        const { kids, kid, kidEdited } = this.state
        const { parent } = this.props
        return (
            <div>
                <h5>Kid List</h5>
                <table className='table'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                    {kids.map(k =>
                        <tr>
                            <td>{k.name}</td>
                            <td>{k.age}</td>
                            <td>
                                <button onClick={() => this.handleEdit(k)} className='btn btn-info ml-2'>Edit</button>
                                <button onClick={() => this.handleDelete(k.id)} className='btn btn-danger ml-2'>Delete</button>
                            </td>
                        </tr>)}
                </table>
                {kidEdited ? <KidForm parent={parent} kid={kid} /> : null}
            </div>
        )
    }
}
