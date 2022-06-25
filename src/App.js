import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import {useLocation } from 'react-router-dom'



function App() {


  const location=useLocation([])
  const [movies,setMovies] = useState( (location.state == null)?
  [
  {
    "index":0,
    "Title": "The MATRIX",
    "description": "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. À cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ?",
    "rating": 5,
    "Poster": "https://image.tmdb.org/t/p/original/vybQQ7w7vGvF53IsGD0y0JSgIsA.jpg",
    "Trailer" :"https://www.youtube.com/embed/m8e-FF8MsqU"
   },
{
    "index":1,
    "Title": "INCEPTION",
    "description": "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant.",
    "rating": 3,
    "Poster": "https://m.media-amazon.com/images/I/51Qx9c4ppzL._AC_SY450_.jpg",
    "Trailer" :"https://www.youtube.com/embed/YoHD9XEInc0"
   },
   {
    "index":2,
    "Title": "Top Gun : Maverick",
    "description": "Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine, Pete Maverick Mitchell est à sa place, repoussant les limites en tant que pilote d'essai courageux et esquivant l'avancement de grade qui le mettrait à la terre.",
    "rating": 5,
    "Poster": "https://fr.web.img3.acsta.net/pictures/22/03/29/15/12/0827894.jpg",
    "Trailer" :"https://www.youtube.com/embed/qSqVVswa420"
},
{
    "index":3,
    "Title": "The Last Samurai",
    "description": "En 1876, Nathan Algren, un vétéran de l'armée américaine, part pour le Japon afin d'assister l'armée impériale qui cherche à écraser une révolte de Samouraï, en guerre contre l'occidentalisation. Capturé par les rebelles impressionnés par son courage, Nathan change de camp et décide de rejoindre leur combat.",
    "rating": 2,
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_.jpg",
    "Trailer" :"https://www.youtube.com/embed/T50_qHEOahQ"
} ]

  : location.state.listmovies)

  const addMovie=(movie) =>{
    setMovies(movies.concat(movie));
  }
    
  const removeMovie = (x) => {
    reorder(movies.filter((movie)=>movie.Title!==x))
    }

  

  const reorder=(x)=>{
    setMovies(x.map(((el,i) =>(
      {...el,index : i})))
      )

  }



  const [keyrate,setKeyrate]=useState(0);
  const [keyword,setKeyword]=useState("");
  const [maxIndex, setMaxIndex] = useState();  
 

  return (
    <>
  {console.log(location)} 
    {console.log(movies)}
    
   
    <div style={{display:"flex" , flexDirection:"row" ,justifyContent:"center"}}>
    <AddMovie maxIndex={maxIndex} addMovie={addMovie} movies={movies}/>
    <Filter setKeyrate={setKeyrate} keyword={keyword} setKeyword={setKeyword}/>
    </div>
    <div className='movie-container'>
        <MovieList setMaxIndex={setMaxIndex} maxIndex={maxIndex} removeMovie={removeMovie} movies={movies.filter((movie)=>movie.rating >= keyrate && movie.Title.toLocaleUpperCase().trim().includes(keyword.toLocaleUpperCase().trim()))}/>
    </div>
    </>
    
  );
}

export default App;
