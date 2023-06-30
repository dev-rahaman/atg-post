import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { BsFillPenFill } from "react-icons/bs";

const RightSideBar = () => {
  const [followStatus, setFollowStatus] = useState({});

  const handleFollow = (index) => {
    setFollowStatus((prevState) => {
      const newFollowStatus = { ...prevState };
      newFollowStatus[index] = !newFollowStatus[index];
      return newFollowStatus;
    });
  };

  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi5g4u3Ep8h5pgBHeRtkyYdYIWeBg7icsZUw&usqp=CAU",
      heading: "Leisure",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zQS9URRW4F7u5xwBYD1dw8cMLK6KBjy_YQ&usqp=CAU",
      heading: "rs abdur rahaman sultany fan group",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEej4hx0e7i0rP1CRGN34KaImrHN2hZ6IiEg&usqp=CAU",
      heading: "Leisure",
    },
    {
      image:
        "https://rs-rahaman.github.io/Brittany-LG/img/rs%20abdur%20rhaman%20sultnay.jpg",
      heading: "Leisure",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVdCKhTvPL5aYpF73A05Zeu4tsf9OFxKNIA&usqp=CAU",
      heading: "Leisure",
    },
  ];

  return (
    <div>
      <h5>Location:</h5>
      <div className="d-flex">
        <p className="me-2">Dhaka, Bangladesh</p> <BsFillPenFill size={20} />
      </div>
      <h2>Recommended Groups</h2>
      <table>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt="item"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </td>
                <td>
                  <p className="m-4">{item.heading}</p>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleFollow(index)}
                    style={{ width: "80px" }}
                  >
                    {followStatus[index] ? "Unfollow" : "Follow"}
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default RightSideBar;
