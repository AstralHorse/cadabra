// import * as React from "react"
// import { history } from "@/lib"
// import * as app from "@/state"
// import * as api from "../api"
import * as React from "react"
import * as api from "../api"
import { history } from '../lib'
import { Header } from './components';
import * as app from "../app"

import * as components from "./components";

export class Registration extends React.Component<{
}> {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: ''
    }

    componentWillMount() {
    }

    handleOnChange(e: any) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        return (
            <div>
                <components.Header title={'Sign In'} />
                <div className={'poup_sign'}>
                    <form>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state.name} />
                        <input
                            type="text"
                            name="email"
                            placeholder="E-Mail"
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state.email} />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state.password} />
                        <input
                            type="password"
                            name="confirm"
                            placeholder="Comfirm"
                            onChange={this.handleOnChange.bind(this)}
                            value={this.state.confirm} />
                    </form>
                    <div className={'add'}>
                        <button className={'base-label-pointing'} >Sign In</button>
                        <button className={'base-label-pointing active'}
                            onClick={async () => {
                                const createuser = await api.auth({
                                    name: this.state.name,
                                    email: this.state.email,
                                    password: this.state.password,
                                    password_confirmation: this.state.confirm
                                });
                                console.log(createuser)
                                app.state.set('user', createuser)
                                console.log(app.state.user());
                                history.push(app.routes.main)
                            }}>Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}
