import Nav from "../components/Navbar/Nav"
import HomePage from "../components/HomePage/HomePage"
import Products from "../components/Products/Products"
import About from "../components/About/About"
import Creative from "../components/Creative/Creative"
import Contact from "../components/Contact/Contact"

export default function Home() {
  return(
    <>
      <Nav/>
      <main>
        <HomePage/>
        <Products/>
        <About/>
        <Creative/>
        <Contact/>
      </main>
    </>
  )
}
