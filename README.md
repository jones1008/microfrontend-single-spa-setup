# microfrontend with vite and vue

## development setup

Start the wrapper application "single-spa" in the current directory: 
```
npm start
```

Start the vue 3 application (vite) in `vite-app`:
```
cd vite-app
npm run dev
```

Start the second vue 3 application (vite) in `vite-navbar`:
```
cd vite-navbar
npm run dev
```

Start the vue 2 application (webpack) in `vue-sidebar`:
```
cd vue-sidebar
npm run serve
```