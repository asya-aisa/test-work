import { Component } from "react";

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

export class InfoPartTwo extends Component {
    state = {
        inputAdress: '',
        inputPrice: '',
        textLabelInputPrice: '',
        textPriceInsurance: '',
        priceInsurance: '',
        textTenantPays: ''
    }

    onChangeEvent(e) {
        this.setState ({inputAdress: e});
    }
    onChangeEventPrice(e) {
        this.setState ({inputPrice: e});

        if(e < 20000 || e > 100000) {
            this.setState({textLabelInputPrice: 'Мы работаем с квартирами до 100 000₽/мес. Напишите на help@pik-arenda.ru и мы найдем решение'})
        }
        else {this.setState({textLabelInputPrice: ''})};

        if(e >= 45000) {
            let price = Math.floor((654 + (e * 1.5 * 0.05) / 11 + e * 0.0097) / 10) * 10;
            console.log(price)
        }
        else {
            let price = Math.floor((454 + (e * 1.5 * 0.05) / 11 + val * 0.0097) / 10) * 10;
            console.log(price)
        }
    }

    render() {
        return (
            <div>
            <div>
                <label>Адрес: город, улица, дом, квартира</label>
                <AddressSuggestions token="42e33f4ee0c3245f46680e43a28d80f5396bd266" value={this.state.inputAdress} onChange={(e) => this.onChangeEvent(e)} />
            </div>
            <div>
                <label>Стоимость аренды</label>
                <input type="text"
                onChange={(e) => {this.onChangeEventPrice(e.target.value)}} />
                <label>{this.state.textLabelInputPrice}</label>
            </div>
            <div>
                <p>{this.state.textPriceInsurance}{this.state.priceInsurance}{this.state.textTenantPays}</p>
            </div>

            </div>
        )
}
}
