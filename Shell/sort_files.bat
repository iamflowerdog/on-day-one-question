@echo off
setlocal enabledelayedexpansion


:: 读取配置文件
set "config_file=config.txt"
if exist "%config_file%" (
    for /f "tokens=1,2 delims==" %%A in (%config_file%) do (
        if "%%A"=="files_per_folder" set files_per_folder=%%B
    )
) else (
    set files_per_folder=5
)

echo 使用每个文件夹文件数: %files_per_folder%

:: 获取当前目录中的文件数量（不包括批处理文件本身和 .bat 文件）
set file_count=0
for %%F in (*) do (
    if /i not "%%~xF"==".bat" if /i not "%%~nxF"=="config.txt" (
        set /a file_count+=1
    )
)

:: 计算需要创建的文件夹数量
set /a folder_count=(file_count+files_per_folder-1)/files_per_folder

echo 总文件数: %file_count%
echo 每个文件夹的文件数: %files_per_folder%
echo 将创建的文件夹数: %folder_count%

:: 创建子文件夹
if %folder_count% gtr 0 (
    set /a start=1
    for /l %%i in (1,1,%folder_count%) do (
        set /a end=start+files_per_folder-1
        if !end! gtr %file_count% set end=%file_count%
        md "!start!-!end!"
        echo 创建文件夹: !start!-!end!
        set /a start=end+1
    )
) else (
    echo 没有文件需要整理。
    goto :eof
)

:: 移动文件到对应的子文件夹，跳过 .bat 文件
set file_index=0
set folder_index=1
set /a start=1
set /a end=files_per_folder
for %%F in (*) do (
    if /i not "%%~xF"==".bat" if /i not "%%~nxF"=="config.txt" (
        set /a file_index+=1
        if !file_index! gtr !end! (
            set /a folder_index+=1
            set /a start=end+1
            set /a end=start+files_per_folder-1
            if !end! gtr %file_count% set end=%file_count%
        )
        echo 移动文件 "%%F" 到文件夹 "!start!-!end!\"
        move "%%F" "!start!-!end!\" > nul
    )
)

echo 文件整理完成,老婆你真是太棒了！感谢你为暖暖的付出,加油！
@REM pause

timeout /t 2 >nul