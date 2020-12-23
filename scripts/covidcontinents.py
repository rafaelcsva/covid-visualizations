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

bid = {
    'countries': [],
    'evolution': {}
}

last = ''
lastv = 0

for i, j in dat.iterrows():
    if(dat['location'][i] != last):
        bid['countries'].append([dat['location'][i], dat['human_development_index'][i]])
        bid['evolution'][dat['location'][i]] = []

    cval = dat['new_cases_per_million'][i];

    bid['evolution'][dat['location'][i]].append(cval)

    lastv = cval
    last = dat['location'][i]


with open('../extracted_data/taxesbycontinent.json', 'w') as outfile:
    json.dump(bid, outfile)

# for i in columns:
#     # printing the third element of the column
#     print (dat[i][2])
