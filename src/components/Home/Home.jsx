import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../../App.css';
import Footer from '../Footer/Footer';

const Home = () => {
  // const user = {
  //   name: 'John Doe',
  //   email: 'test@gmail.com',
  // };
  const user = null;

  return (
    <>
      <Navbar user={user} />
      <div className="container top-margin">
        <div className="text-center rounded-3">
          <h2 className="jumbotron-heading">
            {' '}
            Discover Your Next Opportunity with LayoffHelp!{' '}
          </h2>

          <p className="col-lg-5 mx-auto jumbotron-para">
            If you&apos;re a professional looking for your next opportunity,
            leave your details with us. Your profile can be viewed by potential
            employers who might be interested in what you bring to the table.
            It&apos;s a straightforward way to get noticed.
          </p>
          <p> Singup today! to get started </p>

          <div className="d-inline-flex gap-3">
            <div className="d-inline-flex gap-3">
              <Link
                to="/signup"
                className="d-inline-flex align-items-center btn btn-lg px-4 rounded-pill jumbotron-button-primary"
              >
                Job Hunting?
              </Link>
              <Link
                to="/signup_recruiter"
                className="btn btn-lg px-4 rounded-pill jumbotron-button-primary"
              >
                Recruit Talent
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
