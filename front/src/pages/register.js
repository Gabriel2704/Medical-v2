import React, { Component } from 'react';
import '../css/entry.css';
import { post } from '../axios/controllers';
import { userRoute } from '../axios/routes';
import Navbar from '../components/Navbar';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
                password2: '',
                isDoctor: false
            },
            isDoctor: false
        };
    }

    register = async () => {
        console.log(this.state.user)
        await post(userRoute + "/register", this.state.user).then(user => {
            if (user.msg === undefined) {
                user.msg = "User-ul a fost creat";
            } else {
                if (user.msg === "User-ul a fost creat") {
                    this.props.history.push('/');
                }
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.register();
    };

    handleChange = (e) => {
        e.preventDefault();
        let newUser = this.state.user;
        newUser[e.target.name] = e.target.value;
        newUser.isDoctor = e.target.checked;
        this.setState({ user: newUser });
    };

    render() {
        return (
            <div>

                <Navbar />
                <img alt="logo" src={'../imgs/entry-bg.png'}></img>
                <div className="entry-box">
                    <h1>Creare cont</h1>
                    <div className="textbox">
                        <input type="email" placeholder="Nume" name="name" onChange={this.handleChange} />
                    </div>

                    <div className="textbox">
                        <input type="email" placeholder="Email" name="email" onChange={this.handleChange} />
                    </div>

                    <div className="textbox">
                        <input type="password" placeholder="Parola" name="password" onChange={this.handleChange} />
                    </div>

                    <div className="textbox">
                        <input type="password" placeholder="Confirma parola" name="password2" onChange={this.handleChange} />
                    </div>

                    <div>
                        <input type="checkbox" name='isDoctor'
                            onChange={this.handleChange}
                            defaultChecked={this.state.user.isDoctor} />
                        <span className="checkbox">Este cadru medical?</span>
                    </div>

                    <input className="btn" type="button" value="Trimite" onClick={this.handleSubmit} />

                </div>
            </div>
        )
    }
}
