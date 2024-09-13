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
  echo " * 1. 설명하면서 문제 풀기 "
  echo " * 2. 알고리즘 전략 분석 (시간복잡도, 공간복잡도, 자료구조, 방법론)"
  echo " * 3. 알고리즘 개선하기"
  echo " */"
} >>"$filepath"
