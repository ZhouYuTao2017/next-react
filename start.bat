@echo off
title start.bat
taskkill /FI "WINDOWTITLE eq start.bat" /IM cmd.exe /F
nodemon