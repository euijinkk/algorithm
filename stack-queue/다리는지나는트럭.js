function solutionLongTimeVersion(bridge_length, weight, truck_weights) {
  let time = 0;
  let onBirdge = [];

  while (onBirdge[truck_weights.length - 1] !== bridge_length + 1) {
    const totalWeightOnBirdge = onBirdge.reduce((a, b, i) => {
      if (i >= truck_weights.length) {
        return a;
      }
      if (onBirdge[i] < bridge_length) {
        return a + truck_weights[i];
      }
      return a;
    }, 0);

    let currentTruck = truck_weights[onBirdge.length] ?? 0;

    if (totalWeightOnBirdge + currentTruck <= weight) {
      if (onBirdge.length < truck_weights.length) {
        onBirdge.push(0);
      }
    }

    onBirdge.forEach((t, i) => onBirdge[i]++);
    time++;
  }

  return time;
}
/**
 * **다시풀어보기**
 * 풀이 시간 : 00:53 ~ 01:21
 *
 * 풀이 과정 :
 *
 * 풀이 참고 및 Learning :
 * 이정도 구현은 좀 빡세긴하다. 이런 구현을 침착하게 해낼 줄 알아야 하는 것 같다. 실무의 어려운 문제가 이런 난이도쯤 되는 것 같다.
 * 침착하게 구현사항을 생각해보고 푸는 연습을 하자
 * 현실을 그대로 모델링하면 좋아보인다. 현실을 모델링하는 큐를 생각해보자. 다리는 FIFO 구조이다.
 *
 * 매 반복문마다 reduce를 돌리며 연하고 있다. 시간 복잡도가 최대 n^2이다. 반복문을 빼서 n까지 줄여보자.
 * queue 도입 + shift 활용 + 반복문 돌지 않기 위한 별도 변수 추가
 */

function solutionQueueVersion(bridge_length, weight, truck_weights) {
  let time = 0;
  let onBirdgeQueue = []; // { weight: number; timeToCross: number }[]
  let weightOnBridge = 0;

  while (truck_weights.length > 0 || onBirdgeQueue.length > 0) {
    if (onBirdgeQueue[0]?.timeToCross === time) {
      weightOnBridge -= onBirdgeQueue[0].weight;
      onBirdgeQueue.shift();
    }

    let currentTruck = truck_weights[0] ?? 0;

    if (weightOnBridge + currentTruck <= weight && truck_weights.length > 0) {
      onBirdgeQueue.push({
        weight: truck_weights.shift(),
        timeToCross: time + bridge_length,
      });
      weightOnBridge += currentTruck;
    }

    time++;
  }

  return time;
}
