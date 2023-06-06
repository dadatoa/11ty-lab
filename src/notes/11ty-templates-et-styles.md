---
title: "11ty : templates et style"
created: 2023-06-06
last_modified: 2023-06-06
slug: 11ty-templates-et-styles
description: "Je configure mon projet 11ty. Il est temps de rentrer dans le dur et de faire les premiers templates, ainsi que d'écrire les premier CSS."
status: 🌱
directory:
share: true
edit: 🖋️ 
---

## Init Node et réorganisation des fichiers

```bash
❯ pnpm init
❯ pnpm add @11ty/eleventy
```

Ensuite je crée un dossier `src/` et je déplace tout le contenu que j'avais produit jusque là à l'intérieur.

## Configuration de 11ty

Je crée un fichier de configuration `.eleventy.js` à la racine du projet, et j'y indique dans un premier temps les emplacements de mes fichiers sources. Je choisi de mettre tout mes fichiers sources dans un repertoire `src`, comme c'est souvent le cas des projets [[javascript]]. Pour le reste, je vais rester sur les valeurs par défaut (visible sur le site officiel [ici](https://www.11ty.dev/docs/config/#change-base-file-name-for-data-files)).

```javascript
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src"
    }
  }
};
```

Ensuite, je regarde du côté du fichier `package.json`. J'y ajoute mes scripts de serveur de dev et de build :

```json
  "scripts": {
    "dev": "eleventy --serve",
    "build": "eleventy"
```

Ce qui donne un fichier global qui ressemble à ça :

```json
{
  "name": "11ty-garden",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "eleventy --serve",
    "build": "eleventy"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@11ty/eleventy": "^2.0.1"
  },
  "dependencies": {
    "@11ty/eleventy-plugin-webc": "^0.11.1"
  }
}
```

## Nunjucks

Dans mes [[11ty|premiers tests]] j'avais écris mes templates en [[liquid]], qui est un des langages de templates par défaut de 11ty. Mais j'ai découvert [l'intégration de css dans un template](https://www.11ty.dev/docs/assets/) et j'ai trouvé ça pas mal. Sauf que ça marche pas avec *liquid* alors je vais réécrire mes templates en [[nunjucks]], le langage est très proche de *liquid*. Et pour créer un fichier [[css]] qui peut être construit dans un template, c'est comme ça : 

```yaml
---
permalink: bundle.css
---
#{% include "header.css" %}
#{% include "footer.css" %}
#{% include "./node_modules/my-ficticious-package-name/package.css" %}

```

T'écris ça dans un template, tu mets tes css dans le dossier d'includes, et ça fait des Chocapic (enfin, un css plutôt) !