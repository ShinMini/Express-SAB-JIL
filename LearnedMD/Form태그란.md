# 공부한 것 무지성 기록장

# 기본 태그 속성
* Tag
  * strong, em 
    * strong: bold font
    * em: italic

  * div, span ->
    * div: block element 
    * sapn: inline element
      * This means that to use them semantically, divs should be used to wrap sections of a document, while spans should be used small portions of text, images etc...
  
   * ul, ol, li
    * ul: unordered list
    * ol: ordered list
    * li: list using in ol, ul tag
  * input, label
    * input: create html form can transmmit another form
    * label: can put in input tag label name 
  * type: type can determine input tag types 
    * text: can put text using 
    * password: can put text password
    * checkbox: can check multiple components
    * radio: can check one 
	* date: user can select the date
	* submit: submit all data in form tag
	* reset: reset data in form tag
	* select: print drop down menu to web page 
---

# form 태그
<textarea> : 많은 택스트를 입력받을 때, 

<form>: 여러 입력 양식을 그룹화하고 전송하기.
how to work form tag?
1. form tag make group using form components
2. form tag submit components group to back-end area

---
So form tag processed two area.
	1. front-end area 
		* make `<form>` tag and user interface. 
	2. back-end area
		* processes data of recieved by form tag
---
Form tag must specify two attributes. 
	1. action
		* specifies a specific address value or file location
	2. method
		* specifies how the input value is transmitted.
		* method transmit two ways

 --- 
## form 태그 정리

1. form 태그에는 두개의 속성이 반드시 필요하다. 
	1. action attribute. 
	2. method attribute.

2. 이때, actino attribute는 form 태그로부터 받을 데이터를 어디에서 받아올지 정의한다. 
* example
	1. `<form action="https://datagetExWebpage.com">
	2. `<form action="/somwhere-I-Want_directory"> 

3. method attribute는 action으로 받아온 데이터를 어떻게 보낼지 정의한다. 
	* form 태그에서 method를 활용해  데이터를 보낼 때, method로 정의한 방식을 통해 웹서버에게 데이터를 보내는다.
	* 요청받은 웹서버(HTTP protocol)에서는 몇가지의 방법을 제공하는데
	* 가장 대표적인 방법이 `GET`과 `POST` method이다. 
---
# tag input
## <audio> : 확장 라이브러리 없이 오디오기능 삽입가능하다는 장점있다. 
더 많은 툴을사용하고싶다면, 라이브러의 사용이 필요하지만, 최적화가 느려진다는 단점이 있다. 
--> css, js를 사용해 일정수준의 변형이 가능하기 때문에, 영상 삽입 시 가급적 audio tag의 사용을 권장한다. 
### notion: if you want more feature, 
--> recomend that: insert video link in web component.

* example : <audio>
``` js
// 오디오 태그 삽입할 경우, 여러 option 있으니, 상황에 따라 조절하며 사용 가능.
<audio src="file direction" controls autoplay loop preload />

// exmaple
<body>
    <audio src="img/calm.mp3" controls></audio>
<body>
```

## TIP
* audio tag options description
    * src -> link to audio player location 
    * controls -> show to user control panel in display
    * autoplay -> play auto set (not recommend)
    * loop -> play audio loop (not recommend)
    * preload -> can decrease loading time about prepare aduio player rendering

---
## !! video tag is almost similar audio tag
* different tag description
    * poster tag -> can show poster before starting video => 유튜브 썸내일 생각.
