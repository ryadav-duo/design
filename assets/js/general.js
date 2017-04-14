"use strict";
// Global Variables
const ESC_KEY = 27;
const SPACE_KEY = 32;
const ENTER_KEY = 13;

// Functioning Functions
  //This function adds event listeners
function addEars(els, et, f) {
  els.forEach(e => {
    e.addEventListener(et, f, false)
    }
  )
}

function makeActive(els, activeClass, index) {
  if(els.length >= 1) {
    Array.prototype.forEach.call(els, function(el) {
        el.classList.remove(activeClass);
    });
      els[index].classList.add(activeClass);
  } else {
      els.classList.add(activeClass);
  }
}
function changeClasses(e, actions) {
	for (let key in actions) {
		if (actions.hasOwnProperty(key)) {
			let aName = key
			let classes = actions[key]
			classes.forEach(className => {
				e.classList[aName](className)
			})
		}
	}
}
// Dropdown functionality

// set the class names for common used selectors
const dropdownClass         = '.c--dropdown';
const dropdownTriggerClass  = '.a--dropdown-trigger';
const dropdownContentClass  = '.a--dropdown-content';

// loop through the page and find all dropdown,
// then attach event listeners to all of them
function findDropdowns(cName) {
	let dropObjects = document.querySelectorAll(cName);
	dropObjects.forEach(dropObject => {
		dropObject.addEventListener('click', function(e) {
            // stop link from linking
			e.preventDefault(this)
			e.stopPropagation()
            // close any other open dropdowns exclude this one
            closeAllDropdowns(dropdownClass, this)
            // open this dropdown
			toggleDropdown(this)
            // make sure it's totally visible on screen, if not bump it over
            checkEdge(this)
		}, false)
		dropObject.addEventListener('keydown', function(e) {
			if(e.which === SPACE_KEY || e.which === ENTER_KEY) {
                // stop link from linking
    			e.preventDefault(this)
    			e.stopPropagation()
                // close any other open dropdowns
                closeAllDropdowns(dropdownClass, this)
                // open this dropdown
    			toggleDropdown(this)
                // make sure it's totally visible on screen, if not bump it over
                checkEdge(this)
			}
			else if(e.which === ESC_KEY) {
				closeAllDropdowns(dropdownClass)
			}
		}, false)
	})
    // close the dropdowns if the user clicks anywhere on screen
    document.querySelector('body').addEventListener('click', function(e) {
        closeAllDropdowns(dropdownClass);
    })
}
function closeAllDropdowns(e, exclude) {
	let allDropdowns = document
		// close all dropdowns
		.querySelectorAll(e);

	allDropdowns.forEach(dropdown => {
        // if there is a dropdown to be excluded passed along
        // check to see if it matches one of the dropdowns in the allDropdowns variable and skip it
        if (exclude) {
            if (exclude == dropdown) {
                return;
            }
        }
        // get the parts of the dropdown that we need to interact with
		let contentContainer = dropdown.querySelector(dropdownContentClass)
		let dropdownTrigger = dropdown.querySelector(dropdownTriggerClass)

        // tell the browser that this element is expanded
        dropdownTrigger.setAttribute('aria-expanded', false)
        // tell the browser that the content area state of expanded and hidden
        contentContainer.setAttribute('aria-hidden', true)
        contentContainer.setAttribute('aria-expanded', false)
	})
}

function checkEdge(e) {
// lets check to see if the dropdown content passed is entirely on screen or not
    // set our variables
    const contentContainer = e;
    // find out how far the content is from the left position of the screen
    const clientLeft = contentContainer.offsetLeft;
    // find out how wide the content is
    const clientWidth = contentContainer.offsetWidth;
    //find out how wide the dropdown trigger is
    const triggerWidth = contentContainer.parentElement.querySelector(dropdownTriggerClass).offsetWidth;
    // find out how wide the document is
    const documentWidth = document.querySelector('body').offsetWidth;

    if (clientLeft + clientWidth >= documentWidth - 20 || triggerWidth >= clientWidth) {
        changeClasses(contentContainer, {
            add: ['edge']
        });
    } else {
        changeClasses(contentContainer, {
            remove: ['edge']
        });
    }
}

function toggleDropdown(e) {
    console.log(e);
// gather all parts of a dropdown
    // get the trigger element
    const dropdownTrigger = e.querySelector(dropdownTriggerClass);
    // get the hidden content area of the dropdown
    const contentContainer = e.querySelector(dropdownContentClass);
    // find out the current state of dropdown opened or closed?
    const ariaExpandedState = dropdownTrigger.getAttribute('aria-expanded') !== 'false';

    // tell the browser that this element is expanded
    dropdownTrigger.setAttribute('aria-expanded', !ariaExpandedState);
    // tell the browser that the content area state of expanded and hidden
    contentContainer.setAttribute('aria-hidden', ariaExpandedState);
    contentContainer.setAttribute('aria-expanded', !ariaExpandedState);

}

//  Create switchable code tabs
function snippetTabs(containers) {
  containers.forEach(container => {
    const codeSnippets = container.querySelectorAll('table.codehilite');

    const numOfTabs = codeSnippets.length;
    let i = 0;

    //  create toggle navigation
    const toggleNav = container.querySelector('ul');
    const toggleNavItem = toggleNav.querySelectorAll('li');
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
      }
    //  attach a listener event to run the toggle function of the code snippet
      toggleNavItem[i].querySelector('a').addEventListener('click', function(event) {
        event.preventDefault(this);
        toggleSnippet(this, this.getAttribute('href'));
      }, false);
      i++;
    }
    while (i < numOfTabs);
  })
}
// Make text in input field highlight
function selectAllCodes() {
  var codeSelects = document.querySelectorAll('.click_to_select_all');
  codeSelects.forEach(codeSelect => {
    codeSelect.addEventListener('click',function(){this.select()})
  })
}
// make codehilite areas one click highlight
function selectText(containerid) {
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
  let codeSelectDivs = document.querySelectorAll('div.click_to_select_div');
  codeSelectDivs.forEach(codeSelectDiv => {
    codeSelectDiv.addEventListener('click', function() {selectText(codeSelectDiv)})
  })
}

function fakeTypeAhead() {
  let focused = document.activeElement;
  if(this === focused) {
    this.addEventListener('keydown', function() {
      this.nextElementSibling.style.display = "block"
    }, false)
  }
}
function closeTypeAhead() {
    this.nextElementSibling.style.display = "none"
}

function jumpToActive() {
  var anchors = document.querySelectorAll('.c--snippet-title')
  var nav = document.querySelector('.base-sidebar .navigation .subnav.active')

  window.addEventListener('scroll', function() {
    var currentPos = (scrollY + 300)

    Array.prototype.forEach.call(anchors, function(anchor) {
      if(currentPos >= anchor.offsetTop) {
        // nav.querySelector('a').classList.remove('active')
        var navItems = nav.querySelectorAll('a.active:not([data-goto="'+anchor.getAttribute('id')+'"])')
          Array.prototype.forEach.call(navItems, function(navItem) {
            navItem.classList.remove('active')
          })
        nav.querySelector('a[data-goto="'+anchor.getAttribute('id')+'"]').classList.add('active')
      }
    })
  })
}

// let nav = document.querySelector('.base-sidebar .navigation .subnav.active');
//   let anchorPos = new Array
//   let anchors = document.querySelectorAll('.c--snippet-title')
//
//     for(let anchor of anchors) {
//       anchorPos.push({
//         eTop: anchor.offsetTop,
//         eBottom: (anchor.offsetHeight + anchor.offsetTop),
//         eId: anchor.getAttribute('id')
//       })
//     }
// //Code to watch the scroll and update menu as necessary
// var last_known_scroll_position = 0;
// var ticking = false;
//
// function jumpToActive(currentPos, navItems) {
//   for(const anchor of anchorPos) {
//     if(currentPos > anchor.eTop && currentPos < anchor.eBottom) {
//       for(let obj of navItems) {
//         changeClasses(obj, {remove: ['active']})
//       }
//       nav.querySelector('a[data-goto="'+ anchor.eId +'"]').classList.add('active')
//     }
//   }
// }
// if(nav) {
//   let navItems = nav.children
//   window.addEventListener('scroll', function(e) {
//     last_known_scroll_position = window.scrollY;
//     if (!ticking) {
//       window.requestAnimationFrame(function() {
//         jumpToActive(last_known_scroll_position, navItems);
//         ticking = false;
//       });
//     }
//     ticking = true;
//   })
// }
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
      response.forEach(page => {
        if(page.sections) {
          page.sections.forEach(section => {
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
      return `<div class="empty-message"> Your search for <strong>${page.query}</strong> has returned 0 results.</div>`
    },
    suggestion: function(page) {
      // change the url if the page is a child section of a parent url
      const searchAddress = new Object();
      searchAddress['name'] = page.name
      let searchResult = '<a class="dpl-s-result" href="'
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
  let selected = searchItem.currentTarget.value
  // loop through array of objects for matching name
  let selectedAddress = dplPages.find(s => s.name == selected)
  let searchAddress = `${selectedAddress.base}.html`
  if(selectedAddress.child) {
    searchAddress += `#${selectedAddress.child}`
  }
  window.location.replace(searchAddress)
}

jQuery('#dpl-search').typeahead(null, tParent)
  .on('typeahead:selected', goToPage)
  .on('typeahead:autocompleted', goToPage);

// Put things here that you want to executed when the document is ready
var fa = function() {
  // Gobal vars
  const codeContainers = document.querySelectorAll('.c-example-code');
  const wonkaBar = document.querySelectorAll('.l-component-cluster .wonka-bar input');

  if (codeContainers.length >= 1) {
    snippetTabs(codeContainers);
    findCodeHiite(codeContainers);
  }
  addEars(wonkaBar, 'focus', fakeTypeAhead)
  addEars(wonkaBar, 'blur', closeTypeAhead)
  selectAllCodes()
  findDropdowns('.c--dropdown')
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
