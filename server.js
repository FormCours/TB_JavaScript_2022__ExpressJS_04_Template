const express = require('express');

// Variable d'env
const PORT = 8080;

// Création du server web
const app = express();

// Configuration du moteur de vue
// - Quel moteur utiliser (celui doit etre installé)
app.set('view engine', 'ejs');
// - Configuration du répertoire où seront les vues
app.set('views', 'views');

// Routing
app.get('/', (req, res) => {
    const now = new Date().toLocaleTimeString();
    const message = "Hello World";

    res.render('home/index', { now, message });
});

app.get('/about', (req, res) => {
    const data = {
        lead: { firstname: 'Della', lastname: 'Duck' },
        devs: [
            { firstname: 'Zaza', lastname: 'Vanderquack' },
            { firstname: 'Balthazar ', lastname: 'Picsou' },
            { firstname: 'Riri', lastname: 'Duck' },
            { firstname: 'Fifi', lastname: 'Duck' },
            { firstname: 'Loulou', lastname: 'Duck' },
            { firstname: 'Gontran', lastname: 'Bonheur' },
            { firstname: 'Archiblad', lastname: 'Gripsou' },
            { firstname: 'Flagada', lastname: 'Jones' },
        ]
    }

    res.render('home/about', data);
});

// Demarrage du server
app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}`);
})