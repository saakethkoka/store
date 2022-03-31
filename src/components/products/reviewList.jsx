import {Fragment, useState} from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from "../common/rating";

export default function ReviewList(props){

    let [reviews, setReviews] = useState([
        {
            userName:  "skoka",
            rating: 3,
            comment: "Decent product",
            date: "2020-05-01"
        },
        {
            userName:  "noo",
            rating: 2,
            comment: "not decent product",
            date: "2020-05-01"
        }
    ]);


    return(
        <Fragment>
            <h3>
                Product Reviews ({reviews.length})
            </h3>
            {reviews.length === 0 && <p>No reviews yet</p>}
            {reviews.map(review => (
                <div className="card bg-light mb-3">
                    <div className="card-header">
                        <Rating value={review.rating}/>
                    </div>
                    <div className="card-body">
                        <p className="card-subtitle mb-2 text-muted float-end">{review.date}</p>
                        <h6 className="card-subtitle mb-2 text-muted">{review.userName}</h6>
                        <p className="card-text">"{review.comment}"</p>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}