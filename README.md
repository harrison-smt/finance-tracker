## 💸 Finance Tracker
A **full-stack personal finance tracker web app** that allows users to manage and visualize their money in real time. Users can **track income and expenses, set budget goals, and view interactive charts** that update instantly and persist across sessions.

---

## 🚀 Highlights

- 📈 **Interactive Visuals** – View your financial health with dynamic charts powered by Chart.js.
- 🔑 **User Authentication** – Secure sign-up and login powered by Firebase.
- 💾 **Persistent Data** – Income and expense data stored in Firestore for continuity.
- 📱 **Responsive UI** – Mobile-friendly design with Tailwind CSS.

---

## 📸 Screenshots

<img width="1909" height="945" alt="Screenshot 2025-08-21 at 3 26 07 PM" src="https://github.com/user-attachments/assets/c007be46-3cef-4189-a83a-7eea49c5bf94" />

<img width="1903" height="939" alt="Screenshot 2025-08-21 at 3 28 35 PM" src="https://github.com/user-attachments/assets/2e332470-0757-4ff4-b4d5-5e49418d67b9" />

<img width="1912" height="949" alt="Screenshot 2025-08-21 at 3 28 07 PM" src="https://github.com/user-attachments/assets/3f4a3077-5b5c-46fc-b8a0-ca774d86d58a" />

---

## 🛠️ Built With

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend & Database:** Firebase (Auth, Firestore)
- **Other Tools:** Chart.js, Node.js, Git/GitHub

---

**🔒 Security & Best Practices**

Firebase Security Rules restrict access so users can only modify their own financial data.

API keys in firebaseConfig are safe to expose (they’re project identifiers, not secrets).

Service account keys and sensitive environment variables must never be committed.

Use .env.local for config and add .env* to .gitignore.

---

## ⚡ Quick Start

```bash
git clone https://github.com/your-username/budget-buddy.git
cd budget-buddy
npm install
npm run dev
