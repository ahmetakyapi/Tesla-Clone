import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="app-itemsContainer">
          <Items
          title = 'Lowest Cost Solar Panels in America'
          desc = 'Money-back guarantee'
          descLink= ''
          backgroundImg={SolarPanels}
          leftBtnTxt='Order Now'
          leftBtnLink=''
          rightBtnTxt='Learn More'
          rightBtnLink='true'
          first
          />
            <Items
                title = 'Model S'
                desc = '$69.420'
                descLink= ''
                backgroundImg={ModelS}
                leftBtnTxt='Custom Order'
                leftBtnLink=''
                rightBtnTxt='Learn More'
                rightBtnLink='true'
                twoButtons='true'
            />
            <Items
                title = 'Model 3'
                desc = 'Money Back Guarantee'
                descLink= ''
                backgroundImg={Model3}
                leftBtnTxt='Custom Order'
                leftBtnLink=''
                rightBtnTxt='Learn More'
                rightBtnLink='true'
                twoButtons='true'
            />
            <Items
                title = 'Model X'
                desc = 'Money Back Guarantee'
                descLink= ''
                backgroundImg={ModelX}
                leftBtnTxt='Custom Order'
                leftBtnLink=''
                rightBtnTxt='Learn More'
                rightBtnLink='true'
                twoButtons='true'
            />
            <Items
                title = 'Model Y'
                desc = 'Money Back Guarantee'
                descLink= ''
                backgroundImg={ModelY}
                leftBtnTxt='Custom Order'
                leftBtnLink=''
                rightBtnTxt='Learn More'
                rightBtnLink='true'
                twoButtons='true'
            />
            <Items
                title = 'Solar For New Roofs'
                desc = 'Money Back Guarantee'
                descLink= ''
                backgroundImg={SolarRoof}
                leftBtnTxt='Order Now'
                leftBtnLink=''
                rightBtnTxt='Learn More'
                rightBtnLink='true'
                twoButtons='true'
            />
            <Items
                title = 'Accessories'
                desc = 'Money Back Guarantee'
                descLink= ''
                backgroundImg={Accessories}
                leftBtnTxt='Shop Now'
                leftBtnLink=''
                rightBtnTxt='Learn More'
                rightBtnLink='true'
            />
        </div>
    </div>
  );
}

export default App;
