import React, { useEffect, useState } from "react";
import "./Product.css";
const Project = () => {

    const [data , setData] = useState([]);
    const [SearchData , Setsearch] = useState("");

    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=42604550-0b6878bc420ff1676ebc28723&q=${SearchData}_type=photo`).then( (res) => {
            return res.json();
        } ).then( (d) => {
            console.log(d.hits)
            setData(d.hits)
            // setData(d);
        } )
    })

    const FindImg = (e) => {
        Setsearch(e.target.value)
    }



    return(
        <>
        <h1>pixabay Project Using React JS</h1>
         Search Images : <input type="text" onChange={FindImg}/>
        <br />
        <br />
        <div className="MainSec">
            {
                data.map( (item) => {
                    return(
                        <div className="ImgSec">
                            <img src={item.webformatURL} />
                        </div>
                    )
                } )
            }
        </div>
            
        </>
    );
}

export default Project;