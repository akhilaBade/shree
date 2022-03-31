import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 


let Loader = () => {
    return(
        <React.Fragment>
           <div class="loader">
             <div></div>
             <div></div>
            </div>
        </React.Fragment>
    )
};
export default Loader;