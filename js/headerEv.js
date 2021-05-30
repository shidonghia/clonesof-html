document.getElementById('header-home-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    var navLinkSideBarEle = document.querySelectorAll('.header-nav-link');
    navLinkSideBarEle.forEach(function(curEle, index){
        curEle.classList.remove('active');
    })
    e.target.classList.add('active');
})
document.getElementById('header-topic-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    var navLinkSideBarEle = document.querySelectorAll('.header-nav-link');
    navLinkSideBarEle.forEach(function(curEle, index){
        curEle.classList.remove('active');
    })
    e.target.classList.add('active');
})
document.getElementById('header-tag-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    var navLinkSideBarEle = document.querySelectorAll('.header-nav-link');
    navLinkSideBarEle.forEach(function(curEle, index){
        curEle.classList.remove('active');
    })
    e.target.classList.add('active');
})

// document.getElementById('header-log-in-btn').addEventListener('click', function(e) {
// 	var statusNotLogin = document.getElementById('not-login');
//     var statusLogin = document.getElementById('had-login');
//     statusNotLogin.style.display = 'none';
//     statusLogin.style.display = 'flex';
// })

document.getElementById('header-log-out-btn').addEventListener('click', function(e) {
	var statusNotLogin = document.getElementById('not-login');
    var statusLogin = document.getElementById('had-login');
    statusNotLogin.style.display = 'inline-block';
    statusLogin.style.display = 'none';
})