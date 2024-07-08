import React from 'react'
import ReactDOM from 'react-dom/client'
// import PrimerComponente from './primerComponente'
// import { PrimerComponente } from './primerComponente'; //? Para Componentes rfc
import { UserApp } from './UserApp';
import './styles.css'

var root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <UserApp />
  </React.StrictMode>,
)
