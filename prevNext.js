/* 다음, 이전 요소 찾기 */
const pName = document.querySelector('.name'),
    pAge = document.querySelector('.age'),
    nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev');

/* 다음 요소 찾기 */
/**
 * nextElementSibling 다음요소가 html 태그가 아닌 공백이나 텍스트값은 무시하고 html 태그만 할당된다.
 * nextSibling 다음요소가 공백이거나 텍스트값이거나 html 태그거나 상관없이 다음요소인 값이 할당된다. 
 */ 

console.dir(pName); // <p>공우정<p> 태그 반환
console.dir(pName.nextElementSibling); // <p>29<p> 태그 반환
console.dir(pName.nextSibling); // 여기는 html태그 없는 공백 반환
console.dir(pName.nextSibling.nextSibling); // <p>29<p> 태그 반환

/* 이전 요소 찾기 */
/**
 * previousElementSibling 이전요소가 html 태그가 아닌 공백이나 텍스트값은 무시하고 html 태그만 할당된다.
 * previousSibling 이전요소가 공백이거나 텍스트값이거나 html 태그거나 상관없이 다음요소인 값이 할당된다. 
 */
console.dir(pAge); // <p>29<p> 태그 반환
console.dir(pAge.previousElementSibling); // <p>공우정<p> 태그 반환
console.dir(pAge.previousSibling); // // 여기는 html태그 없는 공백 텍스트값 반환
console.dir(pAge.previousSibling.previousSibling); // <p>공우정<p> 태그 반환

/* 간단한 프로젝트 연습 */
let current = document.querySelector('.select'),
    liTag = document.querySelectorAll('li');

let next,
    prev;

function handleClickNextBtn(event) {
    next = current.nextElementSibling;
    
    if(next === null) {
        alert('가장 마지막 순서입니다.');
    } else{
        console.log(next);
        for(let i = 0; i < liTag.length; i++) {
            liTag[i].classList.remove('select');
        }
        next.classList.add('select');
        current = next;
    }
    
}

function handleClickPrevBtn(event) {
    prev = current.previousElementSibling;

    if(prev === null) {
        alert('가장 첫번째 순서입니다.');
    } else{
        console.log(prev);
        for(let i = 0; i < liTag.length; i++) {
            liTag[i].classList.remove('select');
        }
        prev.classList.add('select');
        current = prev;
    }
    
}

function init() {
    nextBtn.addEventListener('click', handleClickNextBtn);
    prevBtn.addEventListener('click', handleClickPrevBtn);
}

init();