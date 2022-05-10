import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#Navbar">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Link">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="# Dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#Action">Action</a></li>
            <li><a className="dropdown-item" href="#Another action">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#Something else here">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled"href='Disabled'>Disabled</a>
        </li>
      </ul>
      <Form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Button className="btn btn-outline-success" type="submit">Search</Button>
      </Form>
    </div>
  </div>
</nav>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet" />
    <div className="container ">
      <div className="card">
        <h3 className="title">Card 1</h3>
        <div className="bar">
          <div className="emptybar" />
          <div className="filledbar" />
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx={60} cy={60} r={50} />
          </svg>
        </div>
      </div>
      <div className="card">
        <h3 className="title">Card 2</h3>
        <div className="bar">
          <div className="emptybar" />
          <div className="filledbar" />
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx={60} cy={60} r={50} />
          </svg>
        </div>
      </div>
      <div className="card">
        <h3 className="title">Card 3</h3>
        <div className="bar">
          <div className="emptybar" />
          <div className="filledbar" />
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx={60} cy={60} r={50} />
          </svg>
        </div>
      </div>
      <div className="card">
        <h3 className="title">Card 4</h3>
        <div className="bar">
          <div className="emptybar" />
          <div className="filledbar" />
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx={60} cy={60} r={50} />
          </svg>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
