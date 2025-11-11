import React from 'react';  
import { useNavigate } from 'react-router-dom';  
import Header from './Header';   
import Footer from './Footer';   
import '../styles/Terms.css';  
import useScrollReset from '../hooks/useScrollReset'; // Import hook  

const Terms = () => {  
  const navigate = useNavigate();  
  useScrollReset(); // Gunakan hook di sini  

  const handleBack = () => {  
    navigate(-1);  
  };  

  return (
    <div className="terms-container">
      <Header />
      
      <div className="header-container">
        {/* Tombol Kembali */}
        <div className="back-button">
          <button 
            onClick={handleBack} 
            className="back-button-style"
            aria-label="Kembali" // Tambahkan aria-label untuk aksesibilitas
          >
            <img 
              src="https://res.cloudinary.com/diogvlobw/image/upload/v1762320371/back_e45dbs.svg" 
              alt="Tombol Kembali" 
            />
          </button>
        </div>

        {/* Teks judul tetap ada di dalam flexbox agar terpusat */}
        <h1 className="terms-title">Terms & Conditions</h1>
      </div>

      <main className="terms-main">
        <section>
          <h2>1. Penerimaan Syarat</h2>
          <p>
            Dengan mengakses dan menggunakan SRSIK Hub, Anda dianggap telah membaca, memahami, dan menyetujui Syarat & Ketentuan ini. 
            Jika Anda tidak setuju, mohon untuk tidak menggunakan layanan kami. Syarat dan ketentuan ini dapat diperbarui dari waktu ke waktu dan 
            merupakan kontrak yang mengikat secara hukum antara Anda dan penyedia layanan.
          </p>
        </section>
        <hr />
        
        <section>
          <h2>2. Penggunaan Layanan</h2>
          <p>
            Layanan hanya boleh digunakan untuk tujuan akademik, penelitian, dan referensi. Pengguna dilarang menyalahgunakan data atau konten 
            yang tersedia untuk tujuan komersial tanpa izin tertulis. Setiap aktivitas yang melanggar hukum atau merugikan pihak lain akan 
            dikenakan sanksi sesuai dengan hukum yang berlaku. Segala bentuk penyalahgunaan akan mengakibatkan penghentian akses layanan.
          </p>
        </section>
        <hr />
        
        <section>
          <h2>3. Hak Kekayaan Intelektual</h2>
          <p>
            Semua konten, data, dan materi di SRSIK Hub dilindungi oleh hukum hak cipta dan peraturan yang berlaku. Pengguna diperbolehkan 
            mengutip atau menggunakan informasi sebagai referensi akademik dengan mencantumkan sumber. Pelanggaran terhadap hak kekayaan 
            intelektual kami dapat berakibat pada tindakan hukum.
          </p>
        </section>
        <hr />

        <section>
          <h2>4. Batasan Tanggung Jawab</h2>
          <p>
            SRSIK Hub tidak bertanggung jawab atas kesalahan, ketidaklengkapan, atau keterlambatan dalam penyampaian data. Pengguna 
            sepenuhnya bertanggung jawab atas penggunaan data yang tersedia, termasuk potensi kerugian atau kerusakan yang mungkin 
            timbul akibat penggunaan tersebut. Penting untuk selalu melakukan verifikasi dan validasi sebelum mengambil keputusan 
            berdasarkan data yang diperoleh.
          </p>
        </section>
        <hr />

        <section>
          <h2>5. Perubahan Layanan dan Ketentuan</h2>
          <p>
            Kami berhak untuk mengubah, menambah, atau menghapus fitur layanan kapan saja tanpa pemberitahuan sebelumnya. 
            Syarat & Ketentuan ini dapat diperbarui sewaktu-waktu, dan versi terbaru akan berlaku sejak dipublikasikan. 
            Kami akan memposting perubahan tersebut di situs kami, dan pemakaian layanan setelah perubahan mencerminkan persetujuan Anda 
            terhadap syarat dan ketentuan yang diperbarui.
          </p>
        </section>
        <hr />

        <section>
          <h2>6. Hukum yang Berlaku</h2>
          <p>
            Syarat & Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Indonesia. Setiap sengketa yang 
            timbul sehubungan dengan syarat dan ketentuan ini akan menjadi yurisdiksi pengadilan di Indonesia.
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
