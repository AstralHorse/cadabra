import * as React from "react"
import * as app from "../../app";
import { history } from '../../lib'
import * as api from "../../api"
export class Header extends React.Component<{
    title: string
}> {
    state = {
        note__description: '',
        title: '',
        date: '',
    }

 componentWillMount() {

    }

    render() {

        return (
            <div className={'header'}>
                <h1>{this.props.title}</h1>
                <div className={'user'}>
                    <span>
                        {app.state.user().name}
                    </span>

                    <div className={'log_out'} onClick={() => {
                        localStorage.removeItem('user');
                        history.push(app.routes.login);
                    }}>
                        LogOut

                    </div>
                </div>

            </div>
        );
    }
}
