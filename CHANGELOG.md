# Changelog

All notable changes to **Student Marks Calculator** are documented here.

---

## [1.0.0] — 2025

### Added
- `index.html` — main application page
- `css/style.css` — full styles, responsive grid, grade badge colours
- `js/script.js` — calculation logic, input validation, DOM updates
- Student name input (optional — defaults to "Student")
- Five subject mark inputs (0–100 each)
- **Calculate Result** button
- **Clear** button to reset all fields
- Input validation with user-friendly error messages
- Result summary panel showing:
  - Student Name
  - Total Marks (out of 500)
  - Percentage (2 decimal places)
  - Colour-coded Grade badge (A+, A, B, C, D, F)
- Grade chart:
  - 90–100 → A+
  - 80–89  → A
  - 70–79  → B
  - 60–69  → C
  - 50–59  → D
  - Below 50 → F
- Enter key support — press Enter on any input to calculate
- Responsive layout for mobile and desktop
- `README.md`, `LICENSE`, `CHANGELOG.md`, `CONTRIBUTING.md`, `.gitignore`, `package.json`

---

## Future Improvements (Planned)

- Custom subject name inputs
- Print / export result as PDF
- Support for more than 5 subjects
- Dark mode toggle
