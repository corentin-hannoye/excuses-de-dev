<a name="readme-top"></a>
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br /> 
<div align="center">
  <h3 align="center">Les excuses de dev</h3>

  <p align="center">
      Sujet Exam 2024 - entrée B1 - ForEach
      <br />
      <a href="/ressources/docs"><strong>Explorer les documents »</strong></a>
      <br />
      <br />
      <a href="https://github.com/corentin-hannoye/excuses-de-dev/issues/new?labels=bug&template=bug_report.md">Rapporter un bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#à-propos-du-projet">À propos du projet</a>
      <ul>
        <li><a href="#développé-avec">Développé avec</a></li>
      </ul>
    </li>
    <li>
      <a href="#commencer">Commencer</a>
      <ul>
        <li><a href="#prérequis">Prérequis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## À propos du projet

[![product-screenshot]](http://localhost:8000)

<p align="right">(<a href="#readme-top">Retour en haut</a>)</p>



### Développé avec

* [![React][React.js]][React-url]
* [![Symfony][Symfony.com]][Symfony-url]
* [![Pnpm][Pnpm.com]][Pnpm-url]
* [![Webpack][Webpack.com]][Webpack-url]

<p align="right">(<a href="#readme-top">Retour en haut</a>)</p>



<!-- GETTING STARTED -->
## Commencer

Les étapes suivantes permettent de lancer le projet avec Docker

### Prérequis

* Docker : https://docs.docker.com/engine/install/
* PNPM : https://pnpm.io/installation

### Installation

1. Cloner le repo
   ```sh
   git clone https://github.com/corentin-hannoye/excuses-de-dev
   ```
2. Se placer à l'intérieur du dossier
   ```sh
   cd excuses-de-dev
   ```
3. Installation des paquets NPM
   ```sh
   pnpm i
   ```
4. Création du dossier assets contenant le front-end de l'application
   ```sh
   pnpm run build
   ```
5. Installation des dépendances PHP
   ```sh
   composer i --no-dev --optimize-autoloader
   ```
   OU
   ```sh
   symfony composer i --no-dev --optimize-autoloader
   ```
6. Lancement des containers Docker (Apache, PHP, MySQL)
   ```sh
   docker compose -f .\docker\docker-compose.yml up
   ```

<p align="right">(<a href="#readme-top">Retour en haut</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

[![apologies-screenshot]](http://localhost:8000)
[![apology-screenshot]](http://localhost:8000)
[![add-apology-screenshot]](http://localhost:8000)
[![lost-screenshot]](http://localhost:8000)

<p align="right">(<a href="#readme-top">Retour en haut</a>)</p>



<!-- CONTACT -->
## Contact

Corentin HANNOYE - [@corentin_ha](https://x.com/corentin_ha "@corentin_ha") - corentin_hny@icloud.com

Lien du projet : [https://github.com/corentin-hannoye/excuses-de-dev](https://github.com/corentin-hannoye/excuses-de-dev)

<p align="right">(<a href="#readme-top">Retour en haut</a>)</p>


[product-screenshot]: /ressources/media/screenshot-les-excuses-de-dev.png
[apologies-screenshot]: /ressources/media/screenshot-les-excuses-de-dev-apologies.png
[apology-screenshot]: /ressources/media/screenshot-les-excuses-de-dev-apology.png
[add-apology-screenshot]: /ressources/media/screenshot-les-excuses-de-dev-add-apology.png
[lost-screenshot]: /ressources/media/screenshot-les-excuses-de-dev-lost.png
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin
[linkedin-url]: https://www.linkedin.com/in/corentin-hannoye/ "LinkedIn"
[React.js]: https://img.shields.io/badge/ReactJs-1F2937?style=for-the-badge&logo=react
[React-url]: https://reactjs.org "ReactJs"
[Symfony.com]: https://img.shields.io/badge/Symfony-1F2937?style=for-the-badge&logo=symfony
[Symfony-url]: https://symfony.com "Symfony"
[Pnpm.com]: https://img.shields.io/badge/PNPM-1F2937?style=for-the-badge&logo=pnpm
[Pnpm-url]: https://pnpm.io "PNPM"
[Webpack.com]: https://img.shields.io/badge/Webpack-1F2937?style=for-the-badge&logo=webpack&logoColor=white
[Webpack-url]: https://webpack.js.org "Webpack"
