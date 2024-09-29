@echo off
setlocal enabledelayedexpansion

:: 获取当前目录
set "current_dir=%cd%"

:: 移动所有子目录中的文件到当前目录
for /d %%D in (*) do (
    echo 处理目录 %%D
    for %%F in ("%%D\*") do (
        echo 移动文件 %%F 到 %current_dir%
        move "%%F" "%current_dir%" >nul
    )
)

:: 删除所有空子目录
for /d %%D in (*) do (
    echo 删除空目录 %%D
    rmdir "%%D" >nul 2>&1
)

echo 文件恢复完成。
pause