import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './Profile';

const rootElement = document.querySelector('#root');
const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

ReactDOM.render(<Profile
  firstName={userData.firstName}
  lastName={userData.lastName}
  birthDate={userData.birthDate}
  birthPlace={userData.birthPlace}>
  
</Profile>, rootElement
);