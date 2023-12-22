// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// scss
import "./Home.scss";

// components
import TableDatas from "../components/table-data/TableDatas";

const Home = ({ universities, search }) => {

  return (
    <>
      <TableDatas universities={universities} search={search}/>
    </>
  );
};

export default Home;
