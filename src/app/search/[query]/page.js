'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { client } from '../../../../sanity.js';
import '../../../styles/search.css';

function SearchContent() {
  const { query } = useParams(); // Path-based routing
  const decodedQuery = decodeURIComponent(query?.toLowerCase() || '');
  const [selectedCategory, setSelectedCategory] = useState('blogs');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const queries = {
    blogs: `
      *[
        (
        _type == "blogsStandardDetails") && $query in tags
      ]{
        title,
        "slug": slug.current,
        "image": mainImage.asset->url,
        intro,
        _type
      }
    `,
  };

  useEffect(() => {
    if (!decodedQuery) return;

    setLoading(true);
    const fetchResults = async () => {
      try {
        const fetchedResults = await client.fetch(queries[selectedCategory], {
          query: decodedQuery,
        });
        setResults(fetchedResults);
        setCurrentPage(1); // Reset to page 1 when new results come
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [decodedQuery, selectedCategory]);

  const getDetailsLink = (category, item) => {
    if (category === 'blogs') {
      return `/blog-standard-post/${item.slug}`;
    }
    return '/';
  };

  const totalPages = Math.ceil(results.length / resultsPerPage);
  const indexOfLast = currentPage * resultsPerPage;
  const indexOfFirst = indexOfLast - resultsPerPage;
  const currentResults = results.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="search-container">
      <div className="search-results-container">
        {loading ? (
          <p className="search-loading">Loading Post...</p>
        ) : currentResults.length > 0 ? (
          <>
            {currentResults
              .filter((item) => item.slug)
              .map((item) => (
                <Link
                  key={`${item._type || selectedCategory}-${item.slug}`}
                  href={getDetailsLink(selectedCategory, item)}
                  className="search-result-item"
                >
                  <div className="search-result-image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="search-square-image"
                    />
                  </div>
                  <div className="search-result-content">
                    <div className="search-result-title">{item.title}</div>
                    {item.intro && (
                      <p className="search-result-description">
                        {item.intro.length > 150
                          ? item.intro.slice(0, 150) + '...'
                          : item.intro}
                      </p>
                    )}
                  </div>
                </Link>
              ))}

            <div className="pagination-buttons">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`page-button ${
                    currentPage === i + 1 ? 'active' : ''
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="search-no-results">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="search-loading">Loading Post...</div>}>
      <SearchContent />
    </Suspense>
  );
}
