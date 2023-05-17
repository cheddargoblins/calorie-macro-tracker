import { Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import { UserContext } from '../App';

export const NavBar = () => {

    return (
        <Navbar className='navbar-outer'fixed='top' bg="dark" variant="light">
            <Container className='navbar-container'>
                <Navbar.Collapse className="nav-name">
                    <Navbar.Brand href="/">Tango Nutrition</Navbar.Brand>
                    <Navbar.Text>
                        Signed in as: <a>{UserContext.name}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#/search/">Search</Nav.Link>
            <Nav.Link href="#/recordmeal/">Record Meal</Nav.Link>
            <Nav.Link href="#/calendar/">Calendar</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}