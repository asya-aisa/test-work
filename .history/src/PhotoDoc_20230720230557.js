import { Component } from "react"

export class PhotoDoc extends Component {
    render() {
        return <div className="block-step-one">
            <div className="container-photo-doc">
                <div className="className="box-label"">
                    <label>Фото документов</label>
                    <label>jpg, png, pdf, не больше 40 мб</label>
                </div>
                <div className="box-photo-doc">
                    <input type="file" />
                    <input type="file" />
                    <input type="file" />
                </div>
            </div>
        </div>
    }
}