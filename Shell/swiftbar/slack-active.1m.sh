#!/bin/bash

# ===== 配置区 =====
BASE_DIR="/Users/yonghaiyang/code/on-day-one-question/Shell"
TOGGLE="$BASE_DIR/toggle_slack_active.sh"
FLAG="$HOME/.slack_keep_active"
WORKER_NAME="slack_keep_active_worker.sh"
WORK_START=8
WORK_END=18
SLACK_APP="Slack"

# ===== 状态判断 =====
HOUR=$(date +"%H")
IN_WORK_TIME=false
[ "$HOUR" -ge "$WORK_START" ] && [ "$HOUR" -lt "$WORK_END" ] && IN_WORK_TIME=true

SLACK_RUNNING=false
pgrep -x "$SLACK_APP" >/dev/null && SLACK_RUNNING=true

ACTIVE=false
[ -f "$FLAG" ] && ACTIVE=true

# ===== 菜单栏标题 =====
if $ACTIVE && $IN_WORK_TIME && $SLACK_RUNNING; then
  echo "🟢 Slack Active"
elif $ACTIVE; then
  echo "🟡 Slack Paused"
else
  echo "⚪ Slack Off"
fi

echo "---"

# ===== 菜单内容 =====
if $ACTIVE; then
  echo "关闭 Slack Active | bash=/bin/bash param1=\"$TOGGLE\" terminal=false refresh=true"
else
  echo "开启 Slack Active | bash=/bin/bash param1=\"$TOGGLE\" terminal=false refresh=true"
fi

echo "---"
echo "状态信息"
echo "工作时间：08:00–18:00"
echo "当前时间：$(date +"%H:%M")"
echo "Slack 运行中：$SLACK_RUNNING"
echo "保持在线开启：$ACTIVE"