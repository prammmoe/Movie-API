# Backend Crud Movies

Made with ExpressJS Vanilla

## Installation

To run this API, follow the required steps below:
1. Clone the repository:
```
git clone https://github.com/prammmoe/Movie-API
```
2. Install all dependencies using npm install
```
npm i
```

3. Copy `.env.example` and rename it to `.env` and fill with your own credentials.

4. Run the API

```
npm start
```

5. Run the Prisma Studio

```
npx prisma studio
```

### Request

```
GET localhost:7000/movies
```

### Response
```
[
  {
    "id": 1,
    "title": "Marmut Merah Jambu",
    "releasedYear": 2014,
    "duration": "01:54:00",
    "lang": "English",
    "description": "Filmnya Raditya Dika",
    "id_genre": 2
  },
  {
    "id": 2,
    "title": "Apa aja",
    "releasedYear": 2010,
    "duration": "03:00:00",
    "lang": "Indonesia",
    "description": "Film uhuy",
    "id_genre": 1
  }
]
```

## Project Structure

    .
    ├── prisma
    │   └──schema.prisma
    ├── src
    │   ├──controllers
    │   ├──routes
    ├──.env.example
    ├──.gitignore              
    ├──app.js
    ├──package-lock.json
    ├──package.json
    └── README.md