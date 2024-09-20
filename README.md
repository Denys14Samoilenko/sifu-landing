🎮 Sifu Landing Page
A visually captivating landing page for the action-packed video game Sifu, showcasing dynamic animations, responsive layouts, and a seamless user experience. Built with modern web technologies including HTML, SCSS, AOS, Swiper, and PHPMailer.

🌟 Features
Responsive Design: Built to look stunning across all devices—desktop, tablet, and mobile.
Smooth Animations: Integrated with AOS (Animate on Scroll) to deliver eye-catching fade-in and scroll animations.
Swiper.js Integration: Interactive image carousels for showcasing gameplay, characters, and features.
Contact Form with PHPMailer: An easy-to-use contact form that sends emails directly using PHPMailer, ensuring reliable communication.
💻 Technologies Used
HTML5: For semantic structure and layout.
SCSS: Modular and maintainable styling using Sass preprocessor.
AOS (Animate on Scroll): For beautiful scroll animations throughout the page.
Swiper.js: Fully responsive image slider and carousel for showcasing content.
PHPMailer: Backend email service for the contact form, ensuring secure and efficient email handling.

🚀 Getting Started
Prerequisites
To run the project locally, you will need a local development environment like XAMPP, MAMP, or WAMP, as the project includes a PHP-based contact form.

Installation
Clone the repository to your local machine:

bash

git clone https://github.com/yourusername/sifu-landing.git
Navigate to the project directory:

bash

cd sifu-landing
Set up a local server (Apache or similar) and make sure PHP is installed for the contact form functionality.

Install dependencies if necessary (such as PHPMailer using Composer):

bash

composer require phpmailer/phpmailer

Configure your email credentials:

Open the send_email.php file and replace the placeholder values with your own SMTP credentials (email and password) for sending emails:

php

$mail->Username = 'your-email@example.com'; // Your email
$mail->Password = 'your-email-password';   // Your email password
Open the project in your preferred text editor and serve the files using your local server.

Usage
Customize any content within the HTML files, and update styles through SCSS files located in scss/.
Test animations on scroll by loading the landing page and navigating through sections.
Configure PHPMailer with your own SMTP credentials for the contact form to function.
