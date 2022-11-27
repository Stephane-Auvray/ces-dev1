
# Creation du project

## Pre requis

### Logiciels

* Node
* Git

## Arborescence des repertoires

```
ces-info
├── .git
├── backend
├── frontend
└── README.md

```

## Backend API (Express JS)

### Creation

```sh
# racine ces-info
mkdir -p backend
cd backend
npm init -y
npm i express diskdb
npm i -D nodemon
mkdir src
touch src/index.js
# Stockage des donnees du backend
mkdir data

```

* Express JS (https://expressjs.com/)
* Nodemon (https://nodemon.io/)
* Disk DB (https://www.npmjs.com/package/diskdb)

Ajout script de lancement du `backend` dans `package.json`

```json
...
  "scripts": {
    "dev": "nodemon src/index.js",
    ...
  },
...
```

### Lancement

```sh
# export PORT=3220
npm run dev

```

### Test

#### Specifique VSCode

Installation de l'extension `REST Client`

Creation d'un fichier `api.http`

```sh
mkdir tests
touch tests/api.http

```

#### Avec `curl`

```sh
BASE_URL=http://localhost:5000

curl -X GET ${BASE_URL}/

curl -X GET ${BASE_URL}/api/users

```

## Frontend (ReactJS)
### Creation
### Configuration pour "Proxy"
### Lancement


```bash
mkdir ces-info
cd ces-info

```

```json
{
    "param1" : "value1"
}
```



# Annexe

## Info

* Variable d'environnement

```
# ex. PORT d'ecoute du backend API
export PORT=3220 # au lieu 5000 par defaut
npm run dev
...
Je suis en ecoute sur le port: 3220
```

## Outillage

* Markdown (fichiers avec extensions `.md`) (cf https://www.markdownguide.org/cheat-sheet)
