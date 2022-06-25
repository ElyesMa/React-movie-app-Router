import MovieCard from "./MovieCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {IoCaretBackCircleSharp,IoCaretForwardCircleSharp} from "react-icons/io5";
import { Button } from "react-bootstrap";

const MovieList = ({setMaxIndex , maxIndex ,movies , removeMovie}) => {
  
	return (
             <Carousel
             
             thumbWidth={400}
                centerMode={true}
                centerSlidePercentage={25}
                selectedItem={0}
                showArrows={true}
                showIndicators={true}
                renderButtonGroupOutside={true}
                
                // renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                //     hasPrev && (
                //         <Button>
                //         <IoCaretBackCircleSharp  style={{eight: "30px", width: "30px" ,backgroundColor: "transparent"}} onClick={clickHandler}>
                         
                //         </IoCaretBackCircleSharp>
                //         </Button>
                //     )
                // }
                 
                // renderArrowNext={(clickHandler, hasNext, labelNext) =>
                //     hasNext && (
                //         <Button>
                //         <IoCaretForwardCircleSharp style={{height: "30px", width: "30px" ,backgroundColor: "transparent"}} onClick={clickHandler}>
                            
                //         </IoCaretForwardCircleSharp>
                //         </Button>
                //     )
                // }
         

                >
                
            {
            movies.map((el,i)=>(
                setMaxIndex(i),
                <MovieCard maxIndex={maxIndex} movies={movies} removeMovie={removeMovie} movie={el} key={i}/>   
            ))}
          
             </Carousel>
             
       
     
	);
    
};

export default MovieList;