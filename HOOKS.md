# Podsumowanie - https://dummyjson.com/docs/posts
1. Utwórz komponent, który będzie wyświetlał listę postów z zewnętrznego API - lista ma być przekazana jako props do komponentu listy postów w pliku App.tsx.
2. Utwórz formularz który będzie dodawał kolejny element do listy (oraz wysylal zapytanie do API)
3. jeżeli lista jest pusta to ma wyświetlać się odpowiedni komunikat
4. Utwórz komponent dla pojedyńczego posta, gdzie wszystkie informacje maja być przekazane przez propsy
5. pamietaj aby wszystko było otypowane zgodnie z API

# Zadania z React Hooks - 20.04

<!-- useState -->
1. Stwórz prosty licznik, który będzie zwiększał liczbę o 1 za każdym razem, gdy użytkownik kliknie przycisk.

2. Utwórz formularz, który będzie przechowywał imię i nazwisko użytkownika za pomocą hooka useState. Wyświetl wprowadzone dane pod formularzem.

3. Zaimplementuj funkcję przycisku, który po kliknięciu zmieni kolor tła strony na losowy, wykorzystując hook useState do przechowywania aktualnego koloru.



<!-- useEffect -->
1. Utwórz komponent, który pobiera i wyświetla listę postów z zewnętrznego API przy użyciu hooka useEffect do pobrania danych po załadowaniu komponentu.

2. Stwórz komponent, który będzie odliczał czas w formacie HH:MM:SS, wykorzystując hook useEffect do aktualizacji czasu co sekundę.

3. Utwórz komponent "Powiadomienie", który wyświetla okno powiadomienia na stronie po 5 sekundach od załadowania komponentu. Wykorzystaj hook useEffect do ustawienia opóźnienia i renderowania powiadomienia. Dodatkowo, zapewnij możliwość zamknięcia powiadomienia po kliknięciu na przycisk "Zamknij".

<!-- useCallback -->
1. Stwórz komponent "ListaElementów", który renderuje listę elementów. Wykorzystaj hook useCallback do zdefiniowania funkcji obsługującej kliknięcie na każdy element listy, aby uniknąć ponownego tworzenia funkcji przy każdym renderowaniu komponentu.

2. Utwórz formularz, który zawiera pole tekstowe i przycisk "Wyślij". Zastosuj hook useCallback do zdefiniowania funkcji obsługującej wysłanie formularza, aby uniknąć ponownego tworzenia funkcji podczas ponownego renderowania komponentu.

3. Stwórz komponent "Filtrowanie", który zawiera pole tekstowe do wprowadzania frazy filtrującej oraz listę elementów do filtrowania. Wykorzystaj hook useCallback do zdefiniowania funkcji obsługującej zmianę tekstu w polu filtrowania, aby uniknąć ponownego tworzenia funkcji przy każdej zmianie tekstu.

<!-- useMemo -->
1. Obliczanie wyniku: Utwórz komponent, który oblicza i wyświetla wynik złożonej operacji matematycznej (na przykład suma lub iloczyn) na podstawie dwóch liczb wprowadzonych przez użytkownika. Wykorzystaj hook useMemo do zapamiętania wyniku operacji i unikania ponownego obliczania go przy każdej zmianie stanu.

2. Filtrowanie listy: Utwórz komponent, który renderuje listę elementów, a użytkownik może wprowadzić frazę do filtrowania. Wykorzystaj hook useMemo, aby zapamiętać przefiltrowaną listę i uniknąć ponownego filtrowania przy każdej zmianie wprowadzanej frazy.

3. Kalkulator podatku: Utwórz kalkulator podatku, który przyjmuje kwotę i oblicza kwotę podatku na podstawie określonej stawki podatkowej. Wykorzystaj hook useMemo, aby obliczyć kwotę podatku i uniknąć ponownego obliczania jej przy każdej zmianie kwoty lub stawki podatkowej.

<!-- useRef -->
1. Focus na polu tekstowym: Utwórz formularz, który zawiera pole tekstowe. Użyj hooka useRef, aby ustawić fokus na polu tekstowym po załadowaniu komponentu.

2. Animacja przewijania: Stwórz listę elementów o dużej długości, która nie mieści się na ekranie. Użyj hooka useRef, aby odwołać się do kontenera listy i animować przewijanie do wybranego elementu w odpowiedzi na interakcję użytkownika.

3. Wyświetlanie aktualnego czasu: Utwórz komponent, który wyświetla aktualny czas. Użyj hooka useRef, aby uzyskać dostęp do interwału czasowego aktualizującego czas i wyłączenia go przy odmontowaniu komponentu.