import React from "react"
import { getServerURL } from "../../lib/api"
export default class Hero extends React.Component {
    render() {
        return <div >
            <img className="image" src={this.props.hero.image.url} width="500" height="400" />
            <div className='overlay'>
                {this.props.hero.image.description}
            </div>
        </div>
    }

};
