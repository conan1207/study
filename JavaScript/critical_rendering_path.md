# Critical rendering path

**브라우저에 url 입력하면**

- 브라우저가 HTML 파일 (requests / response)
- HTML 파일 받아 로딩 (loading)
- HTML 요소를 DOM요소로 변환 css를 CSSOM 변환 브라우저(window)에 표기하기 위해 DOM트리와 CSS트리를 합쳐 rendering 트리를 만듦(scripting)
- 브라우저(window)에 표기하기 위해 구조를 작성함(rendering)
- 각각의 요소들이 어느 위치에 얼만큼의 크기로 위치할 것인지 계산 (layout)
- 그림을 그린다 바로 그리지 않고 레이어 단계를 만들어서 준비해놓음 for! 성능개선을 위해서 (painting)

**Construction**  
requests/response, loading, scripting  
DOM CSSOM RenderTree

- html페이지에서 브라우저가 이해할 수 있도록 브라우저 언어로 바꾸는 과정

**Operation**  
rendering, layout, painting  
layout paint composition

- 렌더링 트리로 구조를 작성하고 요소가 그려지게 될 곳을 계산하고 실제로 그리는 과정
- Composition 페인팅 단계에서 준비된 애를 배치함

**Construction 단계에서 성능 빠르게 하는 법**

- DOM, CSS규칙이 작으면 작을 수록  


**Operation 단계에서 성능 빠르게 하는 법**

- paint가 자주 일어나지 않도록
- layout(position)이 바뀌면 성능 나빠짐
- composition 만 바뀌면 best!
