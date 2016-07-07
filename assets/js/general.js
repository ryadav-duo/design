'use strict';

// Global Variables

// Functioning Functions
function makeActive(els, activeClass, index) {
  Array.prototype.forEach.call(els, function(el) {
  if (el.classList) {
    el.classList.remove(activeClass);
  }
  else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
  });
  if (els[index].classList) {
  els[index].classList.add(activeClass);
  }
  else {
  els[index].className += ' ' + activeClass;
  }
}

//// Create switchable code tabs
function snippetTabs (containers) {
  Array.prototype.forEach.call(containers, function(container) {
    var codeSnippets = container.querySelectorAll('.codehilite');

    var numOfTabs = codeSnippets.length;

    //create toggle navigation
    var toggleNav = container.querySelector('ul');
    var toggleNavItem = toggleNav.querySelectorAll('li');
    toggleNav.classList.add('nav--snippet-toggle');

    //Function to call to toggle classes
    function toggleSnippet(a, index) {
      makeActive(toggleNavItem, 'current', index);
      makeActive(codeSnippets, 'active', index);
    }

    var i = 0;
    do {
      //get the link on the page and use it to make a nav item
    if(i === 0) {
      toggleNavItem[i].classList.add('current');
      codeSnippets[i].classList.add('active');
    } else {
      // codeSnippets[i].classList.add('inactive');
    }
    //attach a listener event to run the toggle function of the code snippet
    toggleNavItem[i].querySelector('a').addEventListener('click', function(event) {
      event.preventDefault(this);
      toggleSnippet(this, this.getAttribute('href'));
    }, false)
      i++
    }
    while(i < numOfTabs);
  })
}



// Put things here that you want to executed when the document is ready
var fa = function() {
  var codeContainers = document.querySelectorAll('.c-example-code');
  if (codeContainers.length >= 1) {
    snippetTabs(codeContainers);
  }
}

// You know wait for page to be ready to do stuff

function ready(fa) {
  if (document.readyState !== 'loading'){
    console.log('document no ready');
    fa();
  } else {
    document.addEventListener('DOMContentLoaded', fa);
    console.log('woot! all ready to go');
  }
}

ready(fa);
