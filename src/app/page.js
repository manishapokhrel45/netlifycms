import React from 'react';
import Markdown from 'react-markdown';
import postlist from '../posts.json';

import './components.css';
import Image from 'next/image';

const PostList = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split(' ').slice(0, 20).join(' ') + '...';
  });
  return (
    <div className='postlist'>
      <h1 className='title'>All Posts</h1>
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <div key={i} className='post-card'>
              <div className='img-container'>
                {post.thumbnail && (
                  <Image
                    className='thumbnail'
                    width={80}
                    src={post.thumbnail}
                    alt=''
                  />
                )}
                <h2 className='post-title'>{post.title}</h2>
              </div>
              <small>
                Published on {post.date} by {post.author}
              </small>
              <hr />
              <Markdown source={excerptList[i]} escapeHtml={false} />
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
