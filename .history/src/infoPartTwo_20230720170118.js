import { Component } from "react";

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

export class InfoPartTwo extends Component {
    state = {
        inputAdress: ''
    }

    onChangeEvent(e) {
        this.setState ({inputAdress: e})
    }

    render() {
        return (
            <div>
                Б
                <AddressSuggestions token="42e33f4ee0c3245f46680e43a28d80f5396bd266" value={this.state.inputAdress} onChange={(e) => this.onChangeEvent(e)} />
            </div>
        )
}
}
