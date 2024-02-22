#!/usr/bin/env python3
pelis = {
    "El Padrino": {
        "any": 1972,
        "tipus": "Crim",
        "actors": ["Al Pacino", "Marlon Brando", "James Caan", "Diane Keaton"],
        "director": "Francis Ford",
        "qualificació": 9.1
    },
    "Intocable": {
        "any": 2011,
        "tipus": "Drama",
        "actors": ["Omar Sy", "François Cluzet"],
        "director": "Olivier Nakache",
        "qualificació": 8.3
    },
    "Joker": {
        "any": 2019,
        "tipus": "Acció",
        "actors": ["Joaquin Phoenix", "Robert De Niro"],
        "director": "Todd Phillips",
        "qualificació": 7.9
    },
    "Avatar": {
        "any": 2009,
        "tipus": "Acció",
        "actors": ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver"],
        "director": "James Cameron",
        "qualificació": 8.7
    }
}

continuar = True
actor = True
while continuar:
	print("""
	1) Afegir Pel·lícula
	2) Modificar Pel·lícula
	3) Eliminar Pel·lícula
	4) Mostrar pel·lícula
	5) Sortir
	""")

	opcio= int(input("Introdueix una de les opcions: "))

	if opcio == 1:
		nompeliculafegir = input("Introdueix el nom de la pel·lícula: ")
		if nompeliculafegir in pelis:
			print("La pel·lícula ja existeix")
		else:
			anypelicula = input("Introdueix el any de la pel·lícula: ")
			tipuspelicula = input("Indica el tipus de pel·lícula: ")
			directorpelicula = input("Indica el director de la pel·lícula: ")
			actors_pelicula = []
			while actor:
				nombre_actor = input("Indica un actor (prem intro si no vols afegir més actors): ")
				if nombre_actor == "":
					actor = False
				else:
					actors_pelicula.append(nombre_actor)
			pelis[nompeliculafegir] = {
			"any": anypelicula,
                	"tipus": tipuspelicula,
                	"actors": actors_pelicula,
                	"director": directorpelicula,
                	"qualificació": None 
            		}
			print("Pel·lícula afegida amb èxit.")
	elif opcio ==2:
		for numero, pelicula in enumerate(pelis.keys()):
            print(f"{numero + 1}. {pelicula}")
            pelicula_a_modificar = input("Indica el nom de la pel·lícula que vols modificar: ")

		if pelicula_a_modificar in pelis:
			continuaropcio2 = True
			while continuaropcio2:
				print("""
				Menú de modificació:
				1) Afegir Actor
				2) Eliminar Actor
				3) Modificar Puntuació
				4) Sortir
				""")
				opciomenu2 = int(input("Introdueix una de les opcions: "))
				if opciomenu2 == 1:
					nou_actor = input("Introdueix el nom del nou actor: ")
					if nou_actor in pelis[pelicula_a_modificar]['actors']:
						print("Aquest actor ja existeix en la llista.")
					else:
						pelis[pelicula_a_modificar]['actors'].append(nou_actor)
						print("Actor afegit amb èxit.")
				elif opciomenu2 == 2:
					actor_a_eliminar = input("Introdueix el nom del nou actor: ")
					if actor_a_eliminar in pelis[pelicula_a_modificar]['actors']:
						pelis.pop[pelicula_a_modificar][actor_a_eliminar]
					else:
						print("No existeix aquest actor")
				elif opciomenu2 == 3:
					nova_puntuacio = int(input("Introdueix la nova puntuació (entre 0.0 i 10.0): "))
					if 0.0 <= nova_puntuacio and nova_puntuació <= 10.0:
						pelis[pelicula_a_modificar]['qualificació'] = nova_puntuacio
						print("Puntuació modificada amb èxit.")
					else:
						print("La puntuació ha de ser entre 0.0 i 10.0.")     
				elif opcionmenu2 ==4:
					continuaropcio2 = False			

	elif opcio == 3:
        print("Aquestes són les pel·lícules:")
        for pelicula in pelis:
        print(pelicula)
        pelicula_a_esborrar = input("Quina pel·lícula vols eliminar? ")
		if pelicula_a_esborrar in pelis:
            		confirmacio = input(f"Segur que vols eliminar la pel·lícula {pelicula_a_esborrar}? (s/n): ")
            		if confirmacio == 's':
                		pelis.pop(pelicula_a_esborrar)
                		print(f"La pel·lícula {pelicula_a_esborrar} ha sigut esborrada.")
            		elif confirmacio == 'n':
                		print("Esborrat cancel·lat.")
            		else:
                		print("Opció invàlida.")
        	else:
            			print("La pel·lícula no existeix.")
	elif opcio == 4:
		print (""" 
			Menú de llistament
			1. Mostrar Llistat Generic
			2. Mostrar llistat per tipus de gènere
			3. Sortir
			""")
		continuarllistat = True
		while continuarllistat:
			opciollistat= input("Quina opció voldries? )
			if opciollistat == 1:
				for numero, pelicula in enumerate(pelis.keys()):
					print(f"{numero + 1}. {pelicula}")
			elif opciollistat == 3:
				continuarllistat = False

	elif opcio == 5:
		
		continuar = False
	else:
		print("No es una opció valida")