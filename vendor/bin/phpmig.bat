@ECHO OFF
setlocal DISABLEDELAYEDEXPANSION
SET BIN_TARGET=%~dp0/../davedevelopment/phpmig/bin/phpmig
php "%BIN_TARGET%" %*
