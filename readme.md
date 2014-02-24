## Historique des modifications sur le site :

* Les sources contiennent le template Awaaz, mais seul le fichier index.html est utilisé par notre application, les autres fichiers html à la racine de l'application ne sont que des exemples.
* Les fichiers du [http://docs.angularjs.org/tutorial](tutorial de AngularJS)


## Structure de l'application

* /partials : les templates HTML qu'AngularJS utilise
* /phones : fichiers provenant du tutorial - aucune utilité dans le projet
* /vieassociative : tous les fichiers de données ( les json ) codés en dur y sont stockés. Le dossier sera renommé plus tard ...
* /js : les fichiers propres à notre application. Ce dossier contient les fichiers importants d'AngularJS et du site en général
* /images : les images par défaut du template
* /img : les images propre à FDLM
* /lib : les libraries JS


## Gruntification

* /app : application
* /app/bower_components : dépendances
* GruntFiles.js : fichier de conf de grunt

## Installation

* Need nodejs
* npm install
* bower install

## Commandes

* grunt serve : pour l'instant l'instance de dev
* grunt serve:dist : pour lancer l'instance de prod
* grunt ghpages : pour build puis pushé dist sur gh-pages




