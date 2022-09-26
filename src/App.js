import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      <FunctionEvent />
      <ClassEvent />
      <Counter />
      <FunctionalCounter />
      <ConditionalComponent />
      <Product />
    </div>
  );
}

export default App;
