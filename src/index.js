import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <div className='nav d-flex align-items-center justify-content-around'>
            <div className='logoBox'>
              <img src='Untitled.png'/>
            </div>
            <div className='navContentBox'>
              <ul className='d-inline'>
                <li><i class="ri-apps-line"></i>categories</li>
                <li><i class="ri-arrow-drop-down-line"></i> home</li>
                <li><i class="ri-arrow-drop-down-line"></i> pages</li>
                <li><i class="ri-arrow-drop-down-line"></i> courses</li>
                <li><i class="ri-arrow-drop-down-line"></i> blog</li>
                <li><i class="ri-arrow-drop-down-line"></i> contact</li>
              </ul>
              <input type="text"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
);

