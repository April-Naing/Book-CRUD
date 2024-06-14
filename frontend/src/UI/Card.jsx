import classes from './Card.module.css';

export default function Card({children , className }){
    return(
        <div className={classes.cardContainer}>
            <div className={`${classes.cardBox} ${className}`}>
                {children}
            </div>
        </div>
    )
}