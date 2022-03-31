import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';




let Login = () => {
    return(
        <React.Fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-5">
                    <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"  className="bg"/>
                    </div>
                    <div class="col-md-6 offset-md-1">
                         <h2 className="mt-5 mr-2 "></h2><br/>
                             <div class="card mt-7">
                                <div class="card-body ">
                                    <h2> <i class="fa-brands fa-twitter"></i>Login</h2>
                                    <form action="/action_page.php">
                                    
                                    
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                         <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                     <div class="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                    </div>
                                    
                                        <div class="form-group form-check already">
                                        <Link to="/Register">
                                             <a href="">Already Have an account?</a>
                                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label class="form-check-label mr-3 mt-3">
                                            <input class="form-check-input  " type="checkbox" name="remember" /> Remember me
                                            
                                           
                                        </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary mt-3">Login Here</button>
                                       
                                    </form>
                                </div>
                             </div>
                    </div>
                   
                </div>
               
            </div>
        </React.Fragment>
    )
};
export default Login;