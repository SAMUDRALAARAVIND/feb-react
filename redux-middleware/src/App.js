
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App-header">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
