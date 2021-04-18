//Recipe-Page for recipes - by Raj & Kunj
import React, { Component } from 'react'
import RecipeDetail from "../Components/RecipeDetail/RecipeDetail"
import "./Recipe-page.css"
import {FcLikePlaceholder,FcLike} from 'react-icons/fc'
import {MdPlaylistAdd,MdPlaylistAddCheck,MdShare} from 'react-icons/md'

 class RecipePage extends Component {
  render() {
    return (
        <>
          <div className="container">
          <RecipeDetail/>
            <div className="Actions">
              <div className="rAction">
                <FcLikePlaceholder size={25} /> Like
                </div>
                  <div className="rAction">
                      <MdPlaylistAdd size={25}/> save for later
                  </div>
                  <div className="rAction">
                    <MdShare/> Share
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
}

export default RecipePage;
