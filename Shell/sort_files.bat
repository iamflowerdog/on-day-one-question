@echo off
setlocal enabledelayedexpansion

:: 参数设置
set "source_dir=%~dp0"  :: 当前目录
set "files_per_folder=%1"  :: 每个子文件夹的文件数量，可以通过参数传递

if "%files_per_folder%"=="" (
    set files_per_folder=5  :: 如果没有提供参数，默认每个文件夹5个文件
)

:: 检查是否有文件
cd "%source_dir%"
set "file_count=0"
for %%F in (*.*) do (
    set /a file_count+=1
)

echo 当前目录下文件总数: %file_count%

:: 开始按数量创建子文件夹并移动文件
set /a folder_count=1
set /a start_index=1
set /a end_index=%files_per_folder%

for /l %%G in (1,%files_per_folder%,%file_count%) do (
    :: 生成文件夹名
    if %end_index% gtr %file_count% (
        set end_index=%file_count%
    )
    
    set "folder_name=%start_index%-%end_index%"
    
    :: 创建子文件夹
    mkdir "%folder_name%"
    echo 创建文件夹 %folder_name%
    
    :: 移动文件到子文件夹
    set /a count=0
    for %%F in (*.*) do (
        if !count! geq %start_index% if !count! lss %end_index% (
            move "%%F" "%folder_name%"
        )
        set /a count+=1
    )
    
    set /a start_index+=%files_per_folder%
    set /a end_index+=%files_per_folder%
)

echo 文件移动完成
pause