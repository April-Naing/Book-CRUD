import classes from './Button.module.css';

export default function Button({children , className , onClick }){
    return(
        <p className={classes.btn}>
          <button onClick={onClick} className={`${classes.createBtn} ${className}`}>{children}</button>
        </p>
    )
}