import { Component } from "react";
import React from "react"
import InputMask from "react-input-mask";

// import axios from "axios";

import { FioSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';




export class InfoPartOne extends Component {
    state = {
        valueFio: "",
        inputBirthday: '',
        textIfUnder18: '',
        inputPassportNumber: '',
        textDataPassport: '',
        inputPassportData: ''
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

    // numberPassport(e) {
    //     this.setState({inputPassport: e})

    //     if(e.length < 10) {
    //         console.log('wrong number')
    //     }
    // }

    onChangeDataPassport(e, inputBirth) {
        this.setState({inputPassportData: e})

        let date14AfterBirth = new Date(inputBirth);
        date14AfterBirth.setFullYear(date14AfterBirth.getFullYear() + 14);

        let userDate = new Date(e);
        let myDate = new Date();

        if(userDate < date14AfterBirth || userDate > myDate) {
            this.setState({textDataPassport: 'Некорректная дата выдачи паспорта'})
        }
        else {
            this.setState({textDataPassport: ''})
        }
    }

    onChangeEvent(e) {
        this.setState ({valueFio: e})
    }


    // componentDidMount() {
    //     let token = "${42e33f4ee0c3245f46680e43a28d80f5396bd266}";
    //     axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio',
    //     {
    //         headers: { 
    //             'Content-Type':  'application/json',
    //             'Accept':        'application/json',
    //             "Authorization": token + token
    //         }
    //     }
    //     )


    //     .then(
    //         res => {
    //         console.log(res)
    //     })
    // }


    render() {
        return (
            <div className="block-step-one">
                <div className="container-fio-birth">
                  <div>
                    <label className="label-input">Фамилия Имя Отчество</label>
                    {/* <input type="text" pattern="a-zа-я"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                    /> */}
                    <FioSuggestions token="42e33f4ee0c3245f46680e43a28d80f5396bd266" value={this.state.valueFio} onChange={(e) => this.onChangeEvent(e)} />
                  </div>

                  <div className="box-data-birth">
                    <label className="label-input">Дата рождения</label>
                    <input className="input-birth" type="date"
                    onChange={(e) => {this.onChangeEventBirthday(e.target.value)}}
                     value={this.state.inputBirthday}/>
                    <p className="red-text-under-input">{this.state.textIfUnder18}</p>
                  </div>
                </div>

                <div>
                    <div className="box">

                    
                      <div className="box-email-label">
                      <label className="label-input">Почта </label>
                      <label className="hints">на этот адрес мы пришлём страховой полис</label>
                      </div>
                      <input className="input-email" type="email" required=""  />
                    </div>
                </div>


                <div>
                    <div className="box-email-label">
                      <label className="label-input">Серия и номер </label>
                      <label className="hints">только паспорт РФ</label>
                    </div>
                   <InputMask mask="9999 999999"
                   // onChange={(e) => {this.numberPassport(e.target.value)}}
                   // value={this.state.inputPassportNumber}
                   />
                   <div>
                      <input type="text" placeholder="Заполните точно как в паспорте"/>
                   </div>
                </div>
                
                <div>
                    <input type="date"
                    onChange={(e) => {this.onChangeDataPassport(e.target.value, this.state.inputBirthday)}} />
                    <label>{this.state.textDataPassport}</label>

                    <InputMask mask="999 999"/>
                </div>
                <div>
                    <input type="file" />
                    <input type="file" />
                    <input type="file" />
                </div>

            </div>
        )
    }
}