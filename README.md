# [Boutique Ado](https://sctlcd-boutique-ado-customized.herokuapp.com/)

<img src="https://github.com/sctlcd/boutique-ado-customized-latest-version/blob/master/design/mockup/boutique_ado_multi_device_website_mockup_presentation-min.png" alt="Boutique Ado" width="700">

**User interface improvements, look and feel, presentation, interactivity**, adding features relative to user interface improvements (image gallery, go to page bottom button, highlighting menu/sub-menu items, "Home" icon link on mobile devices, navbar display change on its hover position and on window scroll position) to the initial Boutique Ado website version.
<br />
User interface improvements: responsive website using HTML, CSS, Bootstrap 4, JavaScript, jQuery
<br />
To visite [ **my new version** ](https://sctlcd-boutique-ado-customized.herokuapp.com/) of Boutique Ado website

<br>

---

# Table of Contents <a name="TableOfContents"></a>

1. [About](#About)

2. [Initial website user interface](#InitialWebsiteUserInterface)

3. [Adding Features](#AddingFeatures)
	- [Navigation bar](#NavigationBar)
		- [Description](#NavigationBarDescription)
	- [Footer](#Footer)
		- [Description](#FooterDescription)
	- [Landing page](#LandingPage)
		- [Description](#LandingPageDescription)
	- [Set of slides gallery](#SetOfSlidesGallery)
		- [Description](#SetOfSlidesGalleryDescription)
	- [Modal image gallery](#ModalImageGallery)
		- [Description](#ModalImageGalleryDescription)
	- [No result found page](#NoResultFoundPage)
		- [Description](#NoResultFoundPageDescription)
	- [Go to page bottom button](#GoToPageBottomButton)
		- [Description](#GoToPageBottomButtonDescription)

4. [Technologies Used](#TechnologiesUsed)

	- [Front-End Technologies](#Front-end-technologies)
	- [Back-End Technologies](#Back-end-technologies)

5. [Testing](#Testing)

	- [Layout responsiveness](#LayoutResponsiveness)
	- [Compatibility](#Compatibility)
	- [Testing left](#TestingLeft)
	- [Validators](#Validators)
	- [Known Issues](#KnownIssues)

6. [Credits](#Credits)

	- [Media](#Media)
	- [Code](#Code)

---

## About <a name="About"></a>

The purpose of this project is to **improve the user interfaces: the look and feel, the presentation and the interactivity** of the initial Boutique Ado website version and adding features relative to user interface improvements (image gallery, go to page bottom button, highlighting menu/sub-menu items, "Home" icon link on mobile devices, navbar display change on its hover position and on window scroll position).
<br />
User interface improvements: responsive website using HTML, CSS, Bootstrap 4, JavaScript, jQuery


## Initial website user interface <a name="InitialWebsiteUserInterface"></a>

<p>Initial website user interface</p>
<img src="https://github.com/sctlcd/boutique-ado-customized-latest-version/blob/master/design/original_version/boutique_ado_initial_UI-min.png" alt="Initial website user interface" width="700">
<br /><br />

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
	- Search button colour change when hovered or selected

- Specific desktop :
	- Dropdown menus: dark grey box shadow
	- "Gallery" icon link added in the desktop top nav
	- Navbar item sub-menu closes when the user clicks anywhere in the page
	- Logo of the website
	- Favicon

- Specific mobile :
	- Dropdown menus: light grey box shadow
	- "Home" and "Gallery" icon links added in the mobile top header
	- Search input field in the mobile top header closes when the user clicks anywhere in the page
	- Navbar item sub-menu closes when the user clicks in the header of the page
	- Navbar collapse menu closes when the user clicks on "Search" or "My Account" icon links and when the user clicks in the body of the page (apart from the header) or in the footer.

Back to [top](#TableOfContents)

---

### Footer <a name="Footer"></a>

#### Description <a name="FooterDescription"></a>

- Newsletter subscription in the purpose of the website presentation (not implemented)
- Links to additional website pages in the purpose of the website presentation (page links not implemented)
- Social media links
- A copyright mention is displayed with my name beside a GitHub icon link which opens my [Github](https://github.com/sctlcd)

Back to [top](#TableOfContents)

---

### Landing page <a name="LandingPage"></a>

#### Description <a name="LandingPageDescription"></a>

 - Landing page sections:
 	- Shop now feature
	- Order features offered
	- Target audience
	- Customer reviews
	- Share your own fashion style feature

Back to [top](#TableOfContents)

---

### Set of slides gallery <a name="SetOfSlidesGallery"></a>

#### Description <a name="SetOfSlidesGalleryDescription"></a>

- Carousel of 4 slides of 3 images each
- The set of slides gallery is auto played on page load/refresh

Back to [top](#TableOfContents)

---

### Modal image gallery <a name="ModalImageGallery"></a>

#### Description <a name="ModalImageGalleryDescription"></a>

- On click on each images of the set of slides gallery a modal image gallery opens whose purpose is to display the images in bigger size.
- The modal image gallery opens on the image selected in the set of slides gallery.
- The modal image gallery is auto played on page load/refresh
- When the modal image gallery opens it pauses the cycling of the set of slides gallery. The modal image gallery cycling is maintained.  
- When the modal image gallery closes it resumes the cycling of the set of slides gallery.

Back to [top](#TableOfContents)

---

### No result found page <a name="NoResultFoundPage"></a>

#### Description <a name="NoResultFoundPageDescription"></a>

- Displays an humoristic image and a message informing the user
- Offers a link to go back to Products page.

Back to [top](#TableOfContents)

---

### Go to page bottom button <a name="GoToPageBottomButton"></a>

#### Description <a name="GoToPageBottomButtonDescription"></a>

- Adding a go to page bottom button, in addition to the page up button in products pages in desktop and mobile devices and in bag page in mobile version.

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

- [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used as the base_master for markup text.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Used as the base_master for cascading styles.
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
|**base_master.html** |
| Navigation bar: logo / links / search | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| Content page: Images / icons text / links / buttons / text | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| Footer: text / links | Good | Good | Good  | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
|**base_extension.html** |
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

---

### Compatibility <a name="Compatibility"></a>

I tested the website across the 6 main browsers in both desktop and mobile configuration to ensure a large number of users can use it successfully.

- Chrome v.91.0
- Edge v.91.0
- Firefox v.89.0
- Safari v.5.1.7 for Windows 10
- Opera v.76.0
- Internet Explorer v.11

|All pages | Chrome | Edge | Firefox | Safari | Opera | IE |
| :--- | :--- | :---| :--- | :--- | :--- | :--- |
| Expected appearance | Good | Good | Good | Poor | Good | Poor |
| Expected responsiveness | Good | Good | Good | Poor | Good | Poor |

- IE: Some CSS3 properties and HTML5 elements are not fully supported

- Safari v.5.1.7: It’s an outdated version and lacks many of the features present in the latest version of Safari. The last version of Safari for Windows was released on May 9, 2012.

Back to [top](#TableOfContents)

---

### Testing left <a name="TestingLeft"></a>

There is no way to install the latest version of the Safari browser on Windows 10 as Apple stopped developing Safari for Windows operating system long ago. For testing this website on the latest version of Safari, I will have to install the newest version of macOS on Windows 10 in a virtual machine.

### Validators <a name="Validators"></a>

**HTML**
- [W3C HTML Validator](https://validator.w3.org/)

**CSS**
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

**Javascript**
- [Javascript Validator](https://jshint.com/)

**Chrome DevTools**
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)

**Python**
- [Python validator](http://pep8online.com/)


### Known Issues <a name="KnownIssues"></a>
-

Back to [top](#TableOfContents)

---

## Deployment <a name="deployment"></a>

### Deployment – Run Locally <a name="deploymentRunLocally"></a>

It's highly recommended to work in a virtual environment, but not absolutely required.

In order to run this project locally on your own system, you will need the following installed (as a bare minimum):

- [Python3](https://www.python.org/downloads) to run the application.
- [PIP](https://pip.pypa.io/en/stable/installing) to install all app requirements.
- [GIT](https://www.atlassian.com/git/tutorials/install-git) for cloning and version control.

Next, there's a series of steps to take in order to proceed with local deployment:

- Clone this GitHub repository by either clicking the green "*Clone or download*" button above in order to download the project as a zip-file (remember to unzip it first), or by entering the following command into the Git CLI terminal:
    - `git clone https://github.com/sctlcd/boutique-ado-customized-latest-version.git`
- Navigate to the correct file location after unpacking the files.
    - `cd <path to folder>`
- Create a `.env` file with your own credentials.

	| **Key** | **Value** |
	|----------|:-------------:|
	| AWS_ACCESS_KEY_ID | <your_aws_access_key_id>  |
	| AWS_SECRET_ACCESS_KEY | <your_aws_secret_access_key> |
	| DATABASE_URL | <your_database_url> |
	| EMAIL_HOST_PASS | <your_email_host_pass> |
	| EMAIL_HOST_USER | <your_email_host_user> |
	| SECRET_KEY | <your_secret_key> |
	| STRIPE_PUBLIC_KEY| <your_stripe_public_key> |
	| STRIPE_SECRET_KEY | <your_stripe_secret_key> |
	| STRIPE_WH_SECRET | <your_stripe_wh_secret> |
	| USE_AWS | True |
	| DEBUG | DEVELOPMENT |

- Install all requirements from the [requirements.txt](https://github.com/sctlcd/boutique-ado-customized-latest-version/blob/master/requirements.txt) file using this command:
    - `sudo -H pip3 -r requirements.txt`
- In the IDE terminal, use the following command to launch the Django project:
    - `python manage.py runserver`
- The Django server should be running locally now on **http://127.0.0.1:8000** (or similar). If it doesn't automatically open, you can copy/paste it into your browser of choice.
- When you run the Django server for the first time, it should create a new *SQLite3* database file: **db.sqlite3**
- Next, you'll need to make migrations to create the database schema:
    - `python manage.py makemigrations`
    - `python manage.py migrate`
- In order to access the Django *Admin Panel*, you must generate a superuser:
    - `python manage.py createsuperuser`
    - (assign an admin username, email, and secure password)

Once the database migrations and superuser have been successfully completed, Django should migrate the existing *migrations.py* files from each app to configure the following relational schema:

Back to [top](#tableOfContents)

---

### Deployment – Live Website <a name="deploymentLiveWebsite"></a>

This site is currently deployed on [Heroku](https://www.heroku.com/) using the **master** branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely with the following steps:

- Create a **requirements.txt** file so Heroku can install the required dependencies to run the app:
    - `sudo pip3 freeze --local > requirements.txt`
    - The *requirements.txt* file for this project can be found here: [requirements.txt](https://github.com/sctlcd/boutique-ado-customized-latest-version/blob/master/requirements.txt)
- Create a **Procfile** to tell Heroku what type of application is being deployed using *boutique-ado-customized-latest-version*, and how to run it:
    - `echo web: gunicorn main.wsgi:application > Procfile`
    - The *Procfile* for this project can be found here: [Procfile](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/profiles)
- Sign up for a free Heroku account, create your project app, and click the **Deploy** tab, at which point you can *Connect GitHub* as the Deployment Method, and select *Enable Automatic Deployment*.
- In the Heroku **Resources** tab, navigate to the *Add-Ons* section and search for **Heroku Postgres**. Make sure to select the free *Hobby* level. This will allow you to have a remote database instead of using the local sqlite3 database, and can be found in the Settings tab. You'll need to update your *.env* file with your new *database-url* details.
- In the Heroku **Settings** tab, click on the *Reveal Config Vars* button to configure environmental variables. You will need to copy/paste all of the *.env* key value pairs into the config variables, but please omit the *development=1* variable; this is only for local deployment.

	| **Key** | **Value** |
	|----------|:-------------:|
	| AWS_ACCESS_KEY_ID | <your_aws_access_key_id>  |
	| AWS_SECRET_ACCESS_KEY | <your_aws_secret_access_key> |
	| DATABASE_URL | <your_database_url> |
	| EMAIL_HOST_PASS | <your_email_host_pass> |
	| EMAIL_HOST_USER | <your_email_host_user> |
	| SECRET_KEY | <your_secret_key> |
	| STRIPE_PUBLIC_KEY| <your_stripe_public_key> |
	| STRIPE_SECRET_KEY | <your_stripe_secret_key> |
	| STRIPE_WH_SECRET | <your_stripe_wh_secret> |
	| USE_AWS | True |

- Your app should be successfully deployed to Heroku at this point, but you're not quite finished yet!
- Update the *settings.py* file to connect the remote database using this Python package: `dj_database_url`
- Re-build the migrations and create a superuser to your new remote database using the instructions in the *local deployment* section above.
- Sign up for a free [Amazon AWS](https://aws.amazon.com/) account in order to host your *staticfiles* and *media* files. From the **S3 buckets** section, you'll need to create a new unique bucket. Follow these next steps to complete the setup:

**Permissions** > **CORS configuration**:

```
[
  {
      "AllowedHeaders": [
          "Authorization"
      ],
      "AllowedMethods": [
          "GET"
      ],
      "AllowedOrigins": [
          "*"
      ],
      "ExposeHeaders": []
  }
]
```

**Permissions** > **Bucket Policy**:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<x>/*"
        }
    ]
}
```

*! IMPORTANT ! - on the **Resource** line above, be sure to replace `<x>` with your **AWS bucket arn** details, but retain the `/*` at the end.* It should look similar to this:
    - `"Resource": "arn:aws:s3:::my-bucket-name/*"`

- From here, you'll need to navigate to the **IAM** section of AWS.
    - Create a *New Group* and be sure to select your existing S3 Bucket details to attach.
    - Create a *New Policy* and a *New User* in the IAM section as well, then attach these to the Group you just built.
- In your CLI-terminal, you should now be able to push the static files to AWS if everything is configured properly using this command:
    - `python manage.py collectstatic`
- Sign up for a free [Stripe](https://stripe.com) account. Navigate to the **Developers** section, and click on **API Keys**. You should have two confidential keys which need to be added to your *.env* file, as well as your Heroku config vars. These keys are:
    - `Publishable Key`: **pk_test_key**
    - `Secret Key`: **sk_test_key**

Congratulations! Your project should be completely setup and ready for remote deployment!

Back to [top](#tableOfContents)

---

## Credits <a name="Credits"></a>

### Media <a name="Media"></a>

Sources of the images used on this site:

- From static/images sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/static/images)
	- [favicon.ico](https://www.flaticon.com/free-icon/clothing-store_3486372?term=boutique&page=1&position=9&related_item_id=3486372) - [Flaticon](https://www.flaticon.com/) | copyright [Freepik](https://www.flaticon.com/authors/freepik)

- From media/home sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/media/home)
	- [boutique-min.png](https://www.flaticon.com/free-icon/clothing-store_3486372?term=boutique&page=1&position=9&related_item_id=3486372) - [Flaticon](https://www.flaticon.com/) | copyright [Freepik](https://www.flaticon.com/authors/freepik)

- From media/home/hero_image sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/media/home/hero_image)
	- [hero-image-background-1920-min.jpg](https://pixabay.com/fr/photos/femme-shopping-mode-de-vie-belle-3040029/) - [Pixabay](https://pixabay.com) | copyright [gonghuimin468](https://pixabay.com/fr/users/gonghuimin468-3804290/)

- From media/home/gallery sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/media/home/gallery)
	- [gallery-background-1920-min.jpg](https://www.pexels.com/photo/apple-device-camera-camera-lens-desk-593325/) - [Pexel](https://www.pexels.com/) | copyright [Jessica Lewis](https://www.pexels.com/@thepaintedsquare)

- From media/home/image_showcases sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/media/home/image_showcases)
	- [pexels-lucas-da-miranda-1967902-min.jpg](https://www.pexels.com/photo/woman-in-black-spaghetti-strap-top-1967902/) - [Pexel](https://www.pexels.com/) | copyright [lucas da miranda](https://www.pexels.com/@lucas-da-miranda-998015)
	- [pexels-mentatdgt-1174170-min.jpg](https://www.pexels.com/photo/woman-wearing-jacket-crop-top-and-mini-skirt-1174170/) - [Pexel](https://www.pexels.com/) | copyright [mentatdgt](https://www.pexels.com/@mentatdgt-330508)
	- [pexels-omar-lópez-1182825-min.jpg](https://www.pexels.com/photo/man-wearing-black-zip-up-leather-jacket-1182825/) - [Pexel](https://www.pexels.com/) | copyright [Omar López](https://www.pexels.com/@omarlopezphil)

- From media/home/testimonials sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/media/home/testimonials)
	- [pexels-daniel-xavier-1239291-min.jpg](https://www.pexels.com/photo/woman-wearing-black-eyeglasses-1239291/) - [Pexel](https://www.pexels.com/) | copyright [Pixabay](https://www.pexels.com/@pixabay)
	- [pexels-pixabay-235534-min.jpg](https://www.pexels.com/photo/adolescent-beauty-blur-cute-235534/) - [Pexel](https://www.pexels.com/) | copyright [Daniel Xavier](https://www.pexels.com/@danxavier)
	- [pexels-tim-savage-903661-min.jpg](https://www.pexels.com/photo/photography-of-a-man-wearing-black-shirt-903661/) - [Pexel](https://www.pexels.com/) | copyright [Tim Savage](https://www.pexels.com/@timsavage)

- From media/gallery sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/media/gallery)
	- [pexels-anastasiya-lobanovskaya-1035682-min.jpg](https://www.pexels.com/photo/woman-holding-flower-bouquet-1035682/) - [Pexel](https://www.pexels.com/) | copyright [Anastasiya Lobanovskaya](https://www.pexels.com/@annetnavi)
	- [pexels-andrea-piacquadio-3782968-min.jpg](https://www.pexels.com/photo/depth-of-field-photography-of-woman-in-pastel-colour-sleeveless-shirt-and-white-sunhat-788567/) - [Pexel](https://www.pexels.com/) | copyright [Andrea Piacquadio](https://www.pexels.com/@olly)
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

- From media/errors sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/media/errors)
	- [error_500-min.jpg](https://www.freepik.com/free-vector/500-internal-server-error-concept-illustration_13416109.htm#page=1&query=server%20error&position=4) - [Freepik](https://www.freepik.com/) | copyright [Stories](https://storyset.com/)
	- [error_404-min.jpg](https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_7967793.htm#page=1&query=server%20error&position=7) - [Freepik](https://www.freepik.com/) | copyright [Stories](https://storyset.com/)
	- [error_403-min.jpg](https://www.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_8030434.htm#page=1&query=403%20error&position=3) - [Freepik](https://www.freepik.com/) | copyright [Stories](https://storyset.com/)
	- [error_400-min.jpg](https://www.freepik.com/free-vector/400-error-bad-request-concept-illustration_8030432.htm#page=1&query=400%20error&position=0) - [Freepik](https://www.freepik.com/) | copyright [Stories](https://storyset.com/)

- From media/products/no_image sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/media/products/no_image)
	- noimage.png - Code institute

- From media/products/not_found sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version/tree/master/media/products/not_found)
	- [no-results-found-min.jpg](https://all-free-download.com/free-vector/download/exploration-job-background-searching-man-sketch-cartoon-design_6844384.html) - [Free vectors](https://all-free-download.com/free-vector/) | copyright [BSGStudio](http://buysellgraphic.com/)

- From media/products/product_images sub-directory - [Github](https://github.com/sctlcd/boutique-ado-customized-latest-version-in-progress/tree/master/media/products/product_images)
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
- Readme file information - [Tim Nelson](https://github.com/TravelTimN) Software Developer and Tutor at [Code Institute](http://codeinstitute.net)

Back to [top](#TableOfContents)

---
