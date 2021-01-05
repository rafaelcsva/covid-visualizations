# covid-visualizations
This repository host the final work on information visualization discipline.

## Objective
Build visualization with covid-19 data to answer the followings questions:

1. Describe when the COVID-19 outbreak began in all countries and how it has spread between states and cities in Brazil over time. (specific questions: how many days since it has became)
1. Did countries with similar geopolitical, social and/or economical conditions show similar evolution pattern of COVID-19? (possibilidade: separar por continentes..)
1. Did the virus death rate increase with time ?
1. The virus death rate variation tends to be equal accordingly with the region of Brazil?

## Dataset
We've used the followings datasets:

1. https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv (1, 3)
1. https://github.com/owid/covid-19-data/tree/master/public/data (2)
1. https://brasil.io/dataset/covid19/caso_full/ (1, 4)

### Technologies
We've used python [pandas](https://pandas.pydata.org/docs/getting_started/index.html) lib to extract information from the datasets, and [Angular](https://angular.io/) to build the visualizations.
