"""
Merge function for 2048 game.
"""

def merge(line):
   """
   Function that merges a single row or column in 2048.
   """
   out_list = [0] * len(line)
   current_index = 0
   result = []
   n = 0
   print("start out_list ", out_list)
   
   for i in range(len(line)):
      # print(i)
      
      if line[i] == 0:
         #do not change
         pass
      else:
         #current_index = 0
         #print("current_index ", current_index)
         out_list[current_index] = line[i]
         current_index += 1

   print("out_list done ", out_list)

   while n < len(out_list):
      

      sub_list = out_list[n:n+2]
      print(sub_list)
      print(len(sub_list))

      if len(sub_list) < 2:
         print("less than 2 ")
         result.append(sub_list[0])

         n += 1
      elif sub_list[0] == sub_list[1]:
         result.append(sub_list[0] * 2)

         print("result list 2nd iter ", result)

         n += 2
      else:
         # (result.append(n) for n in sub_list)
         result.append(sub_list[0])
         # result.append(sub_list[1])
         print("result list 3rd iter ", result)
         
         n += 1

   # check if number of list elements in destination list is equal to source

   if len(result) < len(out_list):
      for x in range(len(out_list) - len(result)):
         result.append(0)
      print ("final iter ", result)
      
   # for x in range(len(out_list)):
   #    print ("x ", x)
   #    if out_list[x] == out_list[x+1]:
   #       # out_list[x] = out_list[x] * 2
   #       result.append(out_list[x] + out_list[x+1])
   #       # out_list[x + 1] = 0
   #    else:
   #       result.append(out_list[x])

   #    print ("result ", result)
      # return out_list
      #print(len(out_list))
   #   elif out_list[x] == out_list[current_index1]:
         
   #       sum = out_list[x] + out_list[current_index1]
   #       line[x] = sum
   #       current_index1 += 1
               
   #   else:
   #       line[x] = out_list[current_index1]
   #       current_index1 += 1     
      
         
   print ("line ", line)
   # print ("result ", out_list)
   return result


result = merge([2,0,2,4])

print ([4, 4, 0, 0] == result)

result1 = merge([4, 2, 2])

print ( [4, 4, 0] == result1)

"""
[2,0,2,4] should return 
[4, 4, 0, 0]
[4,4,0,0]
"""