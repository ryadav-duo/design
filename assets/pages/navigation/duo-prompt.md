---
title: Duo Prompt Nav
template: child-2col-coded
active_page: 'duo-prompt'
snippet_title: Duo Prompt Navigation
notes: "Use the left link navigation for instances where the above navigation is too chunky or doesn't make sense. Currently in use on the Duo Prompt."
example: '<div class="base-navigation">
<div role="banner">
<a href="">
<img src="/images/logo.png" alt="Duo Security Authentication" width="128">
</a>
</div>
<div class="help-sidebar">
<button class="btn btn-support">
<i class="icon-align-justify"></i>
<i class="icon-delete" aria-label="Close"></i>
Settings
</button>
<div class="help-links">
<nav role="navigation">
<a class="help-nav" href="https://guide.duo.com/prompt" target="_blank">
What is this?<i class="icon-new-window" aria-label="Opens new tab"></i>
</a>
<a class="help-nav" href="">
Add a new device
</a>
<a class="help-nav" href="">
My Settings &amp; Devices
</a>
<a href="#" class="need-help">Need help?</a>
</nav>
<div role="contentinfo">
<a href="https://duo.com" class="branding-link" target="_blank">
Powered by Duo Security
</a>
</div>
</div>
</div>
<div class="help-overlay offscreen">
<div class="help-links">
<nav role="navigation">
<a class="help-nav" href="https://guide.duo.com/prompt" target="_blank">
What is this?<i class="icon-new-window" aria-label="Opens new tab"></i>
</a>
<a class="help-nav" href="">
Add a new device
</a>
<a class="help-nav" href="">
My Settings &amp; Devices
</a>
<a href="#" class="need-help">Need help?</a>
</nav>
<div role="contentinfo">
<a href="https://duo.com" class="branding-link" target="_blank">
Powered by Duo Security
</a>
</div>
</div>
</div>
</div>'
---

* [HTML](0)
* [SCSS](1)

```html
<div class="base-navigation">
  <div role="banner">
    <a href="">
      <img src="" alt="Duo Security Authentication" width="128">
    </a>
  </div>
  <div class="help-sidebar">
    <button class="btn btn-support">
      <i class="icon-align-justify"></i>
      <i class="icon-delete" aria-label="Close"></i>
      Settings
    </button>
    <div class="help-links">
      <nav role="navigation">
        <a class="help-nav" href="https://guide.duo.com/prompt" target="_blank">
          What is this?
          <i class="icon-new-window" aria-label="Opens new tab"></i>
        </a>
        <a class="help-nav" href="">
          Add a new device
        </a>
        <a class="help-nav" href="">
          My Settings &amp; Devices
        </a>
        <a href="#" class="need-help">Need help?</a>
      </nav>
      <div role="contentinfo">
        <a href="https://duo.com" class="branding-link" target="_blank">
          Powered by Duo Security
        </a>
      </div>
    </div>
  </div>
  <div class="help-overlay offscreen">
    <div class="help-links">
      <nav role="navigation">
        <a class="help-nav" href="https://guide.duo.com/prompt" target="_blank">
          What is this?
          <i class="icon-new-window" aria-label="Opens new tab"></i>
        </a>
        <a class="help-nav" href="">
          Add a new device
        </a>
        <a class="help-nav" href="">
          My Settings &amp; Devices
        </a>
        <a href="#" class="need-help">Need help?</a>
      </nav>
      <div role="contentinfo">
        <a href="https://duo.com" class="branding-link" target="_blank">
          Powered by Duo Security
        </a>
      </div>
    </div>
  </div>
</div>
```
```sass
.help-links {
  a {
      display: block;

      @include language($lang-french, $lang-german) {
          padding-bottom: 6px;
          line-height: 1.4;
      }
  }

  .help-url {
      text-decoration: none;

      span {
          text-decoration: underline;
      }
  }

  @media(max-width: $medium-screen-breakpoint) {
      margin-top: 12px;
      margin-left: 3px;

      a {
          display: inline;
          font-size: 16px;
          margin-bottom: 0;
      }
  }
}
.help-sidebar {
    .btn-support {
        display: none;
    }

    .help-links a {
        display: block;
    }

    .branding-link {
        margin-top: 1em;
        font-size: 11px;
        color: #666;
        text-decoration: none;
    }

    .branding-link:hover {
        color: #379ed4;
        text-decoration: none;
    }

    @media(max-width: $medium-screen-breakpoint) {
        float: right;

        .btn-support {
            color: $grey;
            display: block;
            position: fixed;
            top: 16px;
            right: 16px;
            background-color: $grey-lighter;
            border: 2px solid $grey;
            z-index: $help-overlay-z;
            @include transition(right);

            .icon-align-justify {
                display: inline-block;
            }

            .icon-delete {
                display: none;
            }

            &.overlay-active {
                right: 190px;

                &:focus {
                    outline: 2px solid $white;
                }

                .icon-align-justify {
                    display: none;
                }

                .icon-delete {
                    display: inline-block;
                }
            }
        }

        .help-links {
            display: none;
        }
    }
}

.help-overlay {
    position: fixed;
    height: 100%;
    width: 180px;
    background: $info-blue;
    top: 0;
    right: 0;
    z-index: $help-overlay-z;
    display: none;
    @include transition(right);

    @media(max-width: $medium-screen-breakpoint) {
        display: block;
    }

    .help-links {
        padding: 10px;

        a {
            color: white;
            display: block;
            font-size: 12px;

            &:focus {
                outline: 2px solid $white;
            }
        }
    }

    .branding-link {
        position: absolute;
        bottom: 16px;
        opacity: 0.5;
        text-decoration: none;

        &:focus {
            outline: 2px solid $white;
            opacity: 1.0;
        }

        &:hover {
            opacity: 1.0;
            text-decoration: none;
        }

    }

    &.offscreen {
        right: -180px;
    }
  }
```
