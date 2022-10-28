import React, { useState, useEffect } from 'react';
import Circles from './components/circle/Circles';
import RouterNavigation from './router/RouterNavigation'
function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 200)
  }, [])
  return (
    <>
      {
        !loading ? <Circles />  :<RouterNavigation /> 
      }
    </>
  );
}

export default App;
