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
    if(dat['location'][i] == last):
        continue

    bid.append([dat['location'][i], dat['date'][i]])
    last = dat['location'][i]


with open('../extracted_data/dayscovidbycountry.json', 'w') as outfile:
    json.dump(bid, outfile)

# for i in columns:
#     # printing the third element of the column
#     print (dat[i][2])
