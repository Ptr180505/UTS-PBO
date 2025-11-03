class Karyawan {
    constructor(nama, cuti) {
        this.nama = nama;
        this.cuti = cuti;
    }
}

class CutiTahunan extends Karyawan {
    mengajukanCuti(jumlahCuti) {
        if (this.cuti >= jumlahCuti) {
            this.cuti -= jumlahCuti;
            console.log(`Max kuota 12 hari cuti, sisa cuti anda ${this.cuti} hari`);
        } else {
            console.log(`Maaf cuti anda tidak cukup`);
        }
    }
}

class CutiSakit extends Karyawan {
    mengajukanCuti(jumlahCuti) {
        if (this.cuti >= jumlahCuti) {
            this.cuti -= jumlahCuti;
            console.log(`Max kuota 2 hari cuti sakit, sisa cuti anda ${this.cuti} hari`);
        } else {
            console.log(`Maaf cuti anda tidak cukup`);
        }
    }
}

class CutiMelahirkan extends Karyawan {
    mengajukanCuti(jumlahCuti) {
        if (this.cuti >= jumlahCuti) {
            this.cuti -= jumlahCuti;
            console.log(`Max kuota 90 hari cuti melahirkan, sisa cuti anda ${this.cuti} hari`);
        } else {
            console.log(`Maaf cuti anda tidak cukup`);
        }
    }
}

// --- Contoh penggunaan (versi singkat) ---
const tahunan = new CutiTahunan("Jubet", 12);
tahunan.mengajukanCuti(5);

const sakit = new CutiSakit("Rilia", 2);
sakit.mengajukanCuti(1);

const melahirkan = new CutiMelahirkan("Reva", 90);
melahirkan.mengajukanCuti(30);