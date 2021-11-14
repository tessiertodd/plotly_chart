# plotly_chart

## Project Overview
We are helping Rosa to complete the build of the dashboard she has been working on. Rosa is helping a company called Improbable Beef to identify sources for bacteria they will require, once they discover which of the bacteria will help them in their quest to manufacture synthetic beef.

We are going to add charts to show volunteers the top 10 bacterial species in their belly button, show the bacteria counts in each sample and display how many times volunteers wash their belly button.  All this great information for each volunteer must be activated by volunteers with a drop-down menu of test ID numbers so they can simply select their ID to have their information displayed... which is useful information for them if Improbable Beef is able to identify which bacteria could help them produce synthetic beef. 


## Resources
- Sofware: Visual Studio Code
- Language: JavaSript
- Language: HTML
- Library: Plotly
- Library: Bootstrap CSS style

# Deliverable 1: Create the horizontal bar chart to display top 10 
We created the bar chart and set to horizontal orientation for the top 10 bacteria counts.  The yticks are the bacteria ids and when hovering you see the bacteria name as well.

![Bar chart](https://github.com/tessiertodd/plotly_chart/blob/main/images/bar%20chart.png)

# Deliverable 2: Build a bubble chart to show the bacteria cultures per sample
With the bubble chart created, we then had to work to add chart title, xasis title and colour scheme for the bubbles.

![bubble chart](https://github.com/tessiertodd/plotly_chart/blob/main/images/bubble%20chart.png)

# Deliverable 3: Gauge chart to show frequency of belly button washing
In order for participants to quickly see how many times they wash, the gauge has multiple colours changing in increments of 2 on the scale from 0 - 10.

![Wash gauge](https://github.com/tessiertodd/plotly_chart/blob/main/images/gauge%20with%20height%20adjusted.png)

# Deliverable 4: Customize the Dashboard

## Change the height of the gauge chart
This change was made in the charts.js file... originally I had 500 but changed to 300.

![Gauge changes](https://github.com/tessiertodd/plotly_chart/blob/main/images/changed%20height%20of%20gauge.png)

## Add background colour to website
I changed the background colour in the style.css file... the colour I chose was antique white.

![Background colour](https://github.com/tessiertodd/plotly_chart/blob/main/images/set%20background%20colour%20to%20page.png)

## Change background colour on panel body where volunteer info shown once ID selected
![background of panel body](https://github.com/tessiertodd/plotly_chart/blob/main/images/change%20panel%20body%20background.png)

![view of updated panel body](https://github.com/tessiertodd/plotly_chart/blob/main/images/new%20look%20of%20panel%20body.png)

## Add image to the jumbotron
There were two options on how to include this image... one in the HTML file with code referencing the URL where I received, but decided that was less than ideal as that URL could not be accessed unless you are logged into the bootcampspot site.  The other option that I did go with was copying the image to a .png file and storing that file in a folder that could be referenced... but included that reference in the style.css file. 

![jumbotron image code](https://github.com/tessiertodd/plotly_chart/blob/main/images/add%20image%20to%20jumbotron.png)

## Change jumbotron font to better stand out with image as background
Using the HTML file I made necessary changes to adjust the font colours (2 different), and make first phrase bold... so that text was more visible with image in background.

![jumbotron font changes](https://github.com/tessiertodd/plotly_chart/blob/main/images/change%20font%20on%20jumbotron.png)

Here is the final adjusted jumbotron button.

![jumbotron image updated](https://github.com/tessiertodd/plotly_chart/blob/main/images/jumbotron%20updated.png)

# Summary
Putting all these charts together and ensuring they were interactive with the drop-down selection was a lot of work... but the result is a webpage that looks good and will allow volunteers to quickly get the results of their samples once they are tested.
