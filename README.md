# [Boutique Ado](https://sctlcd-boutique-ado.herokuapp.com/)

<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_multi_device_website_mockup_presentation-min.png" alt="Boutique Ado" width="700">

**User interface improvements, look and feel, presentation, interactivity**, adding features relative to user interface improvements (image gallery, go to page bottom button, highlighting menu/sub-menu items, "Home" icon link on mobile devices, navbar display change on its hover position and on window scroll position) to the initial Boutique Ado website version.
<br />
User interface improvements: responsive website using HTML, CSS, Bootstrap 4, JavaScript, jQuery
<br />
To visite [ **my new version** ](https://sctlcd-boutique-ado.herokuapp.com/) of Boutique Ado website

<br>

---

# Table of Contents <a name="TableOfContents"></a>

1. [About](#About)

2. [Adding Features](#AddingFeatures)
	- [Navigation bar](#NavigationBar)
		- [Description](#NavigationBarDescription)
		- [Screenshots](#NavigationBarScreenshots)
	- [Footer](#Footer)
		- [Description](#FooterDescription)
		- [Screenshots](#FooterScreenshots)
	- [Landing page](#LandingPage)
		- [Description](#LandingPageDescription)
		- [Screenshots](#LandingPageScreenshots)
	- [Set of slides gallery](#SetOfSlidesGallery)
		- [Description](#SetOfSlidesGalleryDescription)
		- [Screenshots](#SetOfSlidesGalleryScreenshots)
	- [Modal image gallery](#ModalImageGallery)
		- [Description](#ModalImageGalleryDescription)
		- [Screenshots](#ModalImageGalleryScreenshots)
	- [No result found page](#NoResultFoundPage)
		- [Description](#NoResultFoundPageDescription)
		- [Screenshots](#NoResultFoundPageScreenshots)
	- [Go to page bottom button](#GoToPageBottomButton)
		- [Description](#GoToPageBottomButtonDescription)
		- [Screenshots](#GoToPageBottomButtonScreenshots)

3. [Technologies Used](#TechnologiesUsed)

	- [Front-End Technologies](#Front-end-technologies)
	- [Back-End Technologies](#Back-end-technologies)

4. [Testing](#Testing)

	- [Layout responsiveness](#LayoutResponsiveness)
	- [Compatibility](#Compatibility)
	- [Testing left](#TestingLeft)
	- [Validators](#Validators)
	- [Known Issues](#KnownIssues)

5. [Credits](#Credits)

	- [Media](#Media)
	- [Code](#Code)

---

## About <a name="About"></a>

The purpose of this project is to **improve the user interfaces: the look and feel, the presentation and the interactivity** of the initial Boutique Ado website version and adding features relative to user interface improvements (image gallery, go to page bottom button, highlighting menu/sub-menu items, "Home" icon link on mobile devices, navbar display change on its hover position and on window scroll position).
<br />
User interface improvements: responsive website using HTML, CSS, Bootstrap 4, JavaScript, jQuery

Back to [top](#TableOfContents)

---

## Adding Features <a name="AddingFeatures"></a>

### Navigation bar <a name="NavigationBar"></a>

#### Description <a name="NavigationBarDescription"></a>

- Common desktop/mobile:
	- Transparent navbar when
		- the window is at the top
		- the header is not hovered
		- menu/sub-menu are not opened
		- navbar collapse menu is collapsed
	- White navbar when
		- the window is scrolled down
		- the header is hovered
		- menu/sub-menu are opened
		- navbar collapse menu is pulled down
	- Sky blue line on the bottom of the navbar (including the navbar collapse menu when this one is pulled down) when the page is scrolled
	- Menu item highlighted when hovered or selected/pulled down
	- Sub-menu item highlighted when hovered
	- "My account" menu closes when the user clicks anywhere in the page

- Specific desktop :
	- Dropdown menus: dark grey box shadow
	- "Gallery" icon link added in the desktop top nav
	- Navbar item sub-menu closes when the user clicks anywhere in the page

- Specific mobile :
	- Dropdown menus: light grey box shadow
	- "Home" and "Gallery" icon links added in the mobile top header
	- Search input field in the mobile top header closes when the user clicks anywhere in the page
	- Navbar item sub-menu closes when the user clicks in the header of the page
	- Navbar collapse menu closes when the user clicks on "Search" or "My Account" icon links and when the user clicks in the body of the page (apart from the header) or in the footer.

#### Screenshots <a name="NavigationBarScreenshots"></a>

- Desktop
	- Desktop transparent navbar
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_desktop_transparent_navbar-min.png" alt="Desktop transparent navbar" width="700">

	- Desktop white navbar and highlighted menus
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_desktop_white_navbar_highlighted_menus-min.png" alt="Desktop white navbar and highlighted menus" width="700">

	- Desktop white navbar and blue bottom border
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_desktop_white_navbar_blue_bottom_border-min.png" alt="Desktop white navbar and blue bottom border" width="700">

- Mobile
	- Mobile transparent top header
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_mobile_transparent_top_header-min.png" alt="Mobile transparent top header" width="700">

	- Mobile white top header and highlighted menus
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_mobile_white_top_header_highlighted_menus-min.png" alt="Mobile white top header and highlighted menus" width="700">

	- Mobile white top header and sky blue bottom border
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_mobile_white_top_header_sky_blue_bottom_border-min.png" alt="Mobile white top header and sky blue bottom border" width="700">

Back to [top](#TableOfContents)

### Footer <a name="Footer"></a>

#### Description <a name="FooterDescription"></a>

- Links to additional website pages in the purpose of the website presentation (page links not implemented)
- Social media links
- A copyright mention is displayed with my name beside a GitHub icon link which opens my [Github](https://github.com/sctlcd)

#### Screenshots <a name="FooterScreenshots"></a>

- Desktop
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_desktop_footer-min.png" alt="Desktop footer" width="700">

- Mobile
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_mobile_footer-min.png" alt="Mobile footer" width="700">


Back to [top](#TableOfContents)

### Landing page <a name="LandingPage"></a>

#### Description <a name="LandingPageDescription"></a>

 - Landing page sections:
 	- Shop now feature
	- Order features offered
	- Target audience
	- Customer reviews
	- Share your own fashion style feature

#### Screenshots <a name="LandingPageScreenshots"></a>

- Desktop
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_desktop_landing_page-min.png" alt="Desktop landing page" width="700">

- Mobile
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_mobile_landing_page-min.png" alt="Mobile landing page" width="700">

Back to [top](#TableOfContents)

### Set of slides gallery <a name="SetOfSlidesGallery"></a>

#### Description <a name="SetOfSlidesGalleryDescription"></a>

- Carousel of 4 slides of 3 images each
- The set of slides gallery is autoplayed on page load/refresh

#### Screenshots <a name="GalleryImageCarouselScreenshots"></a>

- Desktop
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_desktop_set_of_slides_gallery-min.png" alt="Desktop set of slides gallery" width="700">

- Mobile
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_mobile_set_of_slides_gallery-min.png" alt="Mobile set of slides gallery" width="700">

Back to [top](#TableOfContents)

### Modal image gallery <a name="ModalImageGallery"></a>

#### Description <a name="ModalImageGalleryDescription"></a>

- On click on each images of the set of slides gallery a modal image gallery opens whose purpose is to display the images in bigger size.
- The modal image gallery opens on the image selected in the set of slides gallery.
- The modal image gallery is autoplayed on page load/refresh
- When the modal image gallery opens it pauses the cycling of the set of slides gallery. The modal image gallery cycling is maintained.  
- When the modal image gallery closes it resumes the cycling of the set of slides gallery.
<br />#TO_UPDATE

#### Screenshots <a name="GalleryImageCarouselScreenshots"></a>

- Desktop
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_desktop_modal_image_gallery-min.png" alt="Desktop modal image gallery" width="700">

- Mobile
<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_mobile_modal_image_gallery-min.png" alt="Mobile modal image gallery" width="700">

Back to [top](#TableOfContents)

### No result found page <a name="NoResultFoundPage"></a>

#### Description <a name="NoResultFoundPageDescription"></a>

- Displays an humoristic image and a message informing the user
- Offers a link to go back to Products page.

#### Screenshots <a name="NoResultFoundPageScreenshots"></a>

<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_no_results_found-min.png" alt="No results found page" width="700">

Back to [top](#TableOfContents)

### Go to page bottom button <a name="GoToPageBottomButton"></a>

#### Description <a name="GoToPageBottomButtonDescription"></a>

- Adding a page down button, in addition to the page up button

#### Screenshots <a name="GoToPageBottomButtonScreenshots"></a>

<img src="https://github.com/sctlcd/boutique-ado-v1/blob/master/wireframes/boutique_ado_go_to_page_bottom_button-min.png" alt="Go to page bottom button" width="700">

Back to [top](#TableOfContents)

---

## Technologies Used <a name="TechnologiesUsed"></a>

- [GitHub](https://github.com/) - Used as remote storage of my code online.
- [Atom](https://atom.io/) - Used as a local IDE.
- [Compressjpeg](https://compressjpeg.com/) - Used to compress images for loading faster
- [Techsini](https://techsini.com/multi-mockup/) - Used to generate multi-device website mockup

Back to [top](#TableOfContents)

---

### Front-End Technologies <a name="Front-end-technologies"></a>

- [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used as the base for markup text.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Used as the base for cascading styles.
- [Bootstrap 4](https://getbootstrap.com/) - Used as responsive front-end framework, mobile first projects design.
- [JavaScript](https://www.javascript.com/) - Used for user interactions.
- [jQuery 3.5.1](https://jquery.com/) - JavaScript library, used to simplify some of the DOM manipulations.

Back to [top](#TableOfContents)

---

### Back-End Technologies <a name="Back-end-technologies"></a>

- [Python 3.8](https://www.python.org/) - Used as the back-end programming language.
- [Django 3.1.1](https://www.djangoproject.com/) - Used as Python web framework.
- [Heroku](www.heroku.com) - Used for app hosting.

Back to [top](#TableOfContents)

---

## Testing <a name="Testing"></a>

### Layout responsiveness <a name="LayoutResponsiveness"></a>

|  | Moto G4 | Galaxy S5 | Pixel 2 | Pixel 2 XL | iPhone 5/SE | iPhone 6/7/8 | iPhone 6/7/8 Plus | iPhone X | Surface Duo | Galaxy Fold | iPad | iPad Pro | Desktop 1024px | Desktop > 1200px |
| :--- | :--- | :---| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| website is responsive <= 767 px | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | n/a | n/a | n/a | n/a |
| website is responsive >= 768 px | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | Good | Good | Good | Good |
|**base.html** |
| Navigation bar: logo / links / search | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| Content page: Images / icons text / links / buttons / text | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| Footer: text / links | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
|**base_extended.html** |
| Navigation bar: logo / links / search | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| Content page: Images / icons text / links / buttons / text | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| Footer: text / links | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| gallery.html |
| Content page: Carousel / modal / images / buttons / text | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| no_results_found.html |
| Content page: Images / links / text | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| products.html |
| Content page: Images / links / buttons / text | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |

Back to [top](#TableOfContents)

### Compatibility <a name="Compatibility"></a>

I tested the website across the 6 main browsers in both desktop and mobile configuration to ensure a large number of users can use it successfully.

- Chrome v.86.0
- Edge v.86.0
- Firefox v.82.0
- Safari v.5.1.7 for Windows 10
- Opera v.72.0
- Internet Explorer v.11

|All pages | Chrome | Edge | Firefox | Safari | Opera | IE |
| :--- | :--- | :---| :--- | :--- | :--- | :--- |
| Expected appearance | Good | Good | Good | Poor | Good | Poor |
| Expected responsiveness | Good | Good | Good | Poor | Good | Poor |

- IE: Some CSS3 properties and HTML5 elements are not fully supported

- Safari v.5.1.7: It’s an outdated version and lacks many of the features present in the latest version of Safari. The last version of Safari for Windows was released on May 9, 2012.

Back to [top](#TableOfContents)

### Testing left <a name="TestingLeft"></a>

There is no way to install the latest version of the Safari browser on Windows 10 as Apple stopped developing Safari for Windows operating system long ago. For testing this website on the latest version of Safari, I will have to install the newest version of macOS on Windows 10 in a virtual machine.

### Validators <a name="Validators"></a>

**HTML**
- [W3C HTML Validator](https://validator.w3.org/)
	#TO_UPDATE

**CSS**
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
	#TO_UPDATE

**Javascript**
- [Javascript Validator](https://jshint.com/)
	#TO_UPDATE

**Chrome DevTools**
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
	#TO_UPDATE

**Python**
- [Python validator](http://pep8online.com/)
	#TO_UPDATE

Back to [top](#TableOfContents)

### Known Issues <a name="KnownIssues"></a>
- no issues found so far

Back to [top](#TableOfContents)

---

## Credits <a name="Credits"></a>

### Media <a name="Media"></a>

Sources of the images used on this site:

- From static/images sub-directory - [Github](https://github.com/sctlcd/boutique-ado-v1/tree/master/static/images)
	- [favicon.ico](https://www.flaticon.com/free-icon/clothing-store_3486355?term=boutique&page=1&position=3) - [Flaticon](https://www.flaticon.com/) | copyright [Freepik](https://www.flaticon.com/authors/freepik)

- From media/home sub-directory - [Github](https://github.com/sctlcd/boutique-ado-v1/tree/master/media/home)
	- [boutique-min.png](https://pixabay.com/fr/photos/femme-shopping-mode-de-vie-belle-3040029/) - [Pixabay](https://pixabay.com) | copyright [gonghuimin468](https://pixabay.com/fr/users/gonghuimin468-3804290/)

- From media/home/hero_image sub-directory - [Github](https://github.com/sctlcd/boutique-ado-v1/tree/master/media/home/hero_image)
	- [hero-image-background-1920-min.jpg](https://pixabay.com/fr/photos/femme-shopping-mode-de-vie-belle-3040029/) - [Pixabay](https://pixabay.com) | copyright [gonghuimin468](https://pixabay.com/fr/users/gonghuimin468-3804290/)

- From media/home/gallery sub-directory - [Github](https://github.com/sctlcd/boutique-ado-v1/tree/master/media/home/gallery)
	- [gallery-background-1920-min.jpg](https://www.pexels.com/photo/apple-device-camera-camera-lens-desk-593325/) - [Pexel](https://www.pexels.com/) | copyright [Jessica Lewis](https://www.pexels.com/@thepaintedsquare)

- From media/home/image_showcases sub-directory - [Github](https://github.com/sctlcd/boutique-ado-v1/tree/master/media/home/image_showcases)
	- [pexels-lucas-da-miranda-1967902-min.jpg](https://www.pexels.com/photo/woman-in-black-spaghetti-strap-top-1967902/) - [Pexel](https://www.pexels.com/) | copyright [lucas da miranda](https://www.pexels.com/@lucas-da-miranda-998015)
	- [pexels-mentatdgt-1174170-min.jpg](https://www.pexels.com/photo/woman-wearing-jacket-crop-top-and-mini-skirt-1174170/) - [Pexel](https://www.pexels.com/) | copyright [mentatdgt](https://www.pexels.com/@mentatdgt-330508)
	- [pexels-omar-lópez-1182825-min.jpg](https://www.pexels.com/photo/man-wearing-black-zip-up-leather-jacket-1182825/) - [Pexel](https://www.pexels.com/) | copyright [Omar López](https://www.pexels.com/@omarlopezphil)

- From media/home/testimonials sub-directory - [Github](https://github.com/sctlcd/boutique-ado-v1/tree/master/media/home/testimonials)
	- [pexels-daniel-xavier-1239291-min.jpg](https://www.pexels.com/photo/woman-wearing-black-eyeglasses-1239291/) - [Pexel](https://www.pexels.com/) | copyright [Pixabay](https://www.pexels.com/@pixabay)
	- [pexels-pixabay-235534-min.jpg](https://www.pexels.com/photo/adolescent-beauty-blur-cute-235534/) - [Pexel](https://www.pexels.com/) | copyright [Daniel Xavier](https://www.pexels.com/@danxavier)
	- [pexels-tim-savage-903661-min.jpg](https://www.pexels.com/photo/photography-of-a-man-wearing-black-shirt-903661/) - [Pexel](https://www.pexels.com/) | copyright [Tim Savage](https://www.pexels.com/@timsavage)

- From media/home/gallery - [Github](https://github.com/sctlcd/boutique-ado-v1/tree/master/media/home/gallery)
	- [pexels-anastasiya-lobanovskaya-1035682-min.jpg](https://www.pexels.com/photo/woman-holding-flower-bouquet-1035682/) - [Pexel](https://www.pexels.com/) | copyright [Anastasiya Lobanovskaya](https://www.pexels.com/@annetnavi)
	- [pexels-andrea-piacquadio-3782968-min.jpg](https://www.pexels.com/photo/depth-of-field-photography-of-woman-in-pastel-color-sleeveless-shirt-and-white-sunhat-788567/) - [Pexel](https://www.pexels.com/) | copyright [Andrea Piacquadio](https://www.pexels.com/@olly)
	- [pexels-andrea-piacquadio-788567-min.jpg](https://www.pexels.com/photo/man-in-green-jacket-3782968/) - [Pexel](https://www.pexels.com/) | copyright [Andrea Piacquadio](https://www.pexels.com/@olly)
	- [pexels-cottonbro-4842567-min.jpg](https://www.pexels.com/photo/woman-in-pink-dress-sitting-beside-woman-in-white-shirt-4842567/) - [Pexel](https://www.pexels.com/) | copyright [cottonbro](https://www.pexels.com/@cottonbro)
	- [pexels-cottonbro-5236991-min.jpg](https://www.pexels.com/photo/4-women-and-2-men-standing-near-gray-wall-5236991/) - [Pexel](https://www.pexels.com/) | copyright [cottonbro](https://www.pexels.com/@cottonbro)
	- [pexels-elle-hughes-1680172-min.jpg](https://www.pexels.com/photo/photo-of-man-wearing-sunglasses-1680172/) - [Pexel](https://www.pexels.com/) | copyright [Elle Hughes](https://www.pexels.com/@elletakesphotos)
	- [pexels-godisable-jacob-871494-min.jpg](https://www.pexels.com/photo/woman-sitting-on-chair-while-leaning-on-table-871494/) - [Pexel](https://www.pexels.com/) | copyright [Godisable Jacob](https://www.pexels.com/@godisable-jacob-226636)
	- [pexels-godisable-jacob-923210-min.jpg](https://www.pexels.com/photo/red-haired-woman-in-white-and-black-floral-sleeveless-maxi-dress-923210/) - [Pexel](https://www.pexels.com/) | copyright [Godisable Jacob](https://www.pexels.com/@godisable-jacob-226636)
	- [pexels-heitor-verdi-2529456-min.jpg](https://www.pexels.com/photo/photo-of-woman-leaning-on-vehicle-2529456/) - [Pexel](https://www.pexels.com/) | copyright [Heitor Verdi](https://www.pexels.com/@heitorverdifotos)
	- [pexels-joshua-abner-3605015-min.jpg](https://www.pexels.com/photo/woman-in-white-and-red-floral-dress-standing-on-green-grass-field-3605015/) - [Pexel](https://www.pexels.com/) | copyright [Joshua Abner](https://www.pexels.com/@joshuaabner)
	- [pexels-lucas-pezeta-2529375-min.jpg](https://www.pexels.com/photo/woman-spreading-both-her-arms-2529375/) - [Pexel](https://www.pexels.com/) | copyright [Lucas Pezeta](https://www.pexels.com/@lucaspezeta)
	- [pexels-toa-heftiba-şinca-1194412-min.jpg](https://www.pexels.com/photo/three-men-sitting-on-veranda-1194412/) - [Pexel](https://www.pexels.com/) | copyright [Toa Heftiba Şinca](https://www.pexels.com/@toa-heftiba-sinca-235378)

- From media directory - [Github](https://github.com/sctlcd/boutique-ado-v1/tree/master/media)
	- [no-results-found-min.jpg](https://all-free-download.com/free-vector/download/exploration-job-background-searching-man-sketch-cartoon-design_6844384.html) - [Free vectors](https://all-free-download.com/free-vector/) | copyright [BSGStudio](http://buysellgraphic.com/)
	- All product images - Code institute

Back to [top](#TableOfContents)

---

### Code <a name="Code"></a>

- Environment variables - [Igor Basuga](https://github.com/bravoalpha79) Tutor at [Code Institute](http://codeinstitute.net)
- Environment variables - Code Institute archive resources
- Ngrok - [ngrok](https://ngrok.com/)
- Using ngrok on Windows-10 - [youtube](https://www.youtube.com/watch?v=9gaaVbX0USI&ab_channel=ChuckSeverance)
- Testing our Django App to be publicly accessible using NGROK - [medium](https://medium.com/@iot24hours/testing-our-django-app-to-be-publicly-accessible-using-ngrok-9b73851c46e0)
- jQuery documentation - [jQuery](https://jquery.com/)
- Bootstrap 4 documentation - [Bootstrap 4](https://getbootstrap.com/)
- Creating-a-modal-image-gallery-with-bootstrap-components - [css-tricks](https://css-tricks.com/creating-a-modal-image-gallery-with-bootstrap-components/)
- Bootstrap show.bs.modal Event - [tutorialspoint](https://www.tutorialspoint.com/Bootstrap-show-bs-modal-Event)
- hidden.bs.modal Bootstrap Event - [tutorialspoint](https://www.tutorialspoint.com/hidden-bs-modal-Bootstrap-Event)
- Favicon in django app - [stackoverflow](https://stackoverflow.com/questions/21938028/how-can-i-get-a-favicon-to-show-up-in-my-django-app)

Back to [top](#TableOfContents)
