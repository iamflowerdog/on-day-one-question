@echo off
setlocal enabledelayedexpansion

:: ��ȡ��ǰĿ¼
set "current_dir=%cd%"

:: �ƶ�������Ŀ¼�е��ļ�����ǰĿ¼
for /d %%D in (*) do (
    echo ����Ŀ¼ %%D
    for %%F in ("%%D\*") do (
        echo �ƶ��ļ� %%F �� %current_dir%
        move "%%F" "%current_dir%" >nul
    )
)

:: ɾ�����п���Ŀ¼
for /d %%D in (*) do (
    echo ɾ����Ŀ¼ %%D
    rmdir "%%D" >nul 2>&1
)

echo �ļ��ָ����,����������̫���ˣ���л��Ϊůů�ĸ���,���ͣ�
@REM pause

timeout /t 2 >nul