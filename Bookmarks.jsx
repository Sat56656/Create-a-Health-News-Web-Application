import React from 'react';
import './Bookmarks.css';

export default function Bookmarks({ bookmarks }) {
  return (
    <div className="bookmarks">
      <h2>Bookmarked Articles</h2>
      {bookmarks.length > 0 ? (
        bookmarks.map(article => (
          <div key={article.url} className="bookmark-item">
            <h2>{article.title}</h2>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))
      ) : (
        <p>No bookmarks yet.</p>
      )}
    </div>
  );
}
