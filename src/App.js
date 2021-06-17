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
                title = 'Model S'
                desc = 'Order Online for Touchless Delivery'
                descLink= ''
                backgroundImg={ModelS}
                leftBtnTxt='CUSTOM ORDER'
                leftBtnLink=''
                rightBtnTxt='EXISTING INVENTORY'
                rightBtnLink='true'
                twoButtons='true'
            />
          <Items
              title = 'Model Y'
              desc = 'Order Online for Touchless Delivery'
              descLink= ''
              backgroundImg={ModelY}
              leftBtnTxt='CUSTOM ORDER'
              leftBtnLink=''
              rightBtnTxt='EXISTING INVENTORY'
              rightBtnLink='true'
              twoButtons='true'
          />
            <Items
                title = 'Model 3'
                desc = 'Order Online for Touchless Delivery'
                descLink= ''
                backgroundImg={Model3}
                leftBtnTxt='CUSTOM ORDER'
                leftBtnLink=''
                rightBtnTxt='EXISTING INVENTORY'
                rightBtnLink='true'
                twoButtons='true'
            />
            <Items
                title = 'Model X'
                desc = 'Order Online for Touchless Delivery'
                descLink= ''
                backgroundImg={ModelX}
                leftBtnTxt='Custom Order'
                leftBtnLink=''
                rightBtnTxt='EXISTING INVENTORY'
                rightBtnLink='true'
                twoButtons='true'
            />

          <Items
              title = 'Lowest Cost Solar Panels in America'
              desc = 'Money-back guarantee'
              descLink= ''
              backgroundImg={SolarPanels}
              leftBtnTxt='ORDER NOW'
              leftBtnLink=''
              rightBtnTxt='LEARN MORE'
              rightBtnLink='true'
              first
          />
            <Items
                title = 'Solar For New Roofs'
                desc = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                descLink= ''
                backgroundImg={SolarRoof}
                leftBtnTxt='ORDER NOW'
                leftBtnLink=''
                rightBtnTxt='LEARN MORE'
                rightBtnLink='true'
                twoButtons='true'
            />
            <Items
                title = 'Accessories'
                desc = 'Money Back Guarantee'
                descLink= ''
                backgroundImg={Accessories}
                leftBtnTxt='SHOP NOW'
                leftBtnLink=''
                rightBtnTxt='Learn More'
                rightBtnLink='true'
            />
        </div>
    </div>
  );
}

export default App;
