---
layout: post
title: WordPress on TurnKey LAMP&#58; Uploading Media
categories: [blog]
redirect_from: "2017/12/12/WordPress-on-TurnKey-LAMP-Uploading-Media/"
---


Upon initially setting up your WP site on TurnKey LAMP you will be met with this error message when you try to add media to your library:

‘Unable to create directory…Is its parent directory writable by the server?’

To fix this you must change the file and folder permissions on your FTP client (I am using FileZilla), and then change ownership of the parent directory to the www-data user on the TurnKey system.

## Changing File & Folder Permissions

Open your FTP client and navigate to the root folder of your WP install. Select all of the directories and (in FileZilla at least) right-click and go to ‘File Permissions.’ Set the numeric value of the permissions to ‘755’ and make sure to select ‘Recurse into subdirectories’ and ‘Apply to directories only.’

After all permissions have been updated, select all the files and folders in the root directory and go back to ‘File Permissions.’ This time change the numeric value to ‘644’ (removing the ‘Execute’ permissions) and again select ‘Recurse into subdirectories,’ but this time select ‘Apply to files only.’

These permissions allow WP to write to its directories on your server and to manage files (like uploaded images to your media library).

## Ownership of the Parent Directory in Apache

To change ownership of the parent directory (wp-content) in Apache you must start a terminal or web shell session and enter this at the command line:

<pre>sudo chown www-data /var/www/your-wordpress/wp-content</pre>

Now you should be able to upload images and other media to your Media Library on your WP install, and your media should live in the wp-content/uploads directory.


