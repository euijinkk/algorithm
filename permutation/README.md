# 순열 Permutations 구하기

n 개중 k개를 순서를 고려하여 뽑는 모든 경우의 수를 구할 것이다. nPk (permutation) 이다.

interface 는 다음과 같다.

```ts
function permute(arr: number[], k: number): number[][];
```

## Step1

어떻게 구현할지 감이 잘 오지 않았다. 그럴땐 Example 을 구현해보고, 일반화하는 것이 좋다.
[3,2,1] 의 순열을 먼저 구해보자. 3P3 을 구해보자.

- i,j,k 에 대해서 반복문을 돌면서,
- 각 요소가 중복되지 않는다면, 알맞은 해이다.

이를 코드로 표현하면,

```js
function permute() {
  const arr = [3, 2, 1];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[i] !== arr[j] && arr[j] !== arr[k] && arr[k] !== arr[i]) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return result;
}
```

## Step2

다음으로 arr 를 동적으로 받아서 처리해보자.
그렇다면, for 문을 몇번 돌릴지 알 수 없다. 이를 유동적으로 결정할 수 있어야 한다. 재귀를 통해 표현할 수 있다. 재귀에는 항상 조건문이 포함되어야 한다. termination 조건이 없으면 무한 loop 에 빠질 수 있다.

termination condition 은, 모든 요소를 다 돌았을 때이다. (arr.length === selected.length)

이를 코드로 표현해보자

```js
function permute(arr) {
  const result = [];
  function recursive(alreadySelected) {
    for (let i = 0; i < arr.length; i++) {
      if (alreadySelected.includes(arr[i]) !== true) {
        const next = [...alreadySelected, arr[i]];
        if (next.length === arr.length) {
          result.push(next);
          continue;
        }
        recursive(next);
        continue;
      }
    }
  }
  recursive([]);

  return result;
}
```

재귀를 자주 사용하지 않아서, 매우 어색하고 시간이 오래 걸렸다.
이제 nPn 까지는 완료했다. n 을 k 로 바꿔서 구현하면 끝이다.

## Step3

k 를 변수로 두자. 기본값은 n (arr.length) 으로 설정한다. 코드에 큰 차이가 없다. selected.length === k 이면 terminate 하면 된다.

```js
function permute(arr, _K) {
  const k = _k ?? arr.length;
  const result = [];
  function recursive(alreadySelected) {
    for (let i = 0; i < arr.length; i++) {
      if (alreadySelected.includes(arr[i]) !== true) {
        const next = [...alreadySelected, arr[i]];
        if (next.length === k) {
          result.push(next);
          continue;
        }
        recursive(next);
        continue;
      }
    }
  }
  recursive([]);

  return result;
}
```

## Refactoring

코드를 리팩터링 해보자. 해당 코드의 문제점은 다음과 같다.

- Array.prototype.includes 메소드를 사용하기 때문에, 매 순회마다 O(n) 의 시간복잡도가 생긴다. 이를 Set 으로 처리하면, O(1) 로 줄일 수 있다.
- early return 을 잘 활용하면 코드가 훨씬 깔끔해질 것 같다.

개선해보자

```js
function permute(arr, _k) {
  const k = _k ?? arr.length;
  const result = [];

  function recursive(alreadySelected) {
    if (alreadySelected.size === k) {
      result.push(Array.from(alreadySelected));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (alreadySelected.has(arr[i]) === true) {
        continue;
      }
      alreadySelected.add(arr[i]);
      recursive(alreadySelected);
      alreadySelected.delete(arr[i]);
      continue;
    }
  }

  recursive(new Set([]));

  return result;
}
```

Execution Time 을 측정했을 때, 훨씬 빨라졌다. n=6 기준으로, 1500ms, 1000ms 로 500ms 가량 개선할 수 있었다.

## 러닝

- 재귀에는 termination 조건이 중요하다.
- Set을 사용하면 O(n)을 O(1)로 줄일 수 있다.
