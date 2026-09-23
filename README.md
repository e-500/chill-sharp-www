# chillsharp website

Static presentation site for [chillsharp](https://chillsharp.dev).

Open `index.html` locally to view the site. GitLab CI validates the static files and publishes the site with GitLab Pages from `main`.

## Server deployment

From the checkout on the production server, run `./deploy.sh`. It fast-forwards the
checkout to `main`, validates the static files, then rebuilds and recreates the
Docker Compose service. The server must have access to the `origin` remote, Node.js,
and Docker Compose.
