import React from 'react';
import LoadingContainer from './components/Loading/loading.container';
import NetworkErrorContainer from './components/NetworkError/networkError.container';
import TimeoutErrorContainer from './components/TimeoutError/timeoutError.container';
import Providers from './context';
import AppRoutes from './routes';

function App() {
  return (
    <div className=" min-h-[100vh] ">
      <Providers >
        <LoadingContainer />
        <NetworkErrorContainer />
        <TimeoutErrorContainer />
        <AppRoutes />
      </Providers>
    </div>
  );
}

export default App;
