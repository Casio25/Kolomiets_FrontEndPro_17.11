import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Albums } from './components/Albums';
import { Photos } from './components/Photos';
import './App.css';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="Main">
          <Routes>
            <Route path="/albums/:userId" element={<Albums />} />
            <Route path="/photos/:albumId" element={<Photos />} />
          </Routes>
          <h1>test</h1>
          {userData.map((item) => (
            <div key={item.id}>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
              <Link to={`/albums/${item.id}`}><button>Album</button></Link>
              <Link to={`/photos/${item.id}`}><button>Photo</button></Link>
            </div>
          ))}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
