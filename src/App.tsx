import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MainContent } from './components/layout/MainContent';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;