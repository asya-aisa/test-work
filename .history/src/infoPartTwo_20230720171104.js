import { Component } from "react";

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

export class InfoPartTwo extends Component {
    state = {
        inputAdress: '',
        inputPrice: ''
    }

    onChangeEvent(e) {
        this.setState ({inputAdress: e})
    }
    onChangeEventPrice(e) {
        this.setState ({inputPrice: e});

        if(e < 1 || e > 100)
    }

    render() {
        return (
            <div>

            
            <div>
                <label>Адрес: город, улица, дом, квартира</label>
                <AddressSuggestions token="42e33f4ee0c3245f46680e43a28d80f5396bd266" value={this.state.inputAdress} onChange={(e) => this.onChangeEvent(e)} />
            </div>
            <div>
                <input type="text"
                onChange={(e) => {this.onChangeEventPrice(e.target.value)}} />
            </div>

            </div>
        )
}
}
