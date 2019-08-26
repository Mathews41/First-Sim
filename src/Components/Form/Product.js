import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Product extends Component {
    constructor(){
        super()
        this.state = {
          edit: false,
          editName: '',
          editPrice: '',
          editImage: '',
        
      }
  }
  
  handleToggle = () => {
      this.setState({
          edit: !this.state.edit
      })
  }

  
  handleInput = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleUpdateProduct = (id) => {
      console.log(id)
      let updatedProduct = {
          id,
          name: this.state.editName,
          price: this.state.editPrice,
          image: this.state.editImage
      }
      axios.put(`/api/product/${id}`, updatedProduct)
      .then(res => {
          this.props.updateProduct(res.data)
          this.handleToggle()
      })
  }

  handleDeleteProduct = () => {
      axios.delete(`/api/product/${this.props.product.id}`)
      .then(res => {
          this.props.deleteProduct(res.data)
          if(this.state.edit){
          this.handleToggle()
          }
      })
      .catch(error => {
          console.log (error)
      })
  }

    
    
  render(){
    return(
        <div className='Product'>
        <img className='product_img' ></img>
        <div className='product_box'>
          <p className='product_title'></p>
          <p className='product_price'>
          </p>
        </div>
        <img src = {this.props.product.image} alt = 'products'/>
        <Link to='/Add'><button className='editbutton' onClick= {() => this.handleUpdateProduct(this.props.product.id)(this.handleToggle)}>Edit</button></Link>
        <button className='deletebutton' onClick = {this.handleDeleteProduct(this.props.product.id)}>Delete</button>
      </div>
    
    )
}
}
