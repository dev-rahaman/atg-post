import { Col } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import EducationCart from "./EducationCart";
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
                <EducationCart key={item._id} item={item}></EducationCart>
              ))}
          </Col>
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
