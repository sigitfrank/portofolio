import './css/reset.css'
import './css/app.css'
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Content from './components/Content';
import { AppContext, useStore } from './context/AppContext';
import "./css/responsive.css";
import QuickScroll from './components/QuickScroll';

function App() {
  const store = useStore()
  return (
    <AppContext.Provider value={store}>
      <div className="app">
        <QuickScroll />
        <Navigation />
        <Content />
        <Footer />

      </div>
    </AppContext.Provider>
  );
}

export default App;
