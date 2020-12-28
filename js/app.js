// The Java script for making theb website Dynamic

// Declaring the section class and Id

class sec {
    id = 0;
    get content() {
        /* The main COntent which will be added to the page */
        return `
        <section id="Sec${this.id}"  data-nav="Sec ${this.id}" >
        <div class="landing__container">
        <h2>Section ${this.id}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
          
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
        </section>
    `
    };

    /* Adding the new Section */
    new() {
        this.id += 1;
        document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', this.content);
    }
}

// Adding the navbar Class and Id

class nav {
    men_ele = document.getElementById('navbar__list');
    /** Building the menu  */
    men_build() {
        this.men_ele.innerHTML = '';
        document.querySelectorAll('section').forEach(element => {
            this.men_ele.insertAdjacentHTML('beforeend', `<li><a class="menu__link" href="#${element.id}" data-section-id="${element.id}"  >${element.dataset.nav}</a></li>`);
        });
        this.go_sec();
    }

// Moving to the section

go_sec() {
    this.men_ele.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById(event.target.dataset.sectionId).scrollIntoView({ behavior: "smooth" });
        active(event.target.dataset.sectionId)
        });
    }
}

// Defining the Global Variables

const section = new sec();
const menu = new nav();

// Adding the new section 

function new_sec() {
    section.new();
    menu.men_build();
}

// Adding the active Class

function active(id){
    //Add Link Active
    document.querySelector('.link__active')?.classList.remove('link__active');
    document.querySelector(`[href="#${id}"]`).classList.add('link__active');
    
    //Add Section Active
    document.querySelector('.your-active-class')?.classList.remove('your-active-class');
    document.querySelector(`#${id}`).classList.add('your-active-class');   
}

// Connecting between the nav bar and the scrolling

/* Checking the active section */
function on_screen(element, buffer) {
    buffer = typeof buffer === 'undefined' ? 0 : buffer;
    const bounding = element.getBoundingClientRect();
    /* Checking if the element is in the view port or not */
    if (bounding.top >= buffer && bounding.left >= buffer && bounding.right <=
        ((window.innerWidth || document.documentElement.clientWidth) - buffer) &&
        bounding.bottom <=
        ((window.innerHeight || document.documentElement.clientHeight) - buffer)) {
        return true
    } else {
        return false;
    }
}
/* While scrolling  */

window.addEventListener('scroll', () => {
    let scrollPrecent = ((window.innerHeight + window.scrollY) / document.body.offsetHeight) * 100;
    document.querySelectorAll('section').forEach(element => {
        if (on_screen(element, -300)) {
            active(element.id);
        }
    });

});

//Calling the defined functions we had made

section.new();
section.new();
section.new();
section.new();
section.new();

// Building the menu

menu.men_build();




