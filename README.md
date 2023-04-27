# Data-visualizations-project
Group members: Bethelhem Arefayne, Maksym Andreiko, Umeadi Dungor

# Project Requirements
For Project 3, you will work with your group to tell a story using data visualizations. Here are the specific requirements:

1. Your visualization must include a Python Flask-powered API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.).

2. Your project should fall into one of the following three tracks:

    * A combination of web scraping and Leaflet or Plotly

    * A dashboard page with multiple charts that update from the same data

    * A server that performs multiple manipulations on data in a database prior to visualization (must be approved)

3. Your project should include at least one JS library that we did not cover.

4. Your project must be powered by a dataset with at least 100 records.

5.  Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).

3. Your final visualization should ideally include at least three views.

## Gun Violence in America

![Alternate image text](/images/state_2.png)

# Project Description
The aim of our project is to explore the gun violence that has occurred in the United States from 1982-2023. Gun violence and gun control are some of the most important issues that the Congress is still battling today. We’ll examine the relationships between the location, fatalities, total victims and place of incidents. The data will be able to show the highest mass shooting in the country as well as the top ten shootings in the nation.

# Process
1. Discovery
Data source: Kaggle
File type: csv
Link: <a href="https://www.kaggle.com/datasets/nidzsharma/us-mass-shootings-19822023" target="_blank">Gun Violence, USA</a>
2. Transformation (ETL)
Loaded csv file, changed data types, filled in missing data and exported dataframe to database.
3. Analysis
Conducted exploratory data analysis to gain insights into the underlying patterns and relationships in the data.
4. Visualization
Created charts and maps to help demonstrate the findings of the data analysis.

# Technologies used
1. Pandas/Python - Pandas library was used for ETL.
2. SQLite - Stored data in SQLite database.
3. Flask - Flask framework served as the backend API.
4. JavaScript, HTML, CSS - Used to design the user interface for the web application.
5. Apexcharts, Leaflet - Displayed data analysis charts with Apexcharts and interactive map with Leaflet.

# Overview of the web pages
The application has a dashboard and map pages. There are navigation buttons on the side bar that make switching between the pages easier.
## Dashboard
Displays KPIs and charts of data analysis results.
![Alternate image text](/images/dashboard.png)
## Map
Displays the distribution of the incidents across the states.
![Alternate image text](/images/map.png)

# Dashboard Analysis
### KPI
Displays the count of incidents, total number of victims and fatalities.
![Alternate image text](/images/KPIs.png)

### Bar chart
Bar chart displays the Top Ten Gun Violence Incidents by descending order.
![Alternate image text](/images/top_ten_incidents.png)

### Pie chart
Pie chart displays Distribution of Gun Shooting Incidents by Place.
![Alternate image text](/images/Incidents_by_Place.png)

### Group bar chart
Group bar chart displays top ten Total Victims and Fatalities of Gun Violence by City. 
![Alternate image text](/images/total_victims.png)

### Map
Interactive map displays marker for each incidents including case name, location, date, number of victims and fatalities.
![Alternate image text](/images/map2.png)

## Key chanllenges
* Small data size caused limitations to analyze and present data.
* Null values and quality of data limited the identification of significant trends. 
* Outlier record affected presentation of data.

## Recomendations
* Join additional datasets to gain more insights.
* Add filters to dashboard and map to make visualizations more interactive.
* Exclude outlier from certain charts.
