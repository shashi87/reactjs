import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from './routers/AppRouter'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
