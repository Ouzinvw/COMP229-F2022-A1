// COMP229-F2022-A1
// Ouzin von Wahl
// 301229915
// October 3, 2022

(function () {
    function Start() {
        console.log('App started');
    }

    window.addEventListener('load', Start)
})();

// Submit and redirect to homepage
document.getElementById("submitBtn").onclick = function(){
    location.href = "/";
    alert('Message sent!');
};