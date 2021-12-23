import React from 'react';
import  ReactDOM  from 'react-dom';

const rootElement = document.querySelector('#root');


// <h1>Search Form</h1>
{/* <div>
  <input type="text" />
  <button>Search</button>
</div> */}


const element = (
    <>
    <h1>Search Form</h1>
        <div>
            <input type="text"></input>
            <button>Search</button>
        </div>
    </>
)
ReactDOM.render(element, rootElement)