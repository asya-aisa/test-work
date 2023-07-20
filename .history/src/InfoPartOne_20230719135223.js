import { Component } from "react";

export class InfoPartOne extends Component {
    render() {
        return (
            <div>
                <div>
                <label>Фамилия Имя Отчество</label>
                </div>
                <input type="text" pattern="a-zа-я" />
            </div>
        )
    }
}