import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './appRoutes/AppRoutes';
import './components/styles/styles.scss';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
