import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';
import "./styles.css";

function App (){
  return(
    <div className='wrapper'>
      <Headers />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
