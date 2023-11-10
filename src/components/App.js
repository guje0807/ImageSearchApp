import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import SearchInput from './searchinput';
import ImageList from './imagelist';

class App extends React.Component{

  state = { images: [] }

  onSearchSubmit = async (entry) => {
    console.log(entry)
    const Response = await Axios.get("https://pixabay.com/api/?key=40584249-42d539fba8e1072dc24370f3d&q=${entry}&image_type=photo")
    console.log(Response.data.hits)
    this.setState({images:Response.data.hits})
  }

  render(){
    return (
      <div className='ui container' style={{marginTop: '30px'}}>
        <SearchInput onSearchSubmit = {this.onSearchSubmit} />
        <h2> You have {this.state.images.length} images </h2>
        <ImageList imagelist = {this.state.images} />
      </div>
    )
  }
}

export default App;
