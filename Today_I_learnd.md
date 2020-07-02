# HTML

**Google에서 css파일이나 font파일 우선 로드하는 법...! ** 
리포팅툴 사용하는데 폰트 로드가 나중에 돼서 화면이 자꾸 깨졌다.(크롬)  
저것을 깨닫기 전에 내가 코드 작성을 잘못한 줄 알고 눈물의 서커스를 함.    
우선적으로 리소스 하는 법 외에 나중에 리소스 하는 법도 있음.      

```html
<link rel="preload" as="style" href="test.css">
<link rel="preload" as="font" crossorigin="crossorigin" type="font/woff2" href="test.woff2">
```

[구글 디벨로퍼스 - 리소스우선순위지정](https://developers.google.com/web/fundamentals/performance/resource-prioritization?hl=ko "By. Sérgio Gomes")    			



**404.3 에러가 뜬다면?**   

mp4 파일로 동영상 팝업을 작업했는데 '404.3 - Not Found' 에러가 떴다.  

이때는 web.config 파일에 확장명을 추가해주면 된다.

``````
<system.webServer>
      <staticContent>
            <mimeMap fileExtension=".mp4" mimeType="application/octet-stream" />
        </staticContent>
  </system.webServer>
```



<hr />

# CSS


<hr />

# JavaScript

<hr />
