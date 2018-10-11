import React, { Component } from 'react'
import axios from 'axios'

export default class ParentPage extends Component {

    state = {
        parent: {}
    }

    componentDidMount = () => {
        const id = this.props.match.params.parentId
        axios.get(`/api/parents/${id}`)
            .then(res => this.setState({ parent: res.data }))
    }

    render() {
        const { parent } = this.state

        return (
            <div>
                <div>Name: {parent.name}</div>
                <div>Age:{parent.age}</div>
                <div>Birthday:{parent.birthday}</div>
            </div>
        )
    }
}
