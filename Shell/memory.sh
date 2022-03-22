# file /tmp/1.sh
#!/bin/bash
zeek="./zeek.txt"
java="./java.txt"
omnibeat="./omni-beat.txt"
thunderbot="./thunder-bot.txt"
echo "   PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND"> "$zeek"
echo "   PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND"> "$java"
echo "   PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND"> "$omnibeat"
echo "   PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND"> "$thunderbot"
for i in {1..10000000};do
    top -b -n 1 | grep -E 'zeek' >> "$zeek"
    top -b -n 1 | grep -E 'java' >> "$java"
    top -b -n 1 | grep -E 'thunder-bot' >> "$thunderbot"
    top -b -n 1 | grep -E 'omni-beat' >> "$omnibeat"
    sleep 60
done