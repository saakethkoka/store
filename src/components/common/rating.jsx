
import './rating.css';


export default function Rating(props){


    return(
        <span className={"stars"}>
            {
                [1,2,3,4,5].map(x => {
                    return <i key={x} className={(x >+props.value ? 'empty-star' : 'full-star')}></i>
                })
            }
        </span>
    )
}