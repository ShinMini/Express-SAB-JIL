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
5. text-shadow: (n)px, (n)px, (n)px, #nnn;  // 입력값은 box-shadow속성값과 같다
6. border-radius: px, % // 모서리를 속성값만큼 둥글게 만든다. 
7. linear-gradient(방향, 색상1, 생상2)      // 직선 모양의 그레이디언트를 적용한다. 
8. radial-gradient(생상1, 생상2)        // 타원 모양의 그레이디언트를 적용한다. 

* gradient: 한쪽으로 갈 수록 점차 옅어지는 색상 적용.
9. filter: (blur, brightness, contrast, grayscale, hue-rotate, invert, saturate, sepia)     
* 요소의 (흐림, 밝기, 명도 대비, 흑백, 색상 단계, 색상 반전 단계, 채도, 갈색 톤)을 조절한다. 

---


## Chapter 4, css를 사용해 콘텐츠 모양을 자유롭게 변형하기

> 속성명
> transform
>> 속성값
>> scale -> 요소 크기 확대, 축소
>> skew -> 요소를 x축, y축으로 비틀어 변형, 원하는 각도 지정해 기울기 조절 가능.
>> translate -> 선택한 요소를 현재 위치 기준에서 x축 또는 y축으로 이동 가능.
>> rotate -> 선택한 요소를 회전시킨다. 원하는 각도를 지정해 회전할 수 있음.
> 속성명
> transform
> (3D)
>> 속성값
>> rotateX, rotateY -> 선택한 요소를 x축 또는 y축으로 입체감 있게 회전시킨다. 
>> translateZ -> 선택한 요소를 z축으로 입체감 있어 보이게 이동시킨다. 
>속성명
> perspective
>> 속성값
>> px -> 3D 효과가 적용된 요소가 입체감 있어 보이도록 부모 요소에 perspective 속성을 적용하여 원근감을 부여한다. 
> 속성명 
> transform-style 
>> 속성값
>> preserve-3d -> 3D 효과가 적용된 요소에 모션 처리르 하면 해당 3D 효과가 풀리는데, 이때 부모 요소에 preserve-3d 속성을 적용하여 3D 효과를 유지시킬 수 있다. 
> 속성명
> transfrom-origin
>>  가로축, 세로축 -> 요소의 변형이 일어나는 중심축을 가로축, 세로축 기준으로 변경할 수 있다. 
