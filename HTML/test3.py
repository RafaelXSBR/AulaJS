import math
a=(input("digite o primeiro valor "))
b=(input("digite o segundo valor "))
c=(input("digite o terceiro valor "))

if         
    delta=(b**2)-(4*a*c)
    raiz=math.sqrt(delta) 
    x=(-b+raiz)/(2*a)
    x2=(-b-raiz)/(2*a)
    print(round(x,5) , round(x2,5)) 
else:       
    print ("impossivel calcular")