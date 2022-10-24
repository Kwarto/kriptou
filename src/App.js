import React, { useState, useEffect } from 'react';
import RouterNavigation from './router/RouterNavigation'
function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 3000)
  }, [])
  return (
    <>
      <RouterNavigation />
    </>
  );
}

export default App;
