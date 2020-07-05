# 디자인 패턴

디자인 패턴은 되풀이 되는 문제에 대한 재사용 가능한 솔루션 이다.

---

## Factory

```js
01.
// factory pattern
function createImage(name) {
  return new Image(name);
}
const image = createImage("photo.jpg");
```

```js
02.
// new 연산자를 통한 인스턴스화
const image = new Image(name);
```

위 코드를 비교하자면, new 연산자를 통한 인스턴스는 하나의 특정한 유형의 객체만을 바인딩 할 수 있다.

02번 코드는 Image 유형에만 바인딩 된다는 말. 이에 반해 팩토리는 더 많은 유연성을 제공할 수 있다.
예를 들어, Image 클래스를 각각의 이미지 형식에 맞는 더 작은 객체들로 나누어 리팩토링 한다고 하면 아래 처럼 코드를 구현할 수 있다.

```js
03.
function createImage(name) {
  if (name.match(/\.jpeg$/)) {
    return new JpegImage(name);
  } else if (name.match(/\.gif$/)) {
    return new GifImage(name);
  } else {
    throw new Exception("Unsupported format");
  }
}
```

### Encapsulation

또한 factory 패턴은 클로저를 통해 캡슐화 메커니즘으로 사용할 수 있다. 각 생성자를 비공개로 유지할 수 있다.

```js
04.
function createPerson(name) {
  const privateProperties = {};

  const person = {
    setName: (name) => {
      if (!name) throw new Error("A person must have a name");
      privateProperties.name = name;
    },
    getName: () => {
      return privateProperties.name;
    },
  };

  person.setName(name);
  return person;
}
```

04번 코드에서 privateProperties는 person 객체가 제공하는 인터페이스를 통해서만 조작할 수 있다.
