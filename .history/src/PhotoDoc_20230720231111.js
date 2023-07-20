import { Component } from "react"

export class PhotoDoc extends Component {
    render() {
        return <div className="block-step-one">
            <div className="container-photo-doc">
                <div className="box-label">
                    <label className="heading">Фото документов</label>
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