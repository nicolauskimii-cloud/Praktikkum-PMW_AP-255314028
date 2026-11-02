
/* =============================================================
   MODUL 3 — JAVASCRIPT DASAR DAN DOM
   Bagian B — Kegiatan Praktikum (skrip lengkap: script.js)
   Mata Kuliah: Pemrograman Berbasis Web (PROG31W)

   Cara pakai:
   Tautkan file ini tepat sebelum </body> pada index.html:
       <script src="script.js"></script>

   Elemen HTML yang diharapkan ada di index.html:
     - <header> berisi <h1>, tombol #btn-tema, dan tombol #btn-info
     - <aside> (kotak info tambahan)
     - container artikel dengan class .daftar-artikel  (dikosongkan di
       HTML — isinya dirender oleh JavaScript di Langkah 4)

   Kelas CSS pendukung di style.css:
     - body.dark-mode   (tema gelap)
     - .tersembunyi      (display: none)

   Catatan: setiap fitur dibungkus pengecekan keberadaan elemen
   (if (elemen) { ... }) agar skrip tetap berjalan meski salah satu
   bagian HTML belum ditambahkan.
   ============================================================= */


/* ---------- B.2 — Langkah 1: Variabel dan seleksi elemen dasar ----------
   Menyeleksi elemen dari halaman dan menampilkannya di Console
   untuk memastikan koneksi JavaScript <-> HTML berjalan.
   (Buka browser, tekan F12, lihat tab Console.)                         
*/
"use strict";

const BASE = "https://jsonplaceholder.typicode.com";

const judulSitus = document.querySelector("header h1");

if (judulSitus) {
  console.log(judulSitus);              // elemen <h1>-nya
  console.log(judulSitus.textContent);  // teks judul situs
}


/* ---------- B.3 — Langkah 2: Fungsi dan tombol Dark Mode ----------
   Menekan tombol #btn-tema akan menamb/menghapus class "dark-mode"
   pada <body> (classList.toggle).                                   */
//MODUL 7 Langkah 1 — Menyimpan Preferensi Dark Mode
const tombolTema = document.querySelector("#btn-tema");
function toggleTema() {
  document.body.classList.toggle("dark-mode");
  const temaSekarang = document.body.classList.contains("dark-mode")
  ? "dark" 
  : "light";
  localStorage.setItem("tema", temaSekarang);
}

if (tombolTema) tombolTema.addEventListener("click", toggleTema);

//MODUL 7 Langkah 2 — Memuat Ulang Preferensi Dark Mode
function muatPreferensiTema(){
  const tema = localStorage.getItem("tema");
  if (tema === "dark") {
  document.body.classList.add("dark-mode");
  }
}
muatPreferensiTema();






/* ---------- B.4 — Langkah 3: Tombol tampilkan/sembunyikan aside ----------
   Menekan tombol #btn-info akan menampilkan/menyembunyikan <aside>
   dengan menoggle class "tersembunyi".                                   */
const tombolInfo = document.querySelector("#btn-info");
const kotakAside = document.querySelector("aside");
if (tombolInfo && kotakAside) {
  tombolInfo.addEventListener("click", () => {
    kotakAside.classList.toggle("tersembunyi");
  });
}


/* ---------- B.5 — Langkah 4: Render daftar artikel dari data JavaScript ----------
   Data artikel disimpan sebagai array of object, lalu dirender secara
   dinamis ke dalam container .daftar-artikel menggunakan createElement.
   (Artikel statis di index.html dihapus karena digantikan hasil render ini.) */
// const daftarArtikel = [
//   {
//     judul: "Pengenalan CSS",
//     tanggal: "2026-10-05",
//     isi: "CSS responsif memastikan tampilan menyesuaikan berbagai layar. Media queries memungkinkan kita mengatur gaya berbeda untuk layar kecil, sedang, dan besar...",
//   },
//   {
//     judul: "Mengenal JavaScript dan DOM",
//     tanggal: "2026-10-05",
//     isi: "JavaScript memungkinkan halaman web menjadi interaktif. DOM (Document Object Model) adalah representasi struktur HTML yang dapat dimanipulasi JavaScript... artikel ini membahas dasar-dasar JavaScript dan bagaimana mengakses serta memodifikasi elemen HTML melalui DOM.",
//   },
//   {
//     judul: "Tentang saya",
//     tanggal: "2026-10-05",
//     isi: "Saya adalah seorang mahasiswa Sanata Dharma yang sedang belajar pemrograman web. Perkenalkan saya Nicolaus Kimi Haryoyudo mahasiswa semester 3. Saya ingin belajar pemrograman web agar dapat membuat website yang menarik dan interaktif. Saya berharap dapat menguasai HTML, CSS, dan JavaScript dengan baik.",
//   },
//   {
//     judul: "Asal Daerah",
//     tanggal: "2026-10-05",
//     isi: "Saya berasal dari Jakarta, Indonesia. Jakarta adalah ibu kota negara Indonesia dan merupakan kota metropolitan yang sibuk. Saya lahir di Yogyakarta namun tumbuh besar di Jakarta, sehingga saya sangat mengenal budaya dan kehidupan di kota ini. Jakarta memiliki banyak tempat menarik untuk dikunjungi, seperti Monas, Kota Tua, Dufan, dan berbagai pusat perbelanjaan. Saya bangga menjadi bagian dari kota ini dan selalu berusaha untuk menjaga kebersihan serta keindahan lingkungan sekitar.",
//   },
//   {
//     judul: "Hobi saya",
//     tanggal: "2026-10-05",
//     isi: "Hobi saya adalah bermain game,traveling, mendengarkan musik, dan membaca buku. Saya suka bermain game karena dapat menghilangkan stres dan meningkatkan keterampilan berpikir strategis. Traveling juga menjadi hobi saya karena saya dapat menjelajahi tempat baru dan belajar tentang budaya yang berbeda. Mendengarkan musik membantu saya bersantai dan menikmati waktu luang. Selain itu, membaca buku adalah hobi yang saya nikmati karena dapat memperluas pengetahuan dan imajinasi saya.",
//   },
//   {
//     judul: "Makanan kesukaan",
//     tanggal: "2026-10-05",
//     isi: "Makanan kesukaan saya adalah nasi goreng. Saya suka dengan rasa yang pedas dan gurih dari nasi goreng. Selain itu, saya juga menyukai makanan seperti pizza, sushi, dan mie ayam. Makanan-makanan ini memiliki cita rasa yang unik dan membuat saya merasa senang saat menikmatinya. Saya juga suka mencoba makanan baru dari berbagai daerah dan negara untuk menambah pengalaman kuliner saya. walau begitu, nasi goreng tetap menjadi favorit saya karena rasanya yang lezat dan mudah ditemukan di berbagai tempat.",
//   }
// ];

//Langkah 1 — Fetch Dasar ke Console
async function ujiFetch() {
  const response = await
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const data = await response.json();
  console.log(data);
}
ujiFetch();

const containerArtikel = document.querySelector(".daftar-artikel");
if (containerArtikel) {
  async function muatArtikelDariAPI() {
    const loading = document.querySelector("#loading");

    if (loading) loading.style.display = "block";       // B.4 tampilkan loading
    try {
      const response = await 
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

      if (!response.ok) {                               // B.5 cek status HTTP
        throw new Error("Status: " + response.status);
      }
      const daftarPost = await response.json();         // ubah JSON -> array objek
      const semuaLike = JSON.parse(localStorage.getItem("semuaLike")) || {};

      daftarPost.forEach((post) => {
        const article = document.createElement("article");

        const judul = document.createElement("h3");
        judul.textContent = post.title;

        const isi = document.createElement("p");
        isi.textContent = post.body;

        // Tombol Like (Modul 4) + nilai tersimpan (Modul 6)
        const tombolLike = document.createElement("button");
        let jumlahLike = semuaLike[post.title] || 0;
        tombolLike.textContent = `Like (${jumlahLike})`;
        tombolLike.dataset.like = jumlahLike;

        // Tombol Hapus (Modul 3)
        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";

        article.appendChild(judul);
        article.appendChild(isi);
        article.appendChild(tombolLike);
        article.appendChild(tombolHapus);
        containerArtikel.appendChild(article);
      });
    } catch (error) {                                   // B.5 tangani kegagalan
      containerArtikel.innerHTML =
        "<p>Gagal memuat artikel, silakan coba lagi nanti.</p>";
      console.error("Gagal mengambil data:", error);
    } finally {
      if (loading) loading.style.display = "none";      // selalu matikan loading
    }
  }
  muatArtikelDariAPI();

  //Langkah 1: Menambahkan efek hover pada artikel
// if (containerArtikel) {
  containerArtikel.addEventListener("mouseover", (e) => {
    const article = e.target.closest("article");
    if (article) article.classList.add("artikel-hover");
  });

  containerArtikel.addEventListener("mouseout", (e) => {
    const article = e.target.closest("article");
    if (article) article.classList.remove("artikel-hover");
  });

  //Langkah 2b: Menambahkan event listener untuk tombol Like
  containerArtikel.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && 
      e.target.textContent.startsWith("Like")) {
        let jumlah = parseInt(e.target.dataset.like) || 0; // Diperbaiki dari dataset.jumlahLike menjadi dataset.like
        jumlah++;
        e.target.dataset.like = jumlah;
        e.target.textContent = `Like (${jumlah})`;

        const judul = e.target.closest("article").querySelector("h3").textContent;
        simpanLike(judul, jumlah);
    }
  });

  containerArtikel.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && e.target.textContent === "Hapus") {
      e.target.closest("article").remove();
    }
  });
}



//MODUL 7 Langkah 3 — Menyimpan Jumlah Like
function simpanLike(judulArtikel, jumlah) {
  const semuaLike = JSON.parse(localStorage.getItem("semuaLike")) || {};
  semuaLike[judulArtikel] = jumlah;
  localStorage.setItem("semuaLike", JSON.stringify(semuaLike));
}  
// }
async function muatProfilPenulis() {
  const namaEl = document.querySelector("#nama-penulis");
  const emailEl = document.querySelector("#email-penulis");
  if (!namaEl || !emailEl) return;
  try {
    const response = await fetch(BASE + "/users/1");
    if (!response.ok) throw new Error("Status: " + response.status);
    const user = await response.json();
    namaEl.textContent = user.name;
    emailEl.textContent = user.email;
  } catch (error) {
    console.error("Gagal memuat profil penulis:", error);
  }
}
muatProfilPenulis();

const formKomentar = document.querySelector("#form-komentar");
const daftarKomentar = document.querySelector("#daftar-komentar");

//MODUL 7 Langkah 4 — Menyimpan Jumlah Like
function simpanKomentar(nama, pesan){
  const daftar = JSON.parse(localStorage.getItem("komentar")) || [];
  daftar.push({ nama, pesan });
  localStorage.setItem("komentar", JSON.stringify(daftar));
}

function muatKomentar() {
  if (!daftarKomentar) return;
  const daftar = JSON.parse(localStorage.getItem("komentar")) || [];
  daftar.forEach((k) => {
    const li = document.createElement("li");
    li.textContent = `${k.nama}: ${k.pesan}`;
    daftarKomentar.appendChild(li);
  });
}

muatKomentar();

if (formKomentar) {
  formKomentar.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.querySelector("#input-nama").value.trim();
    const pesan = document.querySelector("#input-pesan").value.trim();
    
    if (nama === "" || pesan === "") {
      alert("Nama dan pesan tidak boleh kosong!");
      return;
    } 

    const itemKomentar = document.createElement("li");
    itemKomentar.textContent = `${nama}: ${pesan}`;
    if (daftarKomentar) daftarKomentar.appendChild(itemKomentar);

    simpanKomentar(nama, pesan);
    formKomentar.reset();
  });
}

//Langkah 5: Menambahkan shortcut keyboard untuk tombol Dark Mode (Ctrl+D)
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "d" && (e.ctrlKey || e.metaKey)) {
    document.body.classList.toggle("dark-mode");
  }
});

const inputNama = document.querySelector("#input-nama");
if (inputNama) {
  inputNama.addEventListener("input", () => {
    if (inputNama.validity.valueMissing) {
      inputNama.setCustomValidity("Nama wajib diisi");
    } else if (inputNama.validity.tooShort) {
      inputNama.setCustomValidity("Nama minimal 5 karakter");
    } else {
      inputNama.setCustomValidity("");
    }
  });
}

const inputPesan = document.querySelector("#input-pesan");
if (inputPesan) {
  inputPesan.addEventListener("input", () => {
    if (inputPesan.validity.valueMissing) {
      inputPesan.setCustomValidity("Komentar wajib diisi");
    } else {
      inputPesan.setCustomValidity("");
    }
  });
}

/* B.5 — Form pendaftaran akun + validasi konfirmasi password */
const formDaftar = document.querySelector("#form-daftar");
const errorKonfirmasi = document.querySelector("#error-konfirmasi");
if (formDaftar && errorKonfirmasi) {
  formDaftar.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.querySelector("#password").value;
    const konfirmasi = document.querySelector("#konfirmasi").value;
    if (password !== konfirmasi) {
      errorKonfirmasi.textContent = "Konfirmasi password tidak sama dengan password";
    } else {
      errorKonfirmasi.textContent = "";
      alert("Pendaftaran berhasil (simulasi)!");
      formDaftar.reset();
    }
  });
}

/* B.6 — Pesan error per field di DOM */
function validasiField(input, errorElement) {
  if (!input.checkValidity()) {
    errorElement.textContent = input.validationMessage;
  } else {
    errorElement.textContent = "";
  }
}
[
  ["#username", "#error-username"],
  ["#email", "#error-email"],
  ["#password", "#error-password"],
].forEach(([fieldSel, errorSel]) => {
  const field = document.querySelector(fieldSel);
  const errEl = document.querySelector(errorSel);
  if (field && errEl) {
    field.addEventListener("input", () => validasiField(field, errEl));
  }
});

const tombolreset = document.querySelector("#btn-reset");
if (tombolreset){
  tombolreset.addEventListener("click", () => {
    const konfirmasi = confirm(
      "Hapus semua data tersimpan(tema, like, komentar)?"
    );
    if(konfirmasi){
      localStorage.clear();
      location.reload();
    }
  });
}