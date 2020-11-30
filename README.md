# HTML ❕

**Google에서 css파일이나 font파일 우선 로드하는 법...!**

리포팅툴 사용하는데 폰트 로드가 나중에 돼서 화면이 자꾸 깨졌다.(크롬)  
저것을 깨닫기 전에 내가 코드 작성을 잘못한 줄 알고 눈물의 서커스를 함.  
우선적으로 리소스 하는 법 외에 나중에 리소스 하는 법도 있음.

```html
<link rel="preload" as="style" href="test.css" />
<link
  rel="preload"
  as="font"
  crossorigin="crossorigin"
  type="font/woff2"
  href="test.woff2"
/>
```

[구글 디벨로퍼스 - 리소스우선순위지정](https://developers.google.com/web/fundamentals/performance/resource-prioritization?hl=ko "By. Sérgio Gomes")

**404.3 에러가 뜬다면?**

mp4 파일로 동영상 팝업을 작업했는데 '404.3 - Not Found' 에러가 떴다.

이때는 web.config 파일에 확장명을 추가해주면 된다.

```
<system.webServer>
      <staticContent>
            <mimeMap fileExtension=".mp4" mimeType="application/octet-stream" />
        </staticContent>
  </system.webServer>
```

HTML, CSS, JS 파일은 되도록이면 분리!

**검색엔진최적화 (SEO)**

- META 태그
- Robot.txt
- 적절한 시맨틱 태그 사용

<hr />

# CSS ❕

<hr />

**코드컨벤션 (유지보수 용이 - 모든 언어에서 해당)**

**Reflow & Repaint 최소화**

- CSS로 작성 후, JS로 Class 추가 방식 (DOM 구조상 끝단의 노드에 class)
- 하위 선택자 최대한 줄이기
- will-change 속성 사용 (ie는 안 됨)

**반응형 단위📏**

- 박스 (v\*, %, flex)
- 폰트(rem, em)
- 미디어쿼리 지정시에 rem 사용하면 좀 더 유동적으로 보여줄 수 있음

# JavaScript ❕

<hr />

```javascript
// 기본 동작 방지
return false; // ex) onClick
e.preventDefault(); // 함수식에 (React)
```
