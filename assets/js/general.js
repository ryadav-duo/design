"use strict";
// Global Variables
const ESC_KEY = 27;
const SPACE_KEY = 32;
const ENTER_KEY = 13;

// Functioning Functions
  //This function adds event listeners
function addEars(els, et, f) {
  Array.prototype.forEach.call(els, function(e) {
    e.addEventListener(et, f, false)
    }
  )
}

function makeActive(els, activeClass, index) {
  if(els.length >= 1) {
    Array.prototype.forEach.call(els, function(el) {
      if (el.classList) {
        el.classList.remove(activeClass);
      } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    });
    if (index && els[index].classList) {
      els[index].classList.add(activeClass);
    } else if (index) {
      els[index].className += ' ' + activeClass;
    }
  } else {
    if (els.classList) {
      els.classList.add(activeClass);
    } else {
      els.className += ' ' + activeClass;
    }
  }
}
function changeClasses(e, actions) {
		for (let key in actions) {
			if (actions.hasOwnProperty(key)) {
				let aName = key
				let classes = actions[key]
				for(let i = 0, len = classes.length; i < len; i++) {
					e.classList[aName](classes[i])
				}
			}
		}
	}
 	function findDropdowns() {
		let dropObjects = document.querySelectorAll('.a--dropdown-trigger');
		Array.prototype.forEach.call(dropObjects, function(dropObject) {
			dropObject.addEventListener('click', function(e) {
				e.preventDefault(this)
				e.stopPropagation()
				toggleDropdown(this)
			}, false)
			dropObject.addEventListener('keydown', function(e) {
				if(e.which === SPACE_KEY || e.which === ENTER_KEY) {
					e.preventDefault(this)
					e.stopPropagation()
					toggleDropdown(this)
				}
				else if(e.which === ESC_KEY) {
					closeAllDropdowns()
				}
			}, false)
		})
	}
	function closeAllDropdowns(e) {
		let allDropdowns = document
			// close all dropdowns
			.querySelectorAll('.c--dropdown');

		Array.prototype.forEach.call(allDropdowns, function(dropdown) {
			let dropdownContent = dropdown.querySelector('.a--dropdown-content')
			let dropdownTrigger = dropdown.querySelector('.a--dropdown-trigger')
			changeClasses(dropdownContent, {add: ['closed'], remove: ['open']})
			changeClasses(dropdownTrigger, {remove: ['open']})
		})
	}
	function toggleDropdown(e) {
		let thisDropDown = e.parentElement.querySelector('.a--dropdown-content')
		changeClasses(thisDropDown, {toggle: ['open', 'closed']})
		changeClasses(e, {toggle: ['open']})
		thisDropDown.addEventListener('blur', function(e) {
			closeAllDropdowns()
		})
		let dropDownMenuItems = thisDropDown.children;
		Array.prototype.forEach.call(dropDownMenuItems, function(dropDownItem) {
			dropDownItem.addEventListener('click', function(e) {
				closeAllDropdowns()
			})
		})
		document.addEventListener('click', function() {
			closeAllDropdowns()
		})
		document.addEventListener('keydown', function(e) {
			if(e.which === ESC_KEY) {
				closeAllDropdowns()
			}
		})
	}

//  Create switchable code tabs
function snippetTabs(containers) {
  Array.prototype.forEach.call(containers, function(container) {
    var codeSnippets = container.querySelectorAll('table.codehilite');

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
// make codehilite areas one click highlight
function selectText( containerid ) {
  var node =  containerid ;
  if ( document.selection ) {
    var range = document.body.createTextRange();
    range.moveToElementText( node  );
    range.select();
  } else if ( window.getSelection ) {
    var rangeW = document.createRange();
    rangeW.selectNodeContents( node );
    window.getSelection().removeAllRanges();
    window.getSelection().addRange( rangeW );
  }
}
//fine all code hilite sections
function findCodeHiite() {
  var codeSelectDivs = document.querySelectorAll('div.click_to_select_div');
  Array.prototype.forEach.call(codeSelectDivs, function(codeSelectDiv) {
    codeSelectDiv.addEventListener('click', function() {selectText(codeSelectDiv)})
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
function fakeTypeAhead() {
  var focused = document.activeElement;
  if(this === focused) {
    this.addEventListener('keydown', function() {
      this.nextElementSibling.style.display = "block"
    }, false)
  }
}
function closeTypeAhead() {
    this.nextElementSibling.style.display = "none"
}

function include(arr,obj) {
    return (arr.indexOf(obj) != -1);
}

var nav = document.querySelector('.base-sidebar .navigation .subnav.active');
var anchorPos = new Array

  var i = 0
  var anchors = document.querySelectorAll('.c--snippet-title')

  Array.prototype.forEach.call(anchors, function (anchor) {
    anchorPos[i] = {'eTop': anchor.offsetTop, 'eBottom': (anchor.offsetHeight + anchor.offsetTop), 'eId': anchor.getAttribute('id')}
    i++
  })


// var activeAnchor = 0
// var prevTags = nav.getElementsByTagName('a')
//
// function activeSection(scroll_pos) {
//   for (var i = 0, len = anchorPos.length; i < len; i++) {
//
//     if (scroll_pos >= anchorPos[i].eTop && scroll_pos <= anchorPos[i].eBottom) {
//       var prevAnchor = anchorPos[i].eId
//       if(activeAnchor == anchorPos[i].eId) {
//         console.log('no change')
//       } else {
//         var activeTag = nav.querySelector('a[data-goto="'+anchorPos[i].eId+'"]')
//         makeActive(prevTags, 'active')
//         makeActive(activeTag, 'active')
//         activeAnchor = prevAnchor
//       }
//     }
//   }
// }
//
// // handle event
//   if(nav) {
//     window.addEventListener('scroll', function() {
//       var currentPos = (scrollY)
//       activeSection(currentPos)
//     })
//   }

function jumpToActive() {
  var nav = document.querySelector('.base-sidebar .navigation .subnav.active')
  var navItems = nav.getElementsByTagName('a')
  var activeAnchor
  var prevAnchor
  var currentPos
  window.addEventListener('scroll', function() {
    currentPos = (scrollY + 100)

    Array.prototype.forEach.call(anchorPos, function(anchor) {
      if(currentPos >= anchor.eTop ) {
        activeAnchor = anchor.eId
        if(activeAnchor != prevAnchor && activeAnchor == anchor.eId) {
          makeActive(navItems, 'active')
          nav.querySelector('a[data-goto="'+ anchor.eId +'"]').classList.add('active')
          // console.log('activeAnchor = ' + activeAnchor)
          // console.log('prevAnchor = ' + prevAnchor)
          // console.log('anchor.eId = ' + anchor.eId)
          prevAnchor = anchor.eId
        } else {
          console.log('no change')
          prevAnchor = anchor.eId
        }
      }
    })
  })
}


// Search the DPL
  //create an object to push these items to in order to create actionable addresses outside of the typeahead
var dplPages = []
  //create, retrieve and format json feed for searching through
var dplSearch = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name', 'description'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  limit: 60,
  prefetch: {
    url: ['json/search.json'],
    transform: function(response) {
      //all of this is to reformat the json feed to allow searching of child sections inside of a parent page
      jQuery.each(response, function(i, page) {
        if(page.sections) {
          jQuery.each(page.sections, function(i, section) {
            section['parent']= page.id
            response.push(section)
          })
        }
      })
      return response
    }
  },
});

// passing in `null` for the `options` arguments will result in the default options being used
var tParent = {
  name: 'page',
  display: function(item) {
    return item.name
  },
  highlight: true,
  hint: false,
  minLength: 2,
  source: dplSearch.ttAdapter(),
  templates: {
    empty: function(page) {
      return '<div class="empty-message"> Your search for <strong>'
        + page.query +
      '</strong> has returned 0 results.</div>'
    },
    suggestion: function(page) {
      // change the url if the page is a child section of a parent url
      var searchAddress = new Object();
      searchAddress['name'] = page.name
      var searchResult = '<a class="dpl-s-result" href="'
      if(page.parent) {
        searchResult += page.parent
        searchAddress['base'] = page.parent
      } else {
        searchResult += page.id
        searchAddress['base'] = page.id
      }
      searchResult += '.html'
      if(page.parent) {
        searchResult += '#' + page.id
        searchAddress['child'] = page.id
      }
      searchResult += '">' + page.name + '<br /> <i>' + page.description + '</i></a>'
      dplPages.push(searchAddress)
      return searchResult
    }
  }
}
// I'm not sure how hacky this is but it's a work around to make the search results keyboard accessable
function goToPage(searchItem) {
  var selected = searchItem.currentTarget.value
  // loop through array of objects for matching name
  var selectedAddress = dplPages.filter(function(s) {
    return s.name == selected
  })
  var searchAddress = selectedAddress[0].base + '.html'
  if(selectedAddress[0].child) {
    searchAddress += '#' + selectedAddress[0].child
  }
  console.log('window location should redirect to ' + searchAddress)
  window.location.replace(searchAddress)
}

jQuery('#dpl-search').typeahead(null, tParent)
  .on('typeahead:selected', goToPage)
  .on('typeahead:autocompleted', goToPage);

// Put things here that you want to executed when the document is ready
var fa = function() {
  // Gobal vars
  var codeContainers = document.querySelectorAll('.c-example-code');
  var wonkaBar = document.querySelectorAll('.l-component-cluster .wonka-bar input');

  if (codeContainers.length >= 1) {
    snippetTabs(codeContainers);
    findCodeHiite(codeContainers);
  }
  addEars(wonkaBar, 'focus', fakeTypeAhead)
  addEars(wonkaBar, 'blur', closeTypeAhead)
  selectALlCodes()
  findDropdowns()
  jumpToActive()
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
