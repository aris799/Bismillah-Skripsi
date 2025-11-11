import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 
import '../styles/Bookmark.css';  

const Bookmark = () => {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5); // 5 judul per halaman
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Ambil bookmark dari localStorage saat komponen dimuat
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      const parsedBookmarks = JSON.parse(savedBookmarks);
      setBookmarks(parsedBookmarks);
      setTotalPages(Math.ceil(parsedBookmarks.length / limit));
    }
  }, [limit]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleRemoveBookmark = (thesis) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.judul !== thesis.judul
    );
    
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    setBookmarks(updatedBookmarks);
    setTotalPages(Math.ceil(updatedBookmarks.length / limit));
    
    // Reset halaman jika halaman saat ini melebihi total halaman
    if (currentPage > Math.ceil(updatedBookmarks.length / limit)) {
      setCurrentPage(Math.max(1, Math.ceil(updatedBookmarks.length / limit)));
    }
  };

  // Fungsi pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Reset scroll ke atas saat berganti halaman
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  };

  // Potong bookmark sesuai halaman
  const paginatedBookmarks = bookmarks.slice(
    (currentPage - 1) * limit, 
    currentPage * limit
  );

  return (
    <div className="bookmark-page">
      <Header />
      
      <div className="bookmark-header-container">
        <div className="back-button">
          <button onClick={handleBack} className="back-button-style">
            <img 
              src="https://res.cloudinary.com/diogvlobw/image/upload/v1762320371/back_e45dbs.svg" 
              alt="Back" 
            />
          </button>
        </div>
        <h1 className="bookmark-title">Bookmark Skripsi</h1>
      </div>

      <div className="bookmark-content-container">
        {bookmarks.length === 0 ? (
          <div className="no-bookmarks">
            <p>Belum ada skripsi yang di-bookmark</p>
          </div>
        ) : (
          <div className="results-list">
            {paginatedBookmarks.map((thesis, index) => (
              <div key={index} className="thesis-card">
                <div className="thesis-card-header">
                  <h3 className="thesis-title">{thesis.judul}</h3>
                  <img 
                    src="https://res.cloudinary.com/diogvlobw/image/upload/v1762702266/bookmark-black_wrrkzl.svg"
                    alt="Remove Bookmark" 
                    className="bookmark-icon"
                    onClick={() => handleRemoveBookmark(thesis)}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                      position: 'absolute',
                      top: '10px',
                      right: '10px'
                    }}
                  />
                </div>
                <div className="thesis-meta">
                  <div className="author">
                    <img 
                      src="https://res.cloudinary.com/diogvlobw/image/upload/v1762664218/user_dehlla.svg" 
                      alt="Penulis Icon" 
                      className="icon" 
                    />
                    <p className="author-name" style={{ marginTop: '13px' }}>
                      {thesis.penulis}
                    </p>
                  </div>
                  <div className="year">
                    <img 
                      src="https://res.cloudinary.com/diogvlobw/image/upload/v1762664201/calendar_1_xpism5.svg" 
                      alt="Year Icon" 
                      className="icon" 
                    />
                    <span>{thesis.tahun}</span>
                  </div>
                </div>
                <p className="thesis-abstract">{thesis.abstrak}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            {'<'} Previous
          </button>
          <span>{currentPage} of {totalPages}</span>
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next {'>'}
          </button>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Bookmark;
