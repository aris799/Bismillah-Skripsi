import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/Dashboard.css';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start > end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, duration / 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

const TestimonialCarousel = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  

  const testimonials = [  
    {  
      text: "Platform ini menyediakan referensi skripsi yang kredibel. Sangat bermanfaat untuk memastikan topik penelitian saya relevan dan mutakhir, sangat recommended",  
      author: "Balqis",  
      university: "Universitas Indonesia"  
    },  
    {  
      text: "Fitur pencarian dan filter yang canggih membuat saya dengan mudah menemukan referensi yang tepat untuk penelitian saya. Sangat membantu mahasiswa akademis.",  
      author: "Reza",  
      university: "Institut Teknologi Bandung"  
    },  
    {  
      text: "Kumpulan skripsi yang komprehensif dan terupdate memudahkan saya dalam mengembangkan proposal penelitian dengan referensi terkini.",  
      author: "Elizabeth",  
      university: "Universitas Ciputra"  
    },  
    {  
      text: "Platform ini menghemat waktu penelusuran literatur. Referensi berkualitas dari berbagai universitas tersedia dengan mudah dan terstruktur.",  
      author: "Faris",  
      university: "Universitas Airlangga"  
    }  
  ];  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentIndex((prevIndex) =>   
        (prevIndex + 1) % testimonials.length  
      );  
    }, 5000); // Ganti slide setiap 5 detik  

    return () => clearInterval(interval);  
  }, []);  

  return (  
    <div className="testimonial-section">  
      <h3>Testimonials</h3>
      
      <h1>Discover What Our Users Say</h1>
      
      <div className="testimonial-content">  
        <p className="testimonial-text">
          "{testimonials[currentIndex].text}"
        </p>
        <div className="testimonial-author">  
          <p className="testimonial-author-name">
            {testimonials[currentIndex].author}
          </p>  
          <p className="testimonial-author-university">  
            {testimonials[currentIndex].university}  
          </p>  
        </div>  
      </div>  

      <div className="testimonial-indicators">  
        {testimonials.map((_, index) => (  
          <button  
            key={index}  
            onClick={() => setCurrentIndex(index)}  
            className={`testimonial-indicator ${
              currentIndex === index 
              ? 'testimonial-indicator-active' 
              : 'testimonial-indicator-inactive'
            }`}
          />  
        ))}  
      </div>  
    </div>  
  );  
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <Header />
      <div className="home-main">
        <h1>SRSIK</h1>
        <h2>Sistem Rekomendasi Skripsi Ilmu Komputer</h2>
        <p>
          Temukan topik skripsi yang sesuai minat dan bidangmu dengan platform terpercaya.
          Kami menyediakan berbagai referensi dan panduan untuk membantu mahasiswa menemukan
          ide penelitian yang orisinal dan relevan.
        </p>
        <button className="explore-button" onClick={() => navigate('/explore')}>
          Coba Sekarang
        </button>

        <div className="hero-section">
          <div className="hero-image-container">
            <img
              src="https://res.cloudinary.com/diogvlobw/image/upload/v1762436500/students_10_lswiuc.jpg"
              alt="SRSIK Students"
              className="hero-image"
            />
          </div>

          <div className="statistics-container">
            <div className="stat-item">
              <h2><CountUp end={4000} /></h2>
              <p>Koleksi Skripsi</p>
            </div>
            <div className="stat-item">
              <h2><CountUp end={1000} /></h2>
              <p>Pengguna Aktif</p>
            </div>
            <div className="stat-item">
              <h2><CountUp end={100} /></h2>
              <p>Mitra Akademik</p>
            </div>
          </div>
        </div>
      </div>
      <div className="features-section">
  <div className="features-title">
    <h2>Explore Our Feature</h2>
    <p>Temukan bagaimana SRSIK Hub membantu dalam mencari dan memilih topik skripsi yang tepat dengan cara yang lebih mudah, cepat, dan terarah.</p>
  </div>
  <div className="features-container">
    <div className="feature-item">
      <div className="feature-icon-container">
        <img 
          src="https://res.cloudinary.com/diogvlobw/image/upload/v1762320369/search_ofjkou.svg" 
          alt="Cari Topik Skripsi" 
          className="feature-icon" 
        />
      </div>
      <h3>Cari Topik Skripsi</h3>
      <p>Cari topik skripsi sesuai minat dan bidangmu dengan cepat.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon-container">
        <img 
          src="https://res.cloudinary.com/diogvlobw/image/upload/v1762320369/category_weinzi.svg" 
          alt="Beragam Kategori" 
          className="feature-icon" 
        />
      </div>
      <h3>Beragam Kategori</h3>
      <p>Beragam bidang untuk pilihan ide skripsi.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon-container">
        <img 
          src="https://res.cloudinary.com/diogvlobw/image/upload/v1762477202/books_tmiufu.svg" 
          alt="Sumber Terpecaya" 
          className="feature-icon" 
        />
      </div>
      <h3>Sumber Terpecaya</h3>
      <p>Sumber skripsi berasal dari Kampus-Kampus Unggulan di Indonesia.</p>
    </div>
    <div className="feature-item">
      <div className="feature-icon-container">
        <img 
          src="https://res.cloudinary.com/diogvlobw/image/upload/v1762320369/time-management_isawfn.svg" 
          alt="Up to Date" 
          className="feature-icon" 
        />
      </div>
      <h3>Up to Date</h3>
      <p>Data skripsi akan selalu di update secara berkala.</p>
    </div>
  </div>
</div>
<div className="about-us-section">
  <div className="about-us-content">
    <p className="about-us-subtitle">SRSIK HUB - Sistem Rekomendasi Skripsi Ilmu Komputer</p>
    <h1>Temukan ide skripsi dengan data terpercaya</h1>
    <div className="about-us-paragraphs">
      <p>
        SRSIK Hub adalah platform rekomendasi akademik yang membantu mahasiswa menemukan ide skripsi secara lebih mudah, cepat, dan terpercaya. Koleksi skripsi yang tersedia telah terverifikasi dan bersumber dari universitas unggulan di Indonesia, sehingga kualitas dan kreditilitasnya terjamin. Dengan basis data yang kredibel, SRSIK Hub hadir sebagai jembatan antara kebutuhan mahasiswa dan referensi akademik yang relevan.
      </p>
      <p>
        Menggunakan kombinasi algoritma TF-IDF dan Cosine Similarity, SRSIK Hub mampu memberikan hasil pencarian yang akurat sesuai kata kunci dan minat pengguna. Didukung berbagai kategori bidang penelitian serta data yang selalu diperbaharui, platform ini tidak hanya mempermudah pencarian referensi, tetapi juga menginspirasi mahasiswa untuk menghasilkan penelitian yang mutakhir dan berdampak.
      </p>
    </div>
  </div>
</div>
<div className="trusted-universities-section">
  <div className="trusted-universities-content">
    <h1>Dipercaya Kampus Ternama,<br />Digunakan Berbagai Mahasiswa</h1>
    <p>Ribuan mahasiswa dari berbagai kampus telah memanfaatkan platform kami untuk mengeksplorasi ide dan referensi skripsi mereka. </p>
    
<div className="universities-grid">
  {[
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678634/ui_ix1nm5.png", // Universitas Indonesia
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678634/484-4843129_lambang-its-png-logo-its-hd-png-transparent_ypzsct.png", // ITS
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762679628/logo_Universitas-Bina-Nusantara_z9h1p0.png", // Binus
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678633/Logo-Branding-UNAIR-biru_chzuso.png", // Unair
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678637/Logo_Universitas_Brawijaya.svg_qzfai9.png", // Brawijaya
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678635/Logo_Telkom_University_potrait_k7hkg3.png", // Telkom University
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678634/Logo_Institut_Teknologi_Bandung_r2cm9y.png", // ITB
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678634/UNIVERSITAS_GADJAH_MADA__YOGYAKARTA_jbiumt.png", // UGM
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762320371/upnvjt_1_suizwn.png", // UPNVJT
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678634/LOGO-UC-FIX-SEP-2021-01_oxhf1s.png", // UC
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678635/Logo_unej_1_vctgzp.png", // UNEJ
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678634/UNIKOM-LOGO-2025-High-Resolution-1024x1024_sqvgr7.png", // UNIKOM
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678634/Lambang_Universitas_Padjadjaran.svg_oqq3sd.png", // Unpad
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678633/Universitas-surabaya_tf5gyg.png", // Ubaya
    "https://res.cloudinary.com/diogvlobw/image/upload/v1762678633/Logo-UMN-e1634700898276_cleopb.png" // UMN
  ].map((logoUrl, index) => (
    <div key={index} className="university-logo">  
      <img   
        src={logoUrl}   
        alt={`University Logo ${index + 1}`}   
      />  
    </div>  
  ))}
</div>

  </div>
</div>
<TestimonialCarousel /> 
      <Footer />
    </div>
  );
};

export default Home;
