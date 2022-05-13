//import component Bootstrap React
import { Navbar, Container, Nav } from 'react-bootstrap'

//import react router dom
import { Switch, Route, Link } from "react-router-dom";

//import component Home
import Home from './pages/Home'

//import component Char Index
import CharIndex from './pages/char/Index'

//import component Post Create
import LocationCreate from './pages/char/create'

//import component Post Edit
// import PostEdit from './pages/posts/Edit'

import TableDetail from "./pages/char/detail";

//import component Post Index
import PostIndex from './pages/char/location'

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">MOSTRANS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                  <Nav.Link as={Link} to="/chars" className="nav-link">Character List</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chars" component={CharIndex} />
        <Route exact path="/detail/:id/:name/:status/:gender/:species" component={TableDetail} />
        <Route exact path="/char/create" component={LocationCreate} />
        <Route exact path="/posts" component={PostIndex} />
        {/*<Route exact path="/posts/edit/:id" component={PostEdit} />*/}
      </Switch>
      
    </div>
  );
}

export default App;