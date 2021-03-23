<template>
  <!-- Header -->
  <header class="header">
    <div class="container">
      <!-- Logo -->
      <div class="header-logo">
        <a href="/">
          <img src="/img/icons/ubuntu-touch-logo.svg" alt="ubuntu-touch-logo" />
        </a>
      </div>

      <!-- Nav -->
      <div class="header-nav">
        <div class="container">
          <b-collapse id="headerNav" class="collapse fade">
            <!-- About Us -->
            <div class="header-dropdown">
              <a v-b-toggle.aboutUsCollapse class="header-dropdown-toggler">
                About Us
                <img
                  class="angle-icon"
                  src="/img/icons/angle-icon.svg"
                  alt="angle-icon"
                />
              </a>
              <b-collapse
                id="aboutUsCollapse"
                accordion="nav-accordion"
                class="header-dropdown-menu"
              >
                <div class="container">
                  <!-- Header Banner -->
                  <div class="header-banner">
                    <p>
                      We dare to dream about a future where users, developers
                      and companies alike can define smart-phones together.
                    </p>
                  </div>
                  <!-- Header Links -->
                  <div class="header-links">
                    <!-- Group -->
                    <ul class="header-links-group">
                      <li>
                        <p class="header-dropdown-link bold">
                          <img
                            src="/img/icons/bullet-gradient.svg"
                            alt="bullet-icon"
                          />
                          Ubports Foundation
                        </p>
                      </li>
                      <li>
                        <a
                          href="http://www.ubports.com"
                          class="header-dropdown-link"
                          target="_blank"
                        >
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://www.ubports.com/foundation/ubports-foundation"
                          target="_blank"
                        >
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Governance and Membership
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://www.ubports.com/foundation/sponsors"
                          target="_blank"
                        >
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Sponsors
                        </a>
                      </li>
                    </ul>

                    <!-- Group -->
                    <ul class="header-links-group">
                      <li>
                        <p class="header-dropdown-link bold">
                          <img
                            src="/img/icons/bullet-gradient.svg"
                            alt="bullet-icon"
                          />
                          Ethos
                        </p>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://ubports.com/donate"
                          target="_blank"
                        >
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Donate to UBports
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://www.ubports.com/community/manifesto"
                          target="_blank"
                        >
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Manifesto
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://ubports.com/contact"
                          target="_blank"
                        >
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Contact
                        </a>
                      </li>
                    </ul>

                    <!-- Group -->
                    <ul class="header-links-group">
                      <li>
                        <p class="header-dropdown-link bold">
                          <img
                            src="/img/icons/bullet-gradient.svg"
                            alt="bullet-icon"
                          />
                          Daily Announcements
                        </p>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://t.me/ubports_news"
                          target="_blank"
                          >UBports News Channel</a
                        >
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://framapiaf.org/@ubports"
                          target="_blank"
                          >Mastodon</a
                        >
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://twitter.com/ubports"
                          target="_blank"
                          >Twitter</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </b-collapse>
            </div>

            <!-- Community -->
            <div class="header-dropdown">
              <a v-b-toggle.communityCollapse class="header-dropdown-toggler">
                Community
                <img
                  class="angle-icon"
                  src="/img/icons/angle-icon.svg"
                  alt="angle-icon"
                />
              </a>
              <b-collapse
                id="communityCollapse"
                accordion="nav-accordion"
                class="header-dropdown-menu"
              >
                <div class="container">
                  <!-- Header Banner -->
                  <div class="header-banner">
                    <a
                      href="https://www.youtube.com/c/UBports/videos"
                      target="_blank"
                    >
                      <img
                        class="d-none d-md-block"
                        src="/img/header/community-banner.jpg"
                        alt="banner-img"
                      />
                    </a>
                    <div>
                      <p>
                        Our telegram group is a meeting point for people who
                        shape the direction of Ubuntu Touch.
                      </p>
                      <p class="d-none d-md-block">
                        We recommend you start
                        <a href="#" class="link">there</a>.
                      </p>
                    </div>
                  </div>
                  <!-- Header Links -->
                  <div class="header-links">
                    <!-- Group -->
                    <ul class="header-links-group">
                      <li>
                        <p class="header-dropdown-link bold">
                          <img
                            src="/img/icons/bullet-gradient.svg"
                            alt="bullet-icon"
                          />
                          Main Groups
                        </p>
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="#">Overflow</a>
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="#"
                          >UX & Graphics</a
                        >
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="#"
                          >English Speaker</a
                        >
                      </li>
                    </ul>

                    <!-- Group -->
                    <ul class="header-links-group">
                      <li>
                        <p class="header-dropdown-link bold">
                          <img
                            src="/img/icons/bullet-gradient.svg"
                            alt="bullet-icon"
                          />
                          Discussions
                        </p>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://forum.ubports.com"
                        >
                          Ubports Form
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://www.reddit.com/r/Ubports/"
                          target="_blank"
                        >
                          Reddit
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://matrix.to/#/#ubports:matrix.org"
                          target="_blank"
                        >
                          UBports On Matrix
                        </a>
                      </li>
                    </ul>

                    <!-- Group -->
                    <ul class="header-links-group">
                      <li>
                        <p class="header-dropdown-link bold">
                          <img
                            src="/img/icons/bullet-gradient.svg"
                            alt="bullet-icon"
                          />
                          Blog & Live
                        </p>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://ubports.com/blog/ubport-blogs-news-1/tag/audiocast-1"
                        >
                          Audiocast
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://ubports.com/blog/ubport-blogs-news-1/tag/ubuntu-touch-q-a-3"
                        >
                          Summarized QA
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://ubports.com/blog/ubport-blogs-news-1"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </b-collapse>
            </div>

            <!-- Contributors -->
            <div class="header-dropdown">
              <a
                v-b-toggle.contributorsCollapse
                class="header-dropdown-toggler"
              >
                Contributors
                <img
                  class="angle-icon"
                  src="/img/icons/angle-icon.svg"
                  alt="angle-icon"
                />
              </a>
              <b-collapse
                id="contributorsCollapse"
                accordion="nav-accordion"
                class="header-dropdown-menu"
              >
                <div class="container">
                  <!-- Header Links -->
                  <div class="header-links">
                    <!-- Group -->
                    <ul class="header-links-group">
                      <li>
                        <p class="header-dropdown-link bold">
                          <img
                            src="/img/icons/bullet-gradient.svg"
                            alt="bullet-icon"
                          />
                          For Developers
                        </p>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="/community/community-center/development/"
                          >All developers</a
                        >
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://halium.org/"
                        >
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Halium Project
                        </a>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://forums.ubports.com/category/35/app-development"
                          target="_blank"
                        >
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          App Development
                        </a>
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="#">
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Core
                        </a>
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="#">
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Porting
                        </a>
                      </li>
                    </ul>

                    <!-- Group -->
                    <ul class="header-links-group">
                      <li>
                        <p class="header-dropdown-link bold">
                          <img
                            src="/img/icons/bullet-gradient.svg"
                            alt="bullet-icon"
                          />
                          For Designers
                        </p>
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="/community/community-center/design/"
                          >Designer's Center</a
                        >
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="#">
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Guidliness
                        </a>
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="#">
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Grid
                        </a>
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="#">
                          <img
                            src="/img/icons/external-link.svg"
                            alt="external-link-icon"
                          />
                          Icons
                        </a>
                      </li>
                    </ul>

                    <div>
                      <!-- Group -->
                      <ul class="header-links-group mb-4">
                        <li>
                          <p class="header-dropdown-link bold">
                            <img
                              src="/img/icons/bullet-gradient.svg"
                              alt="bullet-icon"
                            />
                            For Supporter's
                          </p>
                        </li>
                        <li>
                          <a
                            hre="/testers-writers/"
                            class="header-dropdown-link"
                            href="/community/community-center/testers-writers/"
                            >Testers and writers</a
                          >
                        </li>
                        <li>
                          <a class="header-dropdown-link" href="#">
                            <img
                              src="/img/icons/external-link.svg"
                              alt="external-link-icon"
                            />
                            Quality Assurance
                          </a>
                        </li>
                      </ul>

                      <!-- Group -->
                      <ul class="header-links-group">
                        <li>
                          <p class="header-dropdown-link bold">
                            <img
                              src="/img/icons/bullet-gradient.svg"
                              alt="bullet-icon"
                            />
                            For Marketers
                          </p>
                        </li>
                        <li>
                          <a
                            class="header-dropdown-link"
                            href="/community/community-center/marketers/"
                            >Marketers Hub</a
                          >
                        </li>
                        <li>
                          <a class="header-dropdown-link" href="#">
                            <img
                              src="/img/icons/external-link.svg"
                              alt="external-link-icon"
                            />
                            Marketing Incubator
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <!-- Group -->
                      <ul class="header-links-group mb-4">
                        <li>
                          <p class="header-dropdown-link bold">
                            <img
                              src="/img/icons/bullet-gradient.svg"
                              alt="bullet-icon"
                            />
                            For Communites
                          </p>
                        </li>
                        <li>
                          <a
                            class="header-dropdown-link"
                            href="/community/community-center/communities-managment/"
                            >Communities Hub</a
                          >
                        </li>
                        <li>
                          <a class="header-dropdown-link" href="#"
                            >Community Values</a
                          >
                        </li>
                      </ul>

                      <!-- Group -->
                      <ul class="header-links-group">
                        <li>
                          <p class="header-dropdown-link bold">
                            <img
                              src="/img/icons/bullet-gradient.svg"
                              alt="bullet-icon"
                            />

                            For All
                          </p>
                        </li>
                        <li>
                          <a class="header-dropdown-link" href="#">
                            <img
                              src="/img/icons/external-link.svg"
                              alt="external-link-icon"
                            />
                            Manual
                          </a>
                        </li>

                        <li>
                          <a
                            class="header-dropdown-link"
                            href="https://forums.ubports.com/category/37/support"
                          >
                            <img
                              src="/img/icons/external-link.svg"
                              alt="external-link-icon"
                            />
                            Ubuntu Touch Support</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- Header Banner -->
                  <div class="header-banner">
                    <h3 class="h3">It’s your time to shine</h3>
                    <p>
                      No matter what your background is or where you live, you
                      can hope on board and join us in the battle of freedom.
                    </p>
                    <a
                      class="btn btn-outline-light btn-rounded"
                      href="/community/community-center/"
                      >Community Center</a
                    >
                  </div>
                </div>
              </b-collapse>
            </div>

            <!-- Get Ubuntu Touch -->
            <div class="dropdown d-none d-lg-block">
              <button
                id="getUbuntuTouchDropdown"
                v-b-toggle.getUbuntuTouchDesktopCollapse
                class="btn btn-outline-primary btn-rounded"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Get Ubuntu Touch
                <img
                  class="angle-icon"
                  src="/img/icons/angle-icon.svg"
                  alt="angle-icon"
                />
              </button>
              <b-collapse
                id="getUbuntuTouchDesktopCollapse"
                accordion="nav-accordion"
                class="dropdown-menu header-dropdown-menu"
                aria-labelledby="getUbuntuTouchDropdown"
              >
                <a class="dropdown-item" href="/features/">Features</a>
                <a
                  class="dropdown-item"
                  href="https://open-store.io/"
                  target="_blank"
                  >Open Store</a
                >
                <a class="dropdown-item" href="/device/">Devices</a>
              </b-collapse>
            </div>

            <!-- Get Ubuntu Touch -->
            <div class="header-dropdown d-lg-none">
              <a
                v-b-toggle.getUbuntuTouchCollapse
                class="header-dropdown-toggler"
              >
                Get Ubuntu Touch
                <img
                  class="angle-icon-gradient"
                  src="/img/icons/angle-icon-gradient.svg"
                  alt="angle-icon"
                />
              </a>
              <b-collapse
                id="getUbuntuTouchCollapse"
                accordion="nav-accordion"
                class="header-dropdown-menu"
              >
                <div class="container">
                  <!-- Header Links -->
                  <div class="header-links">
                    <!-- Group -->
                    <ul class="header-links-group">
                      <li>
                        <p class="header-dropdown-link bold">
                          <img
                            src="/img/icons/bullet-gradient.svg"
                            alt="bullet-icon"
                          />
                          Get Ubuntu Touch
                        </p>
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="/features/"
                          >Features</a
                        >
                      </li>
                      <li>
                        <a
                          class="header-dropdown-link"
                          href="https://open-store.io/"
                          >Open Store</a
                        >
                      </li>
                      <li>
                        <a class="header-dropdown-link" href="/device/"
                          >Devices</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </b-collapse>
            </div>
          </b-collapse>
        </div>
      </div>

      <!-- Hamburger -->
      <div class="header-hamburger">
        <a v-b-toggle.headerNav @click="mobileOpen">
          <img src="/img/icons/hamburger.svg" alt="hamburger-icon" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { BCollapse, VBToggle } from "bootstrap-vue";

export default {
  name: "Header",
  components: {
    BCollapse,
  },
  directives: {
    "b-toggle": VBToggle,
  },
  methods: {
    setOpenMenu(e) {
      let isDesktop = window.innerWidth > 991;
      if (this.openMenu == menuToOpen) {
        if (isDesktop) this.$emit("navbar-closed");
      } else {
        if (isDesktop) this.$emit("navbar-opened");
      }
    },
    mobileOpen() {
      this.$emit(this.openMobileMenu ? "navbarOpened" : "navbarClosed");
    },
  },
};
</script>
