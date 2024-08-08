import './css/reset.css'
import './css/app.css'
import Footer from "./components/Footer";
import Content from './components/Content';
import { AppContext, useStore } from './context/AppContext';
import { LocalToastProvider } from 'react-local-toast';
import "./css/responsive.css";
import Sidebar from './components/Sidebar';

function App() {
  const store = useStore()
  return (
    <LocalToastProvider>
      <AppContext.Provider value={store}>
        <div className="app">
          <Sidebar />
          <Content />
          <Footer />
        </div>
      </AppContext.Provider>
    </LocalToastProvider>
  );
}

export default App;
