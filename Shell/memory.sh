#!/bin/bash
​
PROCESS=foobar
LOGFILE="memlog.txt"
​
#!/bin/bash
# for ((;;))
# while [ 1 ]
while :
do
    PID=$(ps aux | grep $PROCESS | grep -v 'grep' | awk '{print $2;}')
    if [ "$PID" != "" ]; then
        echo `date +'%Y-%m-%d %H:%M:%S'`  >> "$LOGFILE"
        MEM=$(ps aux | grep $PROCESS | grep -v 'grep' | awk '{print $5;}')
        MEM="ps mem: "$MEM
        RSS=$(cat /proc/$PID/status | grep RSS)
        echo $PROCESS $MEM $RSS >> "$LOGFILE"
    fi
​
    echo "System memory info: " $(cat /proc/meminfo | grep -E 'MemTotal|MemFree|Cached' |grep -v SwapCached|xargs)  >> "$LOGFILE"
    echo "-------------" >> "$LOGFILE"
​
    sleep 5
done

