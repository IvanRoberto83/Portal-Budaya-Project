# 🚀 Panduan Setup Proyek Website Drupal

## 🛠️ Tahap 1: Setup Awal (Pertama Kali aja)
Lakukan langkah-langkah ini sekali saja di awal untuk menyiapkan environment di device masing-masing.

### Step 1: Download & Unzip Master File
1. Download ini dulu: https://drive.google.com/file/d/155BR3fSlxYDWDZiSllyNARhTqyMYxSFv/view?usp=drive_link
2. Ekstrak (unzip), trus taroh folder `PortBudaya` ke dalam folder `htdocs` di XAMPP.

## 💻 Tahap 2: Kalo Udah Pernah Setup Awal
Lakukan langkah-langkah ini kalo mau mengedit project. Biar semuanya sinkron (ga conflict)

### Step 1: Import Database Awal
1. Clone Repository ini di folder bebas.
2. Buka XAMPP Control Panel dan jalankan **Apache** & **MySQL**.
3. Buka browser dan masuk ke **phpMyAdmin** (`http://localhost/phpmyadmin`).
4. Buat database baru dengan nama `drupal_db`.
5. Klik database tersebut, pilih tab **Import**, pilih file `drupal_db.sql` terbaru yg udah di clone dari Repository ini (biar datanya sinkron).

### Step 2: Timpa Folder
1. Buka folder `themes/` yg udah di clone dari Repository ini, di dalemnya harusnya ada folder `custom`.
2. Pindahkan folder `custom` itu ke dalam folder `XAMPP\htdocs\PortBudaya\web\core\themes` (timpa saja)
3. Yang folder `modules/` juga sama, di dalemnya harusnya ada folder `custom`.
4. Pindahkan folder `custom` itu ke dalam folder `XAMPP\htdocs\PortBudaya\web\core\modules` (timpa saja)

### Step 3: Silahkan Run dan Edit
1. Web bisa diakses di `http://localhost/PortBudaya/web/` (pastikan xampp sudah run)

## 📌 Komponen Utama Proyek
1. **`themes/`** 🎨 : Berisi file desain, CSS, layout, dan tampilan website.
2. **`modules/`** 🧩 : Berisi modul kustom atau modul tambahan yang diinstal.
3. **`database/` (File `.sql`)** 🗄️ : Berisi struktur halaman, data tabel, menu, dan konten website.
