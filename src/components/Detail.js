import {AiFillHome } from "react-icons/ai";
import {IoChevronForwardCircle,IoChevronBackCircle} from "react-icons/io5";
import {AiFillPlayCircle} from "react-icons/ai";
import {useNavigate,useLocation, Outlet } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ReactStars from "react-rating-stars-component";
import {useState} from 'react';


const Detail = () => {
const navigate=useNavigate()
const location=useLocation()
const [n, setn] = useState(location.state.index);
URL =""

  return (
 

    <div> 
      {console.log(n)}
      {console.log(location.state.maxIndex)}
      {console.log(location.state.listmovies)}
        <div style={{height:40 , width:280,display:"flex", flexDirection:"row", justifyContent:"space-between",textAlign:"center",verticalAlign:"middle" }}>
        <AiFillHome style={{fontSize:25}} onClick={()=>{navigate("/",{state:{listmovies:location.state.listmovies}})}}/>
        <IoChevronBackCircle style={{fontSize:30}} onClick={()=>{
         
          n<=0?"":
          navigate("/Detail",{state:{listmovies:location.state.listmovies, index:parseInt(location.state.index)-1, maxIndex:location.state.maxIndex }})
          setn(parseInt(location.state.index)-1)
        
        }}/>  
          
          <IoChevronForwardCircle style={{fontSize:30}} onClick={()=>{
            n>=location.state.maxIndex?"":
            navigate("/Detail",{state:{listmovies:location.state.listmovies, index:parseInt(location.state.index)+1, maxIndex:location.state.maxIndex }})
            setn(parseInt(location.state.index)+1)
            }}/>      
          <h2  style={{fontSize:25 , fontWeight:600}}>MOVIE DETAILS : </h2>
        </div>
        {location.state.listmovies.filter((movie)=>movie.index==location.state.index).map((movie={el},key={i})=>(
        <div style={{display:"flex", flexDirection:"row" , justifyContent:"space-arround" , alignItems:"center"}}>
        <Card style={{display:"flex", flexDirection:"row" , color:"black" , backgroundColor:"#F8F8FF", width:700}}>
        <div  style={{ display: "flex", justifyContent: "center",alignItems: "center" , margin: "auto" , width: "100%"}}>
        <AiFillPlayCircle style={{fontSize:60 , opacity:0.5 ,position:"absolute", top:"170", borderRadius:"100%" , color:"white"}} onClick={()=>{
        navigate("Trailer" , {state:{listmovies:location.state.listmovies, index:location.state.index ,maxIndex:location.state.maxIndex , URL:{URL} }})}}/>
        <Card.Img style={{width:300 , height:400}} variant="top" src={movie.Poster}  />
        </div>
    
        <div style={{height:410,display:"flex", flexDirection:"column"}}>
        <Card.Body>        
        <Card.Title  style={{margin: 0,fontSize: 20,fontWeight: 800}}>{movie.Title}</Card.Title>
        <Card.Text>
        <span style={{margin: 0,fontSize: 18,fontWeight: 800}}>Description :</span>
        <br/>
        <span style={{margin: 0,fontSize: 15}}>{movie.description}</span>
        </Card.Text>
        <h2  style={{fontSize:0}}>{URL=movie.Trailer}</h2>
        <ReactStars
        count={5}
        value={movie.rating}
        size={20}
        edit={false}
        activeColor="#ffd700"
        />
    
       
        </Card.Body>
       
        
        </div>
        </Card>
        <Outlet/>
        </div>
        ))}

       
       
    </div>
  )
}

export default Detail