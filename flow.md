## RULE engine flow

BA entering the rules from excel sheet

construct the rule json based on that conditions // no need to store it in db you can generate one while executing 

now when user is onboarded to the platform execute the rule to get the ease score

how rule will be executed is first you will get the users data

next go get all the rules available

and check for each one of them the one which passes get its corresponding ease score and get ease leveling for that ease score

assign this details to user