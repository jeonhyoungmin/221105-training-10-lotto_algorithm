// IIFE, 즉시실행함수(Immediately Invoked Function Expression)
// 선언함과 동시에 실행하는 패턴으로, 무조건적인 실행이 필요한 상황에서 홀용된다.
const indexList = (function numberSet() {
  let tempArray = [];
  for(let i = 0; i<19 ; i++){
    tempArray.push(i+1);
  }
  return tempArray;
})();
// 간단한 정수형태의 난수를 생성하는 함수
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}
// 코어 알고리즘
function afterRandom(arr) {
  let reOrderArray = [];

  let targetArr = arr.map(e => e);
  // targetArr 변수의 시사점
  // 매개변수 arr에 인자로 들어온 배열을 그대로 알고리즘 실행을 통해 편집하게 되면
  // 파괴적 구조가 된다. 개발작성자(강사)의 의도는 arr 즉 매개변수로 들어올 배열이 변형되지 않기를 원했다.
  // 따라서 깊은 복사, 더 나아가 메모리주소를 복제하는 작업을 통해 '비파괴적' 형태를 채택했다.
  while(reOrderArray.length < arr.length) {
    // while : 조건기반 loop.
    // for loop와 가장 크게 대조적인 것은 for()는 반복할 '횟수'를 정하는 형태이지만
    // while loop는 조건이 충족되면 무한정 반복한다. 횟수를 지정할 수 없는 현재의 상태에서 기용
    // * 잘못 사용하면 stackoverflow: 콜스택이 한계치에 다다라 과부하가 오는 상태에 빠지므로 조건에 주의할 것
    let getRandomIntResult = getRandomInt(targetArr[0], targetArr[targetArr.length-1]);

    if(reOrderArray.includes(getRandomIntResult) === true){
      // 결과값이 기존값을 포함하는지를 확인하기 위해 분기를 선택했지만, 이것은 falsy(실패스러운)한 안티 패턴임을 감안하여 확인할 것
    } else {
      reOrderArray.push(targetArr[getRandomIntResult-1]);
      targetArr.splice(getRandomIntResult-1, 1);
    }
  }
  let setIndex = 0;
  reOrderArray.forEach((element, index) => {
    if(element === undefined) {
      reOrderArray[index] = targetArr[setIndex];
      setIndex++;
    }
  });
  return reOrderArray;
}
console.log(afterRandom(indexList));