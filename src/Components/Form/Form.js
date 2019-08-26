import React, { Component } from 'react';
import axios from 'axios'
import Product from '../Form/Product'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';

export default class Form extends Component {
    constructor(){
        super()
        this.state ={
            product: [],
            name: '',
            price:'',
            image:''
        }
    }
    componentDidMount =()=>{
        axios.get('/api/product')
        .then (res =>{
            this.setState({
            product: res.data
        })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    handleName(value) {
        this.setState({
            name: value,
        })
    }
    handlePrice(value) {
        this.setState({
            price: value,
        })
    }
    handleImage(value) {
        this.setState({
            image: value,
        })
    }
    handleAddProduct = () => {
        axios.post('/api/product', {name: this.state.name, price: this.state.price, image: this.state.image})
        .then(res => {
            this.setState({
                product: res.data
            })
        })
        this.setState({name:''})
        this.setState({price:''})
        this.setState({image:''})
    }
    handleDeleteProduct = (data) => {
        this.setState({
            product: data
        })
    }
    updateProduct = (data) => {
        this.setState({
            product: data
        })
    }
    clearP = () => {
        const inputs = document.getElementsByTagName("input");
        for(let i=0;i<inputs.length;i++)
        inputs[i].value = '';
    }


    render(){
        console.log(this.state)
        const mappedProduct = this.state.product.map((product, i) => {
            return(
                <Product key = {i} product = {product} updateProduct = {this.updateProduct} deleteProduct = {this.handleDeleteProduct}/>
            )
        })

    return (
        <div className="Form">
           
      {/* <div className='form_img_preview'></div>
      <p>Image URL</p> */}
      
      <input type='text' placeholder = 'Enter URL' onChange = {(e) =>
        this.handleImage(e.target.value)} value = {this.state.image}/>
    <input placeholder = 'Enter Product Name' onChange = {(e) =>
        this.handleName(e.target.value)} value = {this.state.name}/>
    <input placeholder = 'Enter Price' onChange = {(e) =>
        this.handlePrice(e.target.value)} value = {this.state.price}/>
    <div className='form_button_box'>
        <button onClick={ this.clearP }>Cancel</button>
        <Link to='/Add'> <button onClick = {this.handleAddProduct}>Add to Inventory</button></Link>
        </div> 
        {mappedProduct}
    </div>
    )
    }
}