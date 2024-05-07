# Interview App

Time 30 minutes. Can google if you get stuck! Run `npm i` followed by `ng serve` to start the app.

## 1

Bug: The full list of users defined in the class `UsersPageComponent` aren't displaying in the users table.
Fix: Make them display.

## 2

Task: Make users submitted through the users form append to the existing users table.

## 3

Task: Prevent users with the same first name and surname being added twice to the users table (don't allow duplicates)

## 4 (Skippable)

Task: Display the commented out error message (in `users-form.component.html`) if an attempt to add an existing user is made.

Notes: Don't worry about re-hiding the error message. Just make it initially hidden and then visible once an attempt to add a duplicate user is made.

## 5 (Skippable)

Task: Add validation to ensure blank names aren't submitted in the users form.

Notes: Don't worry about giving UI feedback on this validation. Just ensure that it's impossible to add a user without a first name/surname.

## 6 (Skippable)

Task: Make odd rows in the users table have background colour: #ccc

## 7 (Skippable)

Task: Make the users table searchable/filterable by name. 

Assumptions: Names will always be simple, that is, inputted with first name first and then surname after, separated by a space. 

Notes: Use the existing search input field to receive the search term.

Acceptance critera:

Existing Users: (Joe Bloggs, Jane Doe, Bill Bloggs, Jane Bloggs, Joe Doe)

Search Term: "J" = (Joe Bloggs, Jane Doe, Jane Bloggs, Joe Doe)

Search Term: "Joe" = (Joe Bloggs, Joe Doe)

Search Term: "Joe B" = (Joe Bloggs)

Search Term: "Bill Bloggs" = (Bill Blogs)

Search Term: "J Bloggs" = (Joe Bloggs, Jane Bloggs) 

## 8 (Skippable if skipping 9 too)

Bug: Clicking the `About` nav link at the top doesn't navigate to the `AboutPageComponent` page.
Fix: Make the `About` link to the `AboutPageComponent` page.

## 9 (Skippable)

Task: Make this layout in the layout page: https://www.google.com/search?sca_esv=d642a9eece08821a&sca_upv=1&q=css+layout&uds=AMwkrPt4t1EVCCdSUNw8MsX-M3cqWg7H6k6k18FebboQHyZRrA77GE1x0WlVt1Sgei3aTgiv02M24YiMIFZHn2n5iF_mm7EI0bWhM8FSVMRJwUzBAiICrhos1UOfQNAEYFz5I6bjPgSLwx_cS8_cqYFh-DNBvweGGa-Ezm4uTMmWVd1WvyWO5Q9UbfqEUegmcLzzmO5to8tvDtojLSNpzTAGlv-SPBbXRwc1N9Zdy2yytWfriys6vFM5W4Lag-zUyAQtQHSU8EX2zS2puoYeSYw0XrDaElEdlA&udm=2&prmd=ivnmbtz&sa=X&sqi=2&ved=2ahUKEwjIvbK46_GFAxVMX0EAHUtkCckQtKgLegQICxAB&biw=2560&bih=1271&dpr=1#vhid=XrMKVaQN2koroM&vssid=mosaic

Notes: Don't worry about the borders or the text. Just make the layout and have the app bar purple, menu green, and content blue.





