import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };
        //    this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
        //}
        //handleChange(event) {
        //    this.setState({ [event.target.name]: event.target.value });
        //}
        loginClicked() {
            this.props.history.push(`/home`)

        }
    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    </div>     
                    <br/>
                    <input type="text" id="email" className="fadeIn second" value={this.state.username} name="login" placeholder="Email"/>
                    <input type="password" id="password" className="fadeIn third" value={this.state.password} name="login" placeholder="Password"/>
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.loginClicked}/>
                    <div id="formFooter">
                         <a classname="underlineHover" href="#">Forgot Password?</a>
                     </div>

                 </div>
            </div>);
    }
}
export default Login