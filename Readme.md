# 🌓 Dark Mode Toggle

Aplikasi toggle dark mode yang elegan dan responsif dengan gradient backgrounds yang cantik!

## 🎨 Fitur

- **Toggle Dark/Light Mode** - Switch mulus antara tema gelap dan terang
- **Gradient Backgrounds** - Background yang indah untuk setiap mode
- **Smooth Animations** - Transisi yang halus dan menyenangkan
- **Glassmorphism Design** - UI modern dengan efek frosted glass
- **Emoji Indicators** - Icon ☀️ untuk light mode dan 🌙 untuk dark mode
- **Fully Responsive** - Bekerja sempurna di semua ukuran layar

## 🚀 Cara Menggunakan

1. **Buka file `index.html`** di browser Anda
2. **Klik toggle switch** untuk beralih antara dark dan light mode
3. Background akan berubah dengan smooth animation

## 🛠️ Struktur File

```
├── index.html    # File HTML utama
├── style.css     # Styling dan desain
├── app.js        # JavaScript logic
└── Readme.md     # File dokumentasi ini
```

## 📝 Detail Implementasi

### HTML (`index.html`)
- Container dengan struktur semantic
- Input checkbox tersembunyi untuk kontrol
- Label yang berfungsi sebagai visual toggle

### CSS (`style.css`)
- **Light Mode Gradient**: Ungu ke Pink (`#667eea` → `#764ba2` → `#f093fb`)
- **Dark Mode Gradient**: Navy blue ke Midnight (`#0f3460` → `#1a1a2e` → `#16213e`)
- Glassmorphism effect dengan `backdrop-filter: blur(10px)`
- Smooth transitions dengan `cubic-bezier(0.4, 0, 0.2, 1)`
- Hover effects dan active states

### JavaScript (`app.js`)
- `applyTheme()` function untuk manage perubahan tema
- Event listener di checkbox untuk menangkap perubahan
- Menggunakan CSS custom properties untuk dynamic theming

## 🎯 CSS Custom Properties

```css
--primary-color       /* Background utama */
--primary-label       /* Text color */
--secondary-label     /* Secondary background */
--white-ball          /* Toggle ball warna */
--black-ball          /* Toggle ball warna lain */
```

## 🎮 Interaksi

| Aksi | Hasil |
|------|-------|
| **Hover** | Toggle naik sedikit dengan shadow lebih dalam |
| **Click/Tap** | Toggle ball membesar saat ditekan |
| **Change** | Tema berubah dengan smooth gradient animation |

## 📱 Browser Support

- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- Mobile browsers ✅

## 🔧 Customization

### Ubah Warna Light Mode
Edit di `app.js` bagian `applyTheme()`:
```javascript
root.style.setProperty('--primary-color', '#fff');
body.style.background = 'linear-gradient(135deg, #667eea 0%, ...)';
```

### Ubah Warna Dark Mode
```javascript
root.style.setProperty('--primary-color', '#1a1a2e');
body.style.background = 'linear-gradient(135deg, #0f3460 0%, ...)';
```

### Ubah Durasi Animasi
Edit `transition` property di CSS (default: `0.6s`):
```css
label {
    transition: all 0.8s ease-in-out; /* Lebih lambat */
}
```

## 🐛 Fixed Issues

- ✅ Logic toggle diperbaiki dari `click` menjadi `change` event
- ✅ Background gradient ditambahkan untuk visual yang lebih menarik
- ✅ CSS custom properties diupdate saat toggle
- ✅ Timing sinkron antara JS dan CSS transitions

## 💡 Tips

- Toggle switch responsif dan bisa diklik di area manapun
- Emojis (☀️/🌙) memberikan visual feedback yang jelas
- Glassmorphism container membuat toggle menonjol dari background

---

**Made with ❤️** - Feel free to customize sesuai kebutuhan Anda!