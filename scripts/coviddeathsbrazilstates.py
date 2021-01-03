import pandas as pd
import json

dat = pd.read_csv('../dataset/covid19-960ac16af08e477a93af1a4581c840b5.csv')

bid = []

for i, j in dat.iterrows():
    bid.append(['BR-' + dat['state'][i],
                int(dat['last_available_deaths'][i]) * 100000.0 / int(dat['estimated_population'][i])])

with open('../extracted_data/deathsstatebrazil.json', 'w') as outfile:
    json.dump(bid, outfile)

# for i in columns:
#     # printing the third element of the column
#     print (dat[i][2])
