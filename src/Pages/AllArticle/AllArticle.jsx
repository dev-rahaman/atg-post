import { Col } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import ArticleCart from "./ArticleCart";
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
                <ArticleCart
                  key={item._id}
                  item={item}
                  loadData={loadData}
                ></ArticleCart>
              ))}
          </Col>
        </div>
      </div>
    </div>
  );
};

export default AllArticle;
