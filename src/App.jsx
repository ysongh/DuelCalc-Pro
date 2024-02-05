import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Calculator from './pages/Calculator';

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
            element={<Calculator />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
    
  )
}

export default App;
