#!/bin/bash

FLAG="$HOME/.slack_keep_active"
WORKER="/Users/yonghaiyang/code/on-day-one-question/Shell/slack_keep_active_worker.sh"

if [ -f "$FLAG" ]; then
  rm -f "$FLAG"
  pkill -f slack_keep_active_worker.sh 2>/dev/null
  exit 0
fi

touch "$FLAG"
nohup "$WORKER" >/dev/null 2>&1 &