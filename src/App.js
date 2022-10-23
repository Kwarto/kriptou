import { useState,useEffect } from 'react';
import RouterNavigation from "./router/RouterNavigation";
import Circles from './components/circle/Circles';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {
        isLoading ?
        <Circles />
      :
       <RouterNavigation />
      }
    </>
  );
}

export default App;
