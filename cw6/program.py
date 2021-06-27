import requests
naglowek = 'Content-Type: application/json'
adres = 'http://localhost:8098/buckets/s13467'
klucz = '/keys/Countries'
dane1 = { 
	'Country': 'Poland', 
	'Capital': 'Warsaw',
    'language': 'Polish', 
	'continentEurope': True, 
	'population': 38
}
dane2 = { 
	'Country': 'Germany', 
	'Capital': 'Berlin',
    'language': 'German', 
	'continentEurope': True, 
	'population': 83
}
c1 = requests.put(adres + klucz, json=dane1)
print("Wrzucenie do bazy dokumentu. Status code: ", c1.status_code)
c2 = requests.get(adres + klucz, naglowek)
print("Pobranie i wypisanie dokumentu. Status code: ", c2.status_code, '\n')
print(c2.json())
c3 = requests.put(adres + klucz, json=dane2)
print("Zmodyfikowanie dokumentu. Status code: ", c3.status_code)
c4 = requests.get(adres + klucz, naglowek)
print("Pobranie i wypisanie dokumentu. Status code: ", c4.status_code, '\n')
print(c4.json())
c5 = requests.delete(adres + klucz)
print("Usuniecie dokumentu. Status code: ", c5.status_code)
c6 = requests.get(adres + klucz, naglowek)
print("Proba pobrania usunietego dokumentu (jesli istnieje, to go wypisze). Status code: ", c6.status_code)
if c6.status_code == 404:
	print ("Nie udalo sie pobrac dokumentu")
else:
	print(c6.json())