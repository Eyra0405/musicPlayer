<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reproductor de Música Coqueto</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f4e1;
            color: #4f4f4f;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        h1, h2 {
            color: #4a6e42; /* Verde suave */
        }
        .features, .technologies, .instructions {
            background-color: #dfc7b7; /* Marrón suave */
            padding: 20px;
            margin: 10px;
            border-radius: 8px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        }
        .feature, .technology, .instruction {
            font-size: 18px;
            margin-bottom: 10px;
        }
        .feature i, .technology i, .instruction i {
            margin-right: 8px;
        }
        .highlight {
            color: #8dbf64; /* Verde pastel */
        }
        .button {
            background-color: #8dbf64;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 18px;
            display: inline-block;
            margin-top: 10px;
        }
        .button:hover {
            background-color: #7d9f58;
        }
    </style>
</head>
<body>

<h1>🎶 **Reproductor de Música Coqueto** 🎶</h1>

 <p>¡Bienvenido a tu nuevo reproductor de música! 🎧✨ Un proyecto donde puedes disfrutar de tus canciones favoritas, explorar una lista de reproducción interactiva y personalizar tu experiencia con funciones como la reproducción aleatoria y la opción de repetir canciones. Todo en una interfaz simple y encantadora.</p>

 <div class="features">
        <h2>🚀 **Características:**</h2>
        <div class="feature"><i>🎧</i><strong>Reproducción de Música:</strong> Escucha tus canciones favoritas desde tu navegador.</div>
        <div class="feature"><i>🎶</i><strong>Lista de Canciones Interactiva:</strong> Selecciona tu canción de la lista con un solo clic.</div>
        <div class="feature"><i>🔀</i><strong>Modo Aleatorio:</strong> Disfruta de tus canciones en orden aleatorio.</div>
        <div class="feature"><i>🔁</i><strong>Modo Repetir:</strong> Reproduce la misma canción una y otra vez, o toda la lista de canciones.</div>
        <div class="feature"><i>⏳</i><strong>Progreso de Reproducción:</strong> Mira cómo avanza tu canción con una barra de progreso dinámica.</div>
        <div class="feature"><i>💚</i><strong>Diseño Coqueto:</strong> Interfaz cuidada y elegante con colores en tonos marrones y verdes que te encantarán.</div>
    </div>

 <div class="technologies">
        <h2>🌱 **Tecnologías Usadas:**</h2>
        <div class="technology"><i>🌐</i><strong>HTML5:</strong> Para la estructura del sitio.</div>
        <div class="technology"><i>🎨</i><strong>CSS3:</strong> Para un diseño visualmente atractivo y moderno.</div>
        <div class="technology"><i>💻</i><strong>JavaScript:</strong> Para la interacción y control del reproductor.</div>
        <div class="technology"><i>📊</i><strong>MongoDB:</strong> Para almacenar y gestionar la lista de canciones.</div>
        <div class="technology"><i>🐍</i><strong>Python (Flask):</strong> Para el backend, sirviendo las canciones a través de una API RESTful.</div>
    </div>

<div class="instructions">
        <h2>🌸 **Cómo Usarlo:**</h2>
        <div class="instruction"><i>1️⃣</i><strong>Clona el Repositorio:</strong> <br><code>git clone https://github.com/tuusuario/reproductor-musica.git</code></div>
        <div class="instruction"><i>2️⃣</i><strong>Instala Dependencias:</strong> Asegúrate de tener MongoDB corriendo y las dependencias necesarias instaladas.</div>
        <div class="instruction"><i>3️⃣</i><strong>Corre el Backend (API Flask):</strong> Desde la terminal: <br><code>python run.py</code></div>
        <div class="instruction"><i>4️⃣</i><strong>Abre el Proyecto en tu Navegador:</strong> Visita <a href="http://localhost:5000">http://localhost:5000</a> y empieza a disfrutar de tu música.</div>
    </div>

 <div>
        <a href="https://github.com/tuusuario/reproductor-musica" class="button">Ver Repositorio en GitHub</a>
    </div>

<div class="footer">
        <h2>📚 **Licencia:**</h2>
        <p>Este proyecto está licenciado bajo la Licencia MIT - ver el archivo <a href="LICENSE">LICENSE</a> para más detalles.</p>
    </div>

</body>
</html>

