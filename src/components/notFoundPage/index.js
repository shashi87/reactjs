import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
      <div class="notfound">
        <div class="notfound-404">
        <h3>Oops! Page not found</h3>
        <h1><span>4</span><span>0</span><span>4</span></h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
        <div className="mt-5">
        <Link to="/" className="pro-btn-1 ">Go to Home</Link>
        </div>
        </div>
    </div>
  );

export default NotFoundPage;