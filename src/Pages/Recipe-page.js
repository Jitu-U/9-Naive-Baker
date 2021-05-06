import React, { Component } from 'react'
import RecipeDetail from "../Components/RecipeDetail/RecipeDetail"
import "./Recipe-page.css"
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { MdPlaylistAdd, MdPlaylistAddCheck, MdShare } from 'react-icons/md'
import Navbar from "../Components/Navbar/Navbar"
import { useLocation } from 'react-router-dom';

export default function RecipePage() {

  const location = useLocation();
  const Rec = location.state;

  return (
    <>
      <Navbar/>
      <div className="container">
        <RecipeDetail Rec={Rec}/>
        <div className="Actions">
          <div className="rAction">
            <FcLikePlaceholder size={25} /> Like
                </div>
          <div className="rAction">
            <MdPlaylistAdd size={25} /> save for later
                  </div>
          <div className="rAction">
            <MdShare /> Share
                  </div>
          <div className="rAction">
            Share your Views
                    <input type="text" placeholder="Share your views for this recipe" className="review-input"></input>
          </div>

        </div>
      </div>
    </>
  );
}

