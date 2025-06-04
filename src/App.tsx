import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import ProjectSection from "./components/ProjectSection"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
    <header>
      <Sidebar />
      <Navbar />
      <main className="flex flex-col justify-center items-center mt-5 ml-10 m-auto ">
        <Profile />
        <ProjectSection />
      </main>
    </header>
      
    </>
  )
}

export default App
