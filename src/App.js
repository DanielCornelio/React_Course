import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props){
//   return <h2>{props.title}</h2>
// }

// const Hello = (props)=><h2>{props.title}</h2>

class Hello extends Component{
  render(){
    return(
      <h2>{this.props.title}</h2>
    )
  }
}

class Text extends Component{
  render(){
    const seboolean = this.props.isActived ? "on" : "off"
    const mappedNumber = this.props.arrayOfNumbers.map(n => n * 2)
    return(
      <>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{seboolean}</p>
        <p>{mappedNumber.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </>
    )
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React js</h1>
          <Hello
            title="Hola por props"
          />
          <Text
            arrayOfNumbers={[2,3,10]}
            objectWithInfo={{key:"first value", key2:"second value"}}
            text="Desde componente texto"
            number = {9}
            isActived = {true}
          />
          </header>
      </div>
    );
  }
}

export default App;
