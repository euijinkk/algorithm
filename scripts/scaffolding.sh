#!/bin/sh

filename=$1

if [ "$1" = "" ]; then
  echo "알고리즘 문제 이름을 적어주세요 : "
  read filename
fi

filepath="./problem/$filename.js"

# 파일 생성 및 내용 추가
touch "$filepath"
{
  echo "/**"
  echo " * 1. Solving "
  echo " * 2. Algorithm anaysis"
  echo " *  - Time Complexity :"
  echo " *  - Space Complexity :"
  echo " *  - Data structure :"
  echo " * 3. Improve algorithm"
  echo " */"
} >>"$filepath"
