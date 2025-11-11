from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import pandas as pd
import os

app = FastAPI(title="Mortalidad Colombia 2019")

# Habilitar CORS para permitir acceso desde Angular
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rutas de los datos
DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data")
FILE_MORTALIDAD = "Anexo1.NoFetal2019_CE_15-03-23.xlsx"
FILE_DIVIPOLA = "Divipola_CE_.xlsx"
FILE_CODIGOS = "Anexo2.CodigosDeMuerte_CE_15-03-23.xlsx"

# Carga única de datos al iniciar el servidor
print("Cargando archivos Excel...")
df_mortalidad = pd.read_excel(os.path.join(DATA_PATH, FILE_MORTALIDAD), engine='openpyxl')
df_divipola = pd.read_excel(os.path.join(DATA_PATH, FILE_DIVIPOLA), engine='openpyxl')
df_codigos = pd.read_excel(os.path.join(DATA_PATH, FILE_CODIGOS), engine='openpyxl')
print("Archivos cargados correctamente.")

@app.get("/")
def read_root():
    return {"message": "API de Mortalidad en Colombia - 2019"}

@app.get("/api/muertes/departamento")
def muertes_departamento():
    print("Procesando /api/muertes/departamento")
    df = df_mortalidad.merge(df_divipola[["COD_DEPARTAMENTO", "DEPARTAMENTO"]],
                             on="COD_DEPARTAMENTO", how="left")
    resultado = (
        df.groupby("DEPARTAMENTO")
        .size()
        .reset_index(name="muertes")
        .to_dict(orient="records")
    )
    return resultado

@app.get("/api/muertes/causas")
def causas_principales():
    print("Procesando /api/muertes/causas")
    df = df_mortalidad.merge(
        df_codigos[["Código de la CIE-10 cuatro caracteres",
                    "Descripcion  de códigos mortalidad a cuatro caracteres"]],
        left_on="COD_MUERTE",
        right_on="Código de la CIE-10 cuatro caracteres",
        how="left"
    )
    resultado = (
        df.groupby("Descripcion  de códigos mortalidad a cuatro caracteres")
        .size()
        .reset_index(name="muertes")
        .sort_values(by="muertes", ascending=False)
        .head(10)
        .to_dict(orient="records")
    )
    return resultado

@app.get("/api/muertes/municipio")
def muertes_municipio():
    print("Procesando /api/muertes/municipio")
    df = df_mortalidad.merge(df_divipola[["COD_MUNICIPIO", "MUNICIPIO"]],
                             on="COD_MUNICIPIO", how="left")
    resultado = (
        df.groupby("MUNICIPIO")
        .size()
        .reset_index(name="muertes")
        .sort_values(by="muertes", ascending=False)
        .to_dict(orient="records")
    )
    return resultado

@app.get("/api/muertes/mes")
def muertes_por_mes():
    print("Procesando /api/muertes/mes")
    resultado = (
        df_mortalidad.groupby("MES")
        .size()
        .reset_index(name="muertes")
        .sort_values(by="MES")
        .to_dict(orient="records")
    )
    return resultado

@app.get("/api/muertes/ciudades-violentas")
def ciudades_violentas():
    print("Procesando /api/muertes/ciudades-violentas")
    df = df_mortalidad.merge(df_divipola[["COD_MUNICIPIO", "MUNICIPIO"]],
                             on="COD_MUNICIPIO", how="left")
    resultado = (
        df.groupby("MUNICIPIO")
        .size()
        .reset_index(name="muertes")
        .sort_values(by="muertes", ascending=False)
        .head(10)
        .to_dict(orient="records")
    )
    return resultado

@app.get("/api/muertes/ciudades-menor-mortalidad")
def ciudades_menor_mortalidad():
    print("Procesando /api/muertes/ciudades-menor-mortalidad")
    df = df_mortalidad.merge(df_divipola[["COD_MUNICIPIO", "MUNICIPIO"]],
                             on="COD_MUNICIPIO", how="left")
    resultado = (
        df.groupby("MUNICIPIO")
        .size()
        .reset_index(name="muertes")
        .sort_values(by="muertes", ascending=True)
        .head(10)
        .to_dict(orient="records")
    )
    return resultado

@app.get("/api/muertes/sexo-departamento")
def muertes_sexo_departamento():
    print("Procesando /api/muertes/sexo-departamento")
    df = df_mortalidad.merge(df_divipola[["COD_DEPARTAMENTO", "DEPARTAMENTO"]],
                             on="COD_DEPARTAMENTO", how="left")
    resultado = (
        df.groupby(["DEPARTAMENTO", "SEXO"])
        .size()
        .reset_index(name="muertes")
        .to_dict(orient="records")
    )
    return resultado

@app.get("/api/muertes/edad")
def muertes_por_edad():
    print("Procesando /api/muertes/edad")
    resultado = (
        df_mortalidad.groupby("GRUPO_EDAD1")
        .size()
        .reset_index(name="muertes")
        .sort_values(by="GRUPO_EDAD1")
        .to_dict(orient="records")
    )
    return resultado