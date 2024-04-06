### ZADANIE 1
Profil w sieci społecznościowej
  • Należy utworzyć komponent <Profile>, przy pomocy którego
  można wyświetlać informację o użytkowniku sieci
  społecznościowej. Informacje o użytkowniku znajdują się w stanie komponentu.

Opis komponentu Profile
- username — nazwa użytkownika
- tag — tag w sieci społecznościowej @
- location — miasto i państwo
- phone - numer telefonu
- avatar — odnośnik do awataru
- stats — obiekt z informacjami o aktywności

## Do zadania 1 cz. 2
• jezeli user nie posiada avatara, powinien wyswietlac domyslny
komponent (avatar ? <img> : <span>No avatar</span>)
• dopiero po rozwinieciu informacji o profilu znajomego pokazują
nam sie wszystkie informacje (domyslnie pokazujemy tylko
nazwe) (isCollapsed: false)

## zadanie 2
- Stwórz liste profili
- lista profili (obiektów typu ProfileType) bedzie przechowywana w zmiennej profiles w pliku App.tsx
- Profile type powinien zostac rozszerzony o wlasciwosc "_id: string"
- wlasciwosc "_id" bedzie przekazywana do atrybutu key w metodzie map
- Zakonczone zadanie - wyswietlana lista profili

## zadanie 3
- stwórz komponent SearchForm (sklada sie z input + button)
- input bedzie przyjmowal wartosc ze zmiennej searchTerm (przekazywana przez propsy w App.tsx)
- input bedzie oblugiwal event onChange z funkcja o nazwie handleSearchTerm (przekazywana przez propsy w App.tsx)
- skonczone zadanie to wpisanie wyszukiwanego "username" i przefiltrowania tablicy po wcisnieciu przycisku


## Zadanie 4
- stwórz Komponent Form który przechowuje formularz do tworzenia osoby
- Formularz posiada swój stan skladający się z propertisów o typie ProfileType
- Dodatkowo powinnismy dodać do stanu naszej aplikacji (App.tsx) stan przetrzymujący listę elementów która podczas uruchomienia aplikacji przypisuje liste zamockowanych danych
- nalezy dodac liste do typu naszej aplikacji
- po nacisnieciu przycisku powinno wywolac funkcje która doda obiekt o typie ProfileType do naszej listy (dzieki funkcji która bedzie utworzona w App.tsx i przekazywana jak props do komponentu Form)

## zadanie 5
- stworz licznik kliknięć co 5
- oraz formularz składający się z imienia i telefonu który posiada podgląd live
- jedna z metod powinna informować w konsoli że dana propertka w obiekcie stanu się zmieniła (kazda oddzielny console.log)
- nalezy wykorzystać wszystkie potrzebne metody (jezeli metoda nie wniesie nic co dzialania kodu to proszę ją pominąć)

## zadanie 7
- stwórz komponent funkcyjny przechowujący formularz oraz stan formularza (imie <string> oraz numer buta <number>)
- formularz składa sie z 2 inputów + przycisk button type submit
- zawiera rowniez podglad w czasie rzeczywistym

## PRACA DOMOWA - krótkie zadania

- Przed rozpoczeciem zadan nalezy utwworzyc puste repozytorium na github.com
- Nastepnie nalezy je skopiować lokalnie
- Kiedy już skopiujemy nasze repozytorium powinnismy utworzyć w nim projekt React (bezposrednio w folderze, tak aby nie wyglądało to nastepujaco -> "folder repozytorium" > "folder projektu")
- komenda do utworzenia projektu "npx create-react-app my-app --template typescript"
- nastepnie nalezy zainstalowac rozszerzenie scss "npm install -g sass"
- kiedy zainstalujemy juz rozszerzenie scss nalezy podmienic wszystkie rozszerzenia ".css" na ".scss"

# Uwagi do zadań
- Każdy komponent powinien zawierać wlasny plik ze stylami
- Kazdy komponent do zadania powinien zostac wystylowany

1. Utwórz komponent React o nazwie "Button", który renderuje prosty przycisk na stronie. Przycisk powinien mieć tekst "Kliknij mnie" i po kliknięciu powinien wyświetlić alert z komunikatem "Przycisk został kliknięty!".

2. Utwórz komponent React o nazwie "Counter", który renderuje licznik na stronie. Licznik powinien mieć przyciski "+" i "-", które zwiększają i zmniejszają wartość licznika odpowiednio o 1 za każdym kliknięciem. Początkowa wartość licznika powinna wynosić 0.

3. Utwórz komponent React o nazwie "InputField", który renderuje pole tekstowe na stronie. Komponent powinien mieć możliwość wpisywania tekstu przez użytkownika, a wpisany tekst powinien być wyświetlany na bieżąco pod polem tekstowym.

4. Utwórz komponent React o nazwie "TodoList", który renderuje listę zadań do wykonania. Komponent powinien mieć możliwość dodawania nowych zadań poprzez wpisanie tekstu w pole tekstowe i kliknięcie przycisku "Dodaj". Dodane zadania powinny być wyświetlane na liście.

5. Utwórz komponent React o nazwie "Toggle", który renderuje przycisk przełącznika na stronie. Przycisk powinien mieć dwa stany: "Włączone" i "Wyłączone". Po kliknięciu przycisku, stan powinien się zmieniać.

6. Utwórz komponent React o nazwie "List", który renderuje listę elementów na stronie. Przekazuj tablicę z elementami jako props do komponentu i wyrenderuj każdy element listy w postaci punktu lub numeru.

7. Utwórz komponent React o nazwie "Timer", który wyświetla aktualny czas na stronie i odlicza sekundy w dół. Początkowa wartość czasu powinna być ustalona jako props i komponent powinien wyświetlać komunikat "Czas minął!" po zakończeniu odliczania.

8. Utwórz komponent React o nazwie "Dropdown", który renderuje rozwijaną listę opcji. Przekazuj tablicę opcji jako props do komponentu i umożliwiaj użytkownikowi wybór jednej z dostępnych opcji.

9. Utwórz komponent React o nazwie "Modal", który renderuje modal (okno dialogowe) na stronie. Komponent powinien mieć przycisk "Otwórz modal", który po kliknięciu wyświetla modal z dowolną treścią. Modal powinien mieć również przycisk "Zamknij", który zamyka modal.

10. Utwórz komponent React o nazwie "LoginForm", który renderuje formularz logowania. Formularz powinien mieć pola tekstowe dla wprowadzenia nazwy użytkownika i hasła, oraz przycisk "Zaloguj się". Po kliknięciu przycisku, komponent powinien przetworzyć dane z formularza i wyświetlić alert z danymi użytkownika.

## PRACA DOMOWA - zadanie podsumowujące
1. Stwórz komponent służący do wyświetlania pojedynczego produktu, który zawiera informacje:
- tytuł
- opis
- cena
- marka
- zdjęcie
- kategoria
///
- Informacje powinny być przekazane z poziomu rodzica, a w komponencie jedynie odczytane
- zdjęcie jest polem opcjonalnym, jezeli nie zostanie dostarczone to powinno wyswietlac avatar domyslny zamiast zdjecia
- na początku wyswietlany jest tylko tytuł oraz zdjecia
- do wyswietlania wszystkich informacji powinien zostac stworzony przycisk który bedzie rozwijal nam powyzsze informacje
- dane przekazywane powinny zostac okreslone za pomoca typu propsów

2. Stwórz komponent służacy do wyswietlania listy
- bedzie on zawieral liste produktów przekazywanych z poziomu rodzica

3. Stwórz formularz do wyszukiwania produktów po tytule
- wyszukiwana fraza oraz logika do odczytywania wpisanej frazy w formularz powinna zostac przekazana z poziomu rodzica
- zawiera tylko input



Zadanie 1
- Stwórz komponent funkcyjny Counter
- JSX zawarty w 1 pliku
- logika pobierana z utworzonego hooka useCounter
- zawartosc zwracana z hooka useCounter powinna zostac odpowiednio otypowana 

Zadanie 2
- Stwórz komponent dla pojedynczego produktu
- Powinien on pobierac pojedynczy obiekt z serwera na bazie async/await
- pobrany produkt powinien zostac zapisany w stanie komponentu
- podczas ladowania uzytkownik powinien zostac o tym poinformowany

Zadanie 3
- Stworz komponent z formularzem dla pojedynczego produktu
- Formularz powinien przechowywac stan jako obiekt product o typie Product
- handleSubmit powinno sprawdzac czy wszystkie pola są uzupelnione
- po pomyslnym utworzeniu produktu informujemy uzytkownika po przez alert