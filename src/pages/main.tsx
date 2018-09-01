import * as components from "./components";
import * as React from "react"
import * as app from "../state";
import * as pages from "../pages";
import * as api from "../api"
import Moment from 'react-moment';
import 'moment-timezone';


export class Main extends React.Component<{
}> {
    state = {
        myClassActive: '',
        note: {
            title: '',
            text: ''
        } as api.In.Note,
        notes: [] as api.In.Note[]
    }

    async componentWillMount() {
        if (app.state.user()) {
            const notes = await api.note.getAll(app.state.user())
            this.setState({ notes: notes })
            console.log(notes)
        }
    }
    async componentWillUpdate() {
        if (app.state.user()) {
            const notes = await api.note.getAll(app.state.user())
            !this.state.notes.length && this.setState({ notes: notes })
        }
    }

    render() {
        if (!app.state.user()) {
            return <pages.Login />
        } else return (
            <section>
                <components.Header title={'Notes'} />
                <components.Subheader
                    dueDate={async () =>{
                        this.setState(await api.note.update(app.state.user(), this.state.note))
                    }}
                    deleteNote={async () => {
                        if (this.state.note.id) {
                            const id = await api.note.remove(app.state.user(), this.state.note.id)
                            if (id === this.state.note.id) {
                                this.setState({ note: { title: '', text: '' } })
                            }
                        }
                        this.setState({ notes: await api.note.getAll(app.state.user()) })
                    }}
                    newNote={() => {
                        this.setState({ note: { title: '', text: '', id: undefined } })
                    }}
                    saveNote={async () => {
                        if (this.state.note.id) {
                            await api.note.update(app.state.user(), this.state.note)
                        } else {
                            if (!this.state.note.title) return;
                            await api.note.create(app.state.user(), this.state.note)
                        }
                        this.setState({ notes: await api.note.getAll(app.state.user()) })
                    }} />
                <div className={'main'}>
                    <div className={`left_note ${this.state.myClassActive ? 'active' : ''}`}
                        onClick={() => this.setState({
                            myClassActive: true
                        })}>
                        {
                            this.state.notes.length ?
                                this.state.notes.map((note, i) => {
                                    return (
                                        <div className={'nav_note'} key={i} onClick={() => {
                                            this.setState({
                                                note: note
                                            })
                                        }}>
                                            <div className={'note_title'}>
                                                {note.title}
                                            </div>
                                            <div className={'note__description'}>
                                                {note.text}
                                            </div>
                                            <span className={'date'}>
                                                <Moment format="DD.MM.YYYY">{note.due_date}</Moment>
                                            </span>
                                        </div>
                                    )
                                })
                                : <div></div>
                        }
                    </div>
                    <div className={'rignt_note'}>
                        <div className={'note_title'}>
                            <input
                                type="text"
                                placeholder="Title"
                                value={this.state.note.title}
                                onChange={(e) => {
                                    this.setState({ note: { ...this.state.note, title: e.target.value } })
                                }}
                            />
                        </div>
                        <div className={'note__description'}>
                            <textarea
                                placeholder="Detail"
                                value={this.state.note.text}
                                onChange={(e) => {
                                    this.setState({ note: { ...this.state.note, text: e.target.value } })
                                }}
                            />

                        </div>
                    </div>
                </div>
            </section >


        );
    }
}

// setInterval(()=>{
//     this.setState({count: --this.state.count})
//     if(this.state.count < 0 ){
//         alert('екпить')
//     }
//
// }, 1000)
