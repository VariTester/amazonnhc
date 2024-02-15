import React, { Component } from 'react'
import "./FirstPartHomeStyless.css"

import HomeImg1 from "../assets/images/shipibo.png"
import HomeImg2 from "../assets/images/shaman.png"
import HomeImg3 from "../assets/images/logo.png"
import HomeImg4 from "../assets/images/logo.png"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text1}<br/><br/></p>
                    <p>{this.props.text2} </p>
                    {/* <button>{this.props.url1}</button> */}
                    <a href={this.props.url} className={this.props.btnClass}>
                    {this.props.buttonText}
                    </a>

                    <a href={this.props.url1} className={this.props.btnClass1}>
                    {this.props.buttonText1}
                    </a>
                    
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>
            </div>

        )
    } 
}

export default DestinationData