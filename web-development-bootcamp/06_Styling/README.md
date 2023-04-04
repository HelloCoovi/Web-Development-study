# 좋은 디자인의 웹 페이지 만들기

> 웹 페이지 스타일링에 대한 공부

### **학습 요소**

&emsp;➪ 크기 & 간격  
&emsp;&emsp;🧩 웹 디자인을 하며 알아둘 크기와 여백을 정하는 규칙  
&emsp;➪ 폰트  
&emsp;&emsp;🧩 google 폰트  
&emsp;➪ CSS transition과 transform  
&emsp;&emsp;🧩 단순한 효과에서 부터 애니메이션 지정까지 가능  
&emsp;➪ 아이콘(SVG)  
&emsp;&emsp;🧩 SVG와 SVG를 이용한 아이콘 설정

---

### **크기와 간격 정하기**

- 최근에는 콘텐츠를 화면 전체에 채우는것이 아닌 좌우에 여백을 줘서 콘텐츠를 가운데에 배치한다.

- 크기와 간격 정하기
  1. 여백 & 간격은 넉넉히, 여백과 간격은 최대한 많이 지정하는것이 좋다.
     - 추가 콘텐츠가 추가 될때를 위한 공간 확보
     - 여백으로 보여주고자하는 콘텐츠로 시선 집중
  2. 비슷한 내용의 컨텐츠끼리는 여백을 적게 다른 내용끼리는 여백을 넉넉히
     - 집중력을 높여준다
  3. 중요한내용은 크게

---

### **폰트**

- 폰트 정하기(google 폰트)

  1. 카테고리 정하기
  2. 스타일 갯수 정하기
     - 약 10~12개(폰트 스타일이 다양하면 폰트의 퀄리티가 높을 확율이 비교적 높아진다)
  3. 원하는 폰트 import하기

- 중요한 내용은 폰트를 **두껍고** 눈에 띄이는 폰트를 사용하자
  - 원하는 내용을 강조해서 시선을 끌수 있다.

---

### **색상**

- 검정 텍스트 보다는 **어두운 회색 글씨**가 페이지와 더 융합되어보이고 자연스럽다.

- 주색상을 정하자

  - 페이지 혹은 기업의 정체성을 보여주는 색상은 더 강한 인상을 남겨준다.  
    ex) Udemy의 보라색, 토스의 파란색
  - CSS 변수 방법을 사용하면 이러한 색상을 편리하게 관리 가능하다

---

### **CSS 변환**

- `transform`을 사용하면 기존 요소를 변형시킬수있음
- `transition`과 `transform`을 활용하면 자연스러운 애니메이션 연출이 가능
  - `transition`에 있는 속성
    - `property`: 전환에 사용할 속성
    - `duration`: 전환되는 시간
    - `timing function`: 빠르게-천천히, 천천히-빠르게 등 전환 속도를 정함
    - `delay`: 전환 지연 시간

---

### **아이콘 사용하기**

- 대부분의 간단한 아이콘은 SVG 형식
  - SVG: 이미지가 아니라 좌표나 색 등이 들어있는 설계도 이며 그때그때 이미지를 생성하는 방식이다.
- 아이콘은 사이트에서 다운로드 or svg 태그로 사용하면 된다.

- https://heroicons.dev/