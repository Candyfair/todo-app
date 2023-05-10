import './style.scss';

import Header from '../Header';
import Create from '../Create';
import Tasks from '../Tasks';
import Footer from '../Footer';

const Layout = () => (
  <div className="container">
    <Header />
    <Create />
    <Tasks />
    <Footer />
  </div>
);

export default Layout;
