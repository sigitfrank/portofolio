import { lazy, Suspense } from 'react';

// Lazy load the components so their CSS is only loaded when they're rendered
const NormalMode = lazy(() => import('./components/mode/normal-mode'));
const DevMode = lazy(() => import('./components/mode/dev-mode'));
const SwitchMode = lazy(() => import('./components/mode/switch-mode'));

function App() {
  const search = new URLSearchParams(window.location.search);
  const isDevMode = search.get('mode') === 'dev';
  return (<>
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      {isDevMode ? <DevMode /> : <NormalMode />}
      <SwitchMode />
    </Suspense>

  </>
  );
}

export default App;
