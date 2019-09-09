import React, { Component } from 'react'
import Product from'../Form/Product'
import axios from 'axios'



export default class Dashboard extends Component {

    constructor(){
        super()
        this.state = {
          product:{},
          list: [],
          id: '',
          img: '',
          name: '',
          price: ''
        }

      }

    
      componentDidMount(){
        this.getList()
        
      }
      getList = () => {
        
        
        axios.get('http://localhost:8080/api/product').then(response => {
          
          this.setState({
            list: response.data
            
          })
        })
      }
      handleDelete = (id) => {
        axios.delete(`/api/product/${id}`)
        .then(res => {
          this.props.getList(res.data)
        })
      }

   
    render() {
        
        const mappedList = this.state.list.map((list, index)=>{

        return(
            <Product key={index} list={list} deleteProduct={this.handleDelete} setId={this.props.setId} getList={this.getList}/>
            )
          })


        return (
            <div>
            
                {mappedList}
               
            </div>
        )
    }
}