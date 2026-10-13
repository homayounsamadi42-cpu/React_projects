import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // ۱. وارد کردن افزونه

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ۲. اضافه کردن به لیست افزونه‌ها
  ],
})
