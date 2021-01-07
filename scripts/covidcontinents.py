import pandas as pd
import json
import numpy as np

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
locals = []

for i, j in dat.iterrows():
    if(dat['location'][i] != last):
        locals.append(dat['location'][i])
        bid['countries'].append([dat['location'][i], dat['human_development_index'][i]])
        bid['evolution'][dat['location'][i]] = [0, 0, []]

    cval = dat['new_deaths_per_million'][i]
    if np.isnan(cval):
        cval = 0
    cval /= 100.0

    bid['evolution'][dat['location'][i]][0] += cval
    bid['evolution'][dat['location'][i]][2].append(cval)

    lastv = cval
    last = dat['location'][i]

for c in locals:
    print(c)
    bid['evolution'][c][0] /= len(bid['evolution'][c][2])
    bid['evolution'][c][1] = sum([(x - bid['evolution'][c][0]) ** 2 for x in bid['evolution'][c][2]])\
                             / len(bid['evolution'][c][2])

with open('../extracted_data/taxesbycontinent.json', 'w') as outfile:
    json.dump(bid, outfile)
