import Nav from "../components/Navbar/Nav"
import HomePage from "../components/HomePage/HomePage"
import Products from "../components/Products/Products"
import About from "../components/About/About"


export default function Home() {
  return(
    <>
      <Nav/>
      <main>
        <HomePage/>
        <Products/>
        <About/>
      </main>
    </>
  )
}
