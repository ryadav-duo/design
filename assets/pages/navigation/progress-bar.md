---
title: Progress Bar
template: child-1col-coded
active_page: ['progress-bar']
snippet_title: Progress Bar
notes: 'Indicates via highlighting the complete vs. incomplete steps in a multi-step process. Green checkmarked elements indicate completed steps. White, numbered steps indicate incomplete steps.

A dropdown menu explicitly identifies with text, checkmark symbols, and strike-through text which steps are completed.'
example: '
<div class="base-progress visible" data-expire-name="welcome-progress" data-expire-count="1">
  <p class="progress-welcome">
    Welcome to Duo, admin
  </p>
  <ul class="progress-bar">
    <li class="progress-bar-section completed"><i class="icon-check content"></i></li>
    <li class="progress-bar-section completed"><i class="icon-check content"></i></li>
    <li class="progress-bar-section completed"><i class="icon-check content"></i></li>
    <li class="progress-bar-section completed"><i class="icon-check content"></i></li>
    <li class="progress-bar-section  completed ">
      <i class="icon-check content"></i>
    </li>
    <li class="progress-bar-section  completed ">
      <i class="icon-check content"></i>
    </li>
    <li class="progress-bar-section  completed ">
      <i class="icon-check content"></i>
    </li>
  </ul>
  <div class="dropdown dropdown-light dropdown-progress">
    <div class="dropdown-toggle">
      <i class="icon-chevron-thick-down  completed "></i>
    </div>
    <nav class="dropdown-content" style="display: none;">
      <ul class="progress-checklist">
        <li class="progress-step completed">Step 1: Sign up for Duo</li>
        <li class="progress-step completed">Step 2: Set up two-factor authentication</li>
        <li class="progress-step completed">Step 3: Add a backup phone number</li>
        <li class="progress-step completed">Step 4: Log in to the Admin Panel</li>
        <li class="progress-step  completed ">
          Step 5: Protect a new application
        </li>
        <li class="progress-step  completed ">
          Step 6: Add a user and enroll them in Duo.
        </li>
        <li class="progress-step  completed ">
          Step 7: Log in to your app as an end user
        </li>
      </ul>
    </nav>
  </div>
  <div class="dropdown dropdown-light dropdown-finish">
    <button type="submit" class="positive button dropdown-toggle"> <i class="icon-check"></i> Finish </button>
    <nav class="dropdown-content" style="display: none;">
      <div class="progress-finish-image">
        <img class="zen-taco" src="/images/zen-taco.png?v=c53df">
      </div>
      <div class="progress-finish-message">
        <h1>Congrats!</h1>
        <p>
          Sit back and enjoy a taco. You&#39;re now protected with Duo. Next, go to Settings in the sidebar to customize your Duo experience.
        </p>
        <button class="ghost progress-dismiss"> Got it, thanks! </button>
      </div>
    </nav>
  </div>
</div>
'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="base-progress visible" data-expire-name="welcome-progress" data-expire-count="1">
  <p class="progress-welcome">
    Welcome to Duo, admin
  </p>
  <ul class="progress-bar">
    <li class="progress-bar-section completed"><i class="icon-check content"></i></li>
    <li class="progress-bar-section completed"><i class="icon-check content"></i></li>
    <li class="progress-bar-section completed"><i class="icon-check content"></i></li>
    <li class="progress-bar-section completed"><i class="icon-check content"></i></li>
    <li class="progress-bar-section  completed ">
      <i class="icon-check content"></i>
    </li>
    <li class="progress-bar-section  completed ">
      <i class="icon-check content"></i>
    </li>
    <li class="progress-bar-section  completed ">
      <i class="icon-check content"></i>
    </li>
  </ul>
  <div class="dropdown dropdown-light dropdown-progress">
    <div class="dropdown-toggle">
      <i class="icon-chevron-thick-down  completed "></i>
    </div>
    <nav class="dropdown-content" style="display: none;">
      <ul class="progress-checklist">
        <li class="progress-step completed">Step 1: Sign up for Duo</li>
        <li class="progress-step completed">Step 2: Set up two-factor authentication</li>
        <li class="progress-step completed">Step 3: Add a backup phone number</li>
        <li class="progress-step completed">Step 4: Log in to the Admin Panel</li>
        <li class="progress-step  completed ">
          Step 5: Protect a new application
        </li>
        <li class="progress-step  completed ">
          Step 6: Add a user and enroll them in Duo.
        </li>
        <li class="progress-step  completed ">
          Step 7: Log in to your app as an end user
        </li>
      </ul>
    </nav>
  </div>
  <div class="dropdown dropdown-light dropdown-finish">
    <button type="submit" class="positive button dropdown-toggle"> <i class="icon-check"></i> Finish </button>
    <nav class="dropdown-content" style="display: none;">
      <div class="progress-finish-image">
        <img class="zen-taco" src="/images/zen-taco.png?v=c53df">
      </div>
      <div class="progress-finish-message">
        <h1>Congrats!</h1>
        <p>
          Sit back and enjoy a taco. You&#39;re now protected with Duo. Next, go to Settings in the sidebar to customize your Duo experience.
        </p>
        <button class="ghost progress-dismiss"> Got it, thanks! </button>
      </div>
    </nav>
  </div>
</div>
```
```scss
.base-progress {
    background-color: $grey-darker;
    position: relative;
    top: 0;

    & > * {
        display: inline-block;
        vertical-align: middle;
    }

    .dropdown-finish {
        .dropdown-content {
            box-shadow: 0 4px 8px 0 $grey;
            z-index: 1001;

            &:before {
                border-bottom-color: $duo-green;
            }
        }
        .dropdown-toggle:hover {
            background-color: $duo-green-dark;
        }
    }

    .dropdown-progress {
        .dropdown-content {
            border: 1px solid $grey-light;
            right: calc(1rem - 2px);

        }
        .dropdown-toggle {
            height: 2rem;
            margin: 0 1rem;

            &:hover {
                background-color: black;
            }

            i {
                left: 0;
                top: 8px;

                &.completed {
                    color: $duo-green;
                }
            }
        }
    }
}

.progress-bar {
    margin: 0;
    padding: 0;

    li {
        border-radius: 50%;
        display: inline-block;
        height: 2rem;
        margin: 0;
        position: relative;
        width: 2rem;

        &:before,
        &:after {
            background-color: white;
            content: "";
            height: 0.25rem;
            position: absolute;
            top: 1em;
            width: 1em;
        }
        &:before {
           left: -0.75em;
        }
        &:after {
            left: 2em;
        }
        &:first-child:before {
            content: none;
        }
        &:last-child:after {
            content: none;
        }

        & + li {
            margin-left: 1rem;
        }

        &.completed {
            background-color: $duo-green;
            color: white;

            &:before,
            &:after {
                background-color: $duo-green;
            }
        }
        &:not(.completed) {
            background-color: white;
        }

        .content {
            height: 1rem;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);

            &.number {
                color: $grey;
                margin-top: -2px;
            }
        }
    }
}

.progress-checklist {
    list-style-type: none;
    padding: 0;
    width: 310px;
    z-index: 1100;

    li {
        margin-bottom: .5rem;

        &:not(.completed) {
            margin-left: 30px;
        }
    }

    .completed {
        color: $grey;
        font-size: 13px;
        text-decoration: line-through;

        &:before {
            color: $duo-green;
            content: '\e033';
            display: inline-block;
            font-family: $icon-font-family;
            font-size: 16px;
            margin-right: 16px;
            text-decoration: none;
            vertical-align: bottom;
        }

        a {
            color: $grey;
            text-decoration: line-through;
        }
    }
}

.progress-dismiss:not(button) {
    color: $grey;
    float: right;
    margin-top: .5rem;

    &:hover {
        color: $grey-light;
    }

    i {
        display: inline-block;
        margin-right: 4px;
        position: relative;
        text-decoration: none;
        top: 2px;
        vertical-align: bottom;
    }

    @media all and (max-width: 1200px) {
        margin-top: -0.5rem;
    }
}

.progress-finish-button {
    float: right;

    &:hover + .progress-finish-box {
        display: block;
    }
}

.progress-finish-box {
    display: none;
    position: absolute;
    right: 3rem;
    top: 150px;
    width: 300px;
    z-index: 200;

    @media all and (max-width: 1200px) {
        top: 185px;
    }
}

.progress-finish-image {
    background: url('../images/progress-bg.png');
    background-size: 100%;
    margin: -1rem -1rem 1rem -1rem;
    text-align: center;
    width: 300px;

    img {
        display: inline-block;
        vertical-align: bottom;
        width: 150px;
    }
}

.progress-finish-message {
    text-align: center;
}

.progress-welcome {
    color: white;
    margin: 0 2rem 0 0;

    @media all and (max-width: 1200px) {
        display: block;
        margin-bottom: 1rem;
    }
}

```
