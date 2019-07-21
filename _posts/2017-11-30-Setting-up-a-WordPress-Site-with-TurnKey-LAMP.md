---
layout: post
title: Setting up a WordPress Site with TurnKey LAMP
categories: [blog]
redirect_from: "2017/11/30/Setting-up-a-WordPress-Site-with-TurnKey-LAMP/"
---


I’m assuming in this post that you have already set up TurnKey Linux on a virtual machine and you are running it locally to test web applications that use a database, PHP, etc. If not, and you are interested in more information, <a href="https://www.turnkeylinux.org/docs/installation-appliances-virtualbox" target="_blank">click here</a>.

Once you have set up your virtual machine and you are running the TurnKey LAMP stack console, there are a few steps you need to take to properly set up WordPress.

## Install WordPress

First, <a href="https://wordpress.org/download/" target="_blank">download</a> the latest version of WordPress (WP) and upload it to a new folder in the /var/www/ directory. (For FTP, use the IP address as the host name, root as the username, your password, and select SFTP or port 22.)

Next, log in to Adminer (or phpMyAdmin) on your browser and create a new database for your WP site. Go to ‘Privileges’ and create a new user, giving that user all privileges.

Now you need to edit the wp-config.php file. (<a href="https://codex.wordpress.org/Editing_wp-config.php" target="_blank">Click here</a> for more information on how to do that.) For our purposes, you are going to enter the database credentials you just created above, and leave the MySQL hostname at localhost.

## Activate Mod Rewrites in Apache

Using the TurnKey Web Shell or some other terminal session, first activate mod rewrites in Apache by using this command:

<pre>sudo a2enmod rewrite</pre>

Next you have to open up the Apache website configuration file and edit it to allow standard configurations to be overridden. Enter this at the command line:

<pre>sudo nano /etc/apache2/sites-available/000-default.conf</pre>

Navigate down to <Directory /var/www/> and type ‘AllowOverride All’ under ‘Require all granted.’

Write the file and exit to the command line. Lastly, you have to restart Apache for all of these changes to take place:

<pre>sudo service apache2 restart</pre>

## The .htaccess File

Next you have to create a .htaccess file and upload it to the root directory of your WP install. On the WP main administration page, go to Settings » Permalinks and choose an option for permalinks. At the bottom of the page should be information on what to write into your .htaccess file.

Copy this text and paste it into a new file in your text editor. Make sure to save your htaccess file as just “.htaccess” and not as another file type. Once it is uploaded you should be able to access posts in WordPress by their permalinks.


