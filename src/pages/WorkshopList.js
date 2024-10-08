import React from 'react';
import './Registered.css'
const workshops = [
  { id: 1, name: 'React Basics', date: '2024-10-01' },
  { id: 2, name: 'Advanced JavaScript', date: '2024-10-05' },
];

const WorkshopList = () => {
  return (
    <div>
      <h1>Registered Workshops</h1>
      <div className='iworkshop-container'>
              <div className='iworkshop-card'>
                
                <h1 id='heading'>UI/UX Design</h1>
                <p id='psg'>60 Available</p>
                <button className='btn'>UnRegister</button>
              </div>
              <div className='iworkshop-card'>
                
                <h1 id='heading'>Streamlit</h1>
                <p id='psg'>20 Available</p>
                <button className='btn'>UnRegister</button>
              </div>
              
            </div>
    </div>
  );
};

export default WorkshopList;
