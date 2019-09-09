import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Product extends Component {
    constructor(){
        super()
        this.state = {
          product:{},
          list:[],
          id: '',
          img: '',
          name: '',
          price: ''
      }
  }
  
  handleDeleteProduct = (id) => {
      console.log(id)
      axios.delete(`http://localhost:8080/api/product/${id}`)
      .then(res => {
         this.setState({
             list: res.data
         })
         this.props.getList()
          })
        }
      
    
    
  render(){
      const {name,price,img,product_id} = this.props.list
      return (
        <div className="products">
        <div className="product-container">
            <div>
            <img src={img} height="100" alt={name} className="prodImg"></img>
            </div>
            <div>
                <div className="titlePrice">
            <p className="title">{name}</p>
            <p className="price">${price}</p>
            </div>

            <Link exact to='/'><button className="prodBtn" onClick={ () => this.handleDeleteProduct(product_id)}>Delete</button></Link>
            <Link to={`/edit/${this.props.list.product_id}`}><button  className="prodBtn2" >Edit</button> 
            </Link>
            </div>
        </div>
        </div>
    )
}
}