import pandas as pd
df = pd.read_csv("C:/Users/billy/Downloads/konbert-output-6a20167a - konbert-output-6a20167a.csv")
horlist=list(df.Horiz)
verlist=list(df.Vert)
print(horlist)
print(verlist)