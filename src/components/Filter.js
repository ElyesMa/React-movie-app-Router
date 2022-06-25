import { BsSearch } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
const Filter =({setKeyrate ,setKeyword}) => {
    
    const ratingChanged=(newRating)=>{
        setKeyrate(newRating);
    };

    return(
    
    <div>
    <div className="container h-100" style={{display:"flex" , flexDirection:"column" ,alignItems:"center"}}>   
      <div className="d-flex justify-content-center h-100">
        
        <div className="searchbar">
          
          <input className="search_input" type="text" name="" placeholder="Search for a movie..." onChange={(e)=>{setKeyword(e.target.value)}}/>
          <span className="search_icon"><BsSearch/><i className="fas fa-search"></i></span>
        </div>
      </div>
      <ReactStars
                    count={5}
                    size={20}
        
                    activeColor="#ffd700"
                    onChange={ratingChanged}
                  
             
     />
     
    </div>
    </div>
)

}

export default Filter