import { Component } from "react";

export class InfoPartOne extends Component {
    state = {
        inputBirthday: ''
    }

    onChangeEventBirthday(e) {
        this.setState({
            inputBirthday: e
        })

        console.log(this.inputBirthday)
    }


    render() {
        return (
            <div>
                <div>
                <label>Фамилия Имя Отчество</label>
                <input type="text" pattern="a-zа-я" />
                </div>

                <div>
                <label>Дата рождения</label>
                <input type="date"
                onChange={(e) => {this.onChangeEventBirthday(e.target.value)}}
                value={}
                />
                </div>

            </div>
        )
    }
}