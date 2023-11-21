
// NAVBAR BAĞLANTISI
window.addEventListener('DOMContentLoaded', async function() {
  var navbarElement = document.getElementById('navbar');

  try {
    var response = await fetch('/navbar/navbar.html');
    if (!response.ok) {
      throw new Error('Dosya yüklenirken bir hata oluştu.');
    }

    var html = await response.text();
    navbarElement.innerHTML = html;

    var scriptElement = document.createElement('script');
    scriptElement.src = '/navbar/navbar.js';
    document.head.appendChild(scriptElement);
  } catch (error) {
    console.error(error);
  }
});



// HEADER BAĞLANTISI
window.addEventListener('DOMContentLoaded', async function() {
  var headerElement = document.getElementById('header');

  try {
    var response = await fetch('/header/header.html');
    if (!response.ok) {
      throw new Error('Dosya yüklenirken bir hata oluştu.');
    }

    var html = await response.text();
    headerElement.innerHTML = html;

    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = '/header/header.css';
    document.head.appendChild(linkElement);
  } catch (error) {
    console.error(error);
  }
});


// PROJECT BAĞLANTISI

window.addEventListener('DOMContentLoaded', async function() {
  var headerElement = document.getElementById('project');

  try {
    var response = await fetch('/project/project.html');
    if (!response.ok) {
      throw new Error('Dosya yüklenirken bir hata oluştu.');
    }

    var html = await response.text();
    headerElement.innerHTML = html;

    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = '/project/project.css';
    document.head.appendChild(linkElement);
  } catch (error) {
    console.error(error);
  }
});



// NEW BLOG BAĞLAMA
window.addEventListener('DOMContentLoaded', async function() {
  var headerElement = document.getElementById('new-blog');

  try {
    var response = await fetch('/new-blog/new-blog.html');
    if (!response.ok) {
      throw new Error('Dosya yüklenirken bir hata oluştu.');
    }

    var html = await response.text();
    headerElement.innerHTML = html;

    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = '/new-blog/new-blog.css';
    document.head.appendChild(linkElement);
  } catch (error) {
    console.error(error);
  }
});


// SIDE-NAVBAR BLOG BAĞLAMA
window.addEventListener('DOMContentLoaded', async function() {
  var headerElement = document.getElementById('side-navbar');

  try {
    var response = await fetch('/side-navbar/side-navbar.html');
    if (!response.ok) {
      throw new Error('Dosya yüklenirken bir hata oluştu.');
    }

    var html = await response.text();
    headerElement.innerHTML = html;

    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = '/side-navbar/side-navbar.css';
    document.head.appendChild(linkElement);
  } catch (error) {
    console.error(error);
  }
});


window.addEventListener('DOMContentLoaded', async function() {
  var headerElement = document.getElementById('side-nav');
  var openNavButton = document.getElementById('openNavButton');

  try {
    var response = await fetch('/side-nav/side-nav.html');
    if (!response.ok) {
      throw new Error('Dosya yüklenirken bir hata oluştu.');
    }

    var html = await response.text();
    headerElement.innerHTML = html;

    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = '/side-nav/side-nav.css';
    document.head.appendChild(linkElement);

    openNav();
    openNavButton.addEventListener('click', function() {
      if (headerElement.style.width === '0px') {
        openNav();
      } else {
        closeNav();
      }
    });
  } catch (error) {
    console.error(error);
  }
});

function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}







// project bağlantısı

// window.addEventListener("DOMContentLoaded", function () {
//     fetch("/project/project.html")
//       .then(function (response) {
//         return response.text();
//       })
//       .then(function (html) {
//         document.getElementById("project").innerHTML = html;
//       });
//   });



