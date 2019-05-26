"""
Merge function for 2048 game.
"""

def merge(line):
   """
   Function that merges a single row or column in 2048.
   """
   print("input list ", line)
   out_list = [0] * len(line)
   current_index = 0
   result = []
   pivot = 0
   print("start out_list ", out_list)
   
   for i in range(len(line)):
      """
      Iterate over the input and create an output list that has all of the non-zero 
      tiles slid over to the beginning of the list with the appropriate number of 
      zeroes at the end of the list.
      """
      if line[i] != 0:
         out_list[current_index] = line[i]
         current_index += 1

   print("out_list done ", out_list)

   while pivot < len(out_list):
      """
      create sub-list of 2 pairs from previous step -> out_list
      """
      
      sub_list = out_list[pivot:pivot+2]
      print("sub list ", sub_list)

      # 1 - check if sub-list has only 1 element
      # on last iteration, prvenent indexOutOfBound error
      if len(sub_list) < 2:
         print("less than 2 ", result)
         result.append(sub_list[0])

         pivot += 1
      # 2 - check if two pairs are same value
      # if yes -> then add 
      # append to result list
      elif sub_list[0] == sub_list[1]:
         result.append(sub_list[0] * 2)

         print("result list 2nd iter ", result)

         pivot += 2
      
      # 3 - if two pairs are not same value
      # then push only non-zero value to result
      else:
         result.append(sub_list[0])
         print("result list 3rd iter ", result)
         
         pivot += 1

   # check if number of list elements in destination list is equal to source

   if len(result) < len(out_list):
      for x in range(len(out_list) - len(result)):
         result.append(0)
      print ("final iter ", result)
      
   return result

"""
[2,0,2,4] should return 
[4, 4, 0, 0]
[4,4,0,0]
"""

ans = merge([2,0,2,4])

print ([4, 4, 0, 0] == ans)

# ans1 = merge([4, 2, 2])

# print ( [4, 4, 0] == ans1)