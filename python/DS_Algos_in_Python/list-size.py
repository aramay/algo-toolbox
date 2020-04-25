import sys
n = 10
data = []
for k in range(n):
   
   a = len(data)
   b = sys.getsizeof(data)

   print("length: {0:3d}; Size in bytes: {1:4d} ".format(a, b))

   data.append(None)