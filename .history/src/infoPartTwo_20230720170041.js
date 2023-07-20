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
                <AddressSuggestions token="API_KEY" value={this.state.inputAdress} onChange={(e) => this.onChangeEvent(e)} />
            </div>
        )
}
}
