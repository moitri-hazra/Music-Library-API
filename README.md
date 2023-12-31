# Music Library API

## Description

This project is a Node.js API for fetching, storing, and managing music data. It allows users to perform CRUD operations on music tracks, including creating, reading, updating, and deleting tracks from a MongoDB database. Additionally, it features a search functionality to find music by track name, artist, or album.

## Features

- Fetch and store music data (track name, artist, album, year).
- CRUD operations: Create, Read, Update, Delete tracks.
- Search functionality: find tracks by name, artist, or album.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Usage

Endpoints:

- **GET `/Tracks`**: Retrieve all tracks.
- **POST `/Tracks`**: Add a new track. Requires `title`, `artist`, `album`, and `year` in the request body.
- **PUT `/Tracks/:trackId`**: Update an existing track. Requires `trackId` as a URL parameter.
- **DELETE `/Tracks/:trackId`**: Delete a track. Requires `trackId` as a URL parameter.
- **GET `/search`**: Search for tracks. Supports query parameters `track`, `artist`, and `album`.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)