import {useState} from 'react';
import {Modal, Button , Form , InputGroup } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { MdOutlineAddCircle } from "react-icons/md";


    const AddMovie = ({maxIndex,addMovie}) => {
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie,setNewMovie] = useState({
      index :"",
      Title :"",
      description :"",
      rating : 1,
      Poster : "",
      Trailer:""
    });

    const [emptyMovie,setEmptyMovie] = useState({
      index :"",
      Title :"",
      description :"",
      rating : 0,
      Poster : "",
      Trailer:""
    });

    const handleChange =(e) => {
      newMovie.index=maxIndex+1
      setNewMovie({...newMovie,[e.target.id] : e.target.value})
       }

    const ratingChanged = (newRating) => {
      setNewMovie({...newMovie,rating : newRating})
  
    };
    return (
      
      <>
      {console.log(newMovie)}
        <MdOutlineAddCircle style={{width:60,height:60}} onClick={handleShow}/>  
       
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"black" }}>Add a Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body >
                <InputGroup className="mb-3">
                <InputGroup.Text>
                Film Title*
                </InputGroup.Text>
                <Form.Control
                id="Title" 
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleChange}
                />
                </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text>
                Film Description*
                </InputGroup.Text>
                <Form.Control
                id="description"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleChange}
                />
                </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text >
                Film Url-Poster*
                </InputGroup.Text>
                <Form.Control
                id="Poster"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleChange}
                />
                </InputGroup>

                <InputGroup className="mb-3">

                <InputGroup.Text >
                Film Url-Trailer*
                </InputGroup.Text>
                <Form.Control
                id="Trailer"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder='Enter embed code of the video '
                onChange={handleChange}
                />
                </InputGroup>

                <InputGroup className="mb-3">
                
                <ReactStars
                    count={5}
                    size={20}
                    value={1}
                    activeColor="#ffd700"
                    onChange={ratingChanged}
                />

                
                </InputGroup>
                <p id="alert"style={{color:"red" , visibility:"hidden"}} >Oooops! , veuilez remplir tous les champs obligatoires</p>
               
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
              onClick={()=>{
              {(newMovie.Title!=""&& newMovie.description!=""&& newMovie.rating!=""&& newMovie.Poster!=""&& newMovie.Trailer!="")?
              (addMovie(newMovie),
              setNewMovie(emptyMovie),
              handleClose()):
              document.getElementById("alert").style.visibility = "visible";
              }

              }}
              >
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  export default AddMovie;