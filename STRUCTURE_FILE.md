# FILE STRUCTURE/ARCHITECTURE

Flow Arsitektur atau Code :
Models -> Repositories -> Services -> Routes -> Controller

**Models**
Folder models untuk pembuatan collection atau skema collection mongodb

**Repositories**
Folder Repositories untuk pembuatan fungsi dalam melakukan query ke database
contoh untuk mencari berdasarkan email
:point_down:
``async function findByEmail(data) {
    return await models.findOne(data)
}``

**Services**
Folder Services bertujuan untuk melakukan suatu aksi, seperti user akan melakukan apa, seperti melakukan login, registrasi atau mencari user

**Routes**
Routes untuk definisi endpoint api

**Controller**
Folder Controller untuk logika bisnis aplikasi
