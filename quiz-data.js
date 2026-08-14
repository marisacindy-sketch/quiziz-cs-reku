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
    "question": "Jelaskan cara kerja produk Saham AS di Reku, termasuk hubungan pergerakan nilainya dengan saham asli di Amerika Serikat dan alasan pengguna dapat mulai dari nominal kecil.",
    "answer": "Produk Saham AS Reku menggunakan kontrak berbanding lurus. Saat pengguna bertransaksi, aset dasar di Amerika Serikat diperdagangkan atas nama pengguna sehingga nilai investasinya mengikuti pergerakan saham acuan secara searah. Saham dapat dibeli dalam pecahan, jadi pengguna tidak harus membeli satu lembar penuh dan dapat mulai dari sekitar $1.",
    "points": 10
  },
  {
    "id": "US Stock-2",
    "product": "US Stock",
    "number": 2,
    "question": "Jabarkan status kepemilikan Saham AS yang dibeli melalui Reku, pihak yang membantu menyediakan aksesnya, tempat pencatatan transaksinya, dan satu hak pemegang saham yang tidak diperoleh pengguna.",
    "answer": "Reku bekerja sama dengan PT Pasar Forex dan Komoditi Berjangka, pialang berjangka yang memiliki izin PALN dari Bappebti. Aset dasar diperdagangkan atas nama pengguna. Transaksi dicatat di Jakarta Futures Exchange (JFX) dan Kliring Berjangka Indonesia (KBI). Pengguna memperoleh manfaat ekonomi dari saham, tetapi tidak memiliki hak suara dalam rapat pemegang saham.",
    "points": 10
  },
  {
    "id": "US Stock-3",
    "product": "US Stock",
    "number": 3,
    "question": "Jelaskan perbedaan membeli saham satu perusahaan dengan membeli ETF, lalu sebutkan keadaan ketika ETF lebih masuk akal bagi pengguna.",
    "answer": "Saham satu perusahaan membuat hasil investasi sangat bergantung pada kinerja perusahaan tersebut. ETF berisi sekumpulan aset dan diperdagangkan seperti saham, sehingga satu pembelian dapat memberi penyebaran investasi yang lebih luas. ETF lebih masuk akal bagi pengguna yang ingin menyebar risiko, belum yakin memilih perusahaan satu per satu, atau ingin mengikuti indeks maupun tema tertentu. ETF tetap dapat turun dan tidak menghilangkan risiko pasar.",
    "points": 10
  },
  {
    "id": "US Stock-4",
    "product": "US Stock",
    "number": 4,
    "question": "Jelaskan manfaat dan keterbatasan saham pecahan bagi pengguna yang memiliki modal terbatas.",
    "answer": "Saham pecahan memungkinkan pengguna membeli sebagian kecil saham mahal, mulai sekitar $1, sehingga modal dapat dibagi ke beberapa aset dan tidak perlu menunggu mampu membeli satu lembar penuh. Keterbatasannya: nilai keuntungan dan dividen mengikuti porsi yang dimiliki, beberapa jenis atau sesi order dapat memiliki ketentuan khusus, dan modal kecil tetap dapat berkurang jika harga turun.",
    "points": 10
  },
  {
    "id": "US Stock-5",
    "product": "US Stock",
    "number": 5,
    "question": "Sebelum memberikan panduan transaksi Saham AS, sebutkan dua kesiapan akun yang perlu dipastikan oleh CS dan jelaskan alasannya.",
    "answer": "CS perlu memastikan pengguna telah menyelesaikan verifikasi tambahan untuk perdagangan Saham AS dan memiliki saldo USD. Verifikasi diperlukan agar akses produk sesuai ketentuan, sedangkan saldo USD diperlukan karena transaksi Saham AS dilakukan dalam mata uang USD. Setelah itu pengguna dapat memilih aset, jenis order, meninjau rincian, lalu mengonfirmasi transaksi.",
    "points": 10
  },
  {
    "id": "US Stock-6",
    "product": "US Stock",
    "number": 6,
    "question": "Bandingkan market order dan limit order dari sisi tujuan, kepastian harga, serta kemungkinan order berhasil dijalankan.",
    "answer": "Market order mengutamakan kecepatan dan dijalankan pada harga terbaik yang tersedia, tetapi harga akhirnya tidak dijamin sama dengan harga yang terlihat. Limit order mengutamakan batas harga: pembelian tidak dilakukan di atas batas yang ditentukan dan penjualan tidak dilakukan di bawah batas tersebut. Namun, limit order belum tentu terisi jika tidak ada pihak lain yang cocok pada harga itu.",
    "points": 10
  },
  {
    "id": "US Stock-7",
    "product": "US Stock",
    "number": 7,
    "question": "Jelaskan perbedaan memasukkan market order berdasarkan jumlah lembar dan berdasarkan nominal dolar pada Saham AS Reku.",
    "answer": "Market order berdasarkan lembar memakai jumlah saham sebagai ukuran pesanan. Market order berdasarkan dolar memakai jumlah uang yang ingin dibelanjakan dan tersedia untuk pembelian. Keduanya dapat menghasilkan kepemilikan pecahan. CS perlu membantu pengguna membedakan “berapa lembar” dari “berapa dolar” agar nominal pesanan tidak keliru.",
    "points": 10
  },
  {
    "id": "US Stock-8",
    "product": "US Stock",
    "number": 8,
    "question": "Mengapa harga akhir market order dapat berbeda dari harga yang baru saja dilihat pengguna? Jelaskan faktor penyebab dan cara mengurangi risikonya.",
    "answer": "Harga di layar dapat merupakan harga transaksi terakhir, sedangkan harga yang tersedia bisa berubah sebelum order bertemu penjual atau pembeli. Perbedaan makin mungkin saat transaksi sepi, harga bergerak cepat, atau selisih harga beli dan jual melebar. Pengguna dapat memakai limit order jika batas harga lebih penting daripada kecepatan, serta memeriksa kembali sesi dan rincian order.",
    "points": 10
  },
  {
    "id": "US Stock-9",
    "product": "US Stock",
    "number": 9,
    "question": "Jabarkan empat sesi dalam fitur Trading 24 Jam Saham AS dan jelaskan arti “24 jam” yang benar bagi pengguna di Indonesia.",
    "answer": "Empat sesi tersebut adalah Overnight, Pre-Market, Regular, dan After-Hours. Sesi berjalan berurutan sehingga transaksi tersedia hampir terus-menerus pada hari kerja, secara umum dari Senin pagi sampai Sabtu pagi WIB. “24 jam” bukan berarti bursa selalu buka tujuh hari; akhir pekan dan hari libur perdagangan tetap berlaku, dan tidak semua saham selalu mendukung setiap sesi.",
    "points": 10
  },
  {
    "id": "US Stock-10",
    "product": "US Stock",
    "number": 10,
    "question": "Jelaskan pengaruh Daylight Saving Time di Amerika Serikat terhadap jadwal perdagangan Saham AS dalam WIB dan informasi apa yang sebaiknya disampaikan CS.",
    "answer": "Saat Daylight Saving Time berlaku, jadwal sesi dalam WIB bergeser sekitar satu jam lebih awal dibanding periode di luar DST. Karena tanggal penerapan dapat berubah dan ada hari libur bursa, CS sebaiknya tidak hanya mengandalkan hafalan jam, tetapi meminta pengguna melihat status sesi dan jadwal terbaru di aplikasi atau Pusat Informasi Reku.",
    "points": 10
  },
  {
    "id": "US Stock-11",
    "product": "US Stock",
    "number": 11,
    "question": "Apa yang terjadi ketika pengguna memasukkan order saat akhir pekan atau ketika sesi yang mendukung order tersebut belum dimulai? Jelaskan tanpa menjanjikan transaksi pasti berhasil.",
    "answer": "Order dapat diterima atau masuk antrean, tetapi baru diajukan atau diproses ketika sesi yang sesuai dibuka. Order tetap bergantung pada jenis order, dukungan saham, harga, dan ketersediaan lawan transaksi. Karena itu CS tidak boleh menjanjikan harga tertentu atau memastikan order pasti terisi.",
    "points": 10
  },
  {
    "id": "US Stock-12",
    "product": "US Stock",
    "number": 12,
    "question": "Jelaskan tiga alasan limit order belum terisi walaupun pengguna merasa sudah memasang harga yang tepat.",
    "answer": "Pertama, belum ada penjual atau pembeli yang cocok pada harga dan jumlah tersebut. Kedua, saham mungkin tidak mendukung sesi perdagangan yang dipilih. Ketiga, harga limit dapat berada di luar rentang yang dianggap wajar. Selain itu, antrean order lain dapat lebih dahulu mendapat pasangan. Limit order memberi batas harga, bukan jaminan eksekusi.",
    "points": 10
  },
  {
    "id": "US Stock-13",
    "product": "US Stock",
    "number": 13,
    "question": "Mengapa harga pada grafik bukan bukti bahwa limit order seharusnya sudah terisi? Jelaskan dengan bahasa yang mudah dipahami pengguna.",
    "answer": "Grafik umumnya menunjukkan harga referensi atau harga transaksi terakhir. Angka itu tidak membuktikan bahwa masih ada jumlah saham yang tersedia bagi order pengguna pada harga yang sama. Agar order terisi, harus ada pihak lain yang bersedia bertransaksi pada harga tersebut dan order pengguna harus mendapat pasangan.",
    "points": 10
  },
  {
    "id": "US Stock-14",
    "product": "US Stock",
    "number": 14,
    "question": "Jelaskan risiko melakukan transaksi pada sesi di luar jam reguler dan tindakan sederhana yang dapat dilakukan pengguna untuk lebih berhati-hati.",
    "answer": "Di luar jam reguler, jumlah pembeli dan penjual biasanya lebih sedikit. Akibatnya harga dapat bergerak lebih tajam, selisih harga beli dan jual lebih lebar, dan order lebih sulit terisi. Pengguna dapat mengecek harga beli-jual, memakai limit order, menghindari keputusan terburu-buru saat ada berita, dan memastikan aset mendukung sesi tersebut.",
    "points": 10
  },
  {
    "id": "US Stock-15",
    "product": "US Stock",
    "number": 15,
    "question": "Biaya transaksi Saham AS adalah 0,25% ditambah PPN 11% atas biaya tersebut. Tunjukkan mengapa angka efektifnya menjadi 0,278%, lalu hitung biaya untuk transaksi $250.",
    "answer": "PPN dihitung atas biaya transaksi, bukan langsung atas nilai saham. Biaya dasar = 0,25% × $250 = $0,625. PPN = 11% × $0,625 = $0,06875. Total biaya = $0,69375 atau sekitar $0,69–$0,70 sesuai pembulatan sistem. Secara efektif: 0,25% × 1,11 = 0,2775%, yang dibulatkan menjadi 0,278%.",
    "points": 10
  },
  {
    "id": "US Stock-16",
    "product": "US Stock",
    "number": 16,
    "question": "Jelaskan mengapa CS harus membedakan biaya transaksi, pajak dividen, dan perubahan kurs ketika menerangkan hasil investasi Saham AS.",
    "answer": "Biaya transaksi dikenakan saat beli atau jual. Pajak dividen dikenakan pada pendapatan dividen, dengan tarif yang dicantumkan Reku sebesar 15%. Perubahan kurs memengaruhi nilai saat USD dibandingkan atau dikonversi ke rupiah, tetapi bukan biaya transaksi. Memisahkan ketiganya mencegah pengguna menyimpulkan bahwa seluruh selisih saldo adalah biaya Reku.",
    "points": 10
  },
  {
    "id": "US Stock-17",
    "product": "US Stock",
    "number": 17,
    "question": "Jelaskan syarat umum agar pengguna berhak menerima dividen Saham AS di Reku, cara menghitungnya, dan mengapa dividen tidak boleh dijanjikan.",
    "answer": "Pengguna perlu memiliki posisi sesuai ketentuan tanggal ex-dividen; aturan Reku menyebut kepemilikan kontrak sehari sebelum tanggal ex-dividen. Dividen kotor dihitung dari jumlah saham atau pecahan saham dikali dividen per saham, lalu dipotong pajak 15%. Reku juga menyebut jumlah yang diterima minimal $0,01. Dividen tidak boleh dijanjikan karena perusahaan dapat mengubah atau tidak membagikannya.",
    "points": 10
  },
  {
    "id": "US Stock-18",
    "product": "US Stock",
    "number": 18,
    "question": "Hitung dividen bersih untuk kepemilikan 12,5 saham jika perusahaan membayar dividen $0,80 per saham dan pajak dividen 15%. Tunjukkan urutannya.",
    "answer": "Dividen kotor = 12,5 × $0,80 = $10,00. Pajak = 15% × $10,00 = $1,50. Dividen bersih = $10,00 − $1,50 = $8,50. Nilai ini berada di atas batas minimum penerimaan $0,01.",
    "points": 10
  },
  {
    "id": "US Stock-19",
    "product": "US Stock",
    "number": 19,
    "question": "Jelaskan dampak stock split terhadap jumlah saham, harga per saham, dan nilai total kepemilikan tepat setelah penyesuaian.",
    "answer": "Stock split menambah jumlah saham dan menurunkan harga per saham dengan perbandingan yang sama. Contoh split 2 banding 1: 3 saham menjadi 6 saham dan harga per saham secara teori menjadi setengah. Tepat setelah penyesuaian, nilai total kepemilikan secara teori tidak berubah hanya karena split; setelah perdagangan berjalan, nilai tetap dapat naik atau turun mengikuti pasar.",
    "points": 10
  },
  {
    "id": "US Stock-20",
    "product": "US Stock",
    "number": 20,
    "question": "Jelaskan dua sumber hasil investasi Saham AS dan dua risiko yang dapat membuat hasil dalam rupiah berbeda dari harapan pengguna.",
    "answer": "Dua sumber hasil adalah perubahan harga saham dan dividen jika perusahaan membagikannya. Hasil rupiah dapat berbeda karena harga saham bisa turun dan nilai tukar USD terhadap rupiah dapat berubah. Biaya transaksi dan pajak dividen juga mengurangi hasil bersih. Karena itu kenaikan harga saham dalam USD belum tentu menghasilkan kenaikan rupiah dengan persentase yang sama.",
    "points": 10
  },
  {
    "id": "US Stock-21",
    "product": "US Stock",
    "number": 21,
    "question": "Jabarkan cara menilai sebuah saham tanpa hanya mengikuti nama perusahaan yang sedang populer. Gunakan sedikitnya empat hal yang mudah dipahami.",
    "answer": "Pengguna dapat menilai: bagaimana perusahaan menghasilkan uang; apakah penjualan dan laba berkembang; apakah utangnya masih wajar; apakah bisnisnya memiliki pesaing dan prospek yang baik; apakah harga saham sudah terlalu mahal dibanding kinerjanya; serta risiko dari berita atau aturan baru. Kesimpulan harus disesuaikan dengan tujuan dan kemampuan menanggung kerugian, bukan popularitas semata.",
    "points": 10
  },
  {
    "id": "US Stock-22",
    "product": "US Stock",
    "number": 22,
    "question": "Jelaskan mengapa diversifikasi dapat mengurangi risiko tertentu tetapi tidak menjamin portofolio bebas rugi.",
    "answer": "Menyebar dana ke beberapa perusahaan, sektor, atau ETF mengurangi ketergantungan pada satu perusahaan. Jika satu aset bermasalah, dampaknya tidak sebesar bila seluruh dana berada di sana. Namun saat pasar secara luas turun, banyak aset dapat turun bersama. Diversifikasi mengelola konsentrasi risiko, bukan menghapus risiko investasi.",
    "points": 10
  },
  {
    "id": "US Stock-23",
    "product": "US Stock",
    "number": 23,
    "question": "Bandingkan strategi membeli sekaligus dengan membeli bertahap untuk Saham AS. Jelaskan manfaat dan keterbatasan masing-masing tanpa menyatakan salah satunya selalu lebih baik.",
    "answer": "Membeli sekaligus membuat seluruh dana segera ikut pergerakan pasar; ini menguntungkan bila harga naik setelah pembelian, tetapi dampak salah waktu juga lebih besar. Membeli bertahap menyebarkan waktu masuk dan mengurangi tekanan menebak satu harga terbaik, tetapi dapat tertinggal bila pasar terus naik dan tetap tidak menjamin untung. Pilihan bergantung pada tujuan, jangka waktu, dan kesiapan risiko.",
    "points": 10
  },
  {
    "id": "US Stock-24",
    "product": "US Stock",
    "number": 24,
    "question": "Seorang pengguna melihat kalkulator potensi keuntungan di halaman Reku. Jelaskan cara membaca hasilnya secara bertanggung jawab dan tiga hal yang tidak boleh disimpulkan dari simulasi tersebut.",
    "answer": "Kalkulator adalah ilustrasi berdasarkan angka dan periode yang dipilih. Hasilnya bukan janji keuntungan, bukan ramalan harga, dan bukan jaminan pola masa lalu akan berulang. Simulasi juga tidak otomatis menggambarkan seluruh pengaruh kondisi ekonomi, pasar, kurs, biaya, dan pajak. Pengguna tetap perlu menilai risiko dan kemampuan keuangannya.",
    "points": 10
  },
  {
    "id": "US Stock-25",
    "product": "US Stock",
    "number": 25,
    "question": "Jelaskan langkah penanganan CS ketika pengguna mengeluhkan saldo atau nilai portofolio Saham AS yang dianggap tidak sesuai, tanpa langsung menyimpulkan ada kesalahan sistem.",
    "answer": "CS perlu memverifikasi akun, meminta nama aset, waktu, order ID, nominal, dan tangkapan layar; lalu memeriksa status order, jumlah saham, harga eksekusi, biaya, dividen atau aksi korporasi, serta tampilan USD versus rupiah. Jelaskan temuan dengan perhitungan yang dapat diikuti. Jika data tetap tidak cocok, dokumentasikan bukti dan eskalasi ke tim terkait tanpa menjanjikan hasil sebelum pemeriksaan selesai.",
    "points": 10
  },
  {
    "id": "US Stock-26",
    "product": "US Stock",
    "number": 26,
    "question": "Studi Kasus 1 — Raka memasang limit buy saham XYZ di $50 pada sesi Overnight. Grafik sempat menunjukkan $49,90, tetapi hingga sesi berganti order belum terisi. Jelaskan kemungkinan penyebabnya dan respons CS yang tepat.",
    "answer": "Harga grafik adalah referensi atau transaksi terakhir, bukan bukti ada penjual yang tersedia untuk order Raka. Kemungkinan tidak ada pasangan pada $50 untuk jumlahnya, antrean lain lebih dahulu, saham kurang aktif di sesi Overnight, atau ada batas harga/ketersediaan sesi. CS harus memeriksa status dan rincian order, menjelaskan perbedaan grafik dengan harga yang benar-benar tersedia, serta mengingatkan bahwa limit order membatasi harga tetapi tidak menjamin terisi. Jangan menyatakan sistem gagal sebelum ada bukti.",
    "points": 10
  },
  {
    "id": "US Stock-27",
    "product": "US Stock",
    "number": 27,
    "question": "Studi Kasus 2 — Maya membeli saham senilai $1.000 saat kurs Rp16.000/USD. Nilai saham naik 8%, lalu ia menjual saat kurs Rp15.200/USD. Gunakan biaya 0,278% untuk beli dan jual. Hitung perkiraan hasil bersih dalam rupiah dan jelaskan mengapa kenaikan 8% tidak menjadi keuntungan rupiah 8%.",
    "answer": "Biaya beli = $1.000 × 0,278% = $2,78. Total modal = $1.002,78 × Rp16.000 = Rp16.044.480. Nilai jual kotor = $1.080. Biaya jual = $1.080 × 0,278% = $3,0024. Hasil jual bersih = $1.076,9976 × Rp15.200 = sekitar Rp16.370.364. Perkiraan laba bersih = Rp16.370.364 − Rp16.044.480 = Rp325.884, sekitar 2,03% dari modal. Kenaikan saham 8% terpotong biaya dan pelemahan USD terhadap rupiah.",
    "points": 10
  },
  {
    "id": "US Stock-28",
    "product": "US Stock",
    "number": 28,
    "question": "Studi Kasus 3 — Lita memiliki 7,5 saham pada hari yang memenuhi syarat dividen. Dividen yang diumumkan $0,12 per saham. Hitung dividen kotor, pajak 15%, dan dividen bersih. Jelaskan pula apakah jumlah tersebut memenuhi batas minimum $0,01.",
    "answer": "Dividen kotor = 7,5 × $0,12 = $0,90. Pajak = 15% × $0,90 = $0,135. Dividen bersih = $0,90 − $0,135 = $0,765, dengan tampilan akhir mengikuti pembulatan sistem. Nilai bersih tersebut lebih besar dari $0,01 sehingga memenuhi batas minimum penerimaan. CS juga perlu memastikan posisi Lita benar-benar tercatat sesuai ketentuan tanggal ex-dividen.",
    "points": 10
  },
  {
    "id": "US Stock-29",
    "product": "US Stock",
    "number": 29,
    "question": "Studi Kasus 4 — Pengguna menerima telepon dari orang yang mengaku sebagai staf Reku. Penelpon mengetahui nama dan nilai portofolionya, lalu meminta OTP agar “penjualan saham yang tertahan” dapat dibatalkan. Pengguna sudah memberikan OTP tetapi belum melihat transaksi baru. Uraikan tindakan CS secara berurutan.",
    "answer": "Ini harus diperlakukan sebagai dugaan pengambilalihan akun. CS perlu: memverifikasi identitas melalui prosedur resmi; segera membantu mengamankan atau membatasi akun sesuai kewenangan; mengingatkan pengguna menghentikan komunikasi dan tidak memberikan OTP, PIN, atau kata sandi lagi; meminta pengguna mengganti kredensial dan memeriksa perangkat serta riwayat login/order; mencatat waktu, nomor penelpon, bukti, dan OTP yang terungkap tanpa meminta isi OTP baru; lalu mengeskalasi ke tim Security/Fraud. CS tidak boleh menunggu munculnya kerugian karena OTP sudah bocor dan tidak boleh menjanjikan pengembalian dana sebelum investigasi.",
    "points": 10
  },
  {
    "id": "US Stock-30",
    "product": "US Stock",
    "number": 30,
    "question": "Studi Kasus 5 — Dimas menaruh 80% dana pada satu saham teknologi karena harganya naik tajam sebulan terakhir. Setelah laporan perusahaan mengecewakan, saham turun 25% pada sesi di luar jam reguler. Dimas ingin langsung menjual semuanya dengan market order. Analisis risiko portofolionya dan susun jawaban CS yang informatif tanpa memberi keputusan investasi pribadi.",
    "answer": "Portofolio Dimas sangat terkonsentrasi sehingga berita satu perusahaan berdampak besar. Penurunan di luar jam reguler juga dapat disertai transaksi lebih sepi, harga lebih mudah berubah, dan selisih beli-jual lebih lebar; market order mengutamakan eksekusi, bukan harga tertentu. CS dapat menjelaskan kondisi itu, perbedaan market dan limit order, meminta Dimas memeriksa estimasi serta sesi sebelum konfirmasi, dan mengingatkan manfaat penyebaran aset sesuai profil risiko. Keputusan jual atau tahan tetap milik Dimas; CS tidak boleh menjamin harga akan pulih atau menyuruhnya memilih tindakan tertentu.",
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
