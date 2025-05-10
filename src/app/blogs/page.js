'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '../../../sanity.js'; // adjust path if needed
import '../../styles/blogs-page.css';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const standardPosts = await client.fetch(`
          *[_type == "blogsStandardDetails"] {
            _id,
            _type,
            title,
            slug,
            "image": mainImage.asset->url,
            intro
          }
        `);

        const allPosts = [
          ...standardPosts.map(post => ({
            id: post._id,
            type: 'standard',
            title: post.title,
            slug: post.slug?.current || '',
            image: post.image,
            intro: post.intro,
          })),
        ];

        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <div className='blogs-page-loading'>Loading Posts...</div>;
  if (!posts.length) return <div className='blogs-page-loading'>No Posts Found.</div>;

  return (
    <div className='blogs-container'>
      {currentPosts.map(post => (
        <div key={post.id} className='blogs-container-postcard'>
          <div className='search-page-item1'>
            {post.image && <img src={post.image} alt={post.title} className='blogs-image' />}
          </div>

          <div className='search-page-item2'>
            <Link
              href={`/blog-standard-post/${post.slug}`}
              className='blogs-link'
            >
              <div className='blogs-title'>{post.title}</div>
            </Link>

            <p className='blogs-description'>
              {post.intro?.length > 100 ? post.intro.slice(0, 100) + '...' : post.intro}
            </p>
          </div>
        </div>
      ))}

      <div className='pagination-buttons'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
