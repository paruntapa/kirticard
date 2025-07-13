# Vercel Deployment - Database Keep-Alive Setup

## ✅ What Works on Vercel

### 1. **Health Endpoint** (Already included)
- `/api/health` - Works automatically on Vercel
- Test: `curl https://your-app.vercel.app/api/health`

### 2. **GitHub Actions** (Recommended)
- `.github/workflows/keep-alive.yml` - Pings your app every 6 hours
- **Update the URL** in the workflow file with your actual Vercel URL

### 3. **External Monitoring** (Best option)
- **UptimeRobot** (free) - monitors your `/api/health` endpoint
- **Pingdom**, **Better Uptime**, etc.

## 📋 Setup Steps

### 1. **Deploy to Vercel**
```bash
git add .
git commit -m "Add database keep-alive automation"
git push origin main
```

### 2. **Update GitHub Actions**
Edit `.github/workflows/keep-alive.yml` and replace:
```yaml
curl -f https://your-kirticard-app.vercel.app/api/health
```
With your actual Vercel URL.

### 3. **Set up UptimeRobot** (Recommended)
1. Go to [uptimerobot.com](https://uptimerobot.com)
2. Create free account
3. Add new monitor:
   - **Type**: HTTP(S)
   - **URL**: `https://your-app.vercel.app/api/health`
   - **Interval**: 5 minutes
4. Save and activate

## ❌ What Doesn't Work on Vercel

- **Local cron jobs** - Only run on your machine
- **`npm run keep-db-active`** - Only manual execution
- **Background processes** - Vercel is serverless

## 🔧 Testing

After deployment, test your health endpoint:
```bash
curl https://your-app.vercel.app/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T12:00:00.000Z",
  "database": "connected"
}
```

## 🚀 Recommended Setup

1. **Deploy to Vercel** (health endpoint works automatically)
2. **Set up UptimeRobot** to monitor `/api/health` every 5 minutes
3. **Enable GitHub Actions** as backup (every 6 hours)

This combination ensures your database stays active 24/7! 