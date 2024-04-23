import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-bf5cf-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
