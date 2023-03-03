import math
try:
    a=float(input("digite o primeiro valor "))
    b=float(input("digite o segundo valor "))
    c=float(input("digite o terceiro valor "))

    if a>=1 and b>=1 and c>=1:        
        delta=(b**2)-(4*a*c)
        raiz=math.sqrt(delta) 
        x=(-b+raiz)/(2*a)
        x2=(-b-raiz)/(2*a)
        print(round(x,5) , round(x2,5)) 
    else:       
        print ("impossivel calcular") 
except ValueError:
    print("nao foi digitado numero")
          