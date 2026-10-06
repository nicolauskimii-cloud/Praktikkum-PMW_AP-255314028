"use strict";

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
   (Buka browser, tekan F12, lihat tab Console.)                         */
const judulSitus = document.querySelector("header h1");

if (judulSitus) {
  console.log(judulSitus);              // elemen <h1>-nya
  console.log(judulSitus.textContent);  // teks judul situs
}


/* ---------- B.3 — Langkah 2: Fungsi dan tombol Dark Mode ----------
   Menekan tombol #btn-tema akan menamb/menghapus class "dark-mode"
   pada <body> (classList.toggle).                                   */
const tombolTema = document.querySelector("#btn-tema");

function toggleTema() {
  document.body.classList.toggle("dark-mode");
}

if (tombolTema) {
  tombolTema.addEventListener("click", toggleTema);
}


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
const daftarArtikel = [
  {
    judul: "Pengenalan CSS",
    tanggal: "2026-10-05",
    isi: "CSS responsif memastikan tampilan menyesuaikan berbagai layar. Media queries memungkinkan kita mengatur gaya berbeda untuk layar kecil, sedang, dan besar...",
  },
  {
    judul: "Mengenal JavaScript dan DOM",
    tanggal: "2026-10-05",
    isi: "JavaScript memungkinkan halaman web menjadi interaktif. DOM (Document Object Model) adalah representasi struktur HTML yang dapat dimanipulasi JavaScript... artikel ini membahas dasar-dasar JavaScript dan bagaimana mengakses serta memodifikasi elemen HTML melalui DOM.",
  }
  ,
  {
    judul: "Tentang saya",
    tanggal: "2026-10-05",
    isi: "Saya adalah seorang mahasiswa Sanata Dharma yang sedang belajar pemrograman web. Perkenalkan saya Nicolaus Kimi Haryoyudo mahasiswa semester 3. Saya ingin belajar pemrograman web agar dapat membuat website yang menarik dan interaktif. Saya berharap dapat menguasai HTML, CSS, dan JavaScript dengan baik.",
  },
  {
    judul: "Asal Daerah",
    tanggal: "2026-10-05",
    isi: "Saya berasal dari Jakarta, Indonesia. Jakarta adalah ibu kota negara Indonesia dan merupakan kota metropolitan yang sibuk. Saya lahir di Yogyakarta namun tumbuh besar di Jakarta, sehingga saya sangat mengenal budaya dan kehidupan di kota ini. Jakarta memiliki banyak tempat menarik untuk dikunjungi, seperti Monas, Kota Tua, Dufan, dan berbagai pusat perbelanjaan. Saya bangga menjadi bagian dari kota ini dan selalu berusaha untuk menjaga kebersihan serta keindahan lingkungan sekitar.",
  },
  {
    judul: "Hobi saya",
    tanggal: "2026-10-05",
    isi: "Hobi saya adalah bermain game,traveling, mendengarkan musik, dan membaca buku. Saya suka bermain game karena dapat menghilangkan stres dan meningkatkan keterampilan berpikir strategis. Traveling juga menjadi hobi saya karena saya dapat menjelajahi tempat baru dan belajar tentang budaya yang berbeda. Mendengarkan musik membantu saya bersantai dan menikmati waktu luang. Selain itu, membaca buku adalah hobi yang saya nikmati karena dapat memperluas pengetahuan dan imajinasi saya.",
  },
  {
    judul: "Makanan kesukaan",
    tanggal: "2026-10-05",
    isi: "Makanan kesukaan saya adalah nasi goreng. Saya suka dengan rasa yang pedas dan gurih dari nasi goreng. Selain itu, saya juga menyukai makanan seperti pizza, sushi, dan mie ayam. Makanan-makanan ini memiliki cita rasa yang unik dan membuat saya merasa senang saat menikmatinya. Saya juga suka mencoba makanan baru dari berbagai daerah dan negara untuk menambah pengalaman kuliner saya. walau begitu, nasi goreng tetap menjadi favorit saya karena rasanya yang lezat dan mudah ditemukan di berbagai tempat.",
  }
];

const containerArtikel = document.querySelector(".daftar-artikel");

if (containerArtikel) {
  daftarArtikel.forEach((data) => {
    const article = document.createElement("article");

    const judul = document.createElement("h3");
    judul.textContent = data.judul;

    const waktu = document.createElement("time");
    waktu.textContent = data.tanggal;

    const isi = document.createElement("p");
    isi.textContent = data.isi;

    /* B.6 — Langkah 5: tombol hapus untuk tiap artikel */
    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";

    article.appendChild(judul);
    article.appendChild(waktu);
    article.appendChild(isi);
    article.appendChild(tombolHapus);

    containerArtikel.appendChild(article);
  });

  /* ---------- B.6 — Langkah 5: Hapus artikel per item (event delegation) ----------
     Satu listener pada container menangani klik tombol Hapus di seluruh
     artikel, termasuk artikel yang baru ditambahkan.                          */
  containerArtikel.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.closest("article").remove();
    }
  });
}

//Langkah 1: Menambahkan efek hover pada artikel
containerArtikel.addEventListener("mouseover", (e) => {
  const article = e.target.closest("article");
  if (article) article.classList.add("artikel-hover");
});

containerArtikel.addEventListener("mouseout", (e) => {
  const article = e.target.closest("article");
  if (article) article.classList.remove("artikel-hover");
});

//Langkah 2: Menambahkan tombol Like pada setiap artikel
// di dalam forEach data artikel:
const tombolLike = document.createElement("button");
let jumlahLike = 0;
tombolLike.textContent = `Like (${jumlahLike})`;
article.appendChild(tombolLike);

//Langkah 2b: Menambahkan event listener untuk tombol Like
containerArtikel.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && 
    e.target.textContent.startsWith("Like")) {
      let jumlah = parseInt(e.target.dataset.jumlahLike) || 0;
      jumlah++;
      e.target.dataset.like = jumlah;
      e.target.textContent = `Like (${jumlah})`;
  }
});

//Langkah 3: Handler submit prevent default
const formKomentar = document.querySelector("#form-komentar");
formKomentar.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.querySelector("#input-nama").value.trim();
  const pesan = document.querySelector("#input-pesan").value.trim();
  if (nama === "" || pesan === "") {
    alert("Nama dan pesan tidak boleh kosong!");
    return;
  } // Lanjut ke langkah 4: menampilkan komentar ke daftar komentar DOM
});

const daftarKomentar = document.querySelector("#daftar-komentar");
const itemKomentar = document.createElement("li");
itemKomentar.textContent = `${nama}: ${pesan}`;
daftarKomentar.appendChild(itemKomentar);
formKomentar.reset(); // reset form setelah submit

//Langkah 5: Menambahkan shortcut keyboard untuk tombol Dark Mode (Ctrl+D)
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "d" ) {
    document.body.classList.toggle("dark-mode");
  }
});