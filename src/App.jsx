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
      <div className="component-container">
        <Accordian />
      </div>
      
      <div className="component-container">
        <RandomColor />
      </div>
      
      <div className="component-container">
        <StarRating noOfStars={10} />
      </div>
      
      <div className="component-container">
        <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
      </div>
      
      <div className="component-container">
        <LoadMoreData />
      </div>
      
      <div className="component-container">
        <TreeView menus={menus} />
      </div>
    </div>
  )
}
  export default App