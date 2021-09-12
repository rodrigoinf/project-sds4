import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">DSSales</h1>
          <p className="lead">Analyze your sales performance from different perspectives</p>
          <hr />
          <p>This application consists of displaying a dashboard from data provided by a back end built with Spring Boot.</p>
          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Go to Dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;