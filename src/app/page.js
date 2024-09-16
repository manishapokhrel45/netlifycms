import React from 'react';
import Link from 'next/link'; // Use Next.js Link
import Markdown from 'react-markdown'; // For rendering markdown
import postlist from '../posts.json'; // Assuming your posts are stored in this JSON file
import Image from 'next/image';

const PostList = () => {
  // Create excerpts for each post
  const excerptList = postlist.map((post) => {
    return post.content.split(' ').slice(0, 20).join(' ') + '...';
  });

  return (
    <div className='max-w-5xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>All Posts</h1>
      {postlist.length > 0 &&
        postlist.map((post, i) => {
          return (
            <div key={i} className='border p-4 rounded-lg mb-6 shadow-md'>
              <div className='flex items-center mb-4'>
                {post.thumbnail && (
                  <Image
                    className='w-20 h-20 rounded-lg object-cover mr-4'
                    src={post.thumbnail}
                    alt='Post Thumbnail'
                  />
                )}
                <h2 className='text-2xl font-semibold'>
                  <Link href={`/post/${post.id}`} passHref>
                    <a className='text-blue-500 hover:underline'>
                      {post.title}
                    </a>
                  </Link>
                </h2>
              </div>
              <small className='text-gray-500'>
                Published on {post.date} by {post.author}
              </small>
              <hr className='my-4' />
              <Markdown
                source={excerptList[i]}
                escapeHtml={false}
                className='text-gray-700'
              />
              <small className='text-blue-500 hover:underline'>
                <Link href={`/post/${post.id}`} passHref>
                  <a>Read more</a>
                </Link>
              </small>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
