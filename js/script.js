/**
 * Student Marks Calculator
 * js/script.js
 *
 * Handles: input validation, calculation, grade logic, DOM updates.
 */

// ── Element references ──────────────────────────────────────────
var calcBtn   = document.getElementById("calcBtn");
var clearBtn  = document.getElementById("clearBtn");
var errorMsg  = document.getElementById("errorMsg");
var resultBox = document.getElementById("resultBox");

// ── Grade Logic ──────────────────────────────────────────────────
/**
 * Returns a letter grade string based on a percentage value.
 * @param {number} percentage
 * @returns {string} grade letter
 */
function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
}

/**
 * Returns the CSS class name for a given grade string.
 * @param {string} grade
 * @returns {string} CSS class
 */
function getGradeClass(grade) {
  var map = {
    "A+": "grade-aplus",
    "A":  "grade-a",
    "B":  "grade-b",
    "C":  "grade-c",
    "D":  "grade-d",
    "F":  "grade-f"
  };
  return map[grade] || "";
}

// ── Validation ───────────────────────────────────────────────────
/**
 * Validates a single mark value.
 * Returns true if the value is a number in the range [0, 100].
 * @param {string} raw - raw string from input
 * @returns {boolean}
 */
function isValidMark(raw) {
  if (raw === "" || raw === null) return false;
  var num = Number(raw);
  return !isNaN(num) && num >= 0 && num <= 100;
}

// ── Calculate ────────────────────────────────────────────────────
function calculate() {
  var subjectIds = ["s1", "s2", "s3", "s4", "s5"];
  var marks = [];

  // Collect and validate each mark
  var hasError = false;
  for (var i = 0; i < subjectIds.length; i++) {
    var raw = document.getElementById(subjectIds[i]).value.trim();
    if (!isValidMark(raw)) {
      hasError = true;
      break;
    }
    marks.push(Number(raw));
  }

  if (hasError) {
    showError("Please enter valid marks (0 – 100) for all 5 subjects.");
    hideResult();
    return;
  }

  clearError();

  // Calculations
  var total      = marks.reduce(function (sum, m) { return sum + m; }, 0);
  var percentage = (total / 500) * 100;
  var grade      = getGrade(percentage);

  // Student name (optional — defaults to "Student" if blank)
  var name = document.getElementById("studentName").value.trim();
  if (name === "") name = "Student";

  // Update result panel
  document.getElementById("resName").textContent    = name;
  document.getElementById("resTotal").textContent   = total + " / 500";
  document.getElementById("resPercent").textContent = percentage.toFixed(2) + "%";

  var gradeEl = document.getElementById("resGrade");
  gradeEl.textContent = grade;
  gradeEl.className   = "grade-badge " + getGradeClass(grade);

  showResult();
}

// ── Clear ────────────────────────────────────────────────────────
function clearAll() {
  var allIds = ["studentName", "s1", "s2", "s3", "s4", "s5"];
  for (var i = 0; i < allIds.length; i++) {
    document.getElementById(allIds[i]).value = "";
  }
  clearError();
  hideResult();
  document.getElementById("studentName").focus();
}

// ── Helpers ──────────────────────────────────────────────────────
function showError(msg) {
  errorMsg.textContent = "⚠ " + msg;
}

function clearError() {
  errorMsg.textContent = "";
}

function showResult() {
  resultBox.style.display = "block";
}

function hideResult() {
  resultBox.style.display = "none";
}

// ── Event Listeners ──────────────────────────────────────────────
calcBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clearAll);

// Allow pressing Enter on any input to trigger calculation
var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calculate();
    }
  });
}
