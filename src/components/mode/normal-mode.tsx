import '../../styles/tokens.css'
import '../../styles/base.css'
import '../../styles/app.css'
import { AppContext, useStore } from '../../context/AppContext'
import Rail from '../Rail'
import Hero from '../Hero'
import Ticker from '../Ticker'
import Toolkit from '../Toolkit'
import Roles from '../Roles'
import Work from '../Work'
import Contact from '../Contact'
import Footer from '../Footer'

function NormalMode() {
    const store = useStore()
    return (
        <AppContext.Provider value={store}>
            <Rail />
            <div className="shell">
                <Hero />
                <Ticker />
                <main>
                    <Toolkit />
                    <Roles />
                    <Work />
                    <Contact />
                </main>
                <Footer />
            </div>
        </AppContext.Provider>
    )
}

export default NormalMode
