import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import BeachDetails from './components/BeachDetails';
import Landing from './components/Landing';
import Header from './components/Header';
import BeachList from './components/BeachList';




function App() {


  const [beach, setBeach] = useState()
  const [post, setPost] = useState()

  const urlBeach = 'http://localhost:8000/beach/?format=json'
  const urlPost = 'http://localhost:8000/post/?format=json'


    useEffect(() => {
      axios.get(urlBeach).then(res => {
        setBeach(res.data)
      })
    }, [])

    useEffect(() => {
      axios.get(urlPost).then(res => {
        setPost(res.data)
      })
    }, [])
    
  return (
    <div>

      <Header />
      
      <Route exact path = '/' 
      component = {Landing}
      />

      <Route  exact path = '/beach'
              render = {() => (
                <BeachList
                beach = {beach}
                />
              )}
      />

      <Route  exact path = '/beach/:id'
              render = {(routerProps) => (
                <BeachDetails 
                match={routerProps.match}
                beach = {beach}
                post = {post}
                />
              )}
      />

    </div>
  );
}

export default App;
