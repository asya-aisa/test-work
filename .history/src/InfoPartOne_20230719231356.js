import { Component } from "react";
import React from "react"
import InputMask from "react-input-mask";

export class InfoPartOne extends Component {
    state = {
        inputBirthday: '',
        textIfUnder18: '',
        inputPassport: ''
    }

    onChangeEventBirthday(e) {
        this.setState({inputBirthday: e})

        let date18ago = new Date();
        date18ago.setFullYear(date18ago.getFullYear() - 18);

        let userDate = new Date(e);
        
        if(userDate > date18ago) {
            this.setState({textIfUnder18: 'нельзя подписать договор, если вам меньше 18 лет'})
        }
        else {
            this.setState({textIfUnder18: ''})
        }
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
                value={this.state.inputBirthday}/>
                <label>{this.state.textIfUnder18}</label>
                </div>
                <div>
                    <div>
                      <label>Почта </label>
                      <label>на этот адрес мы пришлём страховой полис</label>
                    </div>
                    <input type="email" required=""  />
                </div>
                <div>
                <InputMask mask="9999 999999"
                onChange={(e) => {this.numberPassport(e.target.value)}}
                value={this.state} />
                </div>

            </div>
        )
    }
}