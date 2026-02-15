# Elite Design Kitchens & more

## Project Overview
Elite Design specializes in high-end kitchen design and manufacturing. This project is the official website for our showcase and services.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

### 1. Build the Project
To generate the production-ready static files:
```sh
npm run build
```
The output will be in the `dist/` directory.

### 2. VPS Deployment with Nginx
For a standard Ubuntu VPS, follow these steps:

#### A. Install Nginx
```sh
sudo apt update
sudo apt install nginx
```

#### B. Configure Nginx
Use the provided `nginx.conf.example` as a template:
1. Copy the template: `sudo cp nginx.conf.example /etc/nginx/sites-available/elitedesign`
2. Edit the file and replace paths/domain names if necessary: `sudo nano /etc/nginx/sites-available/elitedesign`
3. Link the config: `sudo ln -s /etc/nginx/sites-available/elitedesign /etc/nginx/sites-enabled/`
4. Test and reload:
```sh
sudo nginx -t
sudo systemctl reload nginx
```

#### C. SSL Setup (Let's Encrypt)
To enable HTTPS and auto-renewal:
```sh
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d elitedesign.co.il -d www.elitedesign.co.il
```

### 3. Containerized Deployment (Docker)
If you prefer Docker, use the included `Dockerfile`:
```sh
# Build image
docker build -t elite-design-frontend .

# Run container
docker run -d -p 80:80 --name elite-design elite-design-frontend
```

### 4. Healthcheck
The Nginx configuration includes a healthcheck endpoint at `/health`. You can monitor it using:
```sh
curl https://elitedesign.co.il/health
```
