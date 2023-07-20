import { Component } from "react";

export class InfoPartOne extends Component {
    state = {
        inputBirthday: ''
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
                onChange={() => }
                />
                </div>

            </div>
        )
    }
}