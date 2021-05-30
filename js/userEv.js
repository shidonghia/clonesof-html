function uploadAvatar() {
    document.getElementById('myFile').click();
}

document.getElementById('myFile').addEventListener('change', function(e){
    const preview = document.getElementById("user-profile__avatar");
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();


    reader.addEventListener("load", function () {
        // convert image file to base64 string
        console.log(reader.result)
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
})

document.getElementById('user-manage-profile-btn').addEventListener('click', function(e) {
    var userManagePost = document.getElementById('user-manage__post');
    var userInfoDetail = document.getElementById('user-info-detail');
    var userProfileBtn = document.getElementById('user-manage-profile-btn');
    var userPostBtn = document.getElementById('user-manage-post-btn');
    userPostBtn.classList.remove('user-manage__nav-link--active');
    userProfileBtn.classList.add('user-manage__nav-link--active');
    userManagePost.style.display = 'none';
    userInfoDetail.style.display = 'block';
})

document.getElementById('user-manage-post-btn').addEventListener('click', function(e) {
    var userManagePost = document.getElementById('user-manage__post');
    var userInfoDetail = document.getElementById('user-info-detail');
    var userProfileBtn = document.getElementById('user-manage-profile-btn');
    var userPostBtn = document.getElementById('user-manage-post-btn');
    userProfileBtn.classList.remove('user-manage__nav-link--active');
    userPostBtn.classList.add('user-manage__nav-link--active');
    userInfoDetail.style.display = 'none';
    userManagePost.style.display = 'block';
})