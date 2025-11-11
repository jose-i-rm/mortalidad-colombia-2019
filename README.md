# Mortalidad Colombia 2019

## 📌 Introducción del proyecto

Esta aplicación interactiva permite visualizar, analizar y comprender los patrones de mortalidad registrados en Colombia durante el año 2019. Integra un backend en FastAPI y un frontend en Angular para ofrecer gráficos dinámicos y consultas eficientes sobre causas de muerte, distribución por sexo y departamento.

---

## 🎯 Objetivo

El propósito principal es facilitar el análisis estadístico de la mortalidad en Colombia, permitiendo identificar las principales causas de muerte, diferencias por género y distribución geográfica. Está orientado a apoyar procesos de gestión institucional, investigación y toma de decisiones en salud pública.

---

## 📁 Estructura del proyecto

mortalidad-colombia-2019/ 
├── backend/ # API REST en FastAPI 
│ ├── main.py # Punto de entrada del backend 
│ ├── routers/ # Endpoints organizados por funcionalidad 
│ ├── models/ # Estructura de datos 
│ └── requirements.txt # Dependencias del backend 
├── frontend/ # Aplicación Angular 
│ ├── src/app/components # Componentes gráficos 
│ └── package.json # Dependencias del frontend 
├── data/ # Archivos fuente y transformados 
├── .gitignore # Exclusión de archivos en Git 
├── README.md # Documentación del proyecto 
└── LICENSE # Licencia de uso 


---

## 📦 Requisitos

### Backend (FastAPI)

- Python 3.11+
- FastAPI 0.110.0
- Uvicorn 0.29.0
- Pandas 2.2.2
- SQLAlchemy 2.0.29
- Pydantic 2.6.4
- Openpyxl 3.1.2

Instalación:
```bash
pip install -r requirements.txt

Frontend (Angular)
Node.js 18+

Angular CLI 17+

ng2-charts

Chart.js

Instalación:

npm install

🚀 Despliegue en Render
Backend
Crear nuevo servicio web en Render.

Conectar el repositorio GitHub.

Configurar:

Runtime: Python 3.11

Start command: uvicorn backend.main:app --host 0.0.0.0 --port 10000

Build command: pip install -r requirements.txt

Frontend
Crear nuevo servicio estático en Render.

Conectar el repositorio GitHub.

Configurar:

Build command: npm run build

Publish directory: dist/mortalidad-frontend

🛠 Software utilizado
Python (FastAPI, Pandas, SQLAlchemy)

Angular (ng2-charts, Chart.js)

Render (Despliegue en la nube)

Git & GitHub (Control de versiones)

VS Code (Entorno de desarrollo)

Instalación Local

# Clonar el repositorio
git clone https://github.com/josepena/mortalidad-colombia-2019.git
cd mortalidad-colombia-2019

# Backend
cd backend
python -m venv venv
source venv/bin/activate  # o venv\Scripts\activate en Windows
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend
cd ../frontend
npm install
ng serve

📊 Visualizaciones y hallazgos
1. Muertes por sexo y departamento

Este gráfico muestra la distribución de muertes por género en cada departamento. Se observan diferencias significativas en Antioquia, Bogotá y Valle del Cauca.

2. Principales causas de muerte

Las causas más frecuentes incluyen infarto agudo del miocardio, enfermedades pulmonares obstructivas y tumores malignos. Este gráfico permite identificar prioridades en salud pública.

3. Distribución total por departamento

Visualiza el total de muertes por departamento, útil para análisis geográfico y planificación territorial.
