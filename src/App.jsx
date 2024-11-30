import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './appRoutes/AppRoutes';

const App = () => {
  return (
    <BrowserRouter basename="/react-vite-starter-app-template">
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
