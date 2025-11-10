# Portfolio Contact Form

This is a Node.js server that handles contact form submissions and sends emails to your Gmail address using Nodemailer.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your Gmail credentials:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   PORT=3000
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Deployment

To deploy this server online (so it doesn't run locally), you can use services like:

- **Heroku**: Free tier available
- **Vercel**: Free tier available
- **Railway**: Free tier available
- **Render**: Free tier available

### Deploying to Heroku

1. Install Heroku CLI
2. Login to Heroku: `heroku login`
3. Create a new app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set GMAIL_USER=your-email@gmail.com
   heroku config:set GMAIL_APP_PASSWORD=your-app-password
   ```
5. Deploy: `git push heroku main`

### Deploying to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`
3. Set environment variables in Vercel dashboard

## Usage

The server runs on port 3000 (or PORT environment variable) and accepts POST requests to `/send` with JSON data containing:
- `name`: Sender's name
- `email`: Sender's email
- `message`: Message content

## Security Note

Make sure to:
- Never commit your `.env` file to version control
- Use app passwords instead of regular Gmail passwords
- Enable 2-factor authentication on your Gmail account
