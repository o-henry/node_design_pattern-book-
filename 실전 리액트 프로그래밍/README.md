
# 실전 리액트 프로그래밍 개정판

 UI 라이브러리인 리액트는 UI 데이터를 관리하는 방법을 제공한다.
 
 UI 데이터는 컴포넌트 내부에서 관리되는 상탯값 과 부모 컴포넌트에서 내려주는 속성값으로 구성된다.
 
 UI 데이터가 변경되면 화면을 다시 그린다. 리액트의 코드는 선언형으로 돔 뿐만 아니라 모바일 환경에서도 UI를 표현할 수 있다.
 
 
#### 속성값과 상태값

리액트에서 UI 데이터는 반드시 상탯값과 속성값으로 관리해야 한다.

그렇지 않으면 UI 데이터가 변경되도 화면이 갱신되지 않을 수 있다.

```js
import React, { useState } from 'react'

function Example() {
 const [color, setColor] = useState('red')

 function onClick() {
   setColor('blue')
  } 

 return (
  <button style={{ backgroundColor: color }} onClick={onClick}>
   변경
  </button>
 )
}

** setColor 함수가 호출되면 상탯값을 변경하고, 해당 컴포넌트가 다시 렌더링된다.
```

```js
function Todo() {
 const [count, setCount] = useState(0);
 
 function onClick() {
  setCount(count + 1)
 }
 
 return (
  <div>
    <Title title={`현재 카운트: ${count}`} />
    <button onClick={onClick}>증가</button>
  </div>
}

function Title(props) {
 return <p>{props.title}</p>
}
```

위 코드에서 부모 컴포넌트인 Todo는 onClick 이벤트가 발생하여 count 상탯값이 변경되며 리렌더링 된다.

이때 자식 컴포넌트인 Title은 부모 컴포넌트가 렌더링 될 때마다 같이 렌더링 된다.

만약, Title이 title 속성값이 변경될 때만 렌더링 되길 원할때, `React.memo`를 이용할 수 있다.

