import {useState, useEffect, Fragment} from "react";
import {getProductById} from "../../api/productApi.js";
import "./productDetails.css";
import 'bootstrap';
import ReviewList from "./reviewList";

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Tasty Snacks</a></li>
                <li className="breadcrumb-item active" aria-current="page">Jif Peanut Butter, 40 ounce</li>
            </ol>
        </nav>
    )
}


export default function ProductDetails(){

    let [product, setProduct] = useState({});

    useEffect(() => {
        getProductById(1).then(result => {
            setProduct(result);
        });
    }, []);


    return(
        <Fragment>
            <NavBar/>
            <div className="productDetailsContainer">
                <div className="productDetailsImageContainer">
                    <img src={product.imageUrl} alt="product"/>
                </div>
                <div className="productDetailsTextContainer">
                    <h1>{product.name}</h1>
                    <h3>
                       <span className="badge bg-primary">{product.price}</span>
                    </h3>

                    <p>{product.description}</p>
                </div>

            </div>
            <ReviewList reviews={product.reviews}/>
        </Fragment>
    );

}