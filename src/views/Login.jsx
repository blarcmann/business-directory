import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import axios from 'axios';
import '../assets/styles/onboarding-layout.scss';
import '../assets/styles/general.scss';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="cover">
                <div className={this.state.loading ? 'data-loading' : 'hide' }>
                    <img src={require("../assets/images/icons/spinner.svg")} className='loader-img' alt="+" />                
                </div>
                <div className="top-spacing">
                    <div className="form-cover">
                        <div className="form-title text-center mb-2">Welcome Back</div>
                        <div className="form-sub-title text-center mb-4">Please log in to your account to continue.</div>
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="text-box">
                                        <input type="email" name="email" placeholder="Email Address" onChange={e => this.setState({ email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="text-box">
                                        <input type="password" name="password" placeholder="Password"
                                            onChange={e => this.setState({ password: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-4">
                                    <button className="form-submit" onClick={this.login}>Login <div className={this.state.loading ? "loading" : "little-load"}></div></button>
                                </div>
                            </div>
                        </form>
                        <div className="follow-up mt-3 mb-3 text-center">
                            <Link to="/dashboard">Continue as a visitor</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login;