import React from "react"
import { getServerURL } from "../../lib/api"
export default class Hero extends React.Component {
    render() {
        return <div >
            <img className="image" src={getServerURL() + this.props.hero.attributes.Image1.data.attributes.url} width="500" height="400" />
            <div className='overlay'>
                {this.props.hero.attributes.Description}
            </div>
        </div>
    }

};
