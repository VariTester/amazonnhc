import "./HeroStyles.css";

import laga from "../assets/images/selva2.jpg";
function Hero (props){
    return(
        <>
            <div className={props.cName}>
                {/* <img alt="HerpImg" src="../assets/images/selva2.jpgs"></img> */}
                <img src={props.heroImg} alt="Laga" className="Laga" />
            

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
            
            </div>
        </>
    )
}

export default Hero;