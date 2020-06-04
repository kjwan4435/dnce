import numpy as np
import os.path
import pandas as pd

location = os.path.abspath(os.path.dirname("__file__"))
exp1 = os.path.join(location, "1solo_gamble_sequence.xlsx")
exp2 = os.path.join(location, "2learning_gamble_sequence.xlsx")
exp3 = os.path.join(location, "3observed_gamble_sequence.xlsx")
question = os.path.join(location, "partner_question.xlsx")

exp1_1 = pd.read_excel(exp1, sheet_name=0)
exp1_2 = pd.read_excel(exp1, sheet_name=1)
exp1_3 = pd.read_excel(exp1, sheet_name=2)
exp1_4 = pd.read_excel(exp1, sheet_name=3)

exp2_1 = pd.read_excel(exp2, sheet_name=0)
exp2_2 = pd.read_excel(exp2, sheet_name=1)
exp2_3 = pd.read_excel(exp2, sheet_name=2)
exp2_4 = pd.read_excel(exp2, sheet_name=3)

exp3_1 = pd.read_excel(exp3, sheet_name=0)
exp3_2 = pd.read_excel(exp3, sheet_name=1)
exp3_3 = pd.read_excel(exp3, sheet_name=2)
exp3_4 = pd.read_excel(exp3, sheet_name=3)

quest = pd.read_excel(question)

exp1_1.to_json('exp1_1.json', orient='records')
exp1_2.to_json('exp1_2.json', orient='records')
exp1_3.to_json('exp1_3.json', orient='records')
exp1_4.to_json('exp1_4.json', orient='records')
exp2_1.to_json('exp2_1.json', orient='records')
exp2_2.to_json('exp2_2.json', orient='records')
exp2_3.to_json('exp2_3.json', orient='records')
exp2_4.to_json('exp2_4.json', orient='records')
exp3_1.to_json('exp3_1.json', orient='records')
exp3_2.to_json('exp3_2.json', orient='records')
exp3_3.to_json('exp3_3.json', orient='records')
exp3_4.to_json('exp3_4.json', orient='records')
quest.to_json('quest.json', orient='records')
