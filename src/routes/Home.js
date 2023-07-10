import Header from '../components/Header';
import TodosLogic from '../components/TodosLogic';
import '../index.css';

const Home = () => (
  // <div className="wrapper">
  <div className="todos">
    <Header />
    <TodosLogic />
  </div>
  // </div>
);
export default Home;
