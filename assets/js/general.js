// Global Variables

// Functioning Functions
function makeActive(els, activeClass, index) {
  Array.prototype.forEach.call(els, function(el) {
    if (el.classList) {
      el.classList.remove(activeClass);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  });
  if (els[index].classList) {
    els[index].classList.add(activeClass);
  } else {
    els[index].className += ' ' + activeClass;
  }
}

//  Create switchable code tabs
function snippetTabs(containers) {
  Array.prototype.forEach.call(containers, function(container) {
    var codeSnippets = container.querySelectorAll('.codehilite');

    var numOfTabs = codeSnippets.length;
    var i = 0;

    //  create toggle navigation
    var toggleNav = container.querySelector('ul');
    var toggleNavItem = toggleNav.querySelectorAll('li');
    toggleNav.classList.add('nav--snippet-toggle');

    //  Function to call to toggle classes
    function toggleSnippet(a, index) {
      makeActive(toggleNavItem, 'current', index);
      makeActive(codeSnippets, 'active', index);
    }

    do {
      //  get the link on the page and use it to make a nav item
      if (i === 0) {
        toggleNavItem[i].classList.add('current');
        codeSnippets[i].classList.add('active');
      } else {
      // codeSnippets[i].classList.add('inactive');
      }
    //  attach a listener event to run the toggle function of the code snippet
      toggleNavItem[i].querySelector('a').addEventListener('click', function(event) {
        event.preventDefault(this);
        toggleSnippet(this, this.getAttribute('href'));
      }, false);
      i++;
    }
    while (i < numOfTabs);
  });
}
// Make text in input field highlight
function selectALlCodes() {
  var codeSelects = document.querySelectorAll('.click_to_select_all');
  Array.prototype.forEach.call(codeSelects, function(codeSelect) {
    codeSelect.addEventListener('click',function(){this.select()})
  })
}

function findDropdowns() {
  var dropObjects = document.querySelectorAll('.dropdown');
  Array.prototype.forEach.call(dropObjects, function(dropObject) {
    dropObject.addEventListener('click', function(e) {
      // if there's an href or something on the toggle don't follow it
      e.preventDefault(this);
      // contain the click so the body doesn't react to it and close the dropdown
      e.stopPropagation();
      toggleDropdown(this)

    }
    , false);
    })
}

//Dropdown code brought over from Application// clicking a dropdown's toggle should, yep, toggle it
function toggleDropdown(e) {

  //  closeAllDropdowns(e);
   var thisDropDown = e.querySelector('.dropdown-content');
     thisDropDown.style.display = (thisDropDown.style.display != 'block' ? 'block' : '' );
       // clicks inside a dropdown's content should not escape
     thisDropDown.addEventListener('click', function(e) {
       e.stopPropagation(this);
     });

       // clicking on links inside dropdown will cause dropdown to close
       var dropDownMenuItems = e.querySelectorAll('.dropdown-content > a');
       Array.prototype.forEach.call(dropDownMenuItems, function(dropDownItem) {
         dropDownItem.addEventListener('click', function(e) {
             this.parentElement.style.display = '';
         })
       })
      document.addEventListener('click', function() {
        closeAllDropdowns();
      })
}
function closeAllDropdowns(e) {
  var allDropdowns = document
      // close all dropdowns
      .querySelectorAll('.dropdown');

      Array.prototype.forEach.call(allDropdowns, function(dropdown) {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
          })
}


// Put things here that you want to executed when the document is ready
var fa = function() {
  var codeContainers = document.querySelectorAll('.c-example-code');
  if (codeContainers.length >= 1) {
    snippetTabs(codeContainers);
  }
  selectALlCodes();
  findDropdowns();
};

// You know wait for page to be ready to do stuff

function ready(fa) {
  if (document.readyState !== 'loading') {
    console.log('document no ready');
    fa();
  } else {
    document.addEventListener('DOMContentLoaded', fa);
    console.log('woot! all ready to go');
  }
}

ready(fa);
