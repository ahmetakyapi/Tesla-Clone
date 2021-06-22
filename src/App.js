import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import './App.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="app-itemsContainer">
            <Items
                title = 'Model S'
                desc = 'Order Online for'
                desc2 = 'Touchless Delivery'
                descLink= ''
                backgroundImg={ModelS}
                leftBtnTxt='CUSTOM ORDER'
                leftBtnLink=''
                rightBtnTxt='EXISTING INVENTORY'
                rightBtnLink='true'
                twoButtons='true'
                first
            />
          <Items
              title = 'Model Y'
              desc = 'Order Online for'
              desc2='Touchless Delivery'
              descLink= ''
              backgroundImg={ModelY}
              leftBtnTxt='CUSTOM ORDER'
              leftBtnLink=''
              rightBtnTxt='EXISTING INVENTORY'
              rightBtnLink='true'
              twoButtons='true'
              first
          />
            <Items
                title = 'Model 3'
                desc = 'Order Online for'
                desc2= 'Touchless Delivery'
                descLink= ''
                backgroundImg={Model3}
                leftBtnTxt='CUSTOM ORDER'
                leftBtnLink=''
                rightBtnTxt='EXISTING INVENTORY'
                rightBtnLink='true'
                twoButtons='true'
                first
            />
            <Items
                title = 'Model X'
                desc = 'Order Online for'
                desc2= 'Touchless Delivery'
                descLink= ''
                backgroundImg={ModelX}
                leftBtnTxt='CUSTOM ORDER'
                leftBtnLink=''
                rightBtnTxt='EXISTING INVENTORY'
                rightBtnLink='true'
                twoButtons='true'
                first
            />

          <Items
              title = 'Solar Panels'
              desc = 'Lowest Cost Solar Panels in America'
              descLink= ''
              backgroundImg={SolarPanels}
              leftBtnTxt='ORDER NOW'
              leftBtnLink=''
              rightBtnTxt='LEARN MORE'
              rightBtnLink='true'
              twoButtons='true'
          />
            <Items
                title = 'Solar Roof'
                desc = 'Produce Clean Energy From Your Roof'
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
                descLink= ''
                backgroundImg={Accessories}
                leftBtnTxt='SHOP NOW'
                leftBtnLink=''
            />
            <Footer/>
        </div>
    </div>
  );
}

export default App;
