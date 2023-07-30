import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
  const [loading, posts, error] = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {posts &&
        posts.map((post) => {
          return (
            <article>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </article>
          );
        })}
    </div>
  );
};

export default PostView;
