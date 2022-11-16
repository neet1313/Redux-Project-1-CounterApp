import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
function App() {
  const authenticate = useSelector(state => state.authentication.isAuthenticated);
  return (
    <>
      <Header />
      {!authenticate && <Auth />}
      {authenticate && <Counter />}
    </>
  );
}

export default App;
