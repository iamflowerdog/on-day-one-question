刷机首次安装版本过慢替换源的方法：
AI安装前

sudo apt install python3-pip (进度条到这一步，不用cancel，执行下面两条命令)

sudo pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
sudo pip3 config set install.trusted-host pypi.tuna.tsinghua.edu.cn