import Nav from "../components/Navbar/Nav"
import HomePage from "../components/HomePage/HomePage"
import Products from "../components/Products/Products"

export default function Home() {
  return(
    <>
      <Nav/>
      <main>
        <HomePage/>
        {/* <Products/> */}
      </main>
    </>
  )
}
