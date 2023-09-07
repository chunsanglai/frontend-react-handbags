import './App.css'
import Button from './components/Button.jsx'
import Product from './components/Product.jsx'
import Tile from './components/Tile.jsx'
import Bag1 from './assets/bag_1.png'
import Bag2 from './assets/bag_2.png'
import Bag3 from './assets/bag_3.png'
import Bag4 from './assets/bag_4.png'
import Brand from './assets/brand.png'
import OurStory from './assets/our_story.png'

function App() {
  return ( <>
      <h1>Handbags & Purses</h1>
    <nav>
      <Button text="to the collection" disabled={false}/>
      <Button text="shop all bags" disabled={false}/>
      <Button text="pre-order bags" disabled={true}/>
    </nav>
    <main>
      <Product label="Best Seller" image={Bag1} alt="bag1" name="The handy bag" price="€400,-"/>
      <Product label="Best Seller" image={Bag2} alt="bag2" name="The stylish bag" price="€250,-"/>
      <Product label="New Collection" image={Bag3} alt="bag3" name="The simple bag" price="€300,-"/>
      <Product label="New Collection" image={Bag4} alt="bag4" name="The trendy bag" price="€150,-"/>
    </main>
    <footer>
      <Tile title="The brand">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
      </Tile>
      <Tile image={Brand} description="The brand logo" />
      <Tile image={OurStory} description="The designers" />
      <Tile title="Our story">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>
      </Tile>
    </footer>
  </>
  )
}

export default App
