# NODE 디자인 패턴 책 내용 정리

## Module Pattern

- 디자인 패턴

- 종속성과 의존성 주입


# 자바스크립트 패턴과 테스트

## SOLID

- 단일 책임 원칙

  **하나의 클래스(자바스크립트 함수)는 하나의 책임(기능) 만을 가져야 한다.**

  > 함수의 유일한 관심사는 하나이고, 이 관심사를 어떻게 이행할지는 철저하게 외부에서 제공된 함수에 달려있다.

  > 계산기 라는 클래스가 있다고 가정하였을 때, 계산기 기능 을 담당하는 부분과 GUI 부분은 나눠져야 한다.



- 개방/폐쇄 원칙

  **'모든 소프트웨어 개체는 확장 가능성은 열어 두되 수정 가능성은 닫아야 한다.'**
  
  > 어떤 경우에도 실행 코드를 변경하지 말고, 어떻게든 (상속 등의 방법) 재사용하고 확장하라
  
  > 변경되지 않을 것 이라고 생각 되는 부분과, 변경 사항이 있으리라 보는 특성을 추상화 하라.
  
  > 캐릭터를 생성한다고 하였을 때, 각각의 캐릭터가 움직임이 다를경우 하위에서 움직임 패터을 구현. 그러면, 상위 캐릭터 클래스는 수정이 필요없고, 하위는 움직임을 재정의하여 확장에 대해 개방.
  
  
- 리스코프 치환 법칙

  **어떤 타입에서 파생된 타입의 객체가 있다면 이 타입을 사용하는 코드는 변경하지 말아야 한다**
  
  > 업캐스팅을 해도 문제가 없다. / 부모 클래스는 모든 자식들에 부합해야 한다. 
  

- 인터페이스 분리 원칙
  
  > 각각의 기능을 분리하여, 독립적 인터페이스로 관리 내부 의존성을 약화 리팩토링, 수정, 재배포 용이. 여러개의 구체적인 클래스를 만드는 것



- 의존성 역전 법칙
  
  **상위 수준 모듈은 하위 수준 모듈에 의존해서는 안되며 이둘은 추상화에 의존해야 한다**

## DRY



[타입스크립트와 SOLID](https://medium.com/humanscape-tech/solid-%EB%B2%95%EC%B9%99-%E4%B8%AD-lid-fb9b89e383ef)

