@echo off
chcp 936 >nul  :: 设置控制台为 GBK 编码，适合中文显示
setlocal enabledelayedexpansion

:: 设置每个子文件夹中的文件数量（默认为5，可通过参数更改）
set files_per_folder=5
if not "%~1"=="" set files_per_folder=%~1

:: 获取当前目录中的文件数量（不包括批处理文件本身）
set file_count=0
for %%F in (*) do (
    if /i not "%%~nxF"=="%~nx0" set /a file_count+=1
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

:: 移动文件到对应的子文件夹
set file_index=0
set folder_index=1
set /a start=1
set /a end=files_per_folder
for %%F in (*) do (
    if /i not "%%~nxF"=="%~nx0" (
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

echo 文件整理完成。
pause