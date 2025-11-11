import '../../css/reset.css'
import '../../css/app.css'
import "../../css/responsive.css";
import { AppContext, useStore } from '../../context/AppContext';
import { LocalToastProvider } from 'react-local-toast';
import Content from '../Content';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

function NormalMode() {
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

export default NormalMode;
