import { Component } from "react";

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

export class InfoPartTwo extends Component {
    state = {
        inputAdress: ''
    }

    render() {
        return (
            <div>
                <AddressSuggestions token="API_KEY" value={this} onChange={setValue} />
            </div>
        )
}
}
