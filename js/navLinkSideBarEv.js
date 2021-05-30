document.getElementById('side-bar-link-home').addEventListener('click', function(e) {
	var navLinkSideBarEle = document.querySelectorAll('.side-bar-link');
    navLinkSideBarEle.forEach(function(curEle, index){
        curEle.classList.remove('side-bar-link--active');
    })
    e.target.classList.add('side-bar-link--active');
})
document.getElementById('side-bar-link-public').addEventListener('click', function(e) {
	var navLinkSideBarEle = document.querySelectorAll('.side-bar-link');
    navLinkSideBarEle.forEach(function(curEle, index){
        curEle.classList.remove('side-bar-link--active');
    })
    e.target.classList.add('side-bar-link--active');
})
document.getElementById('side-bar-link-user').addEventListener('click', function(e) {
	var navLinkSideBarEle = document.querySelectorAll('.side-bar-link');
    navLinkSideBarEle.forEach(function(curEle, index){
        curEle.classList.remove('side-bar-link--active');
    })
    e.target.classList.add('side-bar-link--active');
})
document.getElementById('side-bar-link-tag').addEventListener('click', function(e) {
	var navLinkSideBarEle = document.querySelectorAll('.side-bar-link');
    navLinkSideBarEle.forEach(function(curEle, index){
        curEle.classList.remove('side-bar-link--active');
    })
    e.target.classList.add('side-bar-link--active');
})
document.getElementById('side-bar-link-topic').addEventListener('click', function(e) {
	var navLinkSideBarEle = document.querySelectorAll('.side-bar-link');
    navLinkSideBarEle.forEach(function(curEle, index){
        curEle.classList.remove('side-bar-link--active');
    })
    e.target.classList.add('side-bar-link--active');
})