import {useLocation } from 'react-router-dom'

const Trailer = () => {
  const location=useLocation()
  const source=`${location.state.URL.URL}`
      return (
    <div>
      
        <iframe width="640" height="400" src={source} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       </div>
  )
}

export default Trailer