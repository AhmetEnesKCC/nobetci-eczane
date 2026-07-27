Bu standart şablon README'den kurtulup projene yakışır, havalı ve profesyonel bir README.md hazırlayalım.

Uygulamanın şubat ayında geliştirildiğini, **Next.js**, **shadcn/ui** ve **CollectAPI** kullanılarak Türkiye'deki nöbetçi eczaneleri haritalandırdığını biliyoruz. Görseldeki şık tasarımı da göz önünde bulundurarak aşağıdaki Markdown şablonunu doğrudan kopyalayabilirsin:

```markdown
<div align="center">
  <h1 align="center">Nöbetçi Eczane</h1>
  <p align="center">
    <b>Türkiye genelindeki şehir ve ilçelerde güncel nöbetçi eczanelere anında ulaşmanızı sağlayan modern web uygulaması.</b>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
  </p>
</div>

<br>

> **eczanesizde.com**, kullanıcıların seçtikleri il ve ilçelerdeki nöbetçi eczaneleri en güncel verilerle listeleyen, konum tabanlı mesafe hesaplama ve yol tarifi özellikleri sunan modern bir arayüz deneyimidir.

---

## ✨ Özellikler

* **Canlı Veri Akışı:** Güncel ve anlık nöbetçi eczane listesi.
* **İl ve İlçe Filtreleme:** Türkiye'nin tüm şehirleri ve ilçeleri için hızlı arama ve seçim mekanizması.
* **Mesafe Hesaplama:** Kullanıcının konumuna göre eczanelerin uzaklığını kilometre cinsinden görüntüleme.
* **Hızlı İletişim & Yol Tarifi:** Tek tıkla eczaneyi arama ve harita üzerinden yol tarifi alabilme.
* **Modern Arayüz:** Koyu tema (Dark Mode) odaklı, `shadcn/ui` ve Tailwind CSS ile güçlendirilmiş şık tasarım.

---

## 🛠️ Kullanılan Teknolojiler

Bu proje, modern web geliştirme ekosistemindeki güncel araçlarla inşa edilmiştir:

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Dil:** TypeScript
* **Stil:** Tailwind CSS
* **Bileşen Kütüphanesi:** shadcn/ui
* **Veri Kaynağı:** CollectAPI

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Depoyu klonlayın:
   ```bash
   git clone [https://github.com/KULLANICI_ADINIZ/eczanesizde.git](https://github.com/KULLANICI_ADINIZ/eczanesizde.git)
   cd eczanesizde

```

2. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
# veya
pnpm install

```


3. Ortam değişkenlerini (`.env.local`) ayarlayın:
Proje kök dizininde bir `.env.local` dosyası oluşturun ve gerekli API anahtarınızı ekleyin (Örn: CollectAPI anahtarı).
```env
NEXT_PUBLIC_API_KEY=senin_api_anahtarin

```


4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev

```


5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

---

## 📄 Lisans

Bu proje MIT lisansı altında korunmaktadır. Detaylı bilgi için `LICENSE` dosyasına göz atabilirsiniz.

