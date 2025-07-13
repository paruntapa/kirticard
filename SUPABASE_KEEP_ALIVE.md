# Preventing Supabase Project Pausing

## Why This Happens
Supabase free tier projects are paused after **7 days of inactivity** to manage resources.

## Immediate Fix
1. Go to [supabase.com](https://supabase.com) and log in
2. Find your paused project
3. Click "Unpause" or "Restore"
4. Wait a few minutes for the project to become active

## Long-term Solutions

### 1. Manual Database Ping
```bash
npm run keep-db-active
```

### 2. Automated Cron Job (Recommended)
```bash
./scripts/setup-cron.sh
```
This sets up a cron job that pings your database every 6 hours.

### 3. Health Check Endpoint
Your app now has a health check endpoint at `/api/health` that you can ping from external services.

Example using curl:
```bash
curl https://your-app.vercel.app/api/health
```

### 4. External Monitoring Services
Use services like:
- **UptimeRobot** (free)
- **Pingdom**
- **Better Uptime**

Set them to ping your `/api/health` endpoint every 5-10 minutes.

### 5. GitHub Actions (for deployed apps)
Create `.github/workflows/keep-alive.yml`:
```yaml
name: Keep Database Alive
on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Ping health endpoint
        run: curl https://your-app.vercel.app/api/health
```

## Best Practices

1. **Don't over-ping**: Every 6 hours is sufficient
2. **Use the health endpoint**: It's more reliable than direct database queries
3. **Monitor your usage**: Stay within Supabase free tier limits
4. **Consider upgrading**: If you need guaranteed uptime, consider Supabase Pro

## Troubleshooting

If you still get "Tenant or user not found":
1. Check if project is still paused
2. Verify your `DATABASE_URL` in `.env`
3. Try regenerating your database password in Supabase dashboard

## Commands Quick Reference

```bash
# Test database connection
npx prisma db push

# Manual ping
npm run keep-db-active

# Setup automated pings
./scripts/setup-cron.sh

# Check health endpoint
curl http://localhost:3000/api/health
``` 