import { Component } from "react";

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import TextPriceArenda from "./TextPriceArenda";

export class InfoPartTwo extends Component {
    state = {
        inputAdress: '',
        inputPrice: '',
        textLabelInputPrice: true,
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
            this.setState({textLabelInputPrice: false})
        }
        else {this.setState({textLabelInputPrice: true})
        if(e.length >= 4) {
            if(e >= 45000) {
                let price = Math.floor((654 + (e * 1.5 * 0.05) / 11 + e * 0.0097) / 10) * 10;
                this.setState({priceInsurance: price + '₽/мес', textPriceInsurance: 'Стоимость страховки', textTenantPays:'(платит арендатор)'})

            }
            else {
                let price = Math.ceil((454 + (e * 1.5 * 0.05) / 11 + e * 0.0097) / 10) * 10;
                this.setState({priceInsurance: price + '₽/мес', textPriceInsurance: 'Стоимость страховки', textTenantPays:'(платит арендатор)'})
            }
        }
        else {this.setState({priceInsurance: '', textPriceInsurance: '', textTenantPays: '' })}
    };
    }
        

    render() {
        return (
            <div className="block-step-one">
                <div className="container-input">
                   <div className="box-input-column">
                      <label className="label-input">Адрес: город, улица, дом, квартира</label>
                      <AddressSuggestions  token="42e33f4ee0c3245f46680e43a28d80f5396bd266" value={this.state.inputAdress} onChange={(e) => this.onChangeEvent(e)} />
                   </div>

                   <div className="box-input-column">
                      <label className="label-input">Стоимость аренды</label>
                      <div className="box-price-insur">
                        <input className="input-padding price-arenda" type="text"
                        onChange={(e) => {this.onChangeEventPrice(e.target.value)}} />
                        <p className="price-insurance">{this.state.textPriceInsurance} <br /> <span className="bold-number-insurance">{this.state.priceInsurance}</span> <br /> {this.state.textTenantPays}</p>
                      </div>
                      <label>{this.state.textLabelInputPrice ? '' : <TextPriceArenda />}</label>
                   </div>

                </div>
            </div>
        )
}
}
