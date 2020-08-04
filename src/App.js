import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Test = () => (<div> testing </div>)
const Title = ({text}) => (<div>{text}</div>)

function App() {
  const [on, setOn] = useState(false);
  const [inputState, setInputState] = useState('');
  const [mainColor, setMainColor] = useState('blue')

  const handleSetOn = () => {
    setOn(!on)
  }

  const handleStrings = (string) => {
    console.log(string)
    return true
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <h3 className={mainColor}>Everyone is welcome!</h3>
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Title text="Some title" />
      <Test />
      <ul className="ul-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
      <button onClick={handleSetOn}>Click</button>
      <h2>{inputState}</h2>
      <input onChange={(e) => setInputState(e.currentTarget.value)} />
    </div>
  );
}

export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>
  }
}

export class AppClass2 extends Component {
  state = {
    lifeCycle: ''
  }
  componentDidMount() {
    console.log('Ya')
    this.setState({ lifeCycle: 'componentDidMount' })
  }

  handleStrings(string) {
    if(string !== ''){
      return true
    }
    return false
  }

  render () {
    <div>
      <h1>Yo</h1>
      <p className="lifeCycle">{this.state.lifeCycle}</p>
    </div>
  }
}
export default App;
