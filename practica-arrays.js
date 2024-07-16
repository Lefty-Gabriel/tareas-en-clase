'use strcit'
//Primer ejercicio
function findname(listnames, nametofind) {
    let found = false;
    listnames.forEach((name) => {
        if (name === nametofind) {
            found = true;
        }
    });
    document.write(found ? `${nametofind} is on the list. ` : `${nametofind} not on the list. `);
}

// ejecutado
let names = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let namee = "Carlos";
findname(names, namee);

namee = "Juan";
findname(names, namee);

//Segundo ejercicio

function showContWords(phrase){
    separate = phrase.split(' ')
    size = separate.length
    document.write(size)
}
let phrase = 'La programación web es fundamental para el progreso'
showContWords(phrase)

//Tercer ejercicio

function showContWords(phrase){
    separate = phrase.split(' ')
    let size = separate.filter(phrase1long =>phrase1long.length > 3)
    document.write(size)
    
}
let phrase1 = 'La programación web es fundamental para el progreso'
showContWords(phrase1)

//Cuarto Ejercicio
function getBooksByTechnology(books, technology) {
    const technologyLower = technology.toLowerCase();
    return books.filter(book => book.toLowerCase().includes(technologyLower));
  }
  
  const technology = "Python";
  const pythonBooks = getBooksByTechnology(programmingBooks, technology);
  console.log(pythonBooks);

  const programmingBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Software",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production Systems",
    "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Software",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
  ];

  //Quinto ejercicio 
  function findBookId(array, title) {

    const books = array.map((bookTitle, index) => ({
        id: index + 1,
        title: bookTitle
    }));

    const book = books.find(book => book.title === title);
    return book ? book.id : null;
}

const libros = ["libro a", "libro b"];
const tituloBuscado = "libro b";
const id = findBookId(libros, tituloBuscado);
console.log(id); // imprime 2
