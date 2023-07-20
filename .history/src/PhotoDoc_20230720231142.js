import { Component } from "react"

export class PhotoDoc extends Component {
    render() {
        return <div className="block-step-one">
            <div className="container-photo-doc">
                <div className="box-label">
                    <h3 className="heading">Фото документов</h3>
                    <label className="hints">jpg, png, pdf, не больше 40 мб</label>
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