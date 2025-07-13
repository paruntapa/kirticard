#!/bin/bash

# Setup cron job to keep database active
# This script will run every 6 hours to prevent Supabase from pausing

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CRON_CMD="cd $PROJECT_DIR && npm run keep-db-active"

# Add cron job (runs every 6 hours)
(crontab -l 2>/dev/null; echo "0 */6 * * * $CRON_CMD") | crontab -

echo "✅ Cron job set up successfully!"
echo "The database will be pinged every 6 hours to prevent pausing."
echo "To view current cron jobs: crontab -l"
echo "To remove this cron job: crontab -e (then delete the line)" 