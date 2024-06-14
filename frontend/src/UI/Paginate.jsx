import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classes from './Paginate.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { paginatePageAction } from '../context/paginateSlice';

export default function Paginate({ currentPage , totalPages}){
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  function handleClickNext(){
    dispatch(paginatePageAction.nextPage())
  }

  function handleClickPrev(){
    dispatch(paginatePageAction.prevPage())
  }

  return(
          <div className={classes.pgBox}>
            <button onClick={handleClickPrev} disabled={page === 1}><ArrowBackIosIcon fontSize="small" /></button>
            <div className={classes.text}><p>Page {page} of {totalPages}</p></div>
            <button onClick={handleClickNext} disabled={page === totalPages}><ArrowForwardIosIcon fontSize="small" /></button>
          </div>
  )
}