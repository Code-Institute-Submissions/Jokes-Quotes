## **Testing**
Throughout the project build, Chrome Developer Tools was used to check and inspect data returning from the APIs.
It was also used to test the website's responsiveness and functionality on mobile devices, tablets and desktop via a browser running from Gitpod.
Any errors were then fixed through immediate modification of the code and further testing.

## **Testing data from APIs**
During development it was essential that the correct data was being returned from the relevant APIs.
I tested this frequently in Javascript by logging the data to the console in Chrome Developer Tools.
Below you can see two examples of the data after it has been logged. These arrays relate to data returned from the separate joke and quote APIs.

![Logging the joke API data](/assets/screenshots/jokes-data.png)

Data logged to the console during development of joke section. (Above)

![Logging the quote API data](/assets/screenshots/quotes-data.png)

Data logged to the console during development of quote section. (Above)

Targeting the correct data and ultimately getting it to display to the user was vital and the data was organised differently for each API.
The jokes were arranged into categories and the quotes were identified by tags. 
I logged the data each time I needed to check the endpoint was working with my code and that I was targeting in the correct way to return the specific array needed. 

Finally I checked to ensure the code was working by getting the jokes and quotes to display correctly in the browser after the user selects a category from the dropdown. 


### **User Story Tests**
The following section shows how the project meets the user's needs as outlined in the user stories and illustrates these with screenshots of the finished project. 

**1. As a user seeking entertainment, I want to find jokes and quotes quickly and easily, so that I can satisfy my interests.** 

These user's needs are met via:
* The content being quickly displayed on the homepage via the generator buttons.
* The scrolling homepage featuring both jokes and quotes sections with dropdown menus and generator buttons.
* This homepage layout means that the user does not have to search for what they want, it's immediately available. 

![Homepage](/assets/screenshots/home-mob.png)

Homepage jokes and quotes generators on mobile device (Above)

![Homepage](/assets/screenshots/home-tab.png)

Jokes and quotes generators on a tablet (Above)

![Homepage](/assets/screenshots/home-desk.png)

Jokes and quotes generators on a desktop (Above)

**2. As a fan of jokes and/or quotes, I want to find new content, so that I can enjoy it and share it with friends.** 

These user's needs are met via:
* The new content that the user is seeking is readily available after a selection and click of the buttons. 
* They can choose the categories they're most interested in.
* The social share buttons make it easy to share content on Facebook and Twitter.
* The links to social media in the footer can lead the viewer to more content shared by other users, competitions and new features etc. 

![Joke content](/assets/screenshots/joke.png)

Joke on homepage (Above)

![Quote content](/assets/screenshots/quote.png)

Quote on homepage (Above)

**3. As a consumer, I want to be entertained, have fun and be inspired, so that I can enjoy the experience and share it with friends.** 

These user's needs are met via:
* A combination of all the site's content and media together provide the entertainment. 
* The jokes and quotes buttons generate the written content whilst the image carousel and lightbox delivers funny and inspiring images.
* The user can click on the lightbox to view the images in detail at a larger scale. 
* The social buttons directly below are ready to share content.
* The links to social media in the footer can add great value and connect users with these shared interests. 

![Lightbox](/assets/screenshots/light-desk.png)

Lightbox on desktop (Above)

![Carousel](/assets/screenshots/carousel-tab.png)

Image carousel on tablet (Above)

![Social Links](/assets/screenshots/soc-links-mob.png)

Social links on mobile device (Above)


**4. As a potential contributor, I want to submit my own jokes and quotes, so that I can get involved and share them with others.**

These users needs are met via:
* The contact and submissions page featuring a form to allow jokes and quotes to be submitted.
* The clear and intuitive navigation to allow the user to easily find the submissions page.
* Social links in the footer and share buttons. 


![Navbar](/assets/screenshots/nav-mob.png)

Navigation on mobile (Above):

![Contact Form](/assets/screenshots/contact-tab.png)

Contact form on tablet (Above):

**5. As a content marketer, I want to find original content and catchy material, so that I can use it to liven up my output.**

These user's needs are met via:
* The dropdown menus to give the users a choice of joke and quote categories to appeal to a broad range of users.
* The social share buttons.
* The social links in the footer.
* Contact form to allow questions and suggestions regarding use of content. 

![Dropdown menu](/assets/screenshots/quote-menu.png)

![Dropdown menu](/assets/screenshots/joke-menu.png)

Dropdown menus on desktop (Above)


**6. As a niche blogger, I want to find interesting content for my blog, so that it stays fresh and appealing to my followers.** 

These user's needs are met via:
* The dropdown menus to give the users a choice of joke and quote categories to appeal to a broad range of users.
* The social share buttons.
* The social links in the footer.
* Contact form to get in touch with site owners to discuss use of content.

![Contact Form](/assets/screenshots/contact-desk.png)

Contact form on desktop (Above)


### **Interactivity Tests**
The following tests were carried out to confirm that all interactive parts of the site are working as expected:

**1. Main navigation links**

	i.  Go to the “Home” page.

    ii. Click each of the main navigation links to verify if the browser navigates to the correct page.

	iii. Click each of the navigation links to verify if the active page shows as selected with dark text. 

	iv. Click on all the other pages nav links and then click on the logo image to verify if this returns the
        user to the homepage.

    v. Hover over the nav links to test the colour changes to correct blue. 

The above tests were carried out and no errors were found. 

**2. Image Carousel**

	i. Go to the “Home” page

	ii. Click on the carousel’s arrows to verify that the image moves successfully to the next and previous slide.

The above tests were carried out and a small error was found with the arrows not showing up properly on the tablet
or desktop whilst displaying and functioning correctly on mobile devices. (See issues below)

**3. Jokes & Quotes generators**

	i. Click on the small arrows in the jokes dropdown menu and select the first item listed as programming.
       Now click the button and verify a programming joke is displayed.  

	ii. Repeat step one above and then continue to click the joke button to verify if consecutive jokes are
        returned without error. 

	iii. Now repeat steps one and two above for all items in both joke and quote dropdown menus to verify if 
         all menu items behave as expected. 

    iv. Hover the cursor over the generator buttons to verify if they change colour.

    v. Without selecting from the dropdown menu, click the generator buttons to verify if an error message is displayed.

The above tests were carried out and no errors were found. 

**4. Lightbox**

	i. Hover over the images in the lightbox to verify if the shadow is activated.

	ii. Click on the individual gallery images to verify if the image opens in a separate page with blank background and 
        thumbnails are displayed below. 

	iii. In the open lightbox, click on the arrows to verify if the image moves to the next and previous slide as expected. 

The above tests were carried out and no errors were found. 

**5. Contact Form**

	i. Submit an empty form and verify if an error message is displayed saying please fill in this field.

	ii. Try to hover the pointer over the Submit button to verify if it changes to the correct colour.

	iii. Try to submit an invalid email address to verify if the correct error message appears.

    iv. Fill out the form entirely and then click the reset form button to verify that the form resets as expected.

    v. Fill out the form correctly and click the submit button to verify that the user receives confirmation via an alert message.

The above tests were carried out and no errors were found. 

**6. Social Media Links and social share buttons**

	i.  Click on all social icons and share buttons to verify if this opens the link, in a new window, at the appropriate page.

	ii. Try to hover the pointer over all social icons in the footer to verify they change to the correct colour.

The above tests were carried out and no errors were found. 

## **Responsiveness**

**Mobile:**

* On mobile devices the navbar collapses to a navbar toggler or hamburger icon.
  Clicking this produces a dropdown menu which displays the navigation links to all pages on the website.
* All images in the carousel display at close to full width of the screen in a single column.
* The dropdown menus display at close to the full screen width. 
* The 4 lightbox images on the homepage display at the screen width whilst maintaining the correct proportions and spacing.
  They open up to full width in the modal pop-up with correct dimensions. 
* The contact form displays at close to the full width of the screen size.

**Tablets:**

* On tablets such as the iPad the navbar collapses to a navbar toggler or hamburger icon as with mobile above.
  Clicking this produces a dropdown menu which displays the navigation links to all pages on the website.
* On iPad Pro the full navbar is shown. 
* On iPad and iPad Pro the dropdown menus display at close to the full screen width. 
* The 4 lightbox images on the homepage display at close to full screen width whilst maintaining the correct proportions and spacing.
  They open up to full width in the modal pop-up with correct dimensions. 
* The contact form displays at close to the full width of the screen size.

**Desktop:**

On desktop computers and laptops the full navigation bar is shown. 
The dropdown menus are constrained to a maximum width and do not fill the width of the screen. 
The contact form is constrained to a maximum width and does not fill the width of the screen. 


## **Device Testing**

The website was tested on the following devices:

### **Mobile**

* Apple iPhone XR using Safari on IOS 13.7
* Apple iPhone 7 using Safari on IOS 11.3.1
* Apple iPhone 8 using Safari on IOS 13.4
* Motorola Moto E5 using Google Chrome on Android 8.1
* Google Pixel 3A using Google Chrome on Android 10
* Google pixel 3XL using Google Chrome on Android 10

### **Tablets**

* Apple iPad Air 2 using Safari on IOS 13.5.1
* Microsoft Surface Pro on Windows 10 Pro (Tested on Microsoft Edge & Google Chrome)

### **Desktop** 

The website was tested on the following browsers on Apple iMac running OS Catalina 10.15.6 :

* Google Chrome - Version 85.0.4183.121 (Official Build) (64-bit)
* Apple Safari - Version 13.1.2 (15609.3.5.1.3)
* Mozilla Firefox Version 78.0.1 (64-bit)

The website displayed well on all of the above browsers and devices. 
All interactive elements were tested and found to be working correctly except for the issues detailed below.

### **Issues**
1. During development an issue with the iPhone 5/SE and Galaxy fold mobile devices was found. Whilst inspecting in Chrome Dev Tools the navbar toggle dropdown was being pushed down and out of position by the logo at its’ usual size. 
2. The next and previous arrows are not displaying correctly on the tablet and desktop version of the website but are working correctly on mobile devices. 

### **Fixes**
1. Issue 1 - Media queries were used to reduce the size of the logo when using devices at the relevant devices max widths of 280px and 320px wide. This resolved the issue. 
2. Isssue 2 - Changed the fill colour in the data svg url to make the icons more visible. Issue now resolved with help from CI Tutor Support.


### **Code Validators:**

The following websites were used to validate the code and there were no errors or warnings to show:

HTML - [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input)

CSS - [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

Javascript - [JSHint javascript code analysis](https://jshint.com/)