import { Col } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import EducationCart from "./EducationCart";

const AllArticle = () => {
  const loadData = useLoaderData();

  return (
    <div>
      <div className="container">
        <div>
          <Col lg={12} md={12} sm={12}>
            {loadData.map((item) => (
              <EducationCart key={item._id} item={item}></EducationCart>
            ))}
          </Col>
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
