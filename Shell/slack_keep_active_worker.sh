#!/bin/bash

FLAG="$HOME/.slack_keep_active"
CLICK="/opt/homebrew/bin/cliclick"

while [ -f "$FLAG" ]; do
  HOUR=$(date +"%H")

  if [ "$HOUR" -ge 8 ] && [ "$HOUR" -lt 18 ]; then
    if pgrep -x "Slack" >/dev/null; then
      "$CLICK" m:+1,+0
      sleep 1
      "$CLICK" m:-1,+0
    fi
  fi

  sleep 60
done