import Card from 'react-bootstrap/Card'
import ReactStars from "react-rating-stars-component";
import {TiDelete} from "react-icons/ti";
import {useNavigate } from 'react-router-dom'





const MovieCard = ({maxIndex,movies , movie , removeMovie}) =>{

  const navigate=useNavigate()
    return (
      
        <div>
     {console.log(movies)}
<Card  onClick={()=>{
 
  navigate("/Detail",{state:{listmovies:movies, index:movie.index ,maxIndex:maxIndex }})
}} 

className='movie' style={{width:"300px",backgroundColor:"#373b69" ,borderRadius:"5px",boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",margin: "1rem",overflow: "hidden",position:"relative"}}>
  <Card.Img style={{width:300 , height:380}} variant="top" src={movie.Poster}  />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text className='movie-Description'>
    <span style={{margin: 0,fontSize: 20,fontWeight: 800,textAlign: "center"}}>Description :</span>
    <br/>
    <span style={{margin: 0,fontSize: 15}}>{movie.description}</span>
    </Card.Text>
    <div style={{display:"flex", flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
    <ReactStars
        count={5}
        value={movie.rating}
        size={20}
        edit={false}
        activeColor="#ffd700"
    />
    <TiDelete style={{color:"red",width:30,height:30}} className='Delete' id={movie.Title}  onClick={(e)=>{e.stopPropagation(); removeMovie(e.target.id)}}/>
    </div>
  </Card.Body>
</Card>

        </div>
    );
};

export default MovieCard;