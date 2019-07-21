---
layout: default
title: Projects
---
## Projects

### Restaurant Reservations Console (2019)

<p class="projects-stack">Bootstrap, PHP, MySQL, JavaScript, jQuery, CanvasJS</p>

<a href="{{ site.url }}/assets/img/restaurant-reservations-console.jpg"><img src="{{ site.url }}/assets/img/restaurant-reservations-console.jpg" alt="Restaurant Reservations Console Screenshot"></a>

This was a project for my IT Capstone in Programming class at Peirce College. We were told the project could be any subject, and were encouraged to develop something that pertained to a work project or a personal interest.

I was looking for a reason to use this restaurant reservation database my team and I had designed in our DBMS class, and I wanted to design something around the restaurant industry, as I had worked in restaurants on and off for a few years.

<div class="expand">
    <a href="#" class="expand-title">
        <span class="material-icons">add</span> 
        <h3 class="expand-title-text">
            View project intro & summary...
        </h3>
    </a>
    <div class="expand-text">
        <p><strong>Introduction</strong></p>
        <p>Bistro! Bistro!, and its accompanying management console, is the implementation of a concept that a restaurant’s website can have a tailored experience for the restaurant’s ownership & management. The idea is that an underlying database interacts both with the customer-facing website and the management console behind the scenes. In this initial implementation, only a requests form for reservation requests, and the dashboard that accompanies it, were created. The concept could be extended further to include bespoke restaurant guest management, data on reservations, and analytics on website traffic as well as email and social media marketing.</p>
        <p><strong>Project Summary</strong></p>
        <p>This phase of the project consists of these parts:</p>
        <ul>
            <li>A static informational website with prominent “Request a table” button</li>
            <li>A request form that validates input and packages a single request in JSON format</li>
            <li>A database consisting of the following translation:
                <ul>
                    <li>REQUESTS (request_id, JSON_request, contacted)</li>
                    <li>GUESTS (f_name, l_name, phone, email, notes)</li>
                    <li>ALLERGIES (allergy)</li>
                    <li>TABLES (table_num, table_size)</li>
                    <li>MANAGERS (username, password, name)</li>
                    <li>RESERVATIONS (res_id, date, time, party, notes, guest_id*, request_id*, bday, anniv, allergy*, table_num*)</li>
                </ul>
            </li>
            <li>A dynamic web app for the management console consisting of
                <ul>
                    <li>Login page with input validation;</li>
                    <li>Dashboard with reservation info for each day of the year;</li>
                    <li>New requests notification;</li>
                    <li>Requests page to deny or confirm incoming requests;</li>
                    <li>Guestbook to view, add, and delete guestbook entries.</li>
                </ul>
            </li>
        </ul>
    </div>
</div>

<a href="{{ site.url }}/assets/img/restaurant-reservations-console.gif"><img src="{{ site.url }}/assets/img/restaurant-reservations-console.gif" alt="Restaurant Reservations Console Functionality"></a>

----

### Bistro! Bistro! Website (2019)

<p class="projects-stack">HTML, CSS, JavaScript, Materialize</p>

<a href="{{ site.url }}/assets/img/bistro-bistro-screenshot.jpg"><img src="{{ site.url }}/assets/img/bistro-bistro-screenshot.jpg" alt="Bistro! Bistro! Screenshot"></a>

This is a restaurant website template I developed to interact with the restaurant reservations console I created for my capstone project. Initially, I had the idea for a simple, single page, informational webiste using heading IDs for page navigation -- but I wanted the page headings to stick to the top while the user was navigating that section of the website.

I came up with a design that used a fixed top navbar for main navigation, and sticky, full width (white background) section headings that are the same height as the fixed navbar. Scolling down the page gives the effect that only the section heading is changing and not the whole navbar. The branding logo and menu buttons have a z-index higher than the sticky section headings to always appear fixed over the 'navbar.' See below for an example:

<a href="{{ site.url }}/assets/img/bb-sticky-header-navbar.gif"><img src="{{ site.url }}/assets/img/bb-sticky-header-navbar.gif" alt="Sticky Header Navbar Demo"></a>

----

### Hydeaway Jekyll Theme (2018)

<p class="projects-stack">HTML, CSS, Jekyll, GitHub Pages</p>

<a href="{{ site.url }}/assets/img/hydeaway-screenshot.jpg"><img src="{{ site.url }}/assets/img/hydeaway-screenshot.jpg" alt="Hydeaway Screenshot"></a>

This is a theme I programmed which I used for this site previously. When I was learning Jekyll and GitHub pages, I took the Hyde theme, and some ideas from the Hydeout theme, and added some personal touches I wanted to see in my own site. I added a different font, adjusted the size of sidebar, added a background gradient, added Font Awesome icons, and added the ability to pin certain posts to the top of the feed.

----

### The Cellar Website (2013)

<p class="projects-stack">HTML, CSS, jQuery</p>

<a href="{{ site.url }}/assets/img/thecellar-screenshot.jpg"><img src="{{ site.url }}/assets/img/thecellar-screenshot.jpg" alt="The Cellar Screenshot"></a>

Back in 2013 when I was getting back into web design I asked my employer if I could re-design their website. I used this as a way to relearn HTML and CSS and to brush up on my design skills from reading web design and web typography books back in the early 2000s. 