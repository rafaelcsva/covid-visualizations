import pandas as pd
import json

dat = pd.read_csv('../dataset/owid-covid-data.csv')

# print(dat['Country/Region'])
columns = list(dat)
# print(columns)
print(dat.size)
#
extract = {
    'country': [],
    'date': []
}

bid = []

last = ''

for i, j in dat.iterrows():
    if(dat['location'][i] != 'World'):
        continue

    bid.append(dat['new_deaths'][i])


with open('../extracted_data/worddeaths.json', 'w') as outfile:
    json.dump(bid, outfile)

# for i in columns:
#     # printing the third element of the column
#     print (dat[i][2])
