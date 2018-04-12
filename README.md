# Cavern: A Text Adventure

#### Team week 1 project for Epicodus 4/09/18

## By Bobby, Dawn, Ami, Garnett, Isaac

# Description

A neat text adventure game about navigating through a through a dank cavern.

# Specifications
The program asks for user to input name and select class.

The user navigates through game utilizing a series of clicks.

The program calculates combat outcomes assessing damage to the user and the program antagonist.

Through a series of choices, the user clicks through two combat sequences, causing and acquiring damage.

The user is able to trigger a death sequence by losing too much health in combat.

If the user has enough health to defeat the combat sequences, they have a choice of clicking to a win or lose scenario.

* The program takes name input
  * **Input: _Badgi_**
  * **Output: _Badgi_**

* The program will set a class
  * **Input: Select _Wizard, Thief, Warrior_**
  * **Output: _Wizard_**

* The program offers a random gift
  * **Input: Select _Eat the mushroom_**
  * **Output: +15 hp_**

* The program offers a random gift
    * **Input: Select _Eat the mushroom_**
    * **Output: -15 hp_**

* The program will add damage and health to User based on class selected
  * **Input: _Wizard_**
  * **Output: _User-Health = 70; User-Damage = 8_**

* The program will add damage and health to User based on class selected
  * **Input: _Warrior_**
  * **Output: _User-Health = 100; User-Damage = 5_**

* The program will add damage and health to User based on class selected
  * **Input: _Thief_**
  * **Output: _User-Health = 80; User-Damage = 7_**

* The program will use User damage to set Enemy damage
  * **Input: _Enemy-damage = User-damage_**
  * **Output: _Enemy damage = 8_**

* The program will use Enemy damage to set User damage
  * **Input: _User-damage= Enemy-damage_**
  * **Output: _User damage = 8_**

* The program triggers death sequence when User health drops to zero
  * **Input: _User-Health = 0_**
  * **Output: _"You died"_**

* The program delivers a win/lose scenario depending on User choices
  * **Input: _click "Squeeze"_**
  * **Output: _"Another adventure awaits"_**

# Setup Requirements

* Clone this repository
* Open in web browser or text editor

# Technologies Used

* HTML
* CSS
* jQuery/JavaScript

&copy; Bobby, Ami, Dawn, Garnett, Isaac

Licensed under the MIT license
