paragragh = """
Want to test your skills and accelerate your learning? Join our online game, Cloud Hero One World Challenge that launches at the Global Digital Conference on Tuesday 9/24! Play against fellow developers from around the world to complete cloud tasks in four different worlds including Analytics Park, Development Arena, Modernization District, and Transform Your Work Coliseum. Just for participating, players will receive a month of free training for select Google Cloud programs on Coursera. You have until October 22, 2019 and 5 chances to be a top scorer. There is a limit on the number of seats available, so sign up early to reserve your seat!"""

def join_words(parameter_list=''):
   letters = []
   for c in paragragh:
      if c.isalpha():
         # letters += c
         letters.append(c)
   return "".join(letters)


print(join_words())


#improve by using string compaostiion

letters = [(c for c in paragragh if c.isalpha())] # this returns a generator

print("letters ")
print(letters)


letters1 = "".join(c for c in paragragh if c.isalpha())# this returns a list of characters

print("letters1 ")
print(letters1)

