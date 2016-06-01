function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

function answer_2(){
  document.getElementById("q2-answer").innerHTML =
  "<ul><li>javascript는 DOM을 이용하면서 <b>HTML의 element, attributes, CSS style을 수정할 수 있다.</b></li> \
  <li>javascript는 <b>HTML의 element와 attributes를 추가하거나 제거할 수 있다.</b></li> \
  <li>javascript는 <b>마우스를 클릭 할 때와 같은 event에 대응해 HTML content를 변경할 수 있다.</b></li></ul>"
}

function answer_3(){
  document.getElementsByClassName("q34-answer")[0].innerHTML =
  "<ul><li><b>Parent Node</b> : 어떤 노드 바로 위(루트쪽)에 연결되어 있는 노드</li> \
   <li><b>Child Nodes</b> : 어떤 원소 바로 아래에 연결되어 있는 노드들</li>\
   <li><b>Sibling Nodes</b> : 같은 부모 노드의 자식 노드들</li>\
   <li><b>Descendant Nodes</b> : 어떤 노드보다 아래쪽에 위치한 노드들</li>\
   <li><b>Ancestor Nodes</b> : 어떤 노드보다 위(루트쪽)에 위치한 노드들 <br>cf) Parent Node의 Sibling Node들은 Ancestor Node가 아님"
}

function answer_4(){
  document.getElementsByClassName("q34-answer")[1].innerHTML =
  "<ul><li><b>document.getElementById()</b> : HTML내에 존재하는 태그 중 함수 인자로 들어가는 값과 같은 id를 가진 element 노드를 반환한다. <b>only ONE value return</b></li> \
   <li><b>document.getElementsByClassName()</b> : HTML내에 존재하는 태그 중 함수 인자로 들어가는 값과 같은 class name을 가진 element 노드를 반환한다. <b> MANY value return</b></li>\
   <li><b>document.getElementsByName()</b> : HTML내에 존재하는 태그 중 함수 인자로 들어가는 값과 같은 name을 가진 element 노드를 반환한다. <b> MANY value return</b></li>\
   <li><b>document.getElementsByTagName()</b> : HTML내에 존재하는 태그 중 함수 인자로 들어가는 값과 같은 tag를 가진 element 노드를 반환한다.<b> MANY value return</b></li></ul>"
}

//Question 5
$('div a').click(function(){
  $(this).text("Answer 5");
})

//Question 6
$('.item').click(function(){
  $(this).attr('style', 'font-size:3em');
})

//Question 7
$('div.demo').dblclick(function(){
  $(this).attr('style', 'color:blue');
})
