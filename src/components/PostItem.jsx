import React from 'react';

const PostItem = (props) => {
  return (
    <div className='post'>
      <strong>{props.number}. {props.post.title}</strong>
      <div>
        {props.post.body}
      </div>
      <div className='post__btns'>
        <button onClick={() => props.remove(props.post)}>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;