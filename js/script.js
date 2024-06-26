// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
};

// Initialize Firebase
initializeApp(firebaseConfig);

// サインアップを担当する独自関数
function signUpUser(email, password){
  const auth = getAuth();
  console.log(email, password)

  createUserWithEmailAndPassword(auth,email,password)
    .then(function(userInfo){
      // 登録成功後にやりたいことをここに書く
      console.log(userInfo);
    })
    .catch(function(error){
      // 登録失敗後にやりたいことをここに書く
      console.log(error);
      $('#message').html(error);
    });
};

// サインアップボタン押したら
$('#signup-button').on('click', function(){
  const email = $('#signup-email').val();
  const password = $('#signup-password').val();
  console.log(email, password)

  signUpUser(email, password);
});

// ログインを担当する独自関数
function logInUser(email, password){
  const auth = getAuth();

  signInWithEmailAndPassword(auth,email,password)
  .then(function(userInfo){
    // ログイン成功後にやりたいことをここに書く
    console.log(userInfo);
    location.href = 'index.html';
  })

  .catch(function(error){
    // ログイン失敗後にやりたいことをここに書く
    console.log(error)
    $('#message').html(error);
  });
}
// ログインボタンを押した時の処理
$('#login-button').on('click', function(){
  const email = $('#login-email').val();
  const password = $('#login-password').val();
  
  logInUser(email, password);
});

// ログアウトを担当する独自関数
function logOutUser (){
  const auth = getAuth();
  signOut(auth).
  then(function(userInfo){
    console.log(userInfo);
    location.href = 'login.html';
  }).
  catch(function(error){
    console.log(error)
    $('#message').html(error);
  });
}

// ログアウトボタンを押した時の処理
$('#logout-button').on('click', function(){

  logOutUser();

});

