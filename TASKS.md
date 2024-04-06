## Typescript

Deklaracja zmiennych: Zadeklaruj zmienną message typu string i przypisz do niej dowolny tekst. Wyświetl wartość zmiennej w konsoli.

Typy podstawowe: Utwórz zmienne dla każdego z podstawowych typów w TypeScript: boolean, number, string. Przypisz im odpowiednie wartości i wyświetl je w konsoli.

Tablice i typy: Zdefiniuj tablicę numbers, która będzie przechowywać tylko wartości typu number. Dodaj do niej kilka liczb, a następnie użyj pętli, aby wyświetlić każdy element w konsoli.

Interfejsy: Zdefiniuj interfejs User z polami: id typu number i username typu string. Utwórz obiekt user typu User i przypisz do niego wartości.

Funkcje: Napisz funkcję add, która przyjmuje dwa argumenty typu number i zwraca ich sumę. Sprawdź działanie funkcji, wywołując ją z różnymi argumentami.

Typy Unii: Utwórz zmienną id, która może przechowywać wartości typu number lub string. Przypisz do niej kilka różnych wartości, sprawdzając, jak TypeScript obsługuje typy unii.

Typy Literalne: Zdefiniuj typ Direction, który może przyjmować jedną z czterech wartości: 'up', 'down', 'left', 'right'. Utwórz zmienną typu Direction i przypisz do niej jedną z tych wartości.

Interfejsy i opcjonalne pola: Rozszerz interfejs User o opcjonalne pole email typu string. Utwórz obiekty typu User, z których niektóre zawierają pole email, a inne nie.

Funkcje i typy zwrotne: Napisz funkcję getUserInfo, która przyjmuje obiekt User jako argument i zwraca string zawierający informacje o użytkowniku. Na przykład, dla użytkownika z id 1 i username 'Alice', funkcja powinna zwrócić 'User Alice has ID 1'.

Interfejsy i metody: Dodaj do interfejsu User metodę greet, która nie przyjmuje argumentów i zwraca string. Implementacja metody powinna zwracać powitanie, np. "Hello, [username]". Utwórz obiekt User z implementacją tej metody i wywołaj ją.

## React

Komponent powitalny: Utwórz komponent klasowy Welcome wyświetlający wiadomość powitalną. Wiadomość powinna być przekazana do komponentu jako prop message.

Licznik kliknięć: Zbuduj komponent Counter, który zawiera przycisk i wyświetla liczbę kliknięć w przycisku. Liczba kliknięć powinna być przechowywana w stanie komponentu.

Toggle Button: Zbuduj komponent ToggleButton, który zmienia swój stan (włączony/wyłączony) za każdym kliknięciem w przycisk. Stan komponentu powinien przechowywać informację, czy przycisk jest aktualnie włączony.

Komponent z dynamicznym stylem: Utwórz komponent ColoredBox, którego tło zmienia kolor w zależności od wartości przekazanej przez props. Przetestuj komponent, przekazując różne kolory.