import React from "react";
import { useDispatch } from "react-redux";
import TrashIcon from "../images/remove.png";
import { handleDeleteUser } from "../redux/action";

const Card = ({ post }) => {
  const dispatch = useDispatch();
  const { id, name, email, phone } = post || {};

  const handleDelete = (id) => {
    dispatch(handleDeleteUser(id));
  };

  return (
    <div
      className="card row border-light mb-3 m-3 shadow rounded"
      style={{ width: "18rem" }}
    >
      <div className="card-header d-flex justify-content-between pe-auto justify-content-space-between">
        <h5>{name}</h5>
        <p>
          <button variant="danger" className="bg-transparent border-0 ">
            <img
              src={TrashIcon}
              onClick={() => handleDelete(id)}
              alt="delete"
              width="16"
              height="16"
            />
          </button>
        </p>
      </div>
      <div className="card-body">
        <p className="card-title">{`Phone: ${phone}`}</p>
        <p className="card-text">{`Email: ${email}`}</p>
      </div>
    </div>
  );
};

export default Card;
