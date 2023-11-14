import logo from './logo.svg';
import "./style.css"
import Product from"./components/Product"

function App() {
  return (
    <div>
       <h1>PRODUCTS</h1>
      <div className="App">
       <Product
         img ="https://sneakerholicvietnam.vn/wp-content/uploads/2021/09/nike-air-force-1-pixel-all-white-ck6649-100.jpg" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 400px; width: 100px; height: 100px; margin: 0px;" alt="Nike Air Force 1 Pixel - All White" jsname="kn3ccd" aria-hidden="false"
         name="Product1"
         desc="The new product of Nike"
         price="500$"/>
       <Product
         img ="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 1280px; height: 100px; margin: 0px; width: 100px;" alt="Nike Dunk High By You Custom Men's Shoes. Nike VN" jsname="kn3ccd" aria-hidden="false"
         name="Product2"
         desc="The new product of Nike"
         price="400$"
       />
       <Product
        img src="https://bele.vn/upload/images/giay-jordan-1-xanh-trang-den-co-cao%20(5).png" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 1116px; height: 300px; margin: 0px; width: 300px;" alt="Giày Nike Air Jordan 1 UNC Blue Chill xanh trắng đen" jsname="kn3ccd" aria-hidden="false"
         name="Product3"
         desc="The new product of Nike"
         price="300$"
       />
    </div>
    </div>
    
  );
}

export default App;