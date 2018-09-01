import * as React from "react"

export class Subheader extends React.Component<{
    newNote: () => void
    saveNote: () => void
    deleteNote: () => void
    dueDate: () => void
}> {
    state = {

    }

    componentWillMount() {
    }

    render() {

        return (
            <div className={'sub_header'}>
                <div className={'left__nav'}>
                    <select>
                        <option>All</option>
                        <option>Active</option>
                        <option>Archived</option>
                    </select>
                    <label>
                        <input type="text" name="Search" placeholder="Search" />
                    </label>
                </div>
                <div className={'right__nav'}>
                    <div className="note__btn" onClick={async () => {
                        await this.props.newNote()
                    }}>
                        <img src="img/New.svg" title="" />
                        <span>New note</span>
                    </div>
                    <div className="note__btn" onClick={async () => {
                        await this.props.dueDate()
                    }}>
                        <img src="img/I.svg" title="" />
                        <span>Due date</span>
                    </div>
                    <div className="note__btn" onClick={async () => {
                        await this.props.deleteNote()
                    }}>
                        <img src="img/Can.svg" title="" />
                        <span>Delete</span>
                    </div>
                    <div className="note__btn">
                        <label>
                            <input type="checkbox" />
                            <span>archived</span>
                        </label>
                    </div>
                    <div className="note__btn" onClick={async () => {
                        await this.props.saveNote()
                    }}>
                        <img src="img/New.svg" title="" />
                        <span>Save note</span>
                    </div>
                </div>
            </div>
        );
    }
}
