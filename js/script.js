// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: March 18,2024
// This file contains the JS functions for index.html

/**
 * This function gets users Street name and shows it back to user.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your adress is: " +440+ ",Longfilds" + 440 + "."
}
