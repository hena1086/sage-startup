import "./App.css"
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch,  Route} from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Switch>
          <Route exact path='/'  component={Home} />
          <Route exact path='/about'  component={About} />
          <Route exact path='/acadamics'  component={CourseHome} />
         
          
            
          
        </Switch>
       
      </Router>
    </>
  )
}

export default App