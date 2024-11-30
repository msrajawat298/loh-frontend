import { HashRouter } from 'react-router-dom';
import AppRoutes from './appRoutes/AppRoutes';

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
