@echo off
set /p message="Commit message: "

git add .
git commit -m "%message%"
git push origin master

echo Added changes successfully.
pause
