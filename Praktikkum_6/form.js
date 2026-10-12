function jenisKelamin() {
    var lakiLaki = document.getElementById("laki-laki");
    var perempuan = document.getElementById("perempuan");
    var hasil = document.getElementById("hasil");
}
function status() {
    var menikah = document.getElementById("menikah");
    var belumMenikah = document.getElementById("belum-menikah");
    var biarawan = document.getElementById("biarawan-biarawati");
    var hasil = document.getElementById("hasil");
}
function agama() {
    var islam = document.getElementById("islam");
    var kristen = document.getElementById("kristen");
    var katolik = document.getElementById("katolik");
    var hindu = document.getElementById("hindu");
    var budha = document.getElementById("budha");
    var konghucu = document.getElementById("konghucu");
    var yahudi = document.getElementById("yahudi");
    var atheis = document.getElementById("atheis");
    var hasil = document.getElementById("hasil");
}
function kewarganegaraan() {
    var indonesia = document.getElementById("WNI");
    var asing = document.getElementById("WNA");
    var hasil = document.getElementById("hasil");
}

function pendidikan() {
    var sd = document.getElementById("sd");
    var smp = document.getElementById("smp");
    var sma = document.getElementById("sma");
    var d3 = document.getElementById("d3"); 
    var sma = document.getElementById("sma");
    var d3 = document.getElementById("d3");
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var hasil = document.getElementById("hasil");
}

const provinsi = document.getElementById("provinsi");
if(provinsi){
    provinsi.addEventListener("input", function(){
        if (provinsi.validity.valid) {
            provinsi.setCustomValidity("");
        }else{
            provinsi.setCustomValidity("Provinsi harus diisi");
        }
    });
}

const alamat = document.getElementById("address");
if (alamat) {
    alamat.addEventListener("input", function() {
        if (alamat.validity.valid) {
            alamat.setCustomValidity("");
        } else {
            alamat.setCustomValidity("Alamat harus diisi.");
        }
    });
}

const alamatSurat = document.getElementById("alamat-surat");
if (alamatSurat) {
    alamatSurat.addEventListener("input", function() {
        if (alamatSurat.validity.valid) {
            alamatSurat.setCustomValidity("");
        } else {
            alamatSurat.setCustomValidity("Alamat surat harus diisi.");
        }
    });
}

