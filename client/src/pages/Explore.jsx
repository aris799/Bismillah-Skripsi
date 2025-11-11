import React, { useState, useEffect, useCallback } from 'react';  
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';  
import Header from './Header';  
import Footer from './Footer';  
import '../styles/Explore.css';  
import useScrollReset from '../hooks/useScrollReset';  

const ExplorePage = () => {  
  const navigate = useNavigate();  
  useScrollReset();  

  const [searchKeyword, setSearchKeyword] = useState('');  
  const [selectedCategory, setSelectedCategory] = useState('');  
  const [selectedYear, setSelectedYear] = useState('');  
  const [currentPage, setCurrentPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(0);  
  const [limit, setLimit] = useState(5); // 5 judul per halaman  
  const [theses, setTheses] = useState([]);  
  const [totalResults, setTotalResults] = useState(0);  
  const [isLoading, setIsLoading] = useState(false);  
  const [error, setError] = useState(null);  
  const [years, setYears] = useState([]);  

  // State untuk bookmark  
  const [bookmarks, setBookmarks] = useState(() => {  
    const savedBookmarks = localStorage.getItem('bookmarks');  
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];  
  });  

  useEffect(() => {  
    const yearList = [2025, 2024, 2023, 2022, 2021];  
    setYears(yearList);  
  }, []);  

  const categories = [  
    'Web Development', 'Mobile Development', 'Machine Learning',  
    'Pendidikan', 'Artificial Intelligence', 'Internet of Things (IoT)',  
    'Sistem Informasi', 'Data Mining', 'Kesehatan', 'Lingkungan', 'Lainnya'  
  ];  

  // Fungsi untuk mengelola bookmark  
  const handleBookmark = (thesis) => {  
    const isAlreadyBookmarked = bookmarks.some(  
      (bookmark) => bookmark.judul === thesis.judul  
    );  

    let updatedBookmarks;  
    if (isAlreadyBookmarked) {  
      // Hapus bookmark jika sudah ada  
      updatedBookmarks = bookmarks.filter(  
        (bookmark) => bookmark.judul !== thesis.judul  
      );  
    } else {  
      // Tambahkan ke bookmark  
      updatedBookmarks = [...bookmarks, thesis];  
    }  

    // Simpan ke localStorage  
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));  
    setBookmarks(updatedBookmarks);  
  };  

  // Navigasi ke halaman bookmark  
  const handleBookmarkPage = () => {  
    navigate('/bookmark');  
  };  

  // Fungsi pencarian yang dioptimasi  
  const handleSearch = useCallback(async () => {  
    setIsLoading(true);  
    setCurrentPage(1);  

    // Reset scroll saat melakukan pencarian  
    requestAnimationFrame(() => {  
      window.scrollTo({ top: 0, behavior: 'instant' });  
    });  

    try {  
      const searchPayload = {  
        query: searchKeyword || '',  
        category: selectedCategory || null,  
        year: selectedYear || null,  
        page: 1,  
        limit: limit  
      };  

      const response = await axios.post('http://localhost:5000/recommend', searchPayload);  

      if (response.data.status === 200) {  
        setTheses(response.data.results);  
        setTotalResults(response.data.total_results);  
        setTotalPages(response.data.total_pages);  

        // Pastikan scroll tetap di atas  
        requestAnimationFrame(() => {  
          window.scrollTo({ top: 0, behavior: 'instant' });  
        });  
      } else {  
        setTheses([]);  
        setTotalResults(0);  
        setTotalPages(0);  
        setError(response.data.message || 'Gagal mengambil data');  
      }  
    } catch (error) {  
      console.error('Error dalam pencarian:', error);  
      setError('Gagal mengambil data. Silakan coba lagi.');  
      setTheses([]);  
      setTotalResults(0);  
      setTotalPages(0);  
    } finally {  
      setIsLoading(false);  
    }  
  }, [searchKeyword, selectedCategory, selectedYear, limit]);  

  const handleCategoryClick = (category) => {  
    setSelectedCategory(category);  
    handleSearch(); // Menjalankan pencarian berdasarkan kategori yang dipilih  
  };  

  const handlePageChange = async (pageNumber) => {  
    // Reset scroll sebelum proses apapun  
    requestAnimationFrame(() => {  
      window.scrollTo({ top: 0, behavior: 'instant' });  
    });  

    setCurrentPage(pageNumber);  
    setIsLoading(true);  

    try {  
      const searchPayload = {  
        query: searchKeyword || '',  
        category: selectedCategory || null,  
        year: selectedYear || null,  
        page: pageNumber,  
        limit: limit  
      };  

      const response = await axios.post('http://localhost:5000/recommend', searchPayload);  

      if (response.data.status === 200) {  
        setTheses(response.data.results);  

        // Pastikan scroll tetap di atas setelah data dimuat  
        requestAnimationFrame(() => {  
          window.scrollTo({ top: 0, behavior: 'instant' });  
          document.body.scrollTop = 0;  
          document.documentElement.scrollTop = 0;  
        });  
      }  
    } catch (error) {  
      console.error('Error dalam pagination:', error);  
      setError('Gagal mengambil data. Silakan coba lagi.');  
    } finally {  
      setIsLoading(false);  
    }  
  };  

  const handleReset = () => {  
    setSearchKeyword('');  
    setSelectedCategory('');  
    setSelectedYear('');  
    setTheses([]);  
    setTotalResults(0);  
    setCurrentPage(1);  

    // Reset scroll saat mereset  
    requestAnimationFrame(() => {  
      window.scrollTo({ top: 0, behavior: 'instant' });  
    });  
  };  

  const handleItemsPerPageChange = (event) => {  
    const newLimit = event.target.value;  
    setLimit(newLimit);  
    setCurrentPage(1); // Reset ke halaman pertama  
    
    // Reset scroll saat mengubah jumlah item per halaman  
    requestAnimationFrame(() => {  
      window.scrollTo({ top: 0, behavior: 'instant' });  
    });  

    handleSearch(); // Panggil penscarian ulang dengan limit baru  
  };  


  return (
    <div className="explore-page">
      <Header />

      <div className="explore-container">
        {/* Kolom Kiri (80%) */}
        <div className="left-column">
          {/* Search Bar */}
          <div className="search-section">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Ketikkan Kata Kunci (Contoh: Klasifikasi Penyakit Daun Tanaman)"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="search-input"
              />
              <button onClick={handleSearch} className="search-btn">Cari</button>
            </div>
            <div className="input-group">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)} 
                className="category-select"
              >
                <option value="">Kategori</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              <select 
                value={selectedYear} 
                onChange={(e) => setSelectedYear(e.target.value)} 
                className="year-select"
              >
                <option value="">Tahun</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <button onClick={handleReset} className="reset-btn">Reset</button>
            </div>
            
            {/* Mobile Bookmark - Tambahkan di bawah reset */}
            <div className="input-group mobile-bookmark-section desktop-hidden">
              <button 
                className="mobile-bookmark-btn"
                onClick={handleBookmarkPage}
              >
                Bookmark
              </button>
            </div>
          </div>

          {/* Hasil Skripsi */}
          <div className="results-list">
            {isLoading ? (
              <div className="loading">Memuat data...</div>
            ) : error ? (
              <div className="error">{error}</div>
            ) : theses.length > 0 ? (
              theses.map((thesis, index) => (
                <div key={index} className="thesis-card">
                  <div className="thesis-card-header">
                    <h3 className="thesis-title">{thesis.judul}</h3>
                    <img 
                      src={
                        bookmarks.some(b => b.judul === thesis.judul) 
                          ? "https://res.cloudinary.com/diogvlobw/image/upload/v1762702266/bookmark-black_wrrkzl.svg"
                          : "https://res.cloudinary.com/diogvlobw/image/upload/v1762702282/bookmark-white_limedr.svg"
                      } 
                      alt="Bookmark" 
                      className="bookmark-icon"
                      onClick={() => handleBookmark(thesis)}
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
              ))
            ) : (
              <div className="no-results">
                Oops, tidak ada data yang sesuai. Coba cari dengan keyword lain.
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
        </div>

        {/* Kolom Kanan (20%) */}
        <div className="right-column">
          <button 
            className="bookmark-btn"
            onClick={handleBookmarkPage}
          >
            Bookmark
          </button>

          <div className="category-box">
            <h4>Kategori</h4>
            {categories.map((category, index) => (
              <button 
                key={index} 
                onClick={() => handleCategoryClick(category)}
                className="category-btn"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExplorePage;
