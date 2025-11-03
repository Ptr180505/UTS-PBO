class Perusahaan {
  constructor(Kuota) {
    this.Kuota = Kuota;
    this.MaksTahunan = 12;
    this.MaksSakit = 2;
    this.MaksMelahirkan = 90;
  }
}

class CutiTahunan extends Perusahaan {
  KoutaCuti() {
    if ((this.Kuota <= this.MaksTahunan)) {
      return `Anda berhasil mengambil cuti tahunan (${this.Kuota} hari)`;
    } else {
      return `Kuota anda tidak cukup untuk mengajukan cuti ini`;
    }
  }
}

class CutiSakit extends Perusahaan {
  KoutaCuti() {
    if ((this.Kuota <= this.MaksSakit)) {
      return `Anda berhasil mengambil cuti sakit (${this.Kuota} hari)`;
    } else {
      return `Kuota anda tidak cukup untuk mengajukan cuti ini`;
    }
  }
}

class CutiMelahirkan extends Perusahaan {
  KoutaCuti() {
    if ((this.Kuota <= this.MaksMelahirkan)) {
      return `Anda berhasil mengambil cuti melahirkan (${this.Kuota} hari)`;
    } else {
      return `Kuota anda tidak cukup untuk mengajukan cuti ini`;
    }
  }
}

const Karyawan1 = new CutiTahunan(19);
console.log(Karyawan1.KoutaCuti());

const Karyawan2 = new CutiSakit(5);
console.log(Karyawan2.KoutaCuti());

const Karyawan3 = new CutiMelahirkan(60);
console.log(Karyawan3.KoutaCuti());