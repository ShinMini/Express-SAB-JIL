## this md file was written by mini

* Css most useful feature is can associate with html

---

### How to add css file to html code

* for example 

``` html

<html>
<head>
<!--- import link about css directory --->
<link rel="stylesheet" href="css/style.css">

</head>
</html>


``` 

# components of css 

* css에는 여러가지 컴포넌트들이 있다. 
* 크게 세 가지로 구분되는데, 
  1. 선택자
  2. 속성명
  3. 속성값
  * example

  ``` Css
  h1 {
color: red;
  }
```
> 이때,
  > > h1 ->선택자
  > > color -> 속성명
  > > red -> 속성값


  * css의 선택자 요소 설명

  1. 자손 선택자
  * p strong { border: 1px solid blue; } -> p안에있는 strong 요소만 선택

  2. 자식 선택자
  * ul > li { border: 1px solid blue; } -> ul tag 의 직계 자식만 선택, 자손 선택 x 

  3. 그룹 선택자 
  * h1, h2, h3 { border: 1px solid blue; } -> 

  4. 순서선택자
  * ul li:nth-of-type(1) { border: 1px solid red; } -> ul태그의 자식 li 태그 중 1 번째 태그에만 css 적용 

  5. 수열 선택자
  * ul li:nth-of-type(2n) { border: 1px solid blue; } -> \`\` 짝수요소만 선택후 css 적용

  6. 마지막 요소 선택자 
  * ul li:last-child { borer: 1px solid blue; } -> 형제 요소 중 마지막 요소만 선택 후 style 적용
  A
  7. 속성 선택자 - HTML요소의 속성을 선택하여 스타일 적용가능
  * input[type="text"] { border: 1px solid blue; } -> html의 input tag 중 type="text" 속성을 가진 요소에 스타일 적용

  8. 가상 선택자 - (!!준내 중요!!)  실제 HTML 요소가 아닌 가상의 요소를 선택해 적용한다. 
  * example 
  * 1] :hover
  h1:hover {
border: 1px solid red; 
  } 
*  -> :hover는 선택한 요소 위에 마우스 포인터를 올렸을 때 스타일을 적용하라는 의미이다. 
* 2] :before, :after
h2:before {
content: "beforontent";
color: blue;
}

h2:after {
content: "after content"
           color: red;
   }

## 결과: 저장 후 웹을 리로드해 h2 요소 안을 살펴보면, HTML 파일에서 입력하지 않은 ::before와 ::after라는 가상의 요소가 생성된다. 

* --> CSS file에서 content 속성에 입력한 before content, after content가, HTML에서 작성한 기존 h2 태그 택스트(안뇽!)의 앞(:before), 뒤(:after)에 가상 콘텐츠를 만든다. 

---

### content 속성은 html의 속성에 해당하는 components의  text를 변경할 수 있다. -> context 변경 가능. 

9. 클래스 선택자 - html tag의 클래스를 선택해 요소에 스타일을 적용시킬 수 있다. 

---

## 오늘 배운 css 속성

* remind today's learned.

1. nth-of-child(n);
2. object-fit: fill, cover, contian;
3. z-index: 1, 2 ... ; // z-index value가 높은 요소를 무조건 위로 올린다. 
4. opacity: 0~1; // 투명도 설정, 0 -> 투명, 1 -> 불투명

---

