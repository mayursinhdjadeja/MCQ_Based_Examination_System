// A: GOOGLE SHEET CONFIG
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbztEn2uY9i7EkqUmtpvrr2Sc4wx1O7DF0RrZlnShXHdSdtOibuvE-eFxCt4le_mRp80/exec";
var SUBJECT = "DBMS-1"; // Change it as needed
var SUBJECT_CODE = "05BC3204"; // Change it as needed

// B: MCQ BANK 
var mcqs = [
  {q:"Which of the following best describes a DBMS?", a:["Software to manage databases","Hardware to store data","A programming language","An operating system"], correct:"A"},
  {q:"In an ER diagram, an attribute is represented by which shape?", a:["Rectangle","Oval","Diamond","Line"], correct:"B"},
  {q:"A relation is in 2NF if it is in 1NF and:", a:["Contains no transitive dependencies","Has no repeating groups","Has no partial dependencies on the primary key","All attributes are atomic"], correct:"C"},
  {q:"Which SQL statement is used to remove a table permanently from the database?", a:["DELETE TABLE","ALTER TABLE DROP","TRUNCATE TABLE","DROP TABLE"], correct:"D"},
  {q:"Which SQL command is used to add a new column to an existing table?", a:["ALTER TABLE ADD","MODIFY TABLE ADD","UPDATE TABLE ADD","CREATE COLUMN"], correct:"A"},
  {q:"In the CUSTOMERS table (CNAME, CITY), which query will list all customers from Bombay city?", a:["SELECT * FROM CUSTOMERS WHERE CITY IS Bombay;","SELECT * FROM CUSTOMERS WHERE CITY = 'Bombay';","SELECT CUSTOMERS WHERE CITY = Bombay;","SELECT ALL FROM CUSTOMERS CITY='Bombay';"], correct:"B"},
  {q:"Which Oracle function returns the current system date?", a:["TODAY","GETDATE()","SYSDATE","CURRENT_TIME"], correct:"C"},
  {q:"Which of the following is not a DML command?", a:["INSERT","UPDATE","DELETE","CREATE"], correct:"D"},
  {q:"To enforce that no two rows have the same value in a column, which constraint is used?", a:["UNIQUE","NOT NULL","CHECK","DEFAULT"], correct:"A"},
  {q:"Which operator is used for pattern matching in SQL?", a:["BETWEEN","LIKE","IN","IS"], correct:"B"},
  {q:"Which of the following WHERE clauses correctly filters employees with salary between 3000 and 5000?", a:["WHERE emp_sal BETWEEN 3000,5000","WHERE emp_sal IN (3000,5000)","WHERE emp_sal BETWEEN 3000 AND 5000","WHERE emp_sal >=3000 AND emp_sal =<5000"], correct:"C"},
  {q:"Which Oracle function capitalizes the first letter of each word in a string?", a:["UPPER","LOWER","CAPFIRST","INITCAP"], correct:"D"},
  {q:"What is the result of the query: SELECT LENGTH('Database') FROM DUAL;?", a:["8","9","6","10"], correct:"A"},
  {q:"Which SQL clause is used to filter groups after using GROUP BY?", a:["WHERE","HAVING","ORDER BY","DISTINCT"], correct:"B"},
  {q:"Which join returns all rows from the left table and matching rows from the right table, with NULLs for non-matching rows?", a:["INNER JOIN","RIGHT OUTER JOIN","LEFT OUTER JOIN","CROSS JOIN"], correct:"C"},
  {q:"The relational algebra operation 'projection' corresponds to which SQL clause?", a:["WHERE","FROM","ORDER BY","SELECT column list"], correct:"D"},
  {q:"Which normal form deals with removing repeating groups in a table?", a:["1NF","2NF","3NF","BCNF"], correct:"A"},
  {q:"The set operator that returns distinct rows from the first query that are not in the second query is:", a:["UNION","MINUS","INTERSECT","UNION ALL"], correct:"B"},
  {q:"Consider table DEPOSIT(ACTNO, CNAME, AMOUNT). To find the total deposited amount, which query is correct?", a:["SELECT TOTAL(AMOUNT) FROM DEPOSIT;","SELECT AMOUNT FROM DEPOSIT;","SELECT SUM(AMOUNT) FROM DEPOSIT;","SELECT COUNT(AMOUNT) FROM DEPOSIT;"], correct:"C"},
  {q:"Which SQL command is used to remove a constraint from a table?", a:["DELETE CONSTRAINT","REMOVE CONSTRAINT","DROP CONSTRAINT","ALTER TABLE ... DROP CONSTRAINT"], correct:"D"},
  {q:"In the given BORROW table (LOANNO, CNAME, BNAME, AMOUNT), which command will delete all loans of customer 'ANIL'?", a:["DELETE FROM BORROW WHERE CNAME = 'ANIL';","DELETE LOAN WHERE CNAME='ANIL';","DROP FROM BORROW WHERE CNAME='ANIL';","REMOVE FROM BORROW WHERE CNAME='ANIL';"], correct:"A"},
  {q:"A subquery that references a column from the outer query is called:", a:["Simple subquery","Correlated subquery","Nested subquery","Inline view"], correct:"B"},
  {q:"Which SQL command is used to change the data type of a column?", a:["MODIFY COLUMN","UPDATE COLUMN","ALTER TABLE ... MODIFY","CHANGE COLUMN"], correct:"C"},
  {q:"What is the output of SELECT 15+3*2 FROM DUAL;?", a:["36","33","30","21"], correct:"D"},
  {q:"In an ER diagram, a diamond shape represents:", a:["Relationship","Entity","Attribute","Primary key"], correct:"A"},
  {q:"Which of the following is a valid Oracle date function to add months?", a:["DATEADD","ADD_MONTHS","MONTHS_ADD","DATE_MONTH"], correct:"B"},
  {q:"The SQL wildcard character '_' matches:", a:["Zero or more characters","Any single character","Exactly one character","One or more characters"], correct:"C"},
  {q:"Which of the following is not a database model?", a:["Relational model","Hierarchical model","Network model","Linear model"], correct:"D"},
  {q:"To grant privileges to a user, which SQL statement is used?", a:["GRANT","REVOKE","PERMIT","ALLOW"], correct:"A"},
  {q:"Which statement is true about the PRIMARY KEY constraint?", a:["It can contain NULL values","It uniquely identifies each row and cannot be NULL","It allows duplicate values","It is the same as FOREIGN KEY"], correct:"B"},
  {q:"Consider CUSTOMERS(CNAME, CITY). Which query lists distinct cities?", a:["SELECT CITY FROM CUSTOMERS;","SELECT UNIQUE CITY FROM CUSTOMERS;","SELECT DISTINCT CITY FROM CUSTOMERS;","SELECT DIFFERENT CITY FROM CUSTOMERS;"], correct:"C"},
  {q:"Which character function returns the position of a substring within a string in Oracle?", a:["POSITION","LOCATE","CHARINDEX","INSTR"], correct:"D"},
  {q:"In SQL, the ORDER BY clause is used to:", a:["Sort the result set","Filter rows","Group rows","Join tables"], correct:"A"},
  {q:"Which set operator combines results of two queries and eliminates duplicates?", a:["UNION ALL","UNION","INTERSECT","MINUS"], correct:"B"},
  {q:"What does the following query return? SELECT COUNT(*) FROM EMPLOYEE;", a:["Sum of salaries","Number of columns","Number of rows","Maximum salary"], correct:"C"},
  {q:"Which SQL command would you use to view the structure of a table DEPOSIT?", a:["SHOW TABLE DEPOSIT","DISPLAY DEPOSIT","SELECT * FROM DEPOSIT","DESCRIBE DEPOSIT"], correct:"D"},
  {q:"A foreign key in one table must reference a _________ in another table.", a:["Primary key or unique key","Any column","Check constraint","Null column"], correct:"A"},
  {q:"Which of the following is a DCL (Data Control Language) command?", a:["SELECT","REVOKE","INSERT","ALTER"], correct:"B"},
  {q:"In Oracle, to display all employees whose name starts with 'S', you would use:", a:["WHERE name = 'S%'","WHERE name HAS 'S%'","WHERE name LIKE 'S%'","WHERE name STARTS WITH 'S'"], correct:"C"},
  {q:"To find the highest salary in the EMPLOYEE table, which function is used?", a:["HIGH","TOP","MAXVALUE","MAX"], correct:"D"},
  {q:"Which normal form deals with multivalued dependencies?", a:["4NF","3NF","2NF","BCNF"], correct:"A"},
  {q:"Given table DEPOSIT with column ADATE. To display depositors who opened account after '01-DEC-96', which query is correct?", a:["SELECT * FROM DEPOSIT WHERE ADATE > 01-DEC-96;","SELECT * FROM DEPOSIT WHERE ADATE > '01-DEC-96';","SELECT * FROM DEPOSIT WHERE ADATE AFTER '01-DEC-96';","SELECT * FROM DEPOSIT WHERE ADATE > 01/DEC/96;"], correct:"B"},
  {q:"The IN operator in SQL is used to:", a:["Perform pattern matching","Check a range of values","Compare a value with a list of values","Sort the output"], correct:"C"},
  {q:"A self join is best described as:", a:["Joining a table with another table","Joining a table with its copy","Joining using the SELF keyword","Joining a table to itself by using aliases"], correct:"D"},
  {q:"In relational algebra, the operation that returns only common rows from two relations is:", a:["Intersection","Union","Difference","Product"], correct:"A"},
  {q:"Which aggregate function can be used with dates to find the latest date?", a:["MIN","MAX","COUNT","SUM"], correct:"B"},
  {q:"The SQL statement to delete all rows from table 'student' and free the storage space is:", a:["DELETE FROM student;","DROP TABLE student;","TRUNCATE TABLE student;","ALTER TABLE student DROP ALL;"], correct:"C"},
  {q:"In ER modeling, a weak entity is one that:", a:["Has its own primary key","Exists independently","Has no attributes","Depends on another entity for its identification"], correct:"D"},
  {q:"What will be the output of SELECT INITCAP('hello world') FROM DUAL;?", a:["Hello World","HELLO WORLD","hello world","Hello world"], correct:"A"},
  {q:"Which of the following is true about a view in Oracle?", a:["It stores data physically","It is a virtual table based on a query","It cannot be updated","It cannot be indexed"], correct:"B"}
]; // Change it as needed

// C: EXAM VARIABLES
var questions = [];
var currentIndex = 0;
var answers = {};
var timeLeft = 600; // Change it as needed (for eg. 30 min = 1800 sec and 10 min = 600 sec)
var isActive = false;
var timerId = null;
var student = null;
var warningShown = false;
var isStarting = false;

// D: USER DEFINED FUNCTIONS
// FUNCTION 1: SELECT N RANDOM QUESTIONS FROM MCQ BANK
function getRandomQuestions() {
  var shuffled = [];
  var i, j, temp;
  // Copy mcqs to shuffled
  for (i = 0; i < mcqs.length; i++) {
    shuffled[i] = mcqs[i];
  }
  // Shuffle (Fisher-Yates)
  for (i = shuffled.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  // Return first 30 (or you can chage it as needed (for eg. you want to take 10 marks exam so return first 10))
  var result = [];
  for (i = 0; i < 10 /* Change it as needed <30 or <10 or etc*/ ; i++) { 
    result[i] = shuffled[i];
  }
  return result;
}

// FUNCTION 2: CHECK IF ENROLLMENT IS VALID (11 DIGITS)
function isValidEnrollment(enroll) {
  if (enroll.length !== 11) {
    return false;
  }
  for (var i = 0; i < enroll.length; i++) {
    if (enroll[i] < '0' || enroll[i] > '9') {
      return false;
    }
  }
  return true;
}

// FUNCTION 3: GET CURRENT DATE AND TIME IN DD/MM/YYYY AND HH:MM AM/PM FORMAT
function getDateTime() {
  var now = new Date();
  var day, month, year, hours, minutes, ampm, date, time;
  day = String(now.getDate()).padStart(2, '0');
  month = String(now.getMonth() + 1).padStart(2, '0');
  year = now.getFullYear();
  date = day + "/" + month + "/" + year;
  hours = now.getHours();
  minutes = String(now.getMinutes()).padStart(2, '0');
  ampm = (hours >= 12) ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  }
  hours = String(hours).padStart(2, '0');
  time = hours + ":" + minutes + " " + ampm;
  return { date: date, time: time };
}

// FUNCTION 4: CHECK IF STUDENT HAS TAKEN EXAM (LOCAL STORAGE FLAG)
function hasTakenExam(enroll, subject, examType) {
  var key = "exam_" + enroll + "_" + subject + "_" + examType;
  var flag = localStorage.getItem(key);
  if (flag === "true") {
    return true;
  }
  return false;
}

// FUNCTION 5: STORE RESULT TO GOOGLE SHEET AND LOCAL STORAGE
function storeResult(student, score, total) {
  var dt = getDateTime();
  var data = {
    enrollment: student.enroll,
    name: student.name,
    division: student.division,
    subject: SUBJECT,
    subjectcode: SUBJECT_CODE,
    examtype: student.examType,
    score: score,
    total: total,
    date: dt.date,
    time: dt.time
  };
  var key = "exam_" + student.enroll + "_" + SUBJECT + "_" + student.examType;
  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(function() {
    localStorage.setItem(key, "true");
    console.log("✅ Result saved to Google Sheet");
  })
  .catch(function(err) {
    console.error("❌ Error saving result:", err);
  });
}

// E: QUESTION DISPLAY
function showQuestion() {
  var container = document.getElementById("questions");
  var q = questions[currentIndex];
  if (!q) return;
  var html = '<div class="question-card">';
  html += '<h3>' + (currentIndex + 1) + '. ' + q.q + '</h3>';
  for (var i = 0; i < q.a.length; i++) {
    var letter = String.fromCharCode(65 + i);
    var checked = (answers[currentIndex] === letter) ? "checked" : "";
    html += '<label class="option">';
    html += '<input type="radio" name="q" value="' + letter + '" ' + checked + '>';
    html += letter + '. ' + q.a[i];
    html += '</label>';
  }
  html += '</div>';
  container.innerHTML = html;
  // Radio button change listener
  var radios = container.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radios.length; i++) {
    (function(index) {
      radios[index].addEventListener("change", function(e) {
        answers[currentIndex] = e.target.value;
      });
    })(i);
  }
  document.getElementById("progress").innerText = "Question " + (currentIndex + 1) + " of " + questions.length;
}

// F: TIMER
function startTimer() {
  var timerDiv = document.getElementById("timer");
  timerId = setInterval(function() {
    if (timeLeft === 60 && !warningShown) {
      warningShown = true;
      alert("⏰ Only 1 minute remaining!");
    }
    var mins = Math.floor(timeLeft / 60);
    var secs = timeLeft % 60;
    timerDiv.innerText = "Time Left: " + mins + ":" + (secs < 10 ? "0" : "") + secs;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerId);
      alert("⏰ Time's up! Submitting now.");
      submitExam();
    }
  }, 1000);
}

// G: NAVIGATION
function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    if (confirm("Last question! Submit now?")) {
      submitExam();
    }
  }
}
function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
}

// H: SUBMIT EXAM
function submitExam() {
  if (!isActive) return;
  isActive = false;
  clearInterval(timerId);
  var score = 0;
  for (var i = 0; i < questions.length; i++) {
    if (answers[i] && answers[i] === questions[i].correct) {
      score++;
    }
  }
  var total = questions.length;
  // Show Result Screen
  document.getElementById("examForm").style.display = "none";
  document.getElementById("waitingScreen").style.display = "none";
  var card = document.getElementById("successCard");
  card.style.display = "block";
  card.innerHTML = '<div style="font-size:2rem;">✅</div>';
  card.innerHTML += '<h2>Exam Submitted Successfully!</h2>';
  card.innerHTML += '<p style="font-size:0.9rem; color:#555; margin-top:10px;">Exam Type: ' + student.examType + '</p>';
  // Store Result (Google Sheet + LocalStorage)
  storeResult(student, score, total);
}

// I: START EXAM
function startExam() {
  questions = getRandomQuestions();
  currentIndex = 0;
  answers = {};
  timeLeft = 600; // change it as needed time
  isActive = true;
  warningShown = false;
  showQuestion();
  startTimer();
}

// J: FORM SUBMIT EVENT
document.getElementById("startForm").addEventListener("submit", function(e) {
  e.preventDefault();
  if (isStarting) return;
  isStarting = true;
  var enroll = document.getElementById("enrollField").value.trim();
  var name = document.getElementById("nameField").value.trim();
  var division = document.getElementById("divisionField").value;
  var examType = document.getElementById("examTypeField").value;
  if (enroll === "" || name === "" || division === "" || examType === "") {
    alert("Please fill all fields!");
    isStarting = false;
    return;
  }
  if (!isValidEnrollment(enroll)) {
    alert("Enrollment must be 11 digits!");
    isStarting = false;
    return;
  }
  if (hasTakenExam(enroll, SUBJECT, examType)) {
    alert("You already took " + examType + " exam!");
    isStarting = false;
    return;
  }
  student = {
    enroll: enroll,
    name: name,
    division: division,
    examType: examType
  };
  document.getElementById("startForm").style.display = "none";
  document.querySelector(".container").style.display = "block";
  document.getElementById("waitingScreen").style.display = "flex";
  var counter = 5;
  var cd = document.getElementById("countdown");
  cd.innerText = counter;
  if (window.waitingInterval) {
    clearInterval(window.waitingInterval);
  }
  window.waitingInterval = setInterval(function() {
    counter--;
    cd.innerText = counter;
    if (counter < 0) {
      clearInterval(window.waitingInterval);
      window.waitingInterval = null;
      document.getElementById("waitingScreen").style.display = "none";
      document.getElementById("examForm").style.display = "block";
      startExam();
      isStarting = false;
    }
  }, 1000);
});

// K: BUTTON EVENT LISTENERS
document.getElementById("prevBtn").addEventListener("click", prevQuestion);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("submitExamBtn").addEventListener("click", function() {
  if (!isActive) return;
  var answered = 0;
  for (var key in answers) {
    if (answers.hasOwnProperty(key)) {
      answered++;
    }
  }
  var total = questions.length;
  if (answered < total) {
    if (!confirm("You have " + (total - answered) + " unanswered. Submit anyway?")) {
      return;
    }
  }
  submitExam();
});