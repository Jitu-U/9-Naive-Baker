import React from 'react';
import Upload from "../Components/Upload_Recipe/upload"
import Navbar from "../Components/Navbar/Navbar"

export default function UploadRecipe({setRecipes}) {
  return (
    <>
      <Navbar />
      <Upload />
    </>
  )
}

