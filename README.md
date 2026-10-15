# 🎓 Student Marks Calculator

A simple, beginner-friendly web application that calculates a student's **total marks**, **percentage**, and **grade** based on marks entered for 5 subjects.

Built with plain **HTML**, **CSS**, and **JavaScript** — no frameworks, no libraries, no backend required.

---

## 🖥️ Live Preview

Open `index.html` in any browser to run the app instantly.

---

## ✨ Features

- Enter student name (optional)
- Enter marks for **5 subjects** (each out of 100)
- Calculates **Total Marks** out of 500
- Calculates **Percentage**
- Displays colour-coded **Grade**
- Input **validation** — marks must be 0–100
- Clear error message for invalid or empty inputs
- **Clear / Reset** button to start over
- Press **Enter** on any field to trigger calculation
- Fully **responsive** — works on desktop and mobile

---

## 📊 Grade Chart

| Percentage   | Grade |
|--------------|-------|
| 90 – 100     | A+    |
| 80 – 89      | A     |
| 70 – 79      | B     |
| 60 – 69      | C     |
| 50 – 59      | D     |
| Below 50     | F     |

---

## 🧮 How It Works

```
Total Marks = Subject1 + Subject2 + Subject3 + Subject4 + Subject5
Percentage  = (Total Marks ÷ 500) × 100
Grade       = Determined by Percentage (see table above)
```

---

## 📁 Project Structure

```
student-marks-calculator/
│
├── index.html          # Main HTML page (app structure)
├── css/
│   └── style.css       # All styles and layout
├── js/
│   └── script.js       # Calculation, validation, and DOM logic
│
├── README.md           # Project documentation (this file)
├── LICENSE             # MIT License
├── CHANGELOG.md        # Version history
├── CONTRIBUTING.md     # How to contribute
└── .gitignore          # Files excluded from Git
```

---

## 🚀 How to Run Locally

No installation needed.

1. **Clone or download** the repository:
   ```bash
   git clone https://github.com/your-username/student-marks-calculator.git
   ```

2. Open the project folder:
   ```bash
   cd student-marks-calculator
   ```

3. Open `index.html` in your browser:
   - **Windows**: double-click `index.html`
   - **Mac**: `open index.html`
   - **Linux**: `xdg-open index.html`

That's it — the app runs immediately, no server required.

---

## 🛠️ Technologies Used

| Technology | Purpose                         |
|------------|---------------------------------|
| HTML5      | Page structure and layout       |
| CSS3       | Styling, grid layout, responsive design |
| JavaScript | Calculation logic and validation |

---

## 🌐 Browser Compatibility

| Browser         | Supported |
|-----------------|-----------|
| Google Chrome   | ✅        |
| Microsoft Edge  | ✅        |
| Mozilla Firefox | ✅        |
| Safari          | ✅        |

---

## 📤 Uploading to GitHub

1. Create a new repository on [GitHub](https://github.com/new)
2. From inside the project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Student Marks Calculator"
   git branch -M main
   git remote add origin https://github.com/your-username/student-marks-calculator.git
   git push -u origin main
   ```

---

## 📄 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!
Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

---

*No databases · No login · No APIs · No frameworks — just HTML, CSS & JavaScript.*
