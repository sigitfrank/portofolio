import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import './styles/tokens.css'
import './styles/base.css'

const NormalMode = lazy(() => import('./components/mode/normal-mode'));
const DevMode = lazy(() => import('./components/mode/dev-mode'));
const SwitchMode = lazy(() => import('./components/mode/switch-mode'));

const readMode = (): boolean =>
  new URLSearchParams(window.location.search).get('mode') === 'dev'

function App() {
  const [isDevMode, setIsDevMode] = useState<boolean>(readMode)

  // Keep the two modes in sync with back/forward navigation.
  useEffect(() => {
    const onPop = () => setIsDevMode(readMode())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const toggleMode = useCallback(() => {
    setIsDevMode((prev) => {
      const next = !prev
      // Update the URL so the mode stays shareable and bookmarkable, but
      // swap the view in place instead of reloading the whole document.
      try {
        const url = next ? `${window.location.pathname}?mode=dev` : window.location.pathname
        window.history.pushState({ mode: next ? 'dev' : 'site' }, '', url)
      } catch {
        /* pushState is unavailable in sandboxed contexts — the toggle still works */
      }
      window.scrollTo({ top: 0 })
      return next
    })
  }, [])

  return (
    <Suspense fallback={
      <div className="boot">
        <span className="boot__mark">STW</span>
        <span className="boot__bar" />
      </div>
    }>

      {isDevMode ? <DevMode onExit={toggleMode} /> : <NormalMode />}
      <SwitchMode isDevMode={isDevMode} onToggle={toggleMode} />
    </Suspense>
  );
}

export default App;
