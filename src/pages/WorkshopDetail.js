import React from 'react';
import { useParams } from 'react-router-dom';
import './WorkshopDetails.css';

const WorkshopDetail = () => {
  const { id } = useParams();
  const workshop = {
    1: { name: 'React Basics', details: 'Learn the fundamentals of React.' },
    2: { name: 'Advanced JavaScript', details: 'Deep dive into JS.' },
  };

  return (
    <div className='left'>
    
            <h1>Workshops</h1>
            <div className='iworkshop-container'>
              <div className='iworkshop-card'>
                <h1>{workshop[id]?.name}</h1>
                <p>{workshop[id]?.details}</p>
                <h1 id='heading'>UI/UX Design</h1>
                <p id='psg'>60 Available</p>
                <button className='btn'>Register</button>
              </div>
              <div className='iworkshop-card'>
                <h1>{workshop[id]?.name}</h1>
                <p>{workshop[id]?.details}</p>
                <h1 id='heading'>Streamlit</h1>
                <p id='psg'>20 Available</p>
                <button className='btn'>Register</button>
              </div>
              
            </div>
        </div>
      
  );
};

export default WorkshopDetail;
