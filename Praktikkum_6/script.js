"use strict";
/* =============================================================
   MODUL 5 — VALIDASI FORM
   Bagian B — Kegiatan Praktikum (program lengkap: script.js)
   Mata Kuliah: Pemrograman Berbasis Web (PROG31W)

   Praktikum ini MELANJUTKAN kode dari modul sebelumnya, sehingga
   file ini KUMULATIF:
     - Basis Modul 3 (JavaScript Dasar & DOM)
     - Modul 4 (Event Handling)
     - Modul 5 (Validasi Form)   <-- fokus modul ini

   Berpasangan dengan index.html & style.css pada paket yang sama.
   Tautkan sebelum </body>: <script src="script.js"></script>
   ============================================================= */


/* =========================================================
   BASIS — MODUL 3 (JavaScript Dasar dan DOM)
   ========================================================= */

const judulSitus = document.querySelector("header h1");
   if (judulSitus) {
     console.log(judulSitus);
     console.log(judulSitus.textContent);
   }


const tombolTema = document.querySelector("#btn-tema");
   function toggleTema() {
        document.body.classList.toggle("dark-mode");
    }
if (tombolTema) {
        tombolTema.addEventListener("click", toggleTema);
    }
const tombolInfo = document.querySelector("#btn-info");
const kotakAside = document.querySelector("aside");
if(tombolInfo && kotakAside) {
    tombolInfo.addEventListener("click",() => {
        kotakAside.classList.toggle("tersembunyi");
    });
}

const daftarArtikel = [
    {   judul: "Mengenal HTML Semantik", 
        tanggal: "2026-08-20", 
        isi: "HTML semantik membantu membangun struktur halaman yang bermakna..." 
    },
]

 
