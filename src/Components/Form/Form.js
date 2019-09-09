import React, { Component } from 'react';
import axios from 'axios'
import Product from '../Form/Product'
import {Link} from 'react-router-dom'


export default class Form extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            img: '',
            imgURL:'https://3ie87c2dond928rt2e2zzo8o-wpengine.netdna-ssl.com/wp-content/themes/gonzo/images/no-image-featured-image.png',
            name: '',
            price: '',
            id:0,
            edit: false
        }
    }

    componentDidMount(){
        let {id} = this.props.match.params
        console.log(id)

        if(id) {
            axios.get(`http://localhost:8080/api/product/${id}`).then(response =>{
                console.log(response)
                this.setState({
                    list: response.data,
                    
                    
                    edit: true,
                })
                this.updateState()
            
            }) .catch( (error) => {
                console.log(error)
            })
            
            
        }

    }
    updateState = ()=> {
        this.setState({
            imgURL: this.state.list.img,
            name: this.state.list.name,
            price: this.state.list.price,
            img: this.state.list.img
        })
    }
    updateImg = (e) => {

        this.setState({
            img: e.target.value,
            // imgURL: e.target.value
        
        })

    }

    updateName= (e) => {

        this.setState({
            name: e
        })


    }

    updatePrice = (e) => {
        
        this.setState({
            price: e * 1
        })

        
    }

    cancelBtn = () => {

        this.setState({
            img: '',
            imgURL:'https://3ie87c2dond928rt2e2zzo8o-wpengine.netdna-ssl.com/wp-content/themes/gonzo/images/no-image-featured-image.png',
            name: '',
            price: '',
            edit:false
        })
    }

    addItem = () => {   

        const body = {
         name: this.state.name,
         price: this.state.price,
         img: this.state.img,
         
        
        }
            axios.post('http://localhost:8080/api/product', body).then(response =>{

                this.setState({
                list: response.data
                })
                
                
                
            })
    
    this.cancelBtn()
        
        
    }
    deleteItem = (id) => {
        axios.delete(`/api/product/${id}`)
        .then(res => {
          this.props.getList(res.data)
        })
    }
    

    

    updateProduct = (id) => {
        const body = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
            
        }
        
        axios.put(`http://localhost:8080/api/product/${id}`, body).then( response => {
        
            this.setState({
                list: response.data,
                edit: false
            })
        })
        
        
        this.cancelBtn()

    }
    render() {
        console.log(this.state)
        return (
            <div className="form">
                <div className="form-container">
                <img height="150" src={this.state.imgURL} className="formImg"></img>
                <div className="inputs">
                <p>Image URL: </p>
                <input value={this.state.img} onChange={this.updateImg} type='text'></input>
                <p>Name: </p>
                <input value={this.state.name} onChange={ (e) => this.updateName(e.target.value)}></input>
                <p>Price: </p>
                <input value={this.state.price} onChange={ (e) => this.updatePrice(e.target.value)}></input>
                </div>
                <br/>
               <Link exact to='/'> <button className="formBtn1" onClick={this.cancelBtn}>Cancel</button></Link>
                

            {!this.state.edit ?
                (<Link exact to='/'><button className="formBtn" onClick={this.addItem}>Add to Inventory</button></Link>)
                :
                (<Link exact to='/'><button className="formBtn"  onClick={ () => this.updateProduct(this.state.list.id)}>Save Changes</button></Link>)

            }
            </div>
            </div>
        )
    }
}
