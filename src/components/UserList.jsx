import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/action";
import Card from "../common/Card";
import Loader from "../common/Loader";
import Error from "../common/Error";

const UserList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const loaderSkeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <div className="container d-flex flex-wrap">
        {loading
          ? loaderSkeleton?.map(() => <Loader />)
          : posts?.length > 0 &&
            posts.map((post) => <Card key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default UserList;
