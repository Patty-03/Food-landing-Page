document.getElementById('pdf-download').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './media/Hola.pdf'; // Reemplaza con la ruta de tu archivo PDF
    link.download = 'Hola.pdf'; // Nombre del archivo que se descargará
    link.click();
});