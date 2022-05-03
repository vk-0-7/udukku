import React from "react";
import Footer from '../Components/Footer/Footer';
import Header from "../Components/Navigation/Header";

const Favourites = () =>{
    return(
        <>
        <Header/>
        <div className="container-fluid" style={{paddingLeft:'10%', paddingRight:'10%'}}>
            <div className="jumbotron">
                <h1 style={{fontWeight:'bold',textAlign:'center'}} className="mt-5 pt-5 mb-5 pb-5">Your Favorites</h1>
                <p>Add your favorite pros by clicking 'Add to Favorites'. Collect and share your list here.</p>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Favourites;