window.QUIZ_DATA = [
  {
    "id": "General-1",
    "product": "General",
    "number": 1,
    "question": "Jelaskan secara lengkap produk apa saja yang tersedia di platform Reku, serta regulasi resmi yang menaungi operasional Reku sebagai platform perdagangan aset kripto dan saham AS di Indonesia.",
    "answer": "Reku adalah platform trading yang menyediakan empat produk utama: (1) Kripto Spot – jual beli aset kripto langsung; (2) US Stock (PALN) – perdagangan saham AS secara fraksional; (3) Perpetuals (Reku Futures) – kontrak berjangka kripto dengan leverage; (4) Reksa Dana – fitur investasi reksa dana. Dari sisi regulasi: Reku terdaftar dan diawasi oleh Bappebti (Badan Pengawas Perdagangan Berjangka Komoditi) untuk aset kripto, serta diawasi OJK (Otoritas Jasa Keuangan) untuk produk saham AS melalui skema Penyelenggara Perdagangan Alternatif (PPA). Bursa yang digunakan untuk futures adalah CFX (Commodity Futures Exchange), dengan Kliring KKI sebagai lembaga kliring.",
    "points": 10
  },
  {
    "id": "General-2",
    "product": "General",
    "number": 2,
    "question": "Seorang calon pengguna bertanya: 'Saya mau deposit ke Reku, metode apa saja yang tersedia dan berapa biaya masing-masing?' Jelaskan seluruh metode deposit yang tersedia beserta ketentuan biaya dan minimum deposit.",
    "answer": "Metode deposit yang tersedia di Reku:\n1. Transfer Bank (VA – Virtual Account): Minimum deposit Rp 10.000, GRATIS biaya admin dari Reku.\n2. QRIS: Minimum deposit Rp 10.000, biaya 0,7% dari nominal deposit.\n3. E-wallet (seperti OVO, GoPay, Dana): Minimum deposit Rp 10.000, biaya 1,665% dari nominal deposit.\n\nCatatan penting: Semua metode deposit menggunakan mata uang Rupiah (IDR). Waktu pemrosesan untuk transfer bank umumnya real-time atau maksimal beberapa menit tergantung bank.",
    "points": 10
  },
  {
    "id": "General-3",
    "product": "General",
    "number": 3,
    "question": "Studi Kasus Deposit: Pengguna bernama Rina melakukan deposit sebesar Rp 500.000 menggunakan QRIS, kemudian melakukan deposit kedua sebesar Rp 1.000.000 menggunakan E-wallet. Hitunglah total biaya yang Rina keluarkan, dan berapa saldo bersih yang masuk ke akun Reku-nya?",
    "answer": "Deposit 1 – QRIS Rp 500.000:\nBiaya = 0,7% × Rp 500.000 = Rp 3.500\nSaldo masuk = Rp 500.000 – Rp 3.500 = Rp 496.500\n\nDeposit 2 – E-wallet Rp 1.000.000:\nBiaya = 1,665% × Rp 1.000.000 = Rp 16.650\nSaldo masuk = Rp 1.000.000 – Rp 16.650 = Rp 983.350\n\nTotal saldo bersih masuk = Rp 496.500 + Rp 983.350 = Rp 1.479.850\nTotal biaya yang dikenakan = Rp 3.500 + Rp 16.650 = Rp 20.150",
    "points": 10
  },
  {
    "id": "General-4",
    "product": "General",
    "number": 4,
    "question": "Jelaskan prosedur, ketentuan, dan batasan penarikan dana (withdrawal) IDR di platform Reku, termasuk biaya yang dikenakan, minimum dan maksimum penarikan, serta hal-hal yang perlu diperhatikan pengguna.",
    "answer": "Ketentuan Withdrawal IDR di Reku:\n1. Biaya penarikan: GRATIS dari Reku + biaya admin bank Rp 6.500 yang dibebankan ke pengguna.\n2. Minimum penarikan: Rp 30.000\n3. Maksimum penarikan: Rp 500.000.000 per hari\n4. Metode: Transfer langsung ke rekening bank yang sudah diverifikasi (KYC).\n5. Waktu proses: Umumnya real-time untuk bank tertentu, atau maksimal 1 hari kerja.\n6. Syarat: Akun harus sudah melalui verifikasi identitas (KYC Level 2). Rekening bank harus atas nama yang sama dengan pemilik akun Reku.\n7. Khusus saham AS (PALN): Terdapat ketentuan konversi dari USD ke IDR terlebih dahulu sebelum dapat ditarik.",
    "points": 10
  },
  {
    "id": "General-5",
    "product": "General",
    "number": 5,
    "question": "Studi Kasus Penipuan/Fraud: Seorang pengguna menghubungi CS Reku mengaku sebagai tim internal Reku dan meminta OTP serta password akun milik pengguna lain dengan alasan 'verifikasi sistem darurat'. Bagaimana CS Reku seharusnya merespons situasi ini, dan apa langkah-langkah yang harus dilakukan?",
    "answer": "Ini adalah kasus social engineering / phishing attack. Langkah yang harus CS Reku lakukan:\n1. TOLAK tegas permintaan tersebut: Reku tidak pernah meminta OTP, password, atau PIN kepada pengguna melalui media apapun.\n2. Edukasi pengguna yang dihubungi: Jelaskan bahwa permintaan tersebut adalah PENIPUAN.\n3. Minta pengguna untuk TIDAK memberikan data apapun.\n4. Sarankan pengguna untuk segera mengamankan akun: ganti password, aktifkan 2FA, cek riwayat login.\n5. Laporkan kejadian ini ke tim keamanan/security Reku untuk investigasi lebih lanjut.\n6. Catat detail insiden (nomor pengguna, waktu kejadian, metode yang digunakan penipu) untuk keperluan laporan.\n7. Ingatkan: Data sensitif seperti OTP, password, PIN, dan private key TIDAK PERNAH diminta oleh tim Reku melalui saluran apapun.",
    "points": 10
  },
  {
    "id": "General-6",
    "product": "General",
    "number": 6,
    "question": "Jelaskan apa yang dimaksud dengan proses KYC (Know Your Customer) di Reku, sebutkan level-level KYC yang ada, dan apa perbedaan fitur yang tersedia di tiap level tersebut.",
    "answer": "KYC (Know Your Customer) adalah proses verifikasi identitas pengguna yang diwajibkan oleh regulasi untuk mencegah pencucian uang (AML) dan kegiatan ilegal lainnya.\n\nLevel KYC di Reku:\n1. Level 1 (Email Verified): Pengguna hanya bisa melihat platform, belum bisa melakukan transaksi.\n2. Level 2 (KYC Dasar – NIK + Selfie): Pengguna dapat melakukan deposit, pembelian aset kripto, dan penarikan dengan limit tertentu.\n3. Level 3 (KYC Lanjutan): Limit transaksi lebih besar, akses ke semua fitur termasuk Perpetuals dan US Stock.\n\nDokumen yang dibutuhkan: KTP (untuk WNI), selfie dengan KTP, dan kadang diperlukan bukti alamat. Proses verifikasi dilakukan oleh sistem otomatis dan tim compliance Reku.",
    "points": 10
  },
  {
    "id": "General-7",
    "product": "General",
    "number": 7,
    "question": "Seorang pengguna melaporkan bahwa akunnya tidak bisa login dan mendapat pesan 'Akun diblokir sementara'. Sebutkan minimal 5 kemungkinan penyebab akun diblokir dan jelaskan langkah-langkah yang harus CS Reku lakukan untuk membantu pengguna tersebut.",
    "answer": "Kemungkinan penyebab akun diblokir:\n1. Salah memasukkan password/PIN berkali-kali (brute force protection)\n2. Aktivitas mencurigakan terdeteksi oleh sistem keamanan\n3. Permintaan pemblokiran dari pengguna sendiri (laporan akun diretas)\n4. Pelanggaran Terms of Service (T&C) platform\n5. Proses verifikasi ulang identitas (re-KYC) yang belum diselesaikan\n6. Deteksi penggunaan akun dari lokasi/device yang tidak dikenal\n7. Adanya laporan fraud atau sengketa transaksi\n\nLangkah CS:\n1. Verifikasi identitas pengguna yang menghubungi (jangan langsung buka akun tanpa verifikasi)\n2. Cek catatan di sistem: alasan pemblokiran dan tanggal kejadian\n3. Jika karena salah password: minta pengguna reset password melalui email terdaftar\n4. Jika karena keamanan: eskalasi ke tim security\n5. Jelaskan estimasi waktu penyelesaian kepada pengguna\n6. Dokumentasikan semua tindakan dalam tiket",
    "points": 10
  },
  {
    "id": "General-8",
    "product": "General",
    "number": 8,
    "question": "Jelaskan fitur keamanan akun yang tersedia di platform Reku dan apa yang harus dilakukan pengguna jika mencurigai akunnya telah diakses oleh pihak tidak berwenang.",
    "answer": "Fitur keamanan di Reku:\n1. Two-Factor Authentication (2FA) – Google Authenticator atau SMS OTP\n2. PIN Transaksi – PIN 6 digit untuk mengotorisasi setiap transaksi\n3. Whitelist Alamat Penarikan – hanya bisa tarik ke alamat yang sudah diverifikasi\n4. Email notifikasi – alert untuk setiap login dan transaksi\n5. Device management – riwayat perangkat yang pernah login\n\nLangkah jika akun diretas:\n1. Segera hubungi CS Reku untuk memblokir akun sementara\n2. Ganti password dari email terdaftar\n3. Cabut akses semua device yang aktif\n4. Ganti PIN transaksi\n5. Periksa riwayat transaksi untuk laporan ke CS jika ada transaksi tidak sah\n6. Pertimbangkan untuk melaporkan ke pihak berwajib jika ada kerugian material",
    "points": 10
  },
  {
    "id": "General-9",
    "product": "General",
    "number": 9,
    "question": "Studi Kasus Keluhan Pengguna: Budi melaporkan bahwa ia sudah melakukan deposit sebesar Rp 2.000.000 melalui transfer bank 2 jam yang lalu, namun saldo belum masuk ke akun Reku. Ia panik dan mengancam akan melaporkan Reku ke OJK. Bagaimana cara CS Reku menangani komplain ini secara profesional?",
    "answer": "Langkah penanganan CS:\n1. Sapa dengan ramah dan empati: 'Halo Budi, saya memahami kekhawatiran Anda dan akan segera membantu.'\n2. Verifikasi identitas pengguna sebelum mengakses data akun.\n3. Minta bukti transfer: tangkapan layar bukti transfer/mutasi rekening yang menunjukkan nominal, tanggal, jam, dan nomor VA tujuan.\n4. Cek di sistem Reku: apakah VA yang digunakan benar, apakah ada deposit pending.\n5. Jika VA salah: jelaskan prosedur rekonsiliasi dana salah kirim.\n6. Jika VA benar tapi dana belum masuk: buka tiket eskalasi ke tim finance untuk investigasi.\n7. Beri estimasi waktu penyelesaian yang jelas (misalnya: maks 1×24 jam hari kerja).\n8. Tetap tenang menghadapi ancaman laporan OJK: jelaskan bahwa Reku beroperasi sesuai regulasi dan siap bekerja sama dengan regulator.\n9. Follow up ke pengguna setelah investigasi selesai.",
    "points": 10
  },
  {
    "id": "General-10",
    "product": "General",
    "number": 10,
    "question": "Jelaskan apa yang dimaksud dengan Airdrop dan Staking di Reku, serta bagaimana cara pengguna dapat berpartisipasi dalam program-program tersebut.",
    "answer": "Airdrop: Program distribusi gratis token/koin kripto kepada pengguna yang memenuhi syarat tertentu (misalnya sudah melakukan KYC, memiliki saldo minimum, atau melakukan transaksi dalam periode tertentu). Tujuannya adalah promosi dan distribusi token baru. Pengguna tidak perlu membayar, cukup memenuhi syarat yang ditentukan.\n\nStaking: Proses mengunci (lock) sejumlah aset kripto dalam platform selama periode tertentu untuk mendapatkan reward/imbal hasil. Mirip seperti deposito di bank. Reku menyediakan fitur staking untuk beberapa aset kripto pilihan.\n\nCara berpartisipasi:\n1. Pastikan akun sudah terverifikasi (KYC)\n2. Buka menu Airdrop atau Staking di aplikasi Reku\n3. Ikuti instruksi sesuai program yang tersedia\n4. Untuk staking: pilih aset, masukkan jumlah, pilih durasi lock-up\n5. Reward akan dikreditkan sesuai jadwal yang ditentukan program",
    "points": 10
  },
  {
    "id": "Kripto Spot-1",
    "product": "Kripto Spot",
    "number": 1,
    "question": "Jelaskan perbedaan antara Regular Mode dan Lightning Mode dalam transaksi Kripto Spot di Reku, termasuk struktur biaya masing-masing untuk transaksi beli dan jual.",
    "answer": "Regular Mode:\n- Pengguna memilih sendiri harga beli/jual (limit order atau market order yang lebih fleksibel).\n- Biaya BELI: 0,1% platform fee + 0,0111% CFX fee = total sekitar 0,1111%\n- Biaya JUAL: 0,1% platform fee + 0,21% pajak + 0,0111% CFX fee = total sekitar 0,3211%\n(Catatan: Biaya jual lebih tinggi karena ada komponen pajak kripto 0,1% PPh Final untuk aset kripto)\n\nLightning Mode:\n- Harga langsung ditetapkan oleh sistem (fixed price, tidak bisa tawar).\n- Proses transaksi lebih cepat (instan).\n- Biaya platform: GRATIS (0%)\n- Namun tetap dikenakan pajak sesuai ketentuan pemerintah.\n\nKesimpulan: Regular Mode cocok untuk trader yang ingin kontrol harga; Lightning Mode cocok untuk pemula atau yang ingin transaksi cepat tanpa negosiasi harga.",
    "points": 10
  },
  {
    "id": "Kripto Spot-2",
    "product": "Kripto Spot",
    "number": 2,
    "question": "Studi Kasus Transaksi Kripto Spot: Andi membeli 0,05 BTC menggunakan Regular Mode saat harga BTC = Rp 1.500.000.000. Kemudian ia menjual 0,05 BTC tersebut saat harga BTC = Rp 1.600.000.000 menggunakan Regular Mode. Hitunglah: (a) Total biaya beli; (b) Total biaya jual; (c) Profit bersih Andi setelah dipotong semua biaya.",
    "answer": "Harga Beli Total = 0,05 × Rp 1.500.000.000 = Rp 75.000.000\n(a) Biaya Beli (Regular Mode):\n- Platform fee: 0,1% × Rp 75.000.000 = Rp 75.000\n- CFX fee: 0,0111% × Rp 75.000.000 = Rp 8.325\n- Total biaya beli = Rp 83.325\n\nHarga Jual Total = 0,05 × Rp 1.600.000.000 = Rp 80.000.000\n(b) Biaya Jual (Regular Mode):\n- Platform fee: 0,1% × Rp 80.000.000 = Rp 80.000\n- Pajak: 0,21% × Rp 80.000.000 = Rp 168.000\n- CFX fee: 0,0111% × Rp 80.000.000 = Rp 8.880\n- Total biaya jual = Rp 256.880\n\n(c) Profit Kotor = Rp 80.000.000 – Rp 75.000.000 = Rp 5.000.000\nTotal Biaya = Rp 83.325 + Rp 256.880 = Rp 340.205\nProfit Bersih = Rp 5.000.000 – Rp 340.205 = Rp 4.659.795",
    "points": 10
  },
  {
    "id": "Kripto Spot-3",
    "product": "Kripto Spot",
    "number": 3,
    "question": "Seorang pengguna mengeluh bahwa ia sudah melakukan pembelian ETH namun koin tidak masuk ke portofolio selama 30 menit. Sebutkan minimal 4 kemungkinan penyebab dan langkah penyelidikan yang harus dilakukan CS.",
    "answer": "Kemungkinan Penyebab:\n1. Gangguan jaringan blockchain Ethereum (congestion) – transaksi on-chain sedang antre\n2. Order masih dalam status 'pending' karena kondisi pasar (untuk limit order yang harga belum match)\n3. Gangguan sistem internal Reku (delay pemrosesan)\n4. Pengguna salah membaca portofolio (misalnya melihat di tab yang salah)\n5. Order dibatalkan otomatis karena saldo tidak cukup setelah fee\n\nLangkah CS:\n1. Minta pengguna cek tab 'Riwayat Transaksi' atau 'Order History' – lihat status order\n2. Verifikasi apakah transaksi berhasil di sistem Reku (cek order ID)\n3. Jika status 'success' di Reku tapi aset tidak kelihatan: minta pengguna refresh aplikasi atau clear cache\n4. Jika status masih 'pending': jelaskan kondisi pasar dan estimasi waktu\n5. Jika ada anomali: eskalasi ke tim teknis dengan order ID\n6. Update pengguna dalam 1×24 jam",
    "points": 10
  },
  {
    "id": "Kripto Spot-4",
    "product": "Kripto Spot",
    "number": 4,
    "question": "Jelaskan apa itu pajak kripto di Indonesia yang berlaku pada transaksi di Reku, sebutkan jenis-jenis pajaknya, besaran tarif, dan siapa yang bertanggung jawab memungut pajak tersebut.",
    "answer": "Berdasarkan regulasi perpajakan kripto Indonesia (PMK No. 68/PMK.03/2022):\n\n1. PPh Final (Pajak Penghasilan Final):\n- Dikenakan atas transaksi PENJUALAN aset kripto\n- Tarif: 0,1% dari nilai transaksi jual (untuk exchanger yang terdaftar di Bappebti seperti Reku)\n- Jika exchanger tidak terdaftar: 0,2%\n- Dipungut dan disetorkan oleh Reku sebagai exchanger\n\n2. PPN (Pajak Pertambahan Nilai):\n- Dikenakan atas jasa layanan exchanger (komisi/fee)\n- Tarif: 0,11% dari nilai transaksi\n- Dipungut oleh Reku dan disetorkan ke DJP\n\nTotal beban pajak efektif pada transaksi jual kripto di Reku melalui Regular Mode:\n0,1% (PPh Final) + 0,11% (PPN) = 0,21% dari nilai transaksi jual\n\nReku sebagai pemungut pajak (withholding agent) bertanggung jawab memotong dan menyetorkan pajak tersebut.",
    "points": 10
  },
  {
    "id": "Kripto Spot-5",
    "product": "Kripto Spot",
    "number": 5,
    "question": "Studi Kasus Fraud Transaksi Kripto: Pengguna melaporkan ada transaksi jual aset kripto senilai Rp 50.000.000 yang ia tidak pernah lakukan, terjadi dini hari pukul 02.00 WIB. Riwayat login menunjukkan akses dari IP asing. Jelaskan langkah-langkah penanganan CS dari awal hingga penyelesaian.",
    "answer": "Langkah penanganan:\n\nIMMEDIATE (0-15 menit pertama):\n1. Verifikasi identitas pelapor (pastikan benar pemilik akun)\n2. BLOKIR AKUN segera untuk mencegah kerugian lebih lanjut\n3. Dokumentasikan semua detail: waktu laporan, nominal, waktu transaksi mencurigakan, IP asing\n\nINVESTIGASI:\n4. Cek log transaksi: apakah transaksi sudah settled atau masih bisa di-reverse\n5. Cek log login: konfirmasi IP asing, device, dan waktu akses\n6. Verifikasi apakah pengguna pernah share credentials atau klik link phishing\n7. Cek apakah ada withdrawal IDR setelah penjualan kripto\n\nESKALASI:\n8. Laporkan ke tim Security/Fraud Reku untuk investigasi mendalam\n9. Bekerjasama dengan tim legal jika diperlukan\n\nFOLLOW UP PENGGUNA:\n10. Jelaskan prosedur investigasi dan estimasi waktu (biasanya 14 hari kerja)\n11. Minta pengguna buat laporan polisi untuk kasus pencurian data\n12. Informasikan bahwa pengembalian dana tergantung hasil investigasi",
    "points": 10
  },
  {
    "id": "Kripto Spot-6",
    "product": "Kripto Spot",
    "number": 6,
    "question": "Jelaskan apa yang dimaksud dengan 'order book' dan 'spread' dalam perdagangan kripto di Regular Mode Reku, dan bagaimana hal ini mempengaruhi harga yang didapatkan pengguna.",
    "answer": "Order Book adalah daftar semua order beli (bid) dan jual (ask) yang sedang aktif di pasar pada harga-harga tertentu. Terdiri dari:\n- Bid side: daftar pembeli dengan harga yang mereka mau bayar\n- Ask side: daftar penjual dengan harga yang mereka mau terima\n\nSpread adalah selisih antara harga ASK (jual terbaik) dan BID (beli terbaik). Contoh:\n- Harga ask BTC = Rp 1.500.100.000\n- Harga bid BTC = Rp 1.500.000.000\n- Spread = Rp 100.000\n\nPengaruh terhadap pengguna:\n1. Semakin kecil spread, semakin efisien pasar dan semakin dekat harga eksekusi dengan harga yang diharapkan\n2. Market Order akan tereksekusi di harga terbaik yang tersedia → pengguna menerima harga ask saat beli dan harga bid saat jual\n3. Limit Order memungkinkan pengguna menentukan harga eksekusi sendiri, tapi order mungkin tidak langsung terisi jika harga belum match\n4. Di Lightning Mode, spread sudah diperhitungkan dalam fixed price yang ditampilkan Reku",
    "points": 10
  },
  {
    "id": "Kripto Spot-7",
    "product": "Kripto Spot",
    "number": 7,
    "question": "Pengguna melaporkan bahwa ia tidak bisa melakukan transaksi beli kripto meski memiliki saldo IDR yang cukup. Sebutkan minimal 5 kemungkinan kendala teknis maupun non-teknis yang menyebabkan hal ini dan solusinya.",
    "answer": "Kemungkinan kendala dan solusi:\n\n1. Limit transaksi harian belum direset atau sudah tercapai\n→ Solusi: Cek riwayat transaksi hari ini; tunggu reset limit atau upgrade KYC\n\n2. Akun belum KYC atau KYC masih pending review\n→ Solusi: Lengkapi verifikasi KYC di aplikasi; tunggu persetujuan\n\n3. Gangguan aplikasi/koneksi internet pengguna\n→ Solusi: Restart app, clear cache, coba jaringan berbeda\n\n4. Maintenance sistem Reku (downtime terjadwal)\n→ Solusi: Cek pengumuman resmi Reku (sosmed/email); tunggu maintenance selesai\n\n5. Saldo IDR ter-freeze karena ada order aktif yang belum terisi\n→ Solusi: Cancel order aktif yang masih pending di order book\n\n6. Aset kripto yang ingin dibeli sedang dalam kondisi suspend trading\n→ Solusi: Informasikan alasan suspend dan estimasi dibuka kembali\n\n7. Verifikasi 2FA gagal/bermasalah\n→ Solusi: Bantu reset 2FA melalui prosedur yang berlaku",
    "points": 10
  },
  {
    "id": "Kripto Spot-8",
    "product": "Kripto Spot",
    "number": 8,
    "question": "Jelaskan apa yang dimaksud dengan 'portofolio' di Reku, bagaimana cara membaca nilai portofolio kripto, dan apa yang menyebabkan nilai portofolio bisa berfluktuasi meski pengguna tidak melakukan transaksi apapun.",
    "answer": "Portofolio di Reku adalah halaman yang menampilkan seluruh aset kripto yang dimiliki pengguna beserta valuasinya dalam IDR saat ini.\n\nCara membaca nilai portofolio:\n- Total nilai portofolio = Σ (jumlah tiap aset × harga pasar saat ini dalam IDR)\n- Ditampilkan perubahan nilai dalam Rp maupun % dibandingkan harga beli rata-rata (average buy price)\n\nPenyebab nilai portofolio berfluktuasi tanpa transaksi:\n1. Harga pasar kripto berubah setiap detik mengikuti pergerakan pasar global (24/7)\n2. Kurs IDR/USD berubah → mempengaruhi nilai kripto yang dipatok ke USD\n3. Perubahan liquidity di order book menyebabkan bid/ask price bergerak\n4. Sentimen pasar global (berita, regulasi, whale movement) mempengaruhi harga\n5. Funding rate dan mekanisme arbitrase mempengaruhi harga referensi (mark price)\n\nPenting: Nilai portofolio bersifat unrealized (belum direalisasikan). Keuntungan/kerugian baru terealisasi ketika aset dijual.",
    "points": 10
  },
  {
    "id": "Kripto Spot-9",
    "product": "Kripto Spot",
    "number": 9,
    "question": "Studi Kasus: Tono membeli 100 USDT kripto senilai Rp 1.570.000 (kurs Rp 15.700/USDT). Seminggu kemudian, kurs USDT naik menjadi Rp 16.200/USDT. Tono menjual semua 100 USDT-nya menggunakan Regular Mode. Hitunglah profit/loss Tono setelah memperhitungkan biaya beli dan jual.",
    "answer": "Nilai Beli = 100 × Rp 15.700 = Rp 1.570.000\nBiaya Beli (Regular Mode):\n- Platform 0,1% = Rp 1.570\n- CFX 0,0111% = Rp 174,27 ≈ Rp 174\nTotal biaya beli = Rp 1.744\n\nNilai Jual = 100 × Rp 16.200 = Rp 1.620.000\nBiaya Jual (Regular Mode):\n- Platform 0,1% = Rp 1.620\n- Pajak 0,21% = Rp 3.402\n- CFX 0,0111% = Rp 179,82 ≈ Rp 180\nTotal biaya jual = Rp 5.202\n\nProfit kotor = Rp 1.620.000 – Rp 1.570.000 = Rp 50.000\nTotal biaya = Rp 1.744 + Rp 5.202 = Rp 6.946\nProfit bersih = Rp 50.000 – Rp 6.946 = Rp 43.054",
    "points": 10
  },
  {
    "id": "Kripto Spot-10",
    "product": "Kripto Spot",
    "number": 10,
    "question": "Jelaskan apa yang dimaksud dengan 'whitelist alamat penarikan kripto' di Reku, mengapa fitur ini penting untuk keamanan, dan bagaimana prosedur penambahan serta penghapusan alamat whitelist.",
    "answer": "Whitelist Alamat Kripto adalah fitur keamanan yang membatasi penarikan (withdrawal) aset kripto HANYA ke alamat wallet yang sudah terdaftar/diverifikasi sebelumnya.\n\nMengapa penting:\n1. Mencegah hacker menarik kripto ke alamat asing meski berhasil mengakses akun\n2. Memberikan lapisan keamanan tambahan selain password dan 2FA\n3. Ada delay waktu verifikasi saat menambah alamat baru (biasanya 24-48 jam) → memberi waktu pemilik akun untuk menyadari jika ada penambahan tidak sah\n\nProsedur menambah alamat whitelist:\n1. Login ke akun Reku\n2. Masuk menu Keamanan → Whitelist Alamat\n3. Tambah alamat wallet baru\n4. Verifikasi melalui email + 2FA\n5. Tunggu periode pendingin (cooldown) 24-48 jam sebelum alamat aktif untuk digunakan\n\nProsedur menghapus alamat:\n1. Akses menu yang sama\n2. Pilih alamat yang ingin dihapus\n3. Konfirmasi via email dan 2FA\n4. Penghapusan tidak memiliki periode pendingin",
    "points": 10
  },
  {
    "id": "US Stock-1",
    "product": "US Stock",
    "number": 1,
    "question": "Jelaskan secara lengkap apa itu produk US Stock di Reku (PALN), termasuk mekanisme kontrak, pihak ketiga yang terlibat, dan apa perbedaan fundamental produk ini dibandingkan dengan membeli saham AS langsung di broker internasional.",
    "answer": "US Stock di Reku (nama produk: PALN – Perdagangan Aset Luar Negeri) adalah produk investasi yang memungkinkan pengguna Indonesia berinvestasi di saham-saham AS dengan modal minimal dan tanpa perlu membuka akun broker di luar negeri.\n\nMekanisme Kontrak:\n- Kontrak berbanding lurus: pergerakan nilai investasi pengguna proporsional 1:1 dengan pergerakan harga saham asli di AS.\n- Bukan kepemilikan saham langsung, melainkan kontrak derivatif yang nilai dan pergerakannya mengikuti harga saham underlying.\n\nPihak Ketiga:\n- Broker AS: Alpaca Securities (atau ekuivalen yang ditunjuk)\n- Market Infrastructure: BlueOcean Technologies untuk sesi Extended Hours\n- Kustodian dan kliring sesuai regulasi AS (FINRA)\n\nPerbedaan dengan broker internasional langsung:\n- Tidak perlu akun USD atau transfer valas\n- Denominasi IDR (dapat beli mulai $1 setara IDR)\n- Regulasi OJK Indonesia (bukan SEC/FINRA langsung)\n- Fraksional shares tersedia (tidak perlu beli 1 lot penuh)\n- Fee dalam IDR: 0,278% per transaksi",
    "points": 10
  },
  {
    "id": "US Stock-2",
    "product": "US Stock",
    "number": 2,
    "question": "Jelaskan sistem 24-Hour Trading (Extended Hours) untuk US Stock di Reku, sebutkan semua sesi trading yang ada, waktu operasionalnya (WIB), dan batasan atau risiko yang perlu diketahui pengguna.",
    "answer": "Sistem 24-Hour Trading di Reku memungkinkan pengguna bertransaksi saham AS hampir sepanjang waktu melalui 4 sesi:\n\n1. Overnight Session (Sesi Malam – BlueOcean):\n- Waktu AS: 20.00 – 04.00 ET\n- Waktu WIB: 07.00 – 15.00 WIB (hari kerja)\n\n2. Pre-Market Session:\n- Waktu AS: 04.00 – 09.30 ET\n- Waktu WIB: 15.00 – 21.30 WIB\n\n3. Regular Market Session:\n- Waktu AS: 09.30 – 16.00 ET\n- Waktu WIB: 21.30 – 04.00 WIB (dini hari)\n\n4. After-Hours Session:\n- Waktu AS: 16.00 – 20.00 ET\n- Waktu WIB: 04.00 – 08.00 WIB\n\nRisiko dan batasan Extended Hours:\n- Likuiditas lebih rendah → spread lebih lebar\n- Volatilitas lebih tinggi dibanding Regular Session\n- Tidak semua saham tersedia di Extended Hours\n- Harga dapat bergerak signifikan sebelum Regular Market buka",
    "points": 10
  },
  {
    "id": "US Stock-3",
    "product": "US Stock",
    "number": 3,
    "question": "Studi Kasus Transaksi US Stock: Rini membeli 5 lembar saham AAPL saat harga $190 per lembar menggunakan kurs Rp 15.800/USD. Kemudian menjual saat harga AAPL $200. Hitunglah: (a) Modal beli dalam IDR; (b) Biaya transaksi beli; (c) Pendapatan jual dalam IDR; (d) Biaya transaksi jual; (e) Profit bersih.",
    "answer": "Kurs tetap Rp 15.800/USD (asumsi kurs sama)\n\n(a) Modal Beli:\n5 lembar × $190 = $950\n$950 × Rp 15.800 = Rp 15.010.000\n\n(b) Biaya Transaksi Beli:\n0,278% × Rp 15.010.000 = Rp 41.728\n\n(c) Pendapatan Jual:\n5 lembar × $200 = $1.000\n$1.000 × Rp 15.800 = Rp 15.800.000\n\n(d) Biaya Transaksi Jual:\n0,278% × Rp 15.800.000 = Rp 43.924\n\n(e) Profit Bersih:\nProfit kotor = Rp 15.800.000 – Rp 15.010.000 = Rp 790.000\nTotal biaya = Rp 41.728 + Rp 43.924 = Rp 85.652\nProfit bersih = Rp 790.000 – Rp 85.652 = Rp 704.348",
    "points": 10
  },
  {
    "id": "US Stock-4",
    "product": "US Stock",
    "number": 4,
    "question": "Jelaskan apa itu fitur 'Fraksional Shares' pada produk US Stock Reku, berikan contoh penggunaannya, dan jelaskan bagaimana proses jual beli fraksional bekerja.",
    "answer": "Fraksional Shares adalah fitur yang memungkinkan pengguna membeli sebagian (fraksi) dari satu lembar saham, bukan harus 1 lembar penuh.\n\nMinimum investasi: setara $1 USD (dalam IDR)\n\nContoh:\n- Harga 1 lembar saham GOOGL = $180\n- Pengguna hanya punya $10 → bisa beli 10/180 = 0,0556 lembar GOOGL\n- Nilai investasi mengikuti proporsi tersebut\n\nCara kerja:\n- Reku (melalui broker AS) mengkonsolidasikan order-order fraksional dari banyak pengguna\n- Pengguna memiliki 'beneficial interest' atas fraksi saham tersebut\n- Nilai portofolio bergerak proporsional dengan harga saham asli\n- Dividen (jika ada) dibayarkan proporsional sesuai fraksi kepemilikan\n\nManfaat bagi pengguna Indonesia:\n- Bisa berinvestasi di saham mahal (AMZN, TSLA, dll) dengan modal terjangkau\n- Diversifikasi portofolio lebih mudah\n- Tidak perlu menunggu tabungan cukup untuk beli 1 lot penuh",
    "points": 10
  },
  {
    "id": "US Stock-5",
    "product": "US Stock",
    "number": 5,
    "question": "Jelaskan semua jenis Advanced Order yang tersedia untuk US Stock di Reku (Limit Order, Stop Order, Stop-Limit Order), bagaimana cara kerjanya, dan berikan contoh kapan masing-masing tipe order sebaiknya digunakan.",
    "answer": "1. Limit Order:\n- Order beli/jual pada harga tertentu atau lebih baik\n- Beli Limit: tereksekusi hanya jika harga pasar ≤ harga limit yang ditentukan\n- Jual Limit: tereksekusi hanya jika harga pasar ≥ harga limit yang ditentukan\n- Contoh penggunaan: Ingin beli AAPL maksimum di $190, set limit order $190\n\n2. Stop Order (Stop Market Order):\n- Menjadi market order saat harga menyentuh 'stop price'\n- Stop Loss: Jual otomatis jika harga turun ke level tertentu untuk batasi kerugian\n- Stop Buy: Beli otomatis jika harga naik melampaui level tertentu (untuk breakout)\n- Contoh: Punya AAPL di $200, set stop sell di $185 untuk proteksi\n\n3. Stop-Limit Order:\n- Kombinasi Stop + Limit: ketika harga menyentuh stop price, menjadi limit order\n- Lebih presisi tapi risiko order tidak terisi jika harga bergerak terlalu cepat\n- Contoh: Stop price $185, limit price $183 → order jual antara $185-$183\n\nCatatan: Semua Advanced Order di Reku berlaku untuk sesi Regular dan Extended Hours, dengan minimum/maksimum order sesuai ketentuan yang berlaku.",
    "points": 10
  },
  {
    "id": "US Stock-6",
    "product": "US Stock",
    "number": 6,
    "question": "Studi Kasus Fraud US Stock: Pengguna melaporkan bahwa ada transaksi pembelian saham TSLA senilai $5.000 yang tidak ia lakukan. Pengguna mengklaim tidak pernah login hari itu. Jelaskan langkah investigasi CS dan eskalasi yang diperlukan.",
    "answer": "TAHAP 1 – VERIFIKASI AWAL (0-30 menit):\n1. Konfirmasi identitas pelapor dengan pertanyaan verifikasi\n2. Tanyakan apakah pengguna pernah share kredensial, klik link mencurigakan, atau login di perangkat orang lain\n3. Cek log login: IP address, device fingerprint, waktu login\n4. Cek riwayat transaksi untuk order TSLA tersebut: apakah ada order ID, timestamp\n\nTAHAP 2 – TINDAKAN DARURAT:\n5. Blokir akun sementara untuk mencegah kerugian lebih lanjut\n6. Cek apakah ada withdrawal IDR setelah transaksi mencurigakan\n7. Jika saham masih dalam posisi open: diskusikan dengan pengguna apakah perlu di-close\n\nTAHAP 3 – ESKALASI:\n8. Eskalasi ke tim Fraud dengan dokumentasi lengkap\n9. Koordinasi dengan tim Legal untuk kemungkinan dispute ke broker AS (Alpaca)\n10. Laporan ke tim Keamanan untuk analisis forensik digital\n\nTAHAP 4 – KOMUNIKASI PENGGUNA:\n11. Beri update berkala (setiap 2-3 hari kerja)\n12. Minta pengguna membuat laporan polisi\n13. Estimasi penyelesaian investigasi: 14-21 hari kerja",
    "points": 10
  },
  {
    "id": "US Stock-7",
    "product": "US Stock",
    "number": 7,
    "question": "Jelaskan bagaimana mekanisme pembayaran dividen bekerja untuk pengguna US Stock di Reku, termasuk kapan dividen dibayarkan, dalam mata uang apa, dan apakah ada pajak yang dikenakan.",
    "answer": "Mekanisme Dividen US Stock di Reku:\n\n1. Hak Dividen:\n- Pengguna yang memiliki saham (termasuk fraksional) pada tanggal Record Date berhak atas dividen\n- Dividen dibayarkan proporsional sesuai jumlah lembar/fraksi yang dimiliki\n\n2. Proses Pembayaran:\n- Dividen dari perusahaan AS dibayarkan dalam USD ke broker (Alpaca)\n- Reku mengkonversi USD ke IDR menggunakan kurs saat itu\n- Dana dikreditkan ke saldo IDR pengguna di Reku\n\n3. Waktu Pembayaran:\n- Mengikuti jadwal pembayaran dividen perusahaan AS (Pay Date)\n- Ada delay beberapa hari setelah Pay Date untuk proses konversi dan kreditisasi\n\n4. Pajak:\n- Withholding Tax AS: 30% untuk non-resident alien (WNI)\n- Jika ada P3B (Perjanjian Penghindaran Pajak Berganda) Indonesia-AS yang berlaku: tarif bisa lebih rendah\n- Di Indonesia: dividen yang diterima dari LN dapat dikenakan PPh\n- Reku membantu menyediakan informasi pajak namun pengguna bertanggung jawab pelaporan pajak pribadi",
    "points": 10
  },
  {
    "id": "US Stock-8",
    "product": "US Stock",
    "number": 8,
    "question": "Seorang pengguna mengeluh bahwa ia mencoba melakukan order saham NVDA namun selalu gagal dengan pesan 'Order Rejected'. Sebutkan minimal 5 kemungkinan penyebab dan bagaimana CS menanganinya.",
    "answer": "Kemungkinan Penyebab Order Rejected:\n\n1. Saldo IDR tidak mencukupi untuk nilai order + biaya (0,278%)\n→ CS: Bantu pengguna hitung total yang dibutuhkan, sarankan deposit jika kurang\n\n2. Order dilakukan di luar jam trading yang diizinkan\n→ CS: Jelaskan jadwal 4 sesi trading dan cek kapan order dilakukan\n\n3. Harga limit order terlalu jauh dari harga pasar (di luar batas wajar sistem)\n→ CS: Sarankan pengguna adjust harga limit mendekati harga pasar\n\n4. Saham NVDA sedang dalam kondisi halt/suspend di bursa AS (misal: menunggu pengumuman penting)\n→ CS: Informasikan status saham dan estimasi trading resume\n\n5. Limit transaksi harian pengguna sudah tercapai sesuai level KYC\n→ CS: Informasikan limit dan prosedur upgrade KYC\n\n6. Maintenance sistem/update platform Reku\n→ CS: Informasikan jadwal maintenance dan minta pengguna coba lagi setelah selesai\n\n7. Order size terlalu kecil (di bawah minimum $1 setara IDR)\n→ CS: Informasikan minimum order dan minta pengguna tingkatkan nominal",
    "points": 10
  },
  {
    "id": "US Stock-9",
    "product": "US Stock",
    "number": 9,
    "question": "Jelaskan risiko-risiko utama yang harus dipahami pengguna sebelum berinvestasi di US Stock melalui Reku, dan bagaimana CS harus mengkomunikasikan risiko ini kepada pengguna yang baru tertarik.",
    "answer": "Risiko Utama US Stock di Reku:\n\n1. Risiko Pasar (Market Risk):\nHarga saham bisa naik maupun turun. Nilai investasi tidak dijamin dan bisa mengalami kerugian.\n\n2. Risiko Kurs (Currency Risk):\nKarena underlying saham dalam USD, pergerakan kurs USD/IDR mempengaruhi nilai investasi dalam Rupiah.\n\n3. Risiko Likuiditas:\nDi Extended Hours, bid-ask spread lebih lebar dan tidak semua saham liquid → harga eksekusi bisa kurang optimal.\n\n4. Risiko Counterparty:\nSebagai produk kontrak (bukan kepemilikan saham langsung), ada risiko terkait pihak ketiga (broker AS).\n\n5. Risiko Regulasi:\nPerubahan regulasi di AS atau Indonesia bisa mempengaruhi ketersediaan produk.\n\n6. Risiko Delisting:\nJika saham di-delist dari bursa AS, nilai investasi bisa terpengaruh.\n\nCara CS Mengkomunikasikan:\n- Sampaikan dengan bahasa sederhana, hindari jargon berlebihan\n- Tidak memberikan rekomendasi investasi (bukan financial advisor)\n- Arahkan pengguna ke disclaimer dan dokumen risiko resmi Reku\n- Pastikan pengguna sudah membaca dan memahami Risk Disclosure sebelum bertransaksi",
    "points": 10
  },
  {
    "id": "US Stock-10",
    "product": "US Stock",
    "number": 10,
    "question": "Studi Kasus: Pada tanggal 15 Januari 2025, Dewi membeli 10 fraksional saham META seharga $590/lembar, total $5.900. Kurs saat itu Rp 16.000/USD. Pada 20 Januari 2025, META turun ke $560/lembar dan Dewi memutuskan jual semua. Kurs saat jual Rp 15.900/USD. Hitunglah: (a) Nilai beli IDR + biaya; (b) Nilai jual IDR + biaya; (c) Total P/L Dewi dalam IDR.",
    "answer": "Nilai Beli USD = 10 × $590 = $5.900\nNilai Beli IDR = $5.900 × Rp 16.000 = Rp 94.400.000\n(a) Biaya beli = 0,278% × Rp 94.400.000 = Rp 262.432\nTotal keluar = Rp 94.400.000 + Rp 262.432 = Rp 94.662.432\n\nNilai Jual USD = 10 × $560 = $5.600\nNilai Jual IDR = $5.600 × Rp 15.900 = Rp 89.040.000\n(b) Biaya jual = 0,278% × Rp 89.040.000 = Rp 247.531\nTotal masuk bersih = Rp 89.040.000 – Rp 247.531 = Rp 88.792.469\n\n(c) Total P/L:\nLoss dari saham = Rp 89.040.000 – Rp 94.400.000 = –Rp 5.360.000\nTotal biaya = Rp 262.432 + Rp 247.531 = Rp 509.963\nTotal Loss Bersih = –Rp 5.360.000 – Rp 509.963 = –Rp 5.869.963\n\nKeterangan: Dewi mengalami kerugian Rp 5.869.963 karena: (1) harga saham turun $30/lembar, (2) kurs USD melemah Rp 100, dan (3) biaya transaksi",
    "points": 10
  },
  {
    "id": "Perpetuals-1",
    "product": "Perpetuals",
    "number": 1,
    "question": "Jelaskan secara lengkap apa itu produk Perpetuals (Reku Futures) di Reku, sebutkan karakteristik utamanya yang membedakannya dari Kripto Spot, dan apa saja risiko spesifik yang melekat pada produk ini.",
    "answer": "Perpetuals (Reku Futures) adalah kontrak derivatif kripto tanpa tanggal kadaluarsa yang memungkinkan pengguna berspekulasi terhadap pergerakan harga aset kripto menggunakan leverage.\n\nKarakteristik utama:\n1. Margin: Hanya Cross Margin (margin gabungan untuk semua posisi)\n2. Leverage: Hingga 25× lipat modal\n3. Denominasi: Margin dalam IDR, settlement dalam USDT (kurs tetap Rp 10.000/USDT)\n4. Bursa: CFX (Commodity Futures Exchange) Indonesia\n5. Kliring: KKI (Kliring Komoditi Indonesia)\n6. Tidak ada tanggal kedaluwarsa (perpetual = selamanya sampai ditutup/dilikuidasi)\n7. Funding Rate: Biaya pertukaran antara posisi long dan short setiap 8 jam\n\nPerbedaan dari Kripto Spot:\n- Spot: memiliki aset riil; Perpetuals: hanya kontrak derivatif\n- Spot: tidak ada leverage; Perpetuals: leverage hingga 25×\n- Spot: tidak ada margin call; Perpetuals: ada risiko likuidasi\n- Spot: tidak ada funding rate; Perpetuals: ada funding rate\n\nRisiko:\n1. Liquidation risk: posisi bisa dilikuidasi jika margin habis\n2. Leverage amplifies losses: kerugian diperbesar sesuai leverage\n3. Funding rate risk: biaya tambahan jika posisi ditahan lama",
    "points": 10
  },
  {
    "id": "Perpetuals-2",
    "product": "Perpetuals",
    "number": 2,
    "question": "Jelaskan konsep Margin Usage (MU) di Reku Futures, tuliskan rumusnya, sebutkan level-level kondisi margin (healthy, margin call, liquidation), dan apa yang terjadi di tiap level tersebut.",
    "answer": "Margin Usage (MU) adalah indikator kesehatan posisi yang menunjukkan seberapa besar margin yang digunakan dibandingkan total margin yang tersedia.\n\nRumus:\nMU = Total Maintenance Margin / (Available Margin + Total Maintenance Margin) × 100%\n\nLevel Kondisi Margin:\n1. Healthy (Sehat): MU < 50%\n→ Posisi aman, masih ada ruang untuk fluktuasi harga\n\n2. Warning Zone: 50% ≤ MU < 75%\n→ Mulai perlu perhatian, pertimbangkan menambah margin atau tutup sebagian posisi\n\n3. Margin Call: 75% ≤ MU < 100%\n→ Sistem mengirimkan notifikasi margin call\n→ Pengguna HARUS segera: (a) Tambah deposit/margin, atau (b) Tutup sebagian posisi\n→ Jika tidak ada tindakan, sistem akan mulai proses Auto-Deleveraging\n\n4. Liquidation: MU = 100%\n→ SEMUA posisi dilikuidasi secara otomatis oleh sistem\n→ Modal tersisa setelah likuidasi mungkin sangat kecil atau nol\n\nPenting: Di Cross Margin, semua posisi dalam akun berbagi margin yang sama, sehingga posisi yang rugi dapat 'menghabiskan' margin posisi lain.",
    "points": 10
  },
  {
    "id": "Perpetuals-3",
    "product": "Perpetuals",
    "number": 3,
    "question": "Hitunglah Margin Usage (MU) untuk skenario berikut: Trader memiliki Available Margin Rp 5.000.000. Ia membuka 3 posisi dengan Total Maintenance Margin = Rp 3.000.000. Apakah kondisi akun ini sehat? Apa yang harus dilakukan trader jika harga bergerak tidak menguntungkan sehingga Total Maintenance Margin naik menjadi Rp 6.000.000?",
    "answer": "Kondisi Awal:\nAvailable Margin = Rp 5.000.000\nTotal Maintenance Margin = Rp 3.000.000\n\nMU = 3.000.000 / (5.000.000 + 3.000.000) × 100%\nMU = 3.000.000 / 8.000.000 × 100%\nMU = 37,5%\n\nKondisi: HEALTHY (MU 37,5% < 50%) ✓\n\n--- Skenario Harga Bergerak Tidak Menguntungkan ---\nMisalkan unrealized loss menyebabkan Available Margin berkurang dan Maintenance Margin naik:\nAnggap Available Margin turun menjadi Rp 2.000.000 (karena unrealized loss)\nTotal Maintenance Margin = Rp 6.000.000\n\nMU = 6.000.000 / (2.000.000 + 6.000.000) × 100%\nMU = 6.000.000 / 8.000.000 × 100%\nMU = 75%\n\nKondisi: MARGIN CALL! (MU = 75%)\n\nTindakan yang HARUS dilakukan:\n1. Segera deposit tambahan margin (top-up IDR ke akun Futures)\n2. ATAU tutup sebagian posisi yang paling merugikan untuk mengurangi Maintenance Margin\n3. Jika MU mencapai 100%: semua posisi dilikuidasi otomatis",
    "points": 10
  },
  {
    "id": "Perpetuals-4",
    "product": "Perpetuals",
    "number": 4,
    "question": "Jelaskan struktur biaya (fee) untuk transaksi di Reku Futures, bedakan antara Taker Fee dan Maker Fee, serta jelaskan apa yang dimaksud dengan masing-masing istilah tersebut.",
    "answer": "Struktur Biaya Reku Futures:\n\nTaker Fee: 0,2665% per transaksi\nRincian: 0,1% platform fee + 0,1665% CFX fee\n\nMaker Fee: 0,1555% per transaksi\nRincian: 0,1% platform fee + 0,0555% CFX fee\n\nDefinisi:\n- MAKER: Order yang masuk ke order book dan menunggu (tidak langsung tereksekusi). Contoh: Pasang Limit Order saat harga pasar belum mencapai harga yang ditentukan → menjadi maker karena 'membuat' likuiditas\n- TAKER: Order yang langsung tereksekusi mengambil likuiditas yang sudah ada di order book. Contoh: Market Order → langsung match dengan order yang sudah ada → menjadi taker karena 'mengambil' likuiditas\n\nMengapa Maker lebih murah:\nMaker menyediakan likuiditas ke pasar (membantu bursa CFX) sehingga mendapat diskon biaya.\nTaker mengambil likuiditas sehingga dikenakan biaya lebih tinggi.\n\nCatatan: Fee dikenakan dua kali per kontrak (saat buka posisi dan saat tutup posisi).",
    "points": 10
  },
  {
    "id": "Perpetuals-5",
    "product": "Perpetuals",
    "number": 5,
    "question": "Studi Kasus Perpetuals – Posisi Long: Ahmad membuka posisi LONG BTCUSD-PX sebanyak 10 lot dengan harga entry $65.000. Satu lot BTCUSD-PX = 0,001 BTC. Leverage 10×. Kurs USDT = Rp 10.000. Ia menutup posisi saat harga $67.000. Hitunglah: (a) Nilai kontrak; (b) Initial Margin; (c) P/L kotor; (d) Biaya taker buka dan tutup; (e) P/L bersih dalam IDR.",
    "answer": "Data:\n- Lot = 10, 1 lot = 0,001 BTC → Total = 0,01 BTC\n- Entry $65.000, Close $67.000\n- Leverage 10× → Initial Margin = 10% dari nilai kontrak\n- Taker fee = 0,2665%\n- Kurs USDT = Rp 10.000\n\n(a) Nilai Kontrak:\n0,01 BTC × $65.000 = $650\nDalam IDR = $650 × 10 × Rp 10.000 = Rp 65.000.000\n\n(b) Initial Margin (10% leverage 10×):\nRp 65.000.000 × 10% = Rp 6.500.000\n\n(c) P/L Kotor (Long: harga naik = untung):\nSelisih harga = $67.000 – $65.000 = $2.000\nP/L = 0,01 BTC × $2.000 × Rp 10.000 = Rp 200.000.000 × 0,01 = Rp 200.000\n\n(d) Biaya Taker:\nBuka: 0,2665% × Rp 65.000.000 = Rp 173.225\nTutup: 0,2665% × (0,01 × $67.000 × Rp 10.000) = 0,2665% × Rp 67.000.000 × 0,01\n= 0,2665% × Rp 670.000 (nilai 0,01 BTC × $67.000) = Rp 178.555\nTotal fee = Rp 173.225 + Rp 178.555 = Rp 351.780\n\n(e) P/L Bersih:\nRp 200.000 – Rp 351.780 = –Rp 151.780\n\nKesimpulan: Meskipun harga naik $2.000, biaya taker yang tinggi membuat Ahmad justru rugi Rp 151.780. Ini menunjukkan pentingnya mempertimbangkan biaya dalam trading futures.",
    "points": 10
  },
  {
    "id": "Perpetuals-6",
    "product": "Perpetuals",
    "number": 6,
    "question": "Jelaskan konsep Funding Rate di Reku Futures, kapan waktu funding rate dibayarkan, siapa yang membayar dan siapa yang menerima, dan bagaimana cara menghitung biaya/pendapatan funding rate.",
    "answer": "Funding Rate adalah mekanisme penyeimbang harga antara kontrak perpetuals dan harga spot underlying asset. Tujuannya agar harga kontrak perpetuals tidak terlalu jauh dari harga pasar spot.\n\nWaktu Pembayaran di Reku:\nFunding Rate dibayarkan 3× sehari: pukul 07:00, 15:00, dan 23:00 WIB\n(Setiap 8 jam sekali)\n\nMekanisme:\n- Jika Funding Rate POSITIF: Posisi LONG membayar ke posisi SHORT\n(Terjadi saat harga futures > harga spot → pasar bullish)\n- Jika Funding Rate NEGATIF: Posisi SHORT membayar ke posisi LONG\n(Terjadi saat harga futures < harga spot → pasar bearish)\n\nRumus Biaya Funding:\nFunding Fee = Nilai Kontrak × Funding Rate\n\nContoh:\nPosisi Long: 1 BTC × nilai $65.000 = $65.000\nFunding Rate = +0,01%\nFunding Fee = $65.000 × 0,01% = $6,5 USDT yang HARUS DIBAYAR per sesi\n\nDalam 1 hari (3 sesi) = $6,5 × 3 = $19,5 USDT = Rp 195.000\n\nImplikasi: Posisi yang ditahan lama saat funding rate tinggi akan mengakumulasi biaya signifikan. CS perlu mengedukasi pengguna tentang ini.",
    "points": 10
  },
  {
    "id": "Perpetuals-7",
    "product": "Perpetuals",
    "number": 7,
    "question": "Studi Kasus Perpetuals – Posisi Short dengan Funding Rate: Budi membuka posisi SHORT ETHUSDT-PX sebanyak 5 lot, entry $3.500. 1 lot = 0,01 ETH. Leverage 5×. Funding rate +0,05% per 8 jam. Budi menahan posisi selama 2 hari (6 sesi funding), lalu menutup posisi saat harga ETH $3.300. Hitunglah P/L bersih dengan memperhitungkan funding rate (gunakan Taker Fee).",
    "answer": "Data:\n- Lot = 5, 1 lot = 0,01 ETH → Total = 0,05 ETH\n- Entry $3.500, Close $3.300\n- Leverage 5× → Initial Margin = 20%\n- Taker fee = 0,2665%; Kurs USDT = Rp 10.000\n\nNilai Kontrak Buka:\n0,05 ETH × $3.500 = $175\nDalam IDR = $175 × Rp 10.000 = Rp 1.750.000\n\nNilai Kontrak Tutup:\n0,05 ETH × $3.300 = $165 → IDR = Rp 1.650.000\n\nP/L Kotor (Short: harga turun = UNTUNG):\nP/L = Entry Amount – Close Amount = $175 – $165 = $10 USDT\nIDR = $10 × Rp 10.000 = Rp 100.000\n\nBiaya Taker:\nBuka: 0,2665% × Rp 1.750.000 = Rp 4.664\nTutup: 0,2665% × Rp 1.650.000 = Rp 4.397\nTotal taker = Rp 9.061\n\nFunding Rate (SHORT + Funding Rate POSITIF = SHORT MENERIMA BAYARAN):\nFunding per sesi = $175 × 0,05% = $0,0875 USDT\n6 sesi = $0,0875 × 6 = $0,525 USDT → IDR = Rp 5.250 (PENDAPATAN)\n\nP/L Bersih:\nRp 100.000 – Rp 9.061 + Rp 5.250 = Rp 96.189",
    "points": 10
  },
  {
    "id": "Perpetuals-8",
    "product": "Perpetuals",
    "number": 8,
    "question": "Jelaskan bagaimana menghitung harga likuidasi untuk posisi Long dan Short di Reku Futures. Berikan rumus lengkap dan contoh perhitungan untuk posisi Long SOLUSDT-PX: 10 lot, entry $150, leverage 10×.",
    "answer": "Rumus Harga Likuidasi:\n\nPosisi LONG:\nLiquidation Price = Entry Price – (Max Loss / Qty)\n\nPosisi SHORT:\nLiquidation Price = Entry Price + (Max Loss / Qty)\n\nDimana:\nMax Loss = Modal awal (Initial Margin) – Biaya taker buka – Maintenance Margin\nQty = Jumlah unit aset dalam kontrak\n\nContoh – Long SOLUSDT-PX:\n- 10 lot × 0,1 SOL/lot = 1 SOL\n- Entry $150, Leverage 10× → Initial Margin = 10%\n- Nilai Kontrak = 1 × $150 = $150 USDT = Rp 1.500.000\n- Initial Margin (10%) = Rp 150.000\n- Maintenance Margin (1% at 25×, at 10× sekitar 2%) ≈ Rp 30.000\n- Taker Fee buka: 0,2665% × Rp 1.500.000 = Rp 3.998\n\nMax Loss = Rp 150.000 – Rp 3.998 – Rp 30.000 = Rp 116.002\nQty dalam IDR per unit = Rp 1.500.000 / 1 SOL = Rp 1.500.000\n\nLiquidation Price dalam USD:\nMax Loss USDT = Rp 116.002 / Rp 10.000 = $11,60\nLiquidation Price = $150 – ($11,60 / 1 SOL) = $150 – $11,60 = $138,40\n\nArtinya: Posisi akan dilikuidasi jika harga SOL turun ke sekitar $138,40",
    "points": 10
  },
  {
    "id": "Perpetuals-9",
    "product": "Perpetuals",
    "number": 9,
    "question": "Studi Kasus Fraud Perpetuals: Pengguna melaporkan bahwa posisi futures-nya dilikuidasi secara tidak wajar meski ia mengklaim saldo masih mencukupi. Ia menuduh Reku memanipulasi harga untuk melikuidasi posisinya. Bagaimana CS merespons dan menjelaskan mekanisme Mark Price yang digunakan Reku?",
    "answer": "Langkah Respons CS:\n\n1. EMPATI TERLEBIH DAHULU:\n'Saya memahami betapa frustrasinya mengalami likuidasi. Saya akan bantu jelaskan apa yang terjadi.'\n\n2. EDUKASI MARK PRICE:\nLikuidasi di Reku Futures menggunakan MARK PRICE, bukan Last Trade Price.\n\nRumus Mark Price:\nMark Price = Index Price × (1 + Funding Rate × Time Remaining / Funding Interval)\n\nMengapa Mark Price digunakan:\n- Mencegah manipulasi harga sesaat (spike harga sementara) yang sengaja memicu likuidasi massal\n- Mark Price lebih stabil karena berdasarkan rata-rata harga dari beberapa exchange referensi\n- Ini adalah praktik industri standar untuk melindungi pengguna\n\n3. INVESTIGASI:\n- Cek riwayat Mark Price saat likuidasi terjadi\n- Cek MU (Margin Usage) history sebelum likuidasi\n- Verifikasi apakah ada funding rate yang membebani posisi\n- Cek apakah pengguna menambah posisi tanpa menambah margin\n\n4. PENJELASAN TEKNIS:\n- Tunjukkan data historis Mark Price dan MU kepada pengguna\n- Jelaskan bahwa cross margin berarti semua posisi berbagi margin\n- Jelaskan bahwa funding rate yang terakumulasi bisa mengurangi available margin\n\n5. ESKALASI jika pengguna tetap tidak puas: Eskalasi ke tim teknis untuk audit trail lengkap",
    "points": 10
  },
  {
    "id": "Perpetuals-10",
    "product": "Perpetuals",
    "number": 10,
    "question": "Studi Kasus Lengkap Perpetuals: Siti membuka posisi Long BTCUSD-PX sebanyak 20 lot (1 lot = 0,001 BTC) di harga $60.000 dengan leverage 20×. Ia menutup posisi saat harga $62.000. Gunakan Taker Fee. Hitung: (a) Nilai kontrak dalam USDT dan IDR; (b) Initial Margin; (c) P/L kotor; (d) Total biaya taker; (e) P/L bersih; (f) ROI terhadap margin yang digunakan.",
    "answer": "Data:\n- 20 lot × 0,001 BTC = 0,02 BTC\n- Entry $60.000, Close $62.000\n- Leverage 20× → Initial Margin = 5% (100%/20)\n- Taker fee = 0,2665%, Kurs USDT = Rp 10.000\n\n(a) Nilai Kontrak:\nUSDT = 0,02 BTC × $60.000 = $1.200 USDT\nIDR = $1.200 × Rp 10.000 = Rp 12.000.000\n\n(b) Initial Margin:\nRp 12.000.000 × 5% = Rp 600.000\n\n(c) P/L Kotor (Long, harga naik):\n$62.000 – $60.000 = $2.000 per BTC\nP/L = 0,02 BTC × $2.000 = $40 USDT\nIDR = $40 × Rp 10.000 = Rp 400.000\n\n(d) Total Biaya Taker:\nBuka: 0,2665% × Rp 12.000.000 = Rp 31.980\nTutup: nilai kontrak close = 0,02 × $62.000 × Rp 10.000 = Rp 12.400.000\nTutup fee: 0,2665% × Rp 12.400.000 = Rp 33.046\nTotal Taker = Rp 31.980 + Rp 33.046 = Rp 65.026\n\n(e) P/L Bersih:\nRp 400.000 – Rp 65.026 = Rp 334.974\n\n(f) ROI terhadap Initial Margin:\nROI = (Rp 334.974 / Rp 600.000) × 100% = 55,83%\n\nDengan leverage 20×, kenaikan harga ~3,3% menghasilkan ROI 55,83% atas modal.",
    "points": 10
  }
];
