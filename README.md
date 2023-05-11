# Club Café : initialisation

Site pour ajouter et s'inscire à des évènements organisés dans un café. 

Cloner le projet sur votre machine : git clone https://gitlab.com/labege_carbonne/labege-5/club_cafe_florent.git

## Backend (Symfony et MySQL/PhpMyAdmin)

Installer Symfony si ce n'est pas fait : https://symfony.com/doc/current/setup.html
Dans le terminal, aller dans le dossier symfony : cd club_cafe/symfony
Ouvrir le dossier dans l'IDE et modifier le .env avec vos informations de base de données
Lancer le serveur : symfony server:start

## Front (React et Bootstrap)

Installer npm, React et Bootstrap : 
- npm install -g npm
- https://symfony.com/doc/current/frontend/encore/reactjs.html
- npm i bootstrap
- Changer l'adresse localhost dans le fichier config.json

Dans le terminal, aller dans le dossier react : cd club_cafe/react
Lancer la commande : npm run dev, aller à l'adresse indiquée et utiliser les boutons pour accéder aux formulaires
