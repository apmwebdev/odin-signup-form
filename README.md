# Sign-Up Form
_[The Odin Project](https://www.theodinproject.com/):
[Intermediate HTML and CSS](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/intermediate-html-and-css)_

---

[Project assignment page](https://www.theodinproject.com/lessons/intermediate-html-and-css-sign-up-form)

This project is part of the Intermediate HTML and CSS section of The Odin Project
curriculum. The purpose is to practice using more advanced CSS concepts —
especially positioning — along with form setup and validation using HTML's built-in
tools.

## Assignment
### Step 1: Set up and planning
1. Set up your HTML and CSS files with some simple dummy content, just to make
sure you have everything linked correctly.
2. Set up your git repository (refer to past projects if you need a refresher).
3. Download a full-resolution copy of [the design file](https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/sign-up-form.png), and get a general idea
for how you’re going to need to lay things out in your HTML document.

### Step 2: Gather Assets
1. The design has a large background-image, so go find and download an image
you want to use for that section. The one in the design can be found [on unsplash.com](https://unsplash.com/photos/25xggax4bSA), but feel free to select your
own. Be sure to credit the creator of your image!
2.  Pick an external font for the 'logo' section. We've used [Norse Bold](https://cdn.statically.io/gh/TheOdinProject/theodinproject/efdc2888072f409e687d31dc580595dbe4fe0ff4/app/assets/fonts/Norse-Bold.otf), but you can use any font you
like.
3.  For the image-sidebar, we've used [this Odin logo](https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/odin-lined.png). Again, feel free to replace it.

### Step 3: Some Tips!

1. How you attack this project is mostly up to you, but it is wise to begin by
scaffolding out the structure of the page, and then take the various sections
one by one.
2. The area behind the "ODIN" logo is a div that has a dark, but
semi-transparent background color. This enhances the readability of the text
against the busy background image.
3. The color we've chosen for the 'Create Account' button is similar to tones
found in the background image. Specifically, it is `#596D48`.
4. The inputs, by default have a very light border (`#E5E7EB`), but we've
included 2 variations. For starters, the password inputs should be given an
`error` class.
5. The other variation is the selected input, which should have a blue border
and subtle box-shadow. This can be done with the `:focus` pseudo-class you've
learned about in an earlier lesson.
6. Do not worry about making your project look nice on mobile, but DO resize
your browser a little to make sure that it's not completely broken at
different desktop resolutions.
7. Checking that the password fields match each other requires javascript. Try
to implement this if you feel confident, otherwise just validate each field
separately.

## TODO
1. Password confirm validation (JS)
2. Background image credit
3. Make image fixed positioning