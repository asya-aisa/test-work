import { Component } from "react";

export class InfoPartOne extends Component {
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
                on
                />
                </div>

            </div>
        )
    }
}