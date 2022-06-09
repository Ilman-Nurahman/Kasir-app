import './App.css';
import {Hasil, NavbarComponent, ListCategories} from './Components';
import { Row, Col, Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="mt-4">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4><strong>Daftar Produk</strong></h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
