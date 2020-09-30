import { Layout } from 'antd';
import React from 'react';
import Header from './components/Header';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Main />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
