import { Col } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import EventCart from "./EventCart";
import PostCart from "../../PostCart/PostCart";

const AllArticle = () => {
  const loadData = useLoaderData();

  return (
    <div>
      <div className="container">
        <PostCart></PostCart>
        <div>
          <Col lg={12} md={12} sm={12}>
            {loadData &&
              loadData.map((item) => (
                <EventCart
                  key={item._id}
                  item={item}
                  loadData={loadData}
                ></EventCart>
              ))}
          </Col>
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
