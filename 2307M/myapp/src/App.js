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
         img="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffandy.vn%2Fproducts%2Fgiay-nike-air-force-1-low-brooklyn-cream&psig=AOvVaw0xJyHrhJvyJud6_G4FMI9Y&ust=1699759710189000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjIwr-Au4IDFQAAAAAdAAAAABAE"
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