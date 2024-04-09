import os

import pandas as pd

current = pd.read_excel("input/jstor.xls")

new = pd.read_excel(os.path.join("jstor_download"), os.listdir("jstor_download")[0])

comparison = new.compare(current, keep_shape=True)

changes = comparison.notna().any(axis=1).any(level=0)

to_process = new[changes]

print(to_process)
