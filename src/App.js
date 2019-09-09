import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import routes from './routes'
import Form from './Components/Form/Form'

export default class App extends Component{
  
render(){
    return (

      <div className='App'>
        <nav className='nav'>
          <Header/>
          {/* <Dashboard product={this.state.product} getProduct={this.componentDidMount} updateProduct={this.componentDidUpdate}/>
          <Form getProduct={this.componentDidMount}/> */}
    
    </nav>
    {routes}
    </div>

  );
    }
  }
