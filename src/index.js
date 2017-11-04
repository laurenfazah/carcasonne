import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();

