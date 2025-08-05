import { useState } from 'react'

import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import { menus } from './components/tree-view/data';

function App() {
  return (
    
    <div className="App">
      {/* <Accordian component/> */}
      <Accordian />

      {/* <Random Color component/> */}
      <RandomColor />

      {/* <StarRating /> */}
      <StarRating noOfStars={10} />

      {/* image slider component */}
      <ImageSlider url="https://api.example.com/images" limit={5} /> */
       <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />

      {/* Load more products component */}
      <LoadMoreData />


      {/* Tree View component/ menu UI component/ recursive navigation menu */}
      <TreeView menus={menus} />
    </div>
  )
}


export default App
