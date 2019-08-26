import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class  extends Component {
  constructor(){
    super()
    this.state ={
        product: [],
        name: '',
        price:'',
        image:''
    }
}


render(){
    return (
        <div className='Dash'>
      <div className='Product'>
        <div className='product_img'></div>
        <div className='product_box'>
          <p className='product_title'></p>
          <p className='product_price'>
          </p>
        </div>
      </div>
      </div>
    )
}
}
