# To Do

En utilisant le framework Angular 6 il faut afficher une liste d'articles provenant d'un flux RSS dont l'url sera saisie par l'utilisateur (champ de saisie + bouton de validation),
pour cela on utilisera un convertisseur rss vers json comme celui-ci: https://api.rss2json.com/v1/api.json?rss_url= ce qui pour le rss du blog angular donnera https://api.rss2json.com/v1/api.json?rss_url=https://blog.angular.io/feed

Le graphisme est libre, les seules contraintes sont:

- [x] Afficher le titre de l'article
- [x] Afficher l'auteur de l'article
- [x] Afficher la date de l'article
- [x] Afficher l'image de l'article (si il existe)
- [x] La ligne doit être cliquable et doit envoyer vers la page de l'article



# ExoRm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
