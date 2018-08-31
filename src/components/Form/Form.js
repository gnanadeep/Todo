import React, { Component } from 'react';
import './Form.css'
import Display from '../Display/Display'
import Modal from '../Modal/Modal'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            arr: [],
            send: false
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        // send data from the actual state
        let data = this.state.name;
        if (data !== '') {
            this.setState({
                arr: this.state.arr.concat(data),
                send: true,
                name: ''
            })
        }
        e.target.reset();

    }

    handleChange = (e) => {
        // this.setState({ [e.target.name]: e.target.value })
        this.setState({ name: e.target.value })
    }

    handle = () => {
        this.setState({ send: false })
    }
    escFunction = (event) => {
        if (event.keyCode === 27) {
            this.setState({ send: false })
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.escFunction, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction, false);
    }
    removeList = (e) => {
        var array = [...this.state.arr]; // make a separate copy of the array
        var index = array.indexOf(e.target.value)
        array.splice(index, 1);
        this.setState({ arr: array });
        console.log(e.target.value)

    }
    render() {
        let len = this.state.arr.length;
        return (

            <div>
                <form className='form' onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <input className='search' type="text" autoComplete="off" />
                    <input className='button' type="submit" value="Submit" />
                </form>
                <Display data={this.state.arr} remove={this.removeList} />
                <Modal show={this.state.send} handleClose={this.handle}>
                    {len} <span>{len < 2 ? 'item' : 'items'}</span> rendered
                </Modal>
            </div>
        );
    }
}

export default Form