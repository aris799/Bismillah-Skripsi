import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 
import '../styles/Terms.css';
import useScrollReset from '../hooks/useScrollReset'; // Import hook scroll reset

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  useScrollReset(); // Gunakan hook untuk reset scroll

  // Fungsi untuk menangani navigasi kembali
  const handleBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  return (
    <div className="terms-container">
      <Header />
      
      {/* Kontainer untuk tombol dan judul */}
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

        {/* Teks judul */}
        <h1 className="terms-title">Privacy Policy</h1>
      </div>

      <main className="terms-main">
        <section>
          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara langsung (seperti nama, alamat email, atau data akun) 
            serta informasi non-pribadi terkait penggunaan layanan (misalnya aktivitas pencarian, perangkat, dan log akses).
          </p>
        </section>
        <hr />
        
        <section>
          <h2>2. Penggunaan Informasi</h2>
          <p>
            Informasi yang dikumpulkan digunakan untuk memberikan dan meningkatkan layanan SRSIK Hub, serta menyediakan pengalaman yang lebih personal dan relevan bagi pengguna. Selain itu, informasi tersebut juga digunakan untuk menjawab pertanyaan, permintaan, atau dukungan pengguna, serta melakukan analisis guna pengembangan fitur baru.
          </p>
        </section>
        <hr />
        
        <section>
          <h2>3. Perlindungan Data</h2>
          <p>
            Kami berkomitmen menjaga keamanan data pengguna dengan langkah teknis dan organisasi yang sesuai. Namun, tidak ada sistem 
            yang sepenuhnya bebas risiko, sehingga kami tidak dapat menjamin keamanan absolut.
          </p>
        </section>
        <hr />

        <section>
          <h2>4. Berbagi Informasi</h2>
          <p>
            Kami tidak menjual atau menyewakan data pribadi pengguna kepada pihak ketiga. 
            Informasi hanya dapat dibagikan dengan mitra terpercaya untuk tujuan operasional, sesuai dengan hukum yang berlaku.
          </p>
        </section>
        <hr />

        <section>
          <h2>5. Hak Pengguna</h2>
          <p>
            Pengguna berhak untuk mengakses, memperbarui, atau menghapus informasi pribadi mereka. Mereka juga memiliki hak untuk menarik persetujuan atas penggunaan data tertentu dan dapat menghubungi kami jika memiliki pertanyaan terkait privasi.
          </p>
        </section>
        <hr />

        <section>
          <h2>6. Perubahan Kebijakan</h2>
          <p>
            Kebijakan Privasi ini dapat diperbarui sewaktu-waktu. Versi terbaru akan berlaku sejak tanggal dipublikasikan di situs.
          </p>
        </section>
        <hr />

        <section>
          <h2>7. Kontak</h2>
          <p>
            Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami melalui email resmi: 
            <a href="mailto:mbaihaqiarrisalah79@gmail.com"> mbaihaqiarrisalah79@gmail.com</a>
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
