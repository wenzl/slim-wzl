@ECHO OFF
setlocal DISABLEDELAYEDEXPANSION
SET BIN_TARGET=%~dp0/../sentry/sentry/bin/raven
php "%BIN_TARGET%" %*
