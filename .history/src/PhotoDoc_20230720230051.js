import { Component } from "react"

export class PhotoDoc extends Component {
    render() {
        return <div className="block-step-one">
            <div>
                <div>
                    <label>Фото документов</label>
                    <label></label>
                </div>
                <div>
                    <input type="file" />
                    <input type="file" />
                    <input type="file" />
                </div>
            </div>
        </div>
    }
}