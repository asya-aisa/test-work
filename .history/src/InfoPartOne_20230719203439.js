import { Component } from "react";

export class InfoPartOne extends Component {
    state = {
        inputBirthday: '',
        textIfUnder18: ''
    }

    onChangeEventBirthday(e) {
        this.setState({inputBirthday: e})

        let date18ago = new Date;
        date18ago.setFullYear(date18ago.getFullYear() - 18);
        
        if(e > date18ago) {

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
                <label>{this.state.textIfUnder18</label>
                </div>

            </div>
        )
    }
}