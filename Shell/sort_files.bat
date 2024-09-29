@echo off
setlocal enabledelayedexpansion

:: ����ÿ�����ļ����е��ļ�������Ĭ��Ϊ5����ͨ���������ģ�
set files_per_folder=5
if not "%~1"=="" set files_per_folder=%~1

:: ��ȡ��ǰĿ¼�е��ļ��������������������ļ������ .bat �ļ���
set file_count=0
for %%F in (*) do (
    if /i not "%%~xF"==".bat" (
        set /a file_count+=1
    )
)

:: ������Ҫ�������ļ�������
set /a folder_count=(file_count+files_per_folder-1)/files_per_folder

echo ���ļ���: %file_count%
echo ÿ���ļ��е��ļ���: %files_per_folder%
echo ���������ļ�����: %folder_count%

:: �������ļ���
if %folder_count% gtr 0 (
    set /a start=1
    for /l %%i in (1,1,%folder_count%) do (
        set /a end=start+files_per_folder-1
        if !end! gtr %file_count% set end=%file_count%
        md "!start!-!end!"
        echo �����ļ���: !start!-!end!
        set /a start=end+1
    )
) else (
    echo û���ļ���Ҫ����
    goto :eof
)

:: �ƶ��ļ�����Ӧ�����ļ��У����� .bat �ļ�
set file_index=0
set folder_index=1
set /a start=1
set /a end=files_per_folder
for %%F in (*) do (
    if /i not "%%~xF"==".bat" (
        set /a file_index+=1
        if !file_index! gtr !end! (
            set /a folder_index+=1
            set /a start=end+1
            set /a end=start+files_per_folder-1
            if !end! gtr %file_count% set end=%file_count%
        )
        echo �ƶ��ļ� "%%F" ���ļ��� "!start!-!end!\"
        move "%%F" "!start!-!end!\" > nul
    )
)

echo �ļ��������,����������̫���ˣ���л��Ϊůů�ĸ���,���ͣ�
@REM pause

timeout /t 2 >nul