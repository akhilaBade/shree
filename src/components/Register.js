import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

let Register = () => {
    return(
        <React.Fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                    <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"  className="bg"/>
                    </div>
                    <div class="col-md-6">
                         <h2 className="mt-5 mr-2 "></h2>
                             <div class="card  mt-7">
                                <div class="card-body ">
                                    <h2> <i class="fa-brands fa-twitter"></i>Sign Up Here</h2>
                                    <form action="/action_page.php">
                                    <div class="form-group">
                                        <label for="email">First Name:</label>
                                         <input type="text" class="form-control" id="name" placeholder="Enter email" name="fstname" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Last Name:</label>
                                         <input type="text" class="form-control" id="name" placeholder="Enter email" name="lastname" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                         <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                     <div class="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Confirm Password:</label>
                                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                                    </div>
                                        <div class="form-group form-check">
                                        <label class="form-check-label mt-3">
                                            <input class="form-check-input  " type="checkbox" name="remember" /> Remember me
                                            
                                            <span className="ml-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgot Password</span>
                                        </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary mt-3">Sign Up Here</button>
                                    </form>
                                </div>
                             </div>
                    </div>
                   
                </div>
               
            </div>
        </React.Fragment>
    )
};
export default Register;