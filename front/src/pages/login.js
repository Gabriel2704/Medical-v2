import React, { Component } from 'react';
import "../css/entry.css";
import { post, get } from '../axios/controllers';
import { userRoute } from '../axios/routes';
import { setId } from '../axios/utils';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: ''
            },

        };
    };

    login = async () => {
        let res = await post(userRoute + "/login", this.state.user)
        if (res.ok) {
            setId(res.id);
            let log = await get(userRoute, res.id);
            if (log.isDoctor === true) {
                this.props.history.push({
                    pathname: "/doctor",
                    state: { account: log },
                });
            } else {
                this.props.history.push({
                    pathname: "/patient",
                    state: { account: log },
                });
            }

        } else {
            alert(res.msg);
        }
    };

    handleChange = (e) => {
        e.preventDefault();
        let newUser = this.state.user;
        newUser[e.target.name] = e.target.value;
        this.setState({ user: newUser });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.login()
    };

    render() {
        return (
            <div>
                <img alt="logo" src={'../imgs/entry-bg.png'}></img>
                <div className="entry-box">
                    <h1>Conectare</h1>
                    <div className="textbox">
                        <input type="email" placeholder="Email" name="email" onChange={this.handleChange} />
                    </div>

                    <div className="textbox">
                        <input type="password" placeholder="Parola" name="password" onChange={this.handleChange} />
                    </div>

                    <input className="btn" type="button" value="Logare" onClick={this.handleSubmit} />
                    {/* <a href="/register"><input className="btn" type="button" value="Inregistrare" /></a> */}
                </div>
            </div>
        )
    }
}
