from flask import Flask, jsonify, send_from_directory
from pymongo import MongoClient
import os
import webbrowser
from flask_cors import CORS

app = Flask(__name__, static_folder= 'none')  # Cambia 'static' por 'canciones'
CORS(app)

# Conexión a MongoDB
client = MongoClient("mongodb://localhost:27017")
db = client["sopiquette"]
collection = db["canciones"]

# Ruta personalizada para las canciones
@app.route('/canciones/<path:filename>')
def serve_song(filename):
    return send_from_directory('canciones', filename)

@app.route('/api/canciones', methods=['GET'])
def obtener_canciones():
    canciones = collection.find()
    canciones_lista = []
    for cancion in canciones:
        canciones_lista.append({
            "titulo": cancion["titulo"],
            "archivo": cancion.get("archivo", ""),
            "artista": cancion["artista"],

        })
    return jsonify(canciones_lista)

if __name__ == '__main__':
    app.run(debug=True)
    webbrowser.open("file:///C:/Users/tenico/Desktop/spotifycoqueto/frontend/index.html")
