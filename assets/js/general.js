'use strict';

// Global Variables

// Functioning Functions

//// Create switchable code tabs
function snippetTabs (containers) {
  Array.prototype.forEach.call(containers, function(container) {
    var codeSnippets = container.querySelectorAll('codehilite');

    var numOfTabs = codeSnippets.length;
  }
}

// Put things here that you want to executed when the document is ready
var fa = function() {
  var codeContainers = document.querySelectorAll('.c-example-code');
}

// You know wait for page to be ready to do stuff

function ready(fa) {
  if (document.readyState !== 'loading'){
    console.log('document no ready');
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fa);
    console.log('yep still working');
  }
}

ready(fn);
