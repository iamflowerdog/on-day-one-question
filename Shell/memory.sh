# file /tmp/1.sh
#!/bin/bash
logfile="./zeekmem.txt"
echo "   PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND"> "$logfile"
for i in {1..10000000};do
    top -b -n 1 | grep -E 'zeek|java|thunder-bot|omni-beat|omni-magnet|omni-leach|omni-decode|omni-sysinfo' >> "$logfile"
    sleep 60
done