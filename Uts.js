class karyawan {
    constructor (nama, kuotaCuti) {
        this.nama = nama;
        this.kuotaCuti = kuotaCuti;
    }

ajukanCuti(jumlahHari, jenisCuti) {
    if (jumlahHari > this.kuotaCuti) {
      console.log(`${this.nama}: Kuota anda tidak cukup untuk mengajukan ${jenisCuti}.`);
    } 
    else {
      this.kuotaCuti = jumlahHari;
      console.log(` ${this.nama}: Pengajuan ${jenisCuti} selama ${jumlahHari} hari disetujui. 
Sisa kuota cuti: ${this.kuotaCuti} hari.`);
    }
  }
}

class CutiTahunan extends karyawan {
    constructor(nama) {
        super(nama, 12);
    }
}

class CutiSakit extends karyawan {
    constructor (nama) {
        super(nama, 2);
    }
}

class CutiMelahirkan extends karyawan {
    constructor (nama) {
        super(nama, 90);
    }
}

const Jubet = new CutiTahunan("Jubet");
const lola = new CutiSakit("lola");
const liya = new CutiMelahirkan("liya");

Jubet.ajukanCuti(5, "Cuti Tahunan");
lola.ajukanCuti(3, "Cuti Sakit"); 
liya.ajukanCuti(60, "Cuti Melahirkan");