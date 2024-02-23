import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Duel from './pages/Duel';

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route
            path="/test"
            element={
              <>
                <h1>Test</h1>
              </>} />
          <Route
            path="/"
            element={<Duel />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
    
  )
}

export default App;
