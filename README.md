# Nawaart Backend

Visit the live production API: https://nawaart-api.jonathannicolas.dev

## Stack

- Node.js
- REST API
- Express
  - Body Parser
  - Cookie Parser
  - bcrypt
  - JWT
- Debug
- Morgan
- Postman
- MongoDB and Mongoose
- Amazon EC2
- Circle CI and Docker
- Cloudflare
- Uniregistry

## REST API Specification

### Users

| Endpoint              | HTTP     | Description                    |
| --------------------- | -------- | ------------------------------ |
| `/`                   | `GET`    | Get index                      |
| `/users/seed`         | `POST`   | Seed initial users             |
| `/users/register`     | `POST`   | Register new user              |
| `/users/login`        | `POST`   | Login to existing user         |
| `/users/validate`     | `GET`    | Validate user with its token   |
| `/users/profile`      | `GET`    | Get authenticated user profile |
| `/users/search?name=` | `GET`    | Search user by name            |
| `/users`              | `GET`    | Get all users                  |
| `/users`              | `DELETE` | Delete all users               |
| `/users/:id`          | `GET`    | Get one user by id             |
| `/users/:id`          | `DELETE` | Delete one user by id          |

### Artists

| Endpoint         | HTTP     | Description           | isAuthenticated? |
| ---------------- | -------- | --------------------- | ---------------- |
| `/artists`       | `GET`    | Get all artists       | -                |
| `/artists`       | `POST`   | Add new artist        | Yes              |
| `/artists`       | `DELETE` | Delete all artists    | Yes              |
| `/artists/:slug` | `GET`    | Get artist by slug    | -                |
| `/artists/:slug` | `DELETE` | Delete artist by slug | Yes              |
| `/artists/seed`  | `POST`   | Seed initial artists  | -                |

```json
{
  "_id": ObjectId,
  "id": 1,
  "slug": "adha-joe",
  "name": "Adha Joe",
  "photo": "https://example.com/images/adha-joe.jpg",
  "biography": {
    "about": "Even Adha is an autodidact artist and has never joined any art institution, he has been interested with art and started to paint since he was very young. In the beginning, Adha started to learn many kind of arts in various media, then finally he decided to focus on painting. For Adha, to paint is to express himself, as for him arts is the bridge to communicate to the audiences.",
    "exhibitions": [
      "2018 “Perupa Muda#3 Ring Road”, Sangkring Art Space, Yogyakarta",
      "2018 “Imagine Beauty”, Sunrise Art Gallery & Arcade, Fairmont Hotel, Jakarta",
      "2018 “Imagine Beauty”, Sunrise Art Gallery & Arcade, Fairmont Hotel, Jakarta"
    ]
  }
}
```

### Artworks

| Endpoint          | HTTP     | Description            |
| ----------------- | -------- | ---------------------- |
| `/artworks/seed`  | `POST`   | Seed initial artworks  |
| `/artworks`       | `GET`    | Get all artworks       |
| `/artworks`       | `POST`   | Add new artwork        |
| `/artworks`       | `DELETE` | Delete all artworks    |
| `/artworks/:slug` | `GET`    | Get artwork by slug    |
| `/artworks/:slug` | `DELETE` | Delete artwork by slug |

```json
{
  "artist": ObjectId,
  "title": "Let It Grow",
  "slug": "let-it-grow",
  "image": "https://example.com/images/let-it-grow.jpg"
}
```

### Stories

| Endpoint         | HTTP     | Description          |
| ---------------- | -------- | -------------------- |
| `/stories/seed`  | `POST`   | Seed initial stories |
| `/stories`       | `GET`    | Get all stories      |
| `/stories`       | `POST`   | Add new story        |
| `/stories`       | `DELETE` | Delete all stories   |
| `/stories/:slug` | `GET`    | Get story by slug    |
| `/stories/:slug` | `DELETE` | Delete story by slug |

```json
{
  "slug": "rangoon-rhythm:-eillie",
  "title": "Rangoon Rhythm: EilliE",
  "date": "April 17, 2020",
  "image": "https://www.myanmore.com/wp-content/uploads/2020/03/eillie-2-1068x712.jpg",
  "content": "<p>EilliE started her music career in late 2018 when she was 18.</p><p> The girl has already become a favourite rapper for the local rap music industry.With her powerful rapping skills and distinctive fashion style, she talked about her passion for music and balance between life and career. EilliE, with the given name of Eaint Thet Hmu, joined BG18 Record Label in 2018. It all started at the 2018 Invasion Music Festival. “I was hanging out with my friends and also a bit drunk at that time.” she laughed.</p>"
}
```

## Scripts

### Setup Environment Variables

#### Development

Run the `setup.sh` script first, to copy `.env.schema` into `.env`.

```sh
./setup.sh
```

Then you fill the variables in `.env` file.
Remember to install and make sure MongoDB is running on your machine.

```txt
MONGODB_URI=mongodb://localhost:27017
JWT_SECRET=this_is_your_secret
```

#### Production

```
MONGODB_URI=mongodb://urltomongodb.com:27017
JWT_SECRET=this_is_your_other_secret
```

### Install Dependencies

```sh
yarn
```

### Run Development Server

```sh
yarn dev
```

### Run Production Server

```sh
yarn start
```

### Run Test Suite

```sh
yarn test
```

### Debug Production on Heroku

```sh
heroku logs --tail -a api-haidar-dev
```

## License

MIT
