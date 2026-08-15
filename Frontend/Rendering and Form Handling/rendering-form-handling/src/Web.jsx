import React from 'react';
import { useState } from 'react';
import Card from './components/Card.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Form from './components/Form.jsx';

const Web = ()=>{

    return(
        <div className = "h-screen grid grid-cols-4 gap-4 bg-slate-700">  
        {/* h-screen = height: 100vh */}
        
        <Form/>
        <Card />
        <About />
        <Contact />
        </div>
    )
}

export default Web;