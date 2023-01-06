import { Modal, show, Button } from 'react-bootstrap';
import React, { useState } from 'react';


const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {

    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return (
        <div className='card text-center bg-light mb-3 m-2'>
            <div className="card-body p-0 bg-danger  ">
                <img className="card-img-top center" src={API_IMG + poster_path} />
                <button type="button" className="btn  p-0 bg-transparent" onClick={handleShow} >View More</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img className="card-img-top rounded mx-auto d-block shadow p-2 mb-5 bg-white rounded" style={{width:'25rem'}} src={API_IMG + poster_path}  />
                    {/* <h3>{title}</h3> */}
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* <h1>{title}</h1>
            <img src={API_IMG + poster_path}></img>
            <p>{overview}</p> */}
        </div>
    )
};

export default MovieBox;