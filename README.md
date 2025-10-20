# App de viajes - Explora

## Configuración

### Requisitos
- Node.js 
- npm 

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo 
npm run dev
# Se abrirá en http://localhost:5173

# Compilar para producción
npm run build

# Previsualizar build
npm run preview
```

---

## Arquitectura

```
app-shell/
│
├── public/
│   ├── icons/             # Iconos PWA
│   ├── manifest.json      # Configuración PWA
│   └── service-worker.js  # Cache offline
│
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes React
│   │   ├── DestinoHome.jsx
│   │   ├── DetallesDestino.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Planificador.jsx
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos globales
│   └── main.jsx        # Punto de entrada
│
│── index.html        # Punto de entrada HTML
└── vite.config.js    # Configuración Vite
```

### Componentes principales

- **App.jsx**: Componente raíz de la aplicación
- **Header.jsx**: Cabecera de la aplicación
- **DestinoHome.jsx**: Grid de destinos turísticos
- **DetallesDestino.jsx**: Vista detallada de cada destino
- **Planificador.jsx**: Formulario para crear itinerarios
- **Footer.jsx**: Pie de página

### Tecnologías

- **React**: Biblioteca UI
- **Vite**: Build tool y dev server
- **CSS Modules**: Estilos con scope local
- **PWA**: Soporte offline con Service Worker

---

## Cómo probar sin conexión

### Opción 1: Build + Python Server

```bash
# 1. Compilar
npm run build

# 2. Servir la carpeta dist
cd dist
python -m http.server 8000

# 3. Abrir http://localhost:8000
```

### Opción 2: Build + serve (Node.js)

```bash
# 1. Instalar serve
npm install -g serve

# 2. Compilar
npm run build

# 3. Servir
serve -s dist -p 8000
```

### Opción 3: Modo desarrollo offline

```bash
# Si ya tienes node_modules instalado
npm run dev
```
