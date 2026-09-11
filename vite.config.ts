import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default defineConfig({
  root,
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        signup: resolve(root, 'signup.html'),
        chats: resolve(root, 'chats.html'),
        profile: resolve(root, 'profile.html'),
        editProfile: resolve(root, 'edit-profile.html'),
        editPassword: resolve(root, 'edit-password.html'),
        error404: resolve(root, '404.html'),
        error500: resolve(root, '500.html'),
      },
    },
  },
  server: {
    port: 3000,
  },
});
