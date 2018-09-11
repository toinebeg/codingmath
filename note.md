#Coding Math
##misc

###liste les episodes par ordre croissant
'''ls | sort -k5 -n'''

##Intro to Trigonometry

###l'étude des triangles rectangles

Si on prend l'angle A

```
	            B
		        ^
		       /|
   hypotenuse / | opposé
			 /  |
		    /   |
		A  /____|

			adjacent
```

***sin A = o/h*** 

vague entre 1 et -1 au fil des valeur

***cos A = a/h***

vague inverse

***tan A = o/a*** 

lignes parrallèles allant de -infini à +infini en faisant des undefined quand on approche des angles 90 et 270 

Ces 3 équations permettent de faire évoluer de manière cyclique une valeur au fil de l'augmentation de de "l'angle".
Par ex 
```
while
	x = baseX + Math.sin(angle) * offset; 
	do smthg with x
	angle += speed;
```

###cercles et ellipses

Dans un cercle, si le centre est l'angle A de notre triangle, le rayon du cercle est l'hypothénuse de notre triangle.
Pour trouver n'importe quel point du cercle ( angle B) on peut faire 
***x = r cos A***
et
***y = r sin A***

### Lissajous curve ###
pour donner un effet de mouvement innatendu la lissajous curve est bien. C'est une courbe dont les coordonée x et y sont toutes les deux définie par le parcours de cercles différents (ep4 main 3)

### Arctengent

asin, acos et atan sont les inverses de sin, cos et tan soit sin^-1, cos^-1, tan^-1


retrouver un angle en ayant l'hypoténnuse et l'adjacent 



###Convertion radrian degré

>deg = (rad*180)/PI

>rad = (deg*PI)/180  

 