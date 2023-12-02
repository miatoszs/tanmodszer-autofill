// ==UserScript==
// @name         Tanulásmódszertan kérdőív kitöltő
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Completes Google Forms radio button questions randomly
// @author       B.Kristóf
// @match        *://docs.google.com/forms/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function randomChoice(choices) {
      return choices[Math.floor(Math.random() * choices.length)];
    }

    function completeForm() {
      // Select all the elements that are radio buttons
      const radioGroups = document.querySelectorAll('div[role="radiogroup"]');

      // Iterate over each group and click a random radio button
      radioGroups.forEach(group => {
        const buttons = Array.from(group.querySelectorAll('div[role="radio"]'));
        if (buttons.length > 0) {
          const randomButton = randomChoice(buttons);
          randomButton.click();
        }
      });
    }

    // Run the form completion script when the page has loaded
    window.addEventListener('load', completeForm);
})();
