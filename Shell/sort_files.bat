@echo off
setlocal enabledelayedexpansion

:: 设置每个子文件夹中的文件数量（默认为5，可通过参数更改）
set files_per_folder=5
if not "%~1"=="" set files_per_folder=%~1

:: 获取当前目录中的文件数量
set file_count=0
for %%F in (*) do set /a file_count+=1

:: 计算需要创建的文件夹数量
set /a folder_count=(file_count+files_per_folder-1)/files_per_folder

:: 创建子文件夹
for /l %%i in (1,1,%folder_count%) do (
    set /a start=((%%i-1)*files_per_folder)+1
    set /a end=%%i*files_per_folder
    if !end! gtr %file_count% set end=%file_count%
    md "!start!-!end!"
)

:: 移动文件到对应的子文件夹
set current_folder=1
set file_index=0
for %%F in (*) do (
    set /a file_index+=1
    set /a current_folder=((file_index-1)/files_per_folder)+1
    set /a start=((current_folder-1)*files_per_folder)+1
    set /a end=current_folder*files_per_folder
    if !end! gtr %file_count% set end=%file_count%
    move "%%F" "!start!-!end!\"
)

echo 文件整理完成。