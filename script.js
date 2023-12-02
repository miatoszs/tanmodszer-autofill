
// ==UserScript==
// @name         Tanulásmódszertan kérdőív kitöltő
// @namespace    http://tampermonkey.net/
// @version      0.2
// @author       B.Kristóf
// @match        *://docs.google.com/forms/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/miatoszs/tanmodszer-autofill/main/script.js
// @description  kitőlti autómatikusan a kérdőívet
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

      // Prompt the user for their name
      const neptuncode = prompt("Mi a neptun kódód?");

      if (neptuncode) {
        // Find the last text input field (assuming it's for the name)
        const textInputs = document.querySelectorAll('input[type="text"]');
        if (textInputs.length > 0) {
          const lastNameInput = textInputs[textInputs.length - 1];
          lastNameInput.value = neptuncode;
        }
      }
    }

    // Run the form filler when the page has loaded
    window.addEventListener('load', completeForm);
})();
