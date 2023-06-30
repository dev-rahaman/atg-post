import { Col } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import HomeCart from "./HomeCart";
import PostCart from "../../PostCart/PostCart";

const Home = () => {
  const loadData = useLoaderData();

  return (
    <div>
      <div className="container">
        <PostCart></PostCart>
        <div>
          <Col lg={12} md={12} sm={12}>
            {loadData &&
              loadData.map((item) => (
                <HomeCart key={item._id} item={item}></HomeCart>
              ))}
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Home;
