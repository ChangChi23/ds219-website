(function () {
  'use strict';

  var STORAGE_KEY = 'chang-chi-effects';
  var root = document.documentElement;
  var effectsToggle = document.getElementById('effects-toggle');
  var effectsLabel = document.getElementById('effects-label');
  var filterBar = document.getElementById('filter-bar');
  var filterStatus = document.getElementById('filter-status');
  var projectGrid = document.getElementById('project-grid');
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll('.filter-btn'));
  var projectCards = Array.prototype.slice.call(document.querySelectorAll('[data-project-card]'));
  var schematicSvgs = Array.prototype.slice.call(document.querySelectorAll('.schematic'));

  var effectsOn = true;

  function readStoredPreference() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      return saved === 'on' || saved === 'off' ? saved : null;
    } catch (error) {
      return null;
    }
  }

  function storePreference(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      // Storage can be blocked. The toggle still works for this page view.
    }
  }

  function setSchematicAnimation(isOn) {
    schematicSvgs.forEach(function (schematicSvg) {
      if (typeof schematicSvg.pauseAnimations !== 'function') {
        return;
      }

      try {
        if (isOn) {
          schematicSvg.unpauseAnimations();
        } else {
          schematicSvg.pauseAnimations();
        }
      } catch (error) {
        // Decorative motion is optional; ignore SVG animation API failures.
      }
    });
  }

  function applyEffects(nextState, persist) {
    effectsOn = nextState;
    root.dataset.effects = nextState ? 'on' : 'off';

    if (effectsToggle) {
      effectsToggle.setAttribute('aria-pressed', String(nextState));
    }

    if (effectsLabel) {
      effectsLabel.textContent = nextState ? 'Effects: On' : 'Effects: Off';
    }

    setSchematicAnimation(nextState);

    if (persist) {
      storePreference(nextState ? 'on' : 'off');
    }
  }

  var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var storedPreference = readStoredPreference();
  var initialEffectsState = motionQuery.matches
    ? false
    : (storedPreference === null ? true : storedPreference === 'on');

  applyEffects(initialEffectsState, false);

  if (effectsToggle) {
    effectsToggle.addEventListener('click', function () {
      applyEffects(!effectsOn, true);
    });
    effectsToggle.hidden = false;
  }

  function handleMotionPreferenceChange(event) {
    if (event.matches) {
      applyEffects(false, false);
      return;
    }

    var saved = readStoredPreference();
    applyEffects(saved === null ? true : saved === 'on', false);
  }

  if (typeof motionQuery.addEventListener === 'function') {
    motionQuery.addEventListener('change', handleMotionPreferenceChange);
  } else if (typeof motionQuery.addListener === 'function') {
    motionQuery.addListener(handleMotionPreferenceChange);
  }

  function filterProjects(category, announce) {
    var visibleCount = 0;
    var activeLabel = 'All';

    projectCards.forEach(function (card) {
      var matches = category === 'all' || card.dataset.category === category;
      card.hidden = !matches;

      if (matches) {
        visibleCount += 1;
      }
    });

    filterButtons.forEach(function (button) {
      var isPressed = button.dataset.filter === category;
      button.setAttribute('aria-pressed', String(isPressed));

      if (isPressed) {
        activeLabel = button.textContent.trim();
      }
    });

    if (projectGrid) {
      projectGrid.classList.toggle('is-single', visibleCount === 1);
    }

    if (announce && filterStatus) {
      var countLabel = visibleCount === 1 ? 'project' : 'projects';
      var categoryText = category === 'all' ? '' : ' in ' + activeLabel;
      filterStatus.textContent = 'Showing ' + visibleCount + ' ' + countLabel + categoryText + '.';
    }
  }

  if (filterBar) {
    filterBar.hidden = false;
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterProjects(button.dataset.filter, true);
    });
  });

  filterProjects('all', false);
})();
