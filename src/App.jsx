import './App.css'
import Nav from './components/Nav/Nav'
/* mobile : 375 * 780 */
/* desktop : 1440 * 1024 */
function App() {
  return (
    <>
    <Nav logo="Vaccination.ng" items={[{link : "#" , content : "Home"} , {link : "#services" , content : "Services"} , {link : "#schedule" , content : "Schedule"}, {link : "#feedback" , content : "FEEDBACK"}]} btn = "Check Status"/>
    </>
  )
}

export default App

