---
languages: JavaScript, js
tags: oo, object orientation, jQuery, event listeners, DOM, 
resources: 5
level: advanced
---

# JS Test Driven Task List
## Instructions:

Create an object oriented task list.  You're going to need to build a basic all front end app.  There will be no persitence.  However, you will need two models, one for List(s) and Task(s).  These models will need autoincrementing IDs as well as some "class" methods.  These models will talk to their matching controllers, ListController and TaskController.  The controllers job is to interact with the DOM (think jQuery controllers that make instances to help the views).  However your controllers will be adding the elements themselves to the DOM instead of the views.  They will do this through calling a build method on the model, which is in charge of appending the element to the screen.  Elements created will use their "ids" to set `data` properties, `id` properties, and `value` properties.

Underscore and jQuery are loaded for you.

##Requirements

- The List and Task constructor keep track of instances with the `all` properties
- List instances keeps track of their own task instances with the `tasks` property
- Model instances are responsible for creating the strings that get converted to HTML elements
- Model instances are responsible for appending said HTML elements to the DOM via the model's instance method `build`
- The controllers are responsible for creating new instances of their corresponding models from form inputs
- The contollers are responsible for triggering those instances to append themselves to the DOM via the model's instance method `build`
- The controller is responsible for deleting instances elements from the DOM
  * Tasks only need to be deleted from their list
  * Lists need to be deleted from `div#lists` and from `select`

##Example

For comparison here is a live example of the finished app [linked here](http://flatiron-school-curriculum.github.io/web-js-oo-task-list/).

## Resources
 * [jQuery](http://jquery.com/)
 * [jQuery `#on`](http://api.jquery.com/on/)
 * [jQuery `#live`](http://api.jquery.com/live/)
 * [underscore](http://underscorejs.org/)
 * [Finshed Example of App Here](http://flatiron-school-curriculum.github.io/web-js-oo-task-list/)
