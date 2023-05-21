import React, {Component} from 'react';
import classes from'./App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';
import ProductData from './Utils/ProductData';


class App extends Component {
 
  state ={
    productData : ProductData,
    //currentPreviewImage : 'https://imgur.com/xSIK4M8.png',
    currentPreviewImagePos : 0,
    currentSelectedFeature: 0,

  }

   onColorOptionClick = (pos) =>{
    //const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
   
   // this.setState({currentPreviewImage:updatedPreviewImage});

   this.setState({currentPreviewImagePos:pos});
  }

  onFeatureItemClick = (pos) => {
    
    this.setState({currentSelectedFeature :pos });
  }

  render(){
    return (
      <div className="App">
        <TopBar/>
        
  
  
        <div className={classes.MainContainer}>
  
        <div className={classes.ProductPreview}>
         
         {/* <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection} />*/} 
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions
            [this.state.currentPreviewImagePos].imageUrl} 
            currentSelectedFeature={this.state.currentSelectedFeature}  />
        </div>
        
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick=
             {this.onColorOptionClick} currentPreviewImagePos = 
             {this.state.currentPreviewImagePos} onFeatureItemClick =
             {this.onFeatureItemClick } currentSelectedFeature = {this.state.currentSelectedFeature} />
           </div>
        </div>
      </div>
    );  

  }

  
 
}

export default App;
