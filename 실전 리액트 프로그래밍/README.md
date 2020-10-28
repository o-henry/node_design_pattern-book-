
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

```js
function Title(props) {
 return <p>{props.title}</p>
}

export default React.memo(Title);
```

`React.memo`는 컴포넌트의 속성값이 변경되는 경우에만 렌더링 될 수 있도록 돕는다.

**속성값과 상태값을 불변 객체로 관리하자**
 
 
#### 리액트 파이버

#### 훅
**useState** 훅의 두 번째 원소는 상탯값 변경 함수. 상탯값 변경함수가 호출되면 해당 컴포넌트를 다시 그린다. 이 과정에서 자식 컴포넌트도 같이 렌더링 된다.

여러개의 상탯값을 하나의 객체로 관리할때는 useReducer 훅을 사용하는게 좋다.

물론 그냥 도 쓸 수 있다.
```js
function Profile() {
 const [state, setState] = useState({ name: '', age: 0 })
 return (
  <input 
    type="text"
    value={state.name}
    onChange={e => setState({ ...state, name: e.target.value }) 
 )
} 
```
useState 훅은 이전 상탯값을 덮어씌우기 때문에 전개연산자를 사용한다.

**useEffect**에 모든 사이드 이펙트를 처리하는게 좋다

 API 호출, 이벤트 처리 함수 등록 해제 등이 부수 효과의 예다.
 
 useEffect 훅에 입력하는 함수를 부수 효과 함수라고 한다. 부수 효과 함수는 렌더링 결과가 실제 돔에 반영된 후 호출되고, 컴포넌트가 사라지기 직전에 마지막으로 호출된다.
 
 useEffect 는 두번째 매개변수로 배열을 입력하는데 이는 의존성 배열로, 대개의 경우 사용하지 않는편이 좋다. ( 버그의 온상 )
 
 
