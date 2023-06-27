import { Col } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import JobsCart from "./JobCart";

const AllArticle = () => {
  const loadData = useLoaderData();

  return (
    <div>
      <div className="container">
        <div>
          <Col lg={12} md={12} sm={12}>
            {loadData &&
              loadData.map((item) => (
                <JobsCart key={item._id} item={item}></JobsCart>
              ))}
          </Col>
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
