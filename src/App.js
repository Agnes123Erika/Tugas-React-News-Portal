import React from 'react';
import NewsList from './Materi/Lifecycle/NewsList'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="container pt-5"> 
        <h1 className="text-center mb-4 header">
          Portal Berita
        </h1> 
        <NewsList />
      </div>
    </div>
  );
}

export default App;
