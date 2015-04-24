---
languages: JavaScript, js
tags: oo, object orientation, jQuery, event listeners, DOM, 
resources: 4
level: advanced
---

# JS Test Driven Task List
## Instructions:

Create an object oriented task list.  You're going to need to build a basic all front end app.  There will be no persitence.  However, you will need two models, one for List(s) and Task(s).  

These models will:
- need autoincrementing IDs as well as some "class" methods. 
- talk to their matching controllers, ListController and TaskController.
- will use their "ids" to set `data` properties, `id` properties, and `value` properties.

The controllers will:
- interact with the DOM (think jQuery controllers that make instances to help the views).  
- be adding the elements themselves to the DOM instead of the views.  
- need to call the model's build method, which returns a string of html.

Underscore and jQuery are loaded for you.

##Requirements

- The List constructor keep track of instances with the an `all` property
  * The list instance will get an `id` from the length of the `all` array
- List instances keeps track of their own task instances with the `tasks` property
  * Tasks are assigned an `id` from their position in the `tasks` array
- Model instances are responsible for creating the strings that get converted to HTML elements
- Model instances are responsible for appending said HTML elements to the DOM via the model's instance method `build`
- The controllers are responsible for creating new instances of their corresponding models from form inputs
- The contollers are responsible for triggering those instances to append themselves to the DOM via the model's instance method `build`
- The controller is responsible for deleting instances elements from the DOM
  * Tasks only need to be deleted from their list
  * When tasks are deleted they are replaced in their list's `tasks` array with `null`
  * Lists need to be deleted from `div#lists` and from `select`

##Example

For comparison here is a live example of the finished app [linked here](http://learn-co-curriculum.github.io/web-js-oo-task-list/).

## Resources
 * [jQuery](http://jquery.com/)
 * [jQuery `#on`](http://api.jquery.com/on/)
 * [underscore](http://underscorejs.org/)
 * [Finshed Example of App Here](http://learn-co-curriculum.github.io/web-js-oo-task-list/)
