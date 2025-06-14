# 🎓 Sistem Rekomendasi Karier Berbasis AI (UAS Digital Media)

📌 **Deskripsi Singkat**  
Proyek ini merupakan bagian dari Ujian Akhir Semester (UAS) mata kuliah *Digital Media*, yang berfokus pada pemanfaatan kecerdasan buatan (AI) untuk memberikan rekomendasi karier personal kepada mahasiswa Generasi Z. Sistem ini dibangun menggunakan Google Forms, Google Sheets, Google Colab, Gemini API, dan Google Slides API untuk menghasilkan hasil personalisasi yang terotomatisasi dan dikirim via email.

---

## 🚀 Fitur Utama

- ✅ Form input data minat, kepribadian, dan skill
- 🤖 Pemrosesan otomatis dengan Gemini Pro API untuk menghasilkan rekomendasi karier
- 🧾 Output ditulis ke Google Sheets (worksheet: `Hasil AI`)
- 🎞️ Otomatisasi Google Slides: satu slide personal per peserta
- 📩 SARAN PENGEMBANGAN: Slide akan dikirim ke email masing-masing (opsional dengan Gmail API)

---

## 📚 Alur Sistem

1. **Pengumpulan Data**  
   Mahasiswa mengisi Google Form berisi:
   - Nama lengkap
   - Minat saat ini
   - Skill yang dimiliki
   - Tipe kepribadian

2. **Proses AI (Google Colab + Gemini API)**  
   - Data dari Google Sheets diproses di Google Colab
   - Prompt dikirim ke Gemini untuk menghasilkan 3 rekomendasi karier + alasan dan tips

3. **Output ke Sheet**  
   - Jawaban AI disimpan di worksheet `Hasil AI`

4. **Generate Slide Otomatis (Google Apps Script)**  
   - Setiap baris diolah menjadi satu slide dengan nama, nomor, dan rekomendasi karier
   - Template Google Slides digunakan, lalu diduplikasi untuk tiap orang

---

## 🛠️ Teknologi yang Digunakan

| Tools | Deskripsi |
|-------|-----------|
| **Google Forms** | Untuk input data mahasiswa |
| **Google Sheets** | Menyimpan data & output AI |
| **Google Colab (Python)** | Pemrosesan AI menggunakan Gemini API |
| **Gemini API (via Vertex AI)** | Model bahasa untuk menghasilkan teks rekomendasi |
| **Google Apps Script** | Otomatisasi pembuatan slide dari Sheet |
| **Google Slides API** | Membuat dan mengedit presentasi secara otomatis |

---


## 👩‍💻 Dibuat Oleh

**Silmi Yushini**  
6C - Sistem Informasi  
Universitas Singaperbangsa Karawang  
Tahun: 2025

---

## 📜 Lisensi

Proyek ini dibuat untuk keperluan edukasi dan tugas UAS DIGITAL MEDIA. Bebas digunakan dan dimodifikasi dengan mencantumkan sumber
