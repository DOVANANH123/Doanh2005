import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';

class Component extends React.Component{
  render(){
    return(
      <div>
        {/* {print all props} */}
        <h1>
          {this.props.arrayProp}<br/>
          {this.props.stringProp}<br/>
          {this.props.numberProp}<br/>
        </h1>
      </div>
    );
  }
}
//componentClassName.propType: import Kieu (du lieu) cua cac property
ComponentExample.propTypes = {
  arrayProp:PropTypes.array,
  stringProp: PropTypes.string,
  numberProp:PropTypes.number,
  boolProp: PropTypes.bool,
}
ComponentExample.defaultProps = {
  arrayProp:['Ngoc', 'Binh', 'Thanh'],
  stringProp:"fpt-aptech",
  numberProp:20,
  boolProp: true,
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Login></Login> */}
    <ComponentExample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
