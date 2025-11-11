import React, { useState } from 'react';  
import Header from './Header';  
import Footer from './Footer';  
import '../styles/Guide.css';  
import useScrollReset from '../hooks/useScrollReset';  

const guideData = [
  {
    title: "Menemukan Arah",
    content: "Bagi kamu yang belum menentukan topik, panduan ini membantu memilih bidang minat, mengeksplorasi tren, dan menemukan research gap.",
    steps: [
      "Cari judul terbaru yang relevan untuk memastikan topikmu masih mutakhir.",
      "Gunakan filter tahun atau bidang untuk memperluas perspektif.",
      "Tandai (bookmark) judul-judul yang paling relevan sebagai referensi utama.",
      "Identifikasi variabel tambahan atau metode baru dari penelitian lain.",
      "Susun daftar referensi yang kredibel untuk memperkuat skripsimu."
    ]
  },
  {
    title: "Memulai dengan Topik Awal",
    content: "Jika sudah punya ide tapi bingung melangkah, gunakan panduan ini untuk mencari judul serupa, memperkuat latar belakang, dan memahami metodologi.",
    steps: [
      "Cari judul terbaru yang relevan untuk memastikan topikmu masih mutakhir.",
      "Gunakan filter tahun atau bidang untuk memperluas perspektif.",
      "Tandai (bookmark) judul-judul yang paling relevan sebagai referensi utama.",
      "Identifikasi variabel tambahan atau metode baru dari penelitian lain.",
      "Susun daftar referensi yang kredibel untuk memperkuat skripsimu."
    ]
  },
  {
    title: "Cara Membuat Research Gap",
    content: "Pelajari cara mengidentifikasi ruang kosong dalam penelitian yang sudah ada, agar skripsimu punya kontribusi yang jelas, terarah, dan bebas plagiasi",
    steps: [
      "Tentukan area fokus yang sesuai dengan jurusan atau ketertarikan akademikmu.",
      "Gunakan SRSIK Hub untuk mencari skripsi atau karya ilmiah yang relevan dengan bidang tersebut.",
      "Perhatikan kesamaan dan perbedaan antar judul, terutama dari sisi metode, variabel, dan konteks.",
      "Cari bagian yang belum dijelaskan, belum diuji, atau belum diterapkan dalam konteks tertentu.",
      "Fokus pada pertanyaan yang belum terjawab atau masalah yang belum terselesaikan dalam studi sebelumnya.",
      "Buat pernyataan singkat yang menunjukkan celah tersebut, misalnya: \"Belum ada penelitian yang mengkaji dampak X dalam konteks Y menggunakan pendekatan Z.\""
    ]
  },
  {
    title: "Menguatkan Penelitian",
    content: "Untuk yang sudah punya judul jelas, panduan ini membantu memvalidasi relevansi, memperkaya perspektif, dan menambah inspirasi dari referensi terbaru.",
    steps: [
      "Cari judul terbaru yang relevan untuk memastikan topikmu masih mutakhir.",
      "Gunakan filter tahun atau bidang untuk memperluas perspektif.",
      "Tandai (bookmark) judul-judul yang paling relevan sebagai referensi utama.",
      "Identifikasi variabel tambahan atau metode baru dari penelitian lain.",
      "Susun daftar referensi yang kredibel untuk memperkuat skripsimu."
    ]
  }
];

const faqData = [
  {
    title: "Apakah semua skripsi di SRSIK Hub sudah terverifikasi?",
    content: "Ya, koleksi skripsi berasal dari universitas unggulan di Indonesia dan telah melalui proses verifikasi internal untuk menjaga kredibilitas."
  },
  {
    title: "Bagaimana cara menemukan ide skripsi yang sesuai minat saya?",
    content: "Gunakan fitur pencarian dengan kata kunci bidang yang kamu sukai, lalu eksplorasi judul-judul yang relevan sebagai inspirasi awal."
  },
  {
    title: "Bisakah saya menggunakan judul yang sama dengan yang ada di SRSIK Hub?",
    content: "Tidak disarankan. Gunakan judul yang ada sebagai referensi atau inspirasi, lalu kembangkan sesuai konteks dan pendekatan penelitianmu sendiri."
  },
  {
    title: "Bisakah saya menyimpan atau menandai judul favorit?",
    content: "Ya, tersedia fitur bookmark untuk menyimpan judul yang relevan agar mudah diakses kembali saat menyusun skripsi."
  },
  {
    title: "Apakah data di SRSIK Hub selalu diperbarui?",
    content: "Ya, koleksi skripsi diperbarui secara berkala agar tetap relevan dengan perkembangan akademik terbaru."
  },
  {
    title: "Apakah saya bisa mengajukan topik atau kata kunci baru yang belum ada?",
    content: "Ya, kamu bisa mengirimkan saran topik melalui contact us. Tim kami akan mempertimbangkan untuk menambahkannya dalam pembaruan berikutnya."
  }
];

const AccordionItem = ({ title, content, steps }) => {  
  const [isOpen, setIsOpen] = useState(false);  

  return (  
    <div className="accordion-item">  
      <div   
        className="accordion-header"   
        onClick={() => setIsOpen(!isOpen)}  
      >  
        <div className="accordion-title-content">  
          <h3>{title}</h3>  
          {steps ? <p>{content}</p> : null}  
        </div>  
        <img   
          src="https://res.cloudinary.com/diogvlobw/image/upload/v1762320370/down-arrow_w9s5if.svg"   
          alt="Expand"   
          className={`accordion-icon ${isOpen ? 'rotate' : ''}`}   
        />  
      </div>  
      {isOpen && (  
        <div className="accordion-steps-content">  
          {steps ? (  
            <ol>  
              {steps.map((step, index) => (  
                <li key={index}>{step}</li>  
              ))}  
            </ol>  
          ) : (  
            <p>{content}</p>  
          )}  
        </div>  
      )}  
    </div>  
  );  
};  

const Guide = () => {  
  // Tambahkan hook di dalam komponen  
  useScrollReset();  

  return (  
    <div className="guide-page">  
      <Header />  
      <div className="guide-container">  
        <div className="guide-header">  
          <p>Panduan Penggunaan</p>  
          <h1>Langkah untuk Memaksimalkan SRSIK Hub</h1>  
          <p>  
            Pelajari cara memanfaatkan fitur SRSIK Hub sesuai kebutuhanmu—  
            mulai dari mencari inspirasi topik, memperjelas ide yang sudah ada,   
            hingga memperkuat penelitian dengan referensi terpercaya.  
          </p>  
        </div>  
        
        <div className="accordion-container">  
          {guideData.map((item, index) => (  
            <AccordionItem   
              key={index}  
              title={item.title}  
              content={item.content}  
              steps={item.steps}  
            />  
          ))}  
        </div>  

        <div className="guide-header">  
          <p>Frequently Asked Questions</p>  
          <h1>Menjawab Setiap Pertanyaanmu</h1>  
          <p>  
            Jelajahi daftar FAQ untuk menemukan solusi cepat dan jelas atas   
            pertanyaan yang sering diajukan. Dapatkan informasi dengan mudah   
            dan maksimalkan pengalamanmu bersama SRSIK Hub.  
          </p>  
        </div>  
        
        <div className="accordion-container guide-accordion">  
          {faqData.map((item, index) => (  
            <AccordionItem   
              key={index}  
              title={item.title}  
              content={item.content}  
            />  
          ))}  
        </div>  
      </div>  
      <Footer />  
    </div>  
  );  
};  

export default Guide;  
